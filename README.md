# BUFS Startup Bridge AI v2

부산외국어대학교 창업지원단에서 실제로 사용할 수 있는 형태를 목표로 한 학생창업 아이디어 접수·진단 MVP입니다.

## v2 핵심 변화

- 의료관광 중심 제거: 전체 학생창업 분야로 확장
- 10개 창업 분야 지원
- 한 문제에서 5개 창업 아이디어 도출
- 각 아이디어별 점수, 난이도, MVP, 수익모델, 권리화 방향 제시
- 선택 아이디어 상세 분석
- 메일 제출, PDF/인쇄, 아이디어 링크 생성 기능
- 한국어·영어·베트남어·일본어·중국어·아랍어 다국어 UI

## 파일 구조

```txt
index.html
styles.css
app.js
assets/
  bufs-logo.jpg
  lang-ko.png
  lang-en.png
  lang-vi.png
  lang-ja.png
  lang-zh.png
  lang-ar.png
netlify.toml
netlify/functions/generate-ideas.js
package.json
README.md
```

## Netlify 환경변수

Netlify Site configuration > Environment variables에 아래 값을 추가하세요.

- `OPENAI_API_KEY`: OpenAI API 키
- `OPENAI_MODEL`: `gpt-4.1-mini` 권장

API 키는 GitHub 코드에 절대 넣지 마세요.

## 운영 주의

정식 운영 전에는 개인정보처리방침, 학생 아이디어 권리 귀속 동의, 관리자 검토 절차, 접수 데이터 저장소(Supabase 등)를 추가하는 것이 좋습니다.
