// Netlify Function: /.netlify/functions/generate-ideas
// Required env: OPENAI_API_KEY, optional: OPENAI_MODEL
const SYSTEM_PROMPT = `
You are an AI startup diagnosis coach for Busan University of Foreign Studies (BUFS) startup support office.
Do NOT focus on medical tourism unless the user's selected category or problem requires it.
Help students from all majors transform problems into startup ideas across AI/software, language/multicultural services, tourism/local problems, content/media, education, lifestyle, products, ESG, campus life, and wellness.
Return practical, small, 7-day MVP-centered suggestions.
Respect student IP: say IP candidate/review, never guarantee patentability.
Avoid medical diagnosis, legal advice, investment solicitation, or guaranteed outcomes.
Return JSON only. JSON keys must remain English. Every human-readable JSON value, including array items, difficulty labels, cautions, plans, and revenue models, must be written in the selected language. Do not mix English except for proper nouns, BUFS, AI, MVP, URL, email, or technical abbreviations.
`;
const schemaInstruction = `Return only this JSON shape:
{
  "applicationId":"same id if provided",
  "problemSummary":"clear summary of the problem",
  "ideas":[
    {
      "rank":1,
      "ideaName":"name",
      "oneLine":"one-line definition",
      "targetUser":"target user",
      "solution":"solution approach",
      "score":88,
      "difficulty":"Easy/Medium/Hard in selected language",
      "mvpType":"MVP type",
      "mvpPlan":["day 1...","day 2...","day 3...","day 4...","day 5...","day 6...","day 7..."],
      "fourWeekPlan":["week 1...","week 2...","week 3...","week 4..."],
      "interviewQuestions":["question1","question2","question3","question4","question5"],
      "teamRoles":["role1","role2","role3"],
      "revenueModel":["model1","model2","model3"],
      "ipDirection":["trademark candidate...","copyright...","patent candidate/review..."],
      "risks":["risk1","risk2"],
      "whyRecommended":"reason"
    }
  ],
  "recommendedRank":1,
  "recommendReason":"why the recommended idea should be tried first",
  "mentoringQuestions":["question1","question2","question3"],
  "nextSupportTrack":["mentoring","MVP","IP review","incubation"]
}
Rules:
- Provide exactly 5 ideas.
- Ideas must be diverse, not minor variations.
- Include scores from 0 to 100.
- At least three ideas should be feasible in 7 days with web/no-code/content/form/chatbot/map/prototype.
- Include risk cautions, especially privacy, IP ownership, official info, medical/legal boundaries when relevant.
`;
function send(statusCode, body){return{statusCode,headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST, OPTIONS"},body:JSON.stringify(body)}}
exports.handler=async function(event){
  if(event.httpMethod==="OPTIONS")return send(200,{ok:true});
  if(event.httpMethod!=="POST")return send(405,{error:"POST only"});
  const apiKey=process.env.OPENAI_API_KEY;
  if(!apiKey)return send(500,{error:"OPENAI_API_KEY environment variable is not set."});
  let payload={};
  try{payload=event.body?JSON.parse(event.body):{}}catch(e){return send(400,{error:"Invalid JSON"})}
  const model=process.env.OPENAI_MODEL||"gpt-4.1-mini";
  const lang=payload.language||"Korean";
  const userContent=`${schemaInstruction}\nWrite all JSON values in ${lang}.\nInput:\n${JSON.stringify(payload,null,2)}`;
  try{
    const aiRes=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Authorization":`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({model,input:[{role:"system",content:SYSTEM_PROMPT},{role:"user",content:userContent}]})});
    const data=await aiRes.json();
    if(!aiRes.ok)return send(aiRes.status,{error:"AI API call failed",detail:data});
    const text=data.output_text||(data.output||[]).flatMap(item=>item.content||[]).map(c=>c.text||"").join("\n").trim();
    const cleaned=text.replace(/^```json\s*/i,"").replace(/```$/i,"").trim();
    try{return send(200,JSON.parse(cleaned))}catch(e){return send(200,{raw:text,warning:"Could not parse JSON"})}
  }catch(e){return send(500,{error:"Server error",detail:e.message})}
}
