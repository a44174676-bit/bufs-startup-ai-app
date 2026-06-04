const targets = {
  foreignStudent: {
    label: "외국인 유학생",
    pain: "입국 후 학교생활, 행정, 병원, 교통, 은행 업무를 낯선 언어로 처리해야 한다",
    names: ["Global Buddy AI", "BUFS Life Helper", "Campus Start AI"],
    pitchTarget: "한국에 처음 온 외국인 유학생"
  },
  medicalTourist: {
    label: "외국인 의료관광객",
    pain: "병원 방문 전후 빈 시간, 이동 부담, 동반가족 대기, 언어 장벽을 겪는다",
    names: ["Care Route AI", "Medi Stay Guide", "Medi Hana Route"],
    pitchTarget: "한국을 찾는 외국인 의료관광객"
  },
  busanTourist: {
    label: "부산 방문 외국인 관광객",
    pain: "맛집, 교통, 포토존, 짐 보관, 동선 선택을 자기 언어로 쉽게 알기 어렵다",
    names: ["Busan Easy Trip AI", "B-Route Mate", "Global Busan Guide"],
    pitchTarget: "부산을 처음 방문한 외국인 관광객"
  },
  kBeautyCustomer: {
    label: "K-뷰티 관심 고객",
    pain: "피부 타입, 기후, 제품 사용 순서, 예산에 맞는 안내를 자기 언어로 받기 어렵다",
    names: ["K-Beauty Fit AI", "Glow Korea Guide", "Skin Route AI"],
    pitchTarget: "K-뷰티에 관심 있는 외국인 고객"
  },
  hospitalVisitor: {
    label: "외국인 병원 방문자",
    pain: "증상, 통증, 알레르기, 복용약을 병원에서 정확히 전달하기 어렵다",
    names: ["Hospital Phrase Card", "Medi Talk Card", "Safe Visit Card"],
    pitchTarget: "한국 병원을 방문하는 외국인"
  }
};

const strengths = {
  language: "외국어 번역과 문화 이해",
  content: "영상·SNS 콘텐츠 제작",
  tourism: "관광 코스 기획과 현장 조사",
  ai: "AI 챗봇과 노코드 자동화",
  beauty: "K-뷰티 제품 이해와 상담 콘텐츠"
};

const tools = {
  chatbot: "AI 챗봇",
  webapp: "간단한 웹앱",
  form: "구글폼과 자동 안내문",
  map: "지도 기반 안내 페이지",
  cards: "다국어 문장카드"
};

const topIdeas = [
  {
    title: "외국인 유학생 정착 AI 도우미",
    target: "foreignStudent",
    problem: "한국에 처음 온 유학생이 기숙사, 은행, 병원, 교통, 학교 행정 절차를 어려워한다.",
    strength: "language",
    tool: "chatbot",
    why: "부산외대 안에서 바로 인터뷰하고 테스트할 수 있습니다."
  },
  {
    title: "부산외대 캠퍼스 AI 가이드",
    target: "foreignStudent",
    problem: "신입 유학생이 행정실, 학식, 버스, 주변 병원과 식당 위치를 잘 모른다.",
    strength: "ai",
    tool: "map",
    why: "학교 안 데이터만으로도 첫 MVP를 만들 수 있습니다."
  },
  {
    title: "외국인 병원 방문 문장카드",
    target: "hospitalVisitor",
    problem: "외국인이 병원에서 증상, 복용약, 알레르기, 통증 정도를 정확히 설명하기 어렵다.",
    strength: "language",
    tool: "cards",
    why: "의료 판단 없이 의사소통을 돕는 안전한 서비스입니다."
  },
  {
    title: "부산 K-컬처 팬덤 투어 AI",
    target: "busanTourist",
    problem: "외국인 팬이 K-pop, 드라마, 굿즈샵, 포토존, 맛집을 하루 코스로 연결하기 어렵다.",
    strength: "content",
    tool: "webapp",
    why: "학생들이 재미있게 콘텐츠로 바로 확장할 수 있습니다."
  },
  {
    title: "K-뷰티 다국어 상담 서비스",
    target: "kBeautyCustomer",
    problem: "외국인 고객이 피부 타입과 현지 기후에 맞는 K-뷰티 제품 사용 순서를 알기 어렵다.",
    strength: "beauty",
    tool: "form",
    why: "동남아, 베트남 시장과 연결하기 좋은 아이디어입니다."
  }
];

function makeResult(data) {
  const target = targets[data.target];
  const selectedName = target.names[0];
  const problem = data.problem.trim() || target.pain;
  const tool = tools[data.tool];
  const strength = strengths[data.strength];

  const mvpSteps = getMvpSteps(data.tool, data.target);
  const rights = getRights(data.tool, data.target, selectedName);

  return `
    <div class="result-section">
      <h4>1. 아이디어 이름</h4>
      <p><strong>${selectedName}</strong></p>
      <p>대안 이름: ${target.names.slice(1).join(" · ")}</p>
    </div>
    <div class="result-section">
      <h4>2. 한 줄 정의</h4>
      <p>${target.pitchTarget}이 겪는 “${problem}” 문제를 ${tool}로 해결하는 다국어 AI 서비스입니다.</p>
    </div>
    <div class="result-section">
      <h4>3. 학생 팀의 강점</h4>
      <p>${strength}을 활용해 외국인이 실제로 막히는 순간을 쉽게 안내할 수 있습니다.</p>
    </div>
    <div class="result-section">
      <h4>4. 7일 MVP 계획</h4>
      <ul>${mvpSteps.map(step => `<li>${step}</li>`).join("")}</ul>
    </div>
    <div class="result-section">
      <h4>5. 권리화 방향</h4>
      <ul>${rights.map(item => `<li><strong>${item.type}</strong>: ${item.desc}</li>`).join("")}</ul>
    </div>
    <div class="result-section">
      <h4>6. 30초 발표 문장</h4>
      <p>“저희는 ${target.pitchTarget}이 겪는 ${problem} 문제를 해결하고자 합니다. 첫 단계로 ${tool} MVP를 만들고, 실제 외국인 사용자 3명에게 테스트해 보겠습니다. 반응이 좋으면 서비스 이름은 상표로, 안내 콘텐츠는 저작권으로, AI가 상황을 분석하고 안내하는 흐름은 특허 후보로 검토하겠습니다.”</p>
    </div>
  `;
}

function getMvpSteps(tool, target) {
  const base = [
    "1일차: 실제 외국인 사용자 3명에게 불편 인터뷰",
    "2일차: 가장 자주 나오는 질문 10개 정리",
    "3일차: 한국어·영어·베트남어 등 다국어 답변 초안 작성"
  ];
  const toolSteps = {
    chatbot: ["4일차: 노코드 챗봇 또는 GPTs 형태로 응답 흐름 구성", "5일차: 질문 입력 → 답변 → 다음 행동 안내 테스트"],
    webapp: ["4일차: 랜딩페이지와 입력폼 구성", "5일차: 결과 카드와 추천 동선 화면 제작"],
    form: ["4일차: 구글폼 질문 설계", "5일차: 응답별 자동 안내문 템플릿 작성"],
    map: ["4일차: 지도에 주요 위치 10곳 표시", "5일차: 위치별 다국어 설명과 이동 팁 작성"],
    cards: ["4일차: 상황별 문장카드 20개 제작", "5일차: QR 또는 모바일 화면으로 보여주는 방식 구성"]
  };
  return [...base, ...toolSteps[tool], "6일차: 사용자 3명에게 테스트하고 수정", "7일차: 1장 발표자료와 30초 피치 완성"];
}

function getRights(tool, target, name) {
  const arr = [
    { type: "상표", desc: `${name} 같은 서비스 이름은 상표로 검토할 수 있습니다.` },
    { type: "저작권", desc: "번역문, 안내문, 카드 문구, 영상 스크립트는 콘텐츠 자산으로 관리합니다." }
  ];
  if (["webapp", "map"].includes(tool)) arr.push({ type: "디자인", desc: "앱 화면, 지도 카드, 사용자 인터페이스 외관은 디자인 검토 대상이 될 수 있습니다." });
  if (["chatbot", "webapp", "form", "map"].includes(tool)) arr.push({ type: "특허 후보", desc: "사용자 상황을 분석하고 맞춤 안내를 생성하는 처리 흐름은 특허 가능성을 검토할 수 있습니다." });
  if (tool === "cards") arr.push({ type: "영업비밀", desc: "병원·학교·관광 현장에서 검증한 문장 DB와 운영 노하우는 내부 자산으로 보호합니다." });
  if (target === "medicalTourist" || target === "hospitalVisitor") arr.push({ type: "주의", desc: "진단, 치료효과, 병원 확정 추천 표현은 피하고 의사소통·체류안내 보조로 범위를 제한해야 합니다." });
  return arr;
}


function renderAiResult(item) {
  const list = (arr) => Array.isArray(arr) && arr.length ? `<ul>${arr.map(v => `<li>${escapeHtml(String(v))}</li>`).join("")}</ul>` : "<p>내용 없음</p>";
  const rights = Array.isArray(item.rights) && item.rights.length
    ? `<ul>${item.rights.map(v => `<li><strong>${escapeHtml(v.type || "권리")}</strong>: ${escapeHtml(v.desc || "")}</li>`).join("")}</ul>`
    : "<p>내용 없음</p>";

  return `
    <div class="ai-badge">AI 연결 결과</div>
    <div class="result-section">
      <h4>1. 아이디어 이름</h4>
      <p><strong>${escapeHtml(item.ideaName || "서비스 이름 제안")}</strong></p>
    </div>
    <div class="result-section">
      <h4>2. 한 줄 정의</h4>
      <p>${escapeHtml(item.oneLine || "")}</p>
    </div>
    <div class="result-section">
      <h4>3. 발견한 불편</h4>
      <p>${escapeHtml(item.problemSummary || "")}</p>
    </div>
    <div class="result-section">
      <h4>4. 대상 고객과 해결 방식</h4>
      <p><strong>대상:</strong> ${escapeHtml(item.targetUser || "")}</p>
      <p><strong>해결:</strong> ${escapeHtml(item.solution || "")}</p>
    </div>
    <div class="result-section">
      <h4>5. 7일 MVP 계획</h4>
      ${list(item.mvpPlan)}
    </div>
    <div class="result-section">
      <h4>6. 앱에 넣을 예시 질문</h4>
      ${list(item.sampleQuestions)}
    </div>
    <div class="result-section">
      <h4>7. 권리화 방향</h4>
      ${rights}
    </div>
    <div class="result-section">
      <h4>8. 주의사항</h4>
      ${list(item.cautions)}
    </div>
    <div class="result-section">
      <h4>9. 30초 발표 문장</h4>
      <p>${escapeHtml(item.pitch30 || "")}</p>
    </div>
    <div class="result-section">
      <h4>10. 오늘 바로 할 일</h4>
      <p>${escapeHtml(item.nextAction || "")}</p>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}

async function askAi(data) {
  const response = await fetch('/api/generate-idea', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      target: targets[data.target]?.label || data.target,
      problem: data.problem,
      strength: strengths[data.strength] || data.strength,
      mvpTool: tools[data.tool] || data.tool,
      context: '부산외국어대학교 창업동아리 학생 대상. 외국어·관광·AI·다문화·의료관광 기반 창업 아이디어를 쉽게 설명해야 함.'
    })
  });
  const result = await response.json();
  if (!response.ok || result.error) {
    throw new Error(result.error || 'AI 연결 실패');
  }
  return result;
}

function getFormData() {
  return {
    target: document.getElementById("target").value,
    problem: document.getElementById("problem").value,
    strength: document.getElementById("strength").value,
    tool: document.getElementById("tool").value
  };
}

function renderTemplates() {
  const wrap = document.getElementById("templateCards");
  wrap.innerHTML = topIdeas.map((idea, i) => `
    <article class="idea-card" tabindex="0" role="button" data-index="${i}" aria-label="${idea.title} 예시 불러오기">
      <div class="rank">${i + 1}</div>
      <h3>${idea.title}</h3>
      <p>${idea.why}</p>
    </article>
  `).join("");

  wrap.querySelectorAll(".idea-card").forEach(card => {
    const load = () => {
      const item = topIdeas[Number(card.dataset.index)];
      document.getElementById("target").value = item.target;
      document.getElementById("problem").value = item.problem;
      document.getElementById("strength").value = item.strength;
      document.getElementById("tool").value = item.tool;
      const result = makeResult(getFormData());
      document.getElementById("resultBox").innerHTML = result;
      document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", load);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") load(); });
  });
}

document.getElementById("ideaForm").addEventListener("submit", async e => {
  e.preventDefault();
  const resultBox = document.getElementById("resultBox");
  const data = getFormData();
  resultBox.innerHTML = '<p class="empty">AI가 학생용 창업 아이디어를 정리하는 중입니다...</p>';

  try {
    const aiResult = await askAi(data);
    if (aiResult.raw) {
      resultBox.innerHTML = `<div class="result-section"><h4>AI 원문 응답</h4><pre>${escapeHtml(aiResult.raw)}</pre></div>`;
      return;
    }
    resultBox.innerHTML = renderAiResult(aiResult);
  } catch (err) {
    // 서버/API 키가 없으면 이전 템플릿 방식으로 작동합니다.
    resultBox.innerHTML = `
      <div class="fallback-note">AI 서버 연결 전입니다. 아래는 앱 내부 템플릿으로 만든 결과입니다.<br />서버 설정 후에는 실제 AI가 더 구체적으로 답변합니다.</div>
      ${makeResult(data)}
    `;
  }
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = document.getElementById("resultBox").innerText.trim();
  if (!text || text.includes("왼쪽에서")) return alert("먼저 아이디어를 생성해 주세요.");
  try {
    await navigator.clipboard.writeText(text);
    alert("결과를 복사했습니다.");
  } catch {
    alert("복사 권한이 제한되었습니다. 결과 영역의 텍스트를 직접 선택해 복사해 주세요.");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("ideaForm").reset();
  document.getElementById("problem").value = "";
  document.getElementById("resultBox").innerHTML = '<p class="empty">왼쪽에서 항목을 선택하고 “아이디어 생성”을 눌러보세요.</p>';
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderTemplates();
