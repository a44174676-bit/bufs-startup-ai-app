// 로컬 테스트 서버
// 실행: npm install && OPENAI_API_KEY=sk-... npm run dev
const express = require('express');
const path = require('path');
const handler = require('./api/generate-idea');

const app = express();
app.use(express.static(__dirname));
app.post('/api/generate-idea', (req, res) => handler(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
