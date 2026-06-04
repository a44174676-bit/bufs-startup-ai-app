// Netlify Function: /.netlify/functions/generate-idea
// Required env: OPENAI_API_KEY, optional: OPENAI_MODEL

const SYSTEM_PROMPT = `
너는 부산외국어대학교 학생 창업 실습을 돕는 AI 창업 코치다.
학생이 발견한 외국인 유학생, 관광객, 의료관광객, K-뷰티 고객의 불편을
현실적인 웹서비스, 노코드 앱, 챗봇, 지도, 다국어 문장카드 MVP로 바꾸도록 돕는다.

반드시 지킬 원칙:
1. 의료 진단, 치료효과 보장, 특정 병원 확정 추천은 하지 않는다.
2. 학생이 7일 안에 만들 수 있는 작은 MVP 중심으로 제안한다.
3. 하드웨어 아이디어는 웹앱, 시뮬레이션, 콘셉트보드 수준으로 축소한다.
4. 지식재산권은 쉽게 설명한다: 이름=상표, 콘텐츠=저작권, 화면/외관=디자인, 장치구조=실용신안, AI 처리흐름=특허 후보, 운영노하우=영업비밀.
5. 학생 발표에 바로 쓸 수 있도록 쉽고 구체적으로 작성한다.
6. 한국어로 답한다.
7. 출력은 JSON만 반환한다.
`;

const schemaInstruction = `
아래 JSON 형식만 반환하세요.
{
  "ideaName": "서비스 이름",
  "oneLine": "한 줄 정의",
  "problemSummary": "학생이 발견한 불편을 쉽게 정리",
  "targetUser": "주요 사용자",
  "solution": "해결 방식",
  "mvpPlan": ["1일차 ...", "2일차 ...", "3일차 ...", "4일차 ...", "5일차 ...", "6일차 ...", "7일차 ..."],
  "sampleQuestions": ["사용자가 물어볼 질문 1", "질문 2", "질문 3"],
  "rights": [
    {"type":"상표", "desc":"..."},
    {"type":"저작권", "desc":"..."},
    {"type":"특허 후보", "desc":"..."}
  ],
  "cautions": ["주의사항 1", "주의사항 2"],
  "pitch30": "30초 발표문",
  "nextAction": "학생 팀이 오늘 바로 할 일"
}
`;

function send(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}

exports.handler = async function(event) {
  if (event.httpMethod === "OPTIONS") return send(200, { ok: true });
  if (event.httpMethod !== "POST") return send(405, { error: "POST 요청만 가능합니다." });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return send(500, {
      error: "OPENAI_API_KEY 환경변수가 설정되지 않았습니다.",
      hint: "Netlify Site configuration > Environment variables에 OPENAI_API_KEY를 추가하세요."
    });
  }

  let payload = {};
  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch (e) {
    return send(400, { error: "요청 JSON을 읽을 수 없습니다." });
  }

  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const userContent = `${schemaInstruction}\n입력값:\n${JSON.stringify(payload, null, 2)}`;

  try {
    const aiRes = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        input: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userContent }
        ]
      })
    });

    const data = await aiRes.json();
    if (!aiRes.ok) return send(aiRes.status, { error: "AI API 호출 실패", detail: data });

    const text = data.output_text || (data.output || [])
      .flatMap(item => item.content || [])
      .map(c => c.text || "")
      .join("\n")
      .trim();

    try {
      return send(200, JSON.parse(text));
    } catch (e) {
      const cleaned = text.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
      try {
        return send(200, JSON.parse(cleaned));
      } catch {
        return send(200, { raw: text, warning: "AI 응답을 JSON으로 파싱하지 못했습니다." });
      }
    }
  } catch (e) {
    return send(500, { error: "서버 오류", detail: e.message });
  }
};
