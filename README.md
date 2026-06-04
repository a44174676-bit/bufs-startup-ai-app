# BUFS Startup Idea Builder AI - character multilingual fixed version

언어 캐릭터 버튼과 6개 언어 전체 번역이 반영된 Netlify 배포본입니다.

## 포함 언어
- KO 한국어
- EN English
- VI Tiếng Việt
- JP 日本語
- CN 中文
- AR العربية

## 파일 구조
```txt
index.html
styles.css
app.js
assets/bufs-logo.jpg
assets/lang-ko.png
assets/lang-en.png
assets/lang-vi.png
assets/lang-ja.png
assets/lang-zh.png
assets/lang-ar.png
netlify.toml
netlify/functions/generate-idea.js
package.json
README.md
```

## Netlify 환경변수
- OPENAI_API_KEY
- OPENAI_MODEL = gpt-4.1-mini


## 담당자 메일 전송 버튼

AI 결과가 생성된 후 `담당자 메일로 보내기` 버튼을 누르면 결과 전체를 클립보드에 복사하고, `hotissue0@bufs.ac.kr` 주소가 입력된 메일 작성창을 엽니다. 브라우저 보안상 사용자의 확인 없이 자동 발송하지 않으며, 사용자가 메일 내용을 확인한 뒤 발송합니다.
