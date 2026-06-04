# BUFS Startup Idea Builder AI - Netlify 최종본

부산외대 학생에게 선물로 줄 수 있도록 BUFS 로고와 BUFS 스타일을 반영한 학생 창업 아이디어 AI 앱입니다.

## 파일 구조

```txt
index.html
styles.css
app.js
assets/bufs-logo.jpg
netlify.toml
netlify/functions/generate-idea.js
package.json
README.md
```

## Netlify 환경변수

Netlify Site configuration > Environment variables에 아래 값을 추가하세요.

- `OPENAI_API_KEY`: OpenAI API 키
- `OPENAI_MODEL`: `gpt-4.1-mini` 권장

API 키는 GitHub 코드에 절대 넣지 마세요.

## GitHub 업로드 시 주의

`bufs_startup_ai_gift_netlify` 폴더 자체가 아니라, 폴더 안의 파일과 폴더를 GitHub 저장소 루트에 올리세요.
