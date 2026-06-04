# BUFS Startup Idea Builder AI

부산외대 학생용 창업 아이디어 생성 웹앱입니다.

## 핵심 구조

- 프론트엔드: `index.html`, `styles.css`, `app.js`
- AI 서버 함수: `api/generate-idea.js`
- 로컬 테스트 서버: `server.js`

## 왜 서버가 필요한가?

OpenAI API 키를 브라우저에 직접 넣으면 노출됩니다. 따라서 브라우저는 `/api/generate-idea`로 요청만 보내고, 실제 API 키는 서버 환경변수에 보관해야 합니다.

## 로컬 실행

```bash
npm install
OPENAI_API_KEY=sk-... npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 배포 예시: Vercel

1. 이 폴더를 GitHub 저장소에 업로드
2. Vercel에서 Import Project
3. Environment Variables에 `OPENAI_API_KEY` 추가
4. 선택: `OPENAI_MODEL` 추가
5. 배포 후 접속

## 주의

의료관광 관련 아이디어는 병원 추천, 진단, 치료효과 보장 표현을 피하고 병원 방문 전후 체류 안내·의사소통 보조로 범위를 제한해야 합니다.
