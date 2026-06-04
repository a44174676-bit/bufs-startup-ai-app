const languageMeta = {
  "ko": {
    "label": "한국어",
    "prompt": "Korean",
    "htmlLang": "ko",
    "dir": "ltr"
  },
  "en": {
    "label": "English",
    "prompt": "English",
    "htmlLang": "en",
    "dir": "ltr"
  },
  "vi": {
    "label": "Tiếng Việt",
    "prompt": "Vietnamese",
    "htmlLang": "vi",
    "dir": "ltr"
  },
  "ja": {
    "label": "日本語",
    "prompt": "Japanese",
    "htmlLang": "ja",
    "dir": "ltr"
  },
  "zh": {
    "label": "中文",
    "prompt": "Chinese",
    "htmlLang": "zh-CN",
    "dir": "ltr"
  },
  "ar": {
    "label": "العربية",
    "prompt": "Arabic",
    "htmlLang": "ar",
    "dir": "rtl"
  }
};
let currentLang = localStorage.getItem("bufsLang") || "ko";

const ui = {
  "ko": {
    "brandSub": "부산외대 학생 창업 실습용 AI",
    "navMake": "아이디어 만들기",
    "navWhy": "왜 필요한가요?",
    "navExamples": "추천 아이템",
    "navRights": "권리화",
    "eyebrow": "외국어 · 관광 · AI · 다문화",
    "heroTitle": "불편 하나를<br>창업 아이디어로 바꾸는 AI",
    "heroLead": "외국인 유학생, 부산 방문 관광객, 의료관광객이 겪는 불편을 입력하면 학생이 7일 안에 만들 수 있는 MVP와 발표 문장, 권리화 방향까지 정리합니다.",
    "ctaStart": "지금 아이디어 만들기",
    "ctaWhy": "사용법 보기",
    "flow1Title": "불편 발견",
    "flow1Text": "외국인 친구가 병원·교통·학교에서 막힘",
    "flow2Title": "AI 코칭",
    "flow2Text": "문제정의·MVP·권리화 방향 생성",
    "flow3Title": "학생 발표",
    "flow3Text": "30초 피치와 7일 실행계획 완성",
    "languageLabel": "Language",
    "languageTitle": "언어를 선택하면 화면과 AI 답변 언어가 바뀝니다.",
    "languageDesc": "학생들이 한국어·영어·베트남어·일본어·중국어·아랍어로 바로 실습할 수 있도록 번역 버튼을 추가했습니다.",
    "msgLabel": "대표 메시지",
    "msgTitle": "창업은 상금을 받기 위한 발표가 아닙니다.",
    "msgText": "창업은 누군가의 불편을 발견하고, 그것을 고객이 믿을 수 있는 구조로 바꾸는 과정입니다. 이 앱은 학생들이 그 과정을 직접 체험하도록 만든 작은 선물입니다.",
    "strengthLabel": "BUFS 학생의 강점",
    "strengthTitle": "외국어는 시험 과목이 아니라 창업 자산입니다.",
    "strength1": "외국인 유학생과 가까운 현장",
    "strength2": "다국어·문화 이해 역량",
    "strength3": "부산 관광과 글로벌 네트워크",
    "strength4": "AI·노코드 도구로 빠른 MVP 제작",
    "stepsLabel": "4단계 창업 사고법",
    "stepsTitle": "불편 → 작은 서비스 → 이름 → 보호",
    "step1Title": "불편 찾기",
    "step1Text": "외국인 친구가 학교·병원·식당·교통에서 막히는 순간을 관찰합니다.",
    "step2Title": "작게 만들기",
    "step2Text": "구글폼, 챗봇, 지도 페이지, 문장카드 같은 작은 MVP를 먼저 만듭니다.",
    "step3Title": "이름 붙이기",
    "step3Text": "기억하기 쉬운 서비스명과 한 줄 설명으로 아이디어를 선명하게 만듭니다.",
    "step4Title": "보호 생각하기",
    "step4Text": "이름은 상표, 콘텐츠는 저작권, AI 처리 흐름은 특허 후보로 정리합니다.",
    "builderTitle": "학생 창업 아이디어 생성기",
    "builderDesc": "학생이 본 불편을 입력하면 AI가 발표용 구조로 정리합니다.",
    "modeBadge": "Netlify + AI 연결형",
    "targetLabel": "누구의 불편인가요?",
    "problemLabel": "어떤 불편을 보았나요?",
    "problemPlaceholder": "예: 한국에 처음 온 유학생이 은행계좌, 휴대폰 개통, 병원 방문, 버스 이용을 어려워한다.",
    "strengthFormLabel": "학생 팀의 강점은 무엇인가요?",
    "toolLabel": "첫 MVP는 무엇으로 만들까요?",
    "submitBtn": "AI로 아이디어 만들기",
    "copyBtn": "결과 복사",
    "emailBtn": "담당자 메일로 보내기",
    "emailSubject": "BUFS 창업 아이디어 AI 결과",
    "emailIntro": "아래 내용은 BUFS Startup Idea Builder AI에서 생성한 학생 창업 아이디어 결과입니다.",
    "emailCopied": "결과를 복사하고 메일 작성창을 열었습니다. 메일 내용을 확인한 뒤 발송하세요.",
    "emailNoResult": "먼저 AI 결과를 생성해 주세요.",
    "resetBtn": "초기화",
    "apiNote": "API 키가 설정되지 않은 경우에는 예시형 결과가 먼저 표시됩니다.",
    "resultTag": "AI 결과",
    "resultTitle": "발표용 아이디어 초안",
    "emptyTitle": "왼쪽에서 불편을 입력해 보세요.",
    "emptyText": "AI가 아이디어 이름, 한 줄 정의, 7일 MVP 계획, 권리화 방향, 30초 발표문을 만들어줍니다.",
    "loadingTitle": "AI가 아이디어를 정리하고 있습니다...",
    "loadingText": "잠시만 기다려 주세요.",
    "fallbackNote": "AI 연결 전 예시 결과입니다. Netlify 환경변수 OPENAI_API_KEY를 넣으면 실제 AI 응답으로 바뀝니다.",
    "aiNote": "AI 연결 결과",
    "copied": "결과를 복사했습니다.",
    "copyFail": "복사에 실패했습니다. 결과 내용을 직접 선택해서 복사해 주세요.",
    "examplesLabel": "추천 아이템 TOP 5",
    "examplesTitle": "학생들이 바로 시작하기 좋은 아이디어",
    "caseLabel": "Medi Hana 사례",
    "caseTitle": "의료관광객의 빈 시간을 체류 경험으로",
    "caseText": "Medi Hana Care Route AI는 병원 추천이나 의료 판단이 아니라, 병원 방문 전후의 대기·휴식·동반가족 체류 문제를 안전한 동선 안내로 바꾸는 사례입니다.",
    "caseFlow1": "고객 질문",
    "caseFlow2": "상황 분석",
    "caseFlow3": "관광 데이터",
    "caseFlow4": "체류동선",
    "caseFlow5": "상담 연결",
    "rightsLabel": "아이디어 보호법",
    "rightsTitle": "아이디어는 보호할 대상에 따라 권리가 달라집니다",
    "right1Title": "상표",
    "right1Text": "서비스 이름과 브랜드를 보호합니다.",
    "right2Title": "저작권",
    "right2Text": "글, 영상, 번역문, 문장카드 콘텐츠를 보호합니다.",
    "right3Title": "디자인",
    "right3Text": "앱 화면, 제품 외형, 카드 디자인을 보호합니다.",
    "right4Title": "실용신안",
    "right4Text": "장치 구조의 실용적 개선을 보호합니다.",
    "right5Title": "특허 후보",
    "right5Text": "AI가 분석하고 연결하는 처리 흐름을 검토합니다.",
    "right6Title": "영업비밀",
    "right6Text": "고객 DB, 운영 노하우, 파트너 조건은 내부 자산입니다.",
    "footerSub": "부산외대 학생 창업동아리 실습용 비공식 교육 앱",
    "footerNotice": "본 앱은 학생 발표·교육용 예시이며 의료 판단, 법률 자문, 투자 권유를 제공하지 않습니다.",
    "targetOptions": {
      "foreignStudent": "외국인 유학생",
      "medicalTourist": "외국인 의료관광객",
      "busanTourist": "부산 방문 외국인 관광객",
      "kBeautyCustomer": "K-뷰티 관심 고객",
      "hospitalVisitor": "외국인 병원 방문자",
      "multiculturalFamily": "다문화 가족·보호자"
    },
    "strengthOptions": {
      "language": "외국어·번역",
      "content": "영상·SNS 콘텐츠",
      "tourism": "관광 코스 기획",
      "ai": "AI 챗봇·노코드",
      "beauty": "K-뷰티 관심·제품 이해"
    },
    "toolOptions": {
      "chatbot": "AI 챗봇",
      "webapp": "간단한 웹앱",
      "form": "구글폼 + 자동 안내문",
      "map": "지도 기반 안내 페이지",
      "cards": "다국어 문장카드"
    },
    "resultHeads": [
      "1. 아이디어 이름",
      "2. 한 줄 정의",
      "3. 발견한 불편",
      "4. 대상 고객과 해결 방식",
      "5. 7일 MVP 계획",
      "6. 앱에 넣을 예시 질문",
      "7. 권리화 방향",
      "8. 주의사항",
      "9. 30초 발표 문장",
      "10. 오늘 바로 할 일"
    ],
    "targetPrefix": "대상",
    "solutionPrefix": "해결",
    "notProvided": "입력된 내용 없음"
  },
  "en": {
    "brandSub": "AI startup practice tool for BUFS students",
    "navMake": "Build idea",
    "navWhy": "Why it matters",
    "navExamples": "Ideas",
    "navRights": "IP basics",
    "eyebrow": "Languages · Tourism · AI · Multiculture",
    "heroTitle": "Turn one inconvenience<br>into a startup idea",
    "heroLead": "Enter a problem faced by international students, Busan visitors, or medical tourists. The AI organizes a 7-day MVP plan, a pitch script, and an IP direction.",
    "ctaStart": "Create an idea",
    "ctaWhy": "How it works",
    "flow1Title": "Find a pain point",
    "flow1Text": "A foreign friend struggles at school, hospital, or transit",
    "flow2Title": "AI coaching",
    "flow2Text": "Problem, MVP, and IP direction",
    "flow3Title": "Student pitch",
    "flow3Text": "30-second pitch and 7-day action plan",
    "languageLabel": "Language",
    "languageTitle": "Choose a language for the page and AI response.",
    "languageDesc": "Students can practice in Korean, English, Vietnamese, Japanese, Chinese, and Arabic.",
    "msgLabel": "Core message",
    "msgTitle": "Startup is not just a contest for prize money.",
    "msgText": "Startup begins when you find someone’s inconvenience and turn it into a structure customers can trust. This app is a small gift for students to experience that process.",
    "strengthLabel": "BUFS strengths",
    "strengthTitle": "A foreign language can become a startup asset.",
    "strength1": "Close access to international students",
    "strength2": "Multilingual and cultural understanding",
    "strength3": "Busan tourism and global networks",
    "strength4": "Fast MVPs with AI and no-code tools",
    "stepsLabel": "4-step thinking",
    "stepsTitle": "Pain point → Small service → Name → Protect",
    "step1Title": "Find",
    "step1Text": "Observe where foreign friends get stuck in school, hospitals, restaurants, or transit.",
    "step2Title": "Build small",
    "step2Text": "Start with a small MVP such as a form, chatbot, map page, or phrase card.",
    "step3Title": "Name it",
    "step3Text": "Make the idea clear with a memorable service name and one-line explanation.",
    "step4Title": "Protect it",
    "step4Text": "Name as trademark, content as copyright, and AI flow as a patent candidate.",
    "builderTitle": "Student startup idea generator",
    "builderDesc": "Enter a pain point and AI will organize it into a pitch-ready structure.",
    "modeBadge": "Netlify + AI connected",
    "targetLabel": "Whose problem is it?",
    "problemLabel": "What inconvenience did you notice?",
    "problemPlaceholder": "Example: New international students struggle with banking, phone setup, hospital visits, and transit cards.",
    "strengthFormLabel": "What is your team’s strength?",
    "toolLabel": "What will the first MVP be?",
    "submitBtn": "Generate with AI",
    "copyBtn": "Copy result",
    "emailBtn": "Send to staff email",
    "emailSubject": "BUFS Startup Idea AI Result",
    "emailIntro": "The following content was generated by BUFS Startup Idea Builder AI.",
    "emailCopied": "The result was copied and an email compose window has opened. Please review and send it.",
    "emailNoResult": "Please generate an AI result first.",
    "resetBtn": "Reset",
    "apiNote": "If the API key is not set, a sample result will be shown first.",
    "resultTag": "AI result",
    "resultTitle": "Pitch-ready idea draft",
    "emptyTitle": "Enter a pain point on the left.",
    "emptyText": "AI will create an idea name, one-line definition, 7-day MVP plan, IP direction, and 30-second pitch.",
    "loadingTitle": "AI is organizing your idea...",
    "loadingText": "Please wait a moment.",
    "fallbackNote": "Sample result before AI connection. Add OPENAI_API_KEY in Netlify environment variables for real AI output.",
    "aiNote": "AI-connected result",
    "copied": "Result copied.",
    "copyFail": "Copy failed. Please select and copy the result manually.",
    "examplesLabel": "Top 5 recommended ideas",
    "examplesTitle": "Ideas students can start right away",
    "caseLabel": "Medi Hana case",
    "caseTitle": "Turning medical tourist waiting time into a safe stay route",
    "caseText": "Medi Hana Care Route AI does not recommend hospitals or make medical decisions. It turns waiting, rest, companion care, and short-stay needs into safe route guidance.",
    "caseFlow1": "Question",
    "caseFlow2": "Situation analysis",
    "caseFlow3": "Tourism data",
    "caseFlow4": "Stay route",
    "caseFlow5": "Consultation",
    "rightsLabel": "How to protect ideas",
    "rightsTitle": "Different assets need different rights",
    "right1Title": "Trademark",
    "right1Text": "Protects service names and brands.",
    "right2Title": "Copyright",
    "right2Text": "Protects text, video, translations, and phrase card content.",
    "right3Title": "Design",
    "right3Text": "Protects app screens, product appearance, and card design.",
    "right4Title": "Utility model",
    "right4Text": "Protects practical improvements to device structures.",
    "right5Title": "Patent candidate",
    "right5Text": "Reviews AI analysis and connection flows.",
    "right6Title": "Trade secret",
    "right6Text": "Customer DB, operational know-how, and partner terms are internal assets.",
    "footerSub": "Unofficial educational app for BUFS student startup practice",
    "footerNotice": "This app is for student presentation and education only. It does not provide medical judgment, legal advice, or investment solicitation.",
    "targetOptions": {
      "foreignStudent": "International student",
      "medicalTourist": "Foreign medical tourist",
      "busanTourist": "Foreign visitor to Busan",
      "kBeautyCustomer": "K-beauty customer",
      "hospitalVisitor": "Foreign hospital visitor",
      "multiculturalFamily": "Multicultural family/caregiver"
    },
    "strengthOptions": {
      "language": "Languages & translation",
      "content": "Video & SNS content",
      "tourism": "Tour course planning",
      "ai": "AI chatbot & no-code",
      "beauty": "K-beauty knowledge"
    },
    "toolOptions": {
      "chatbot": "AI chatbot",
      "webapp": "Simple web app",
      "form": "Google Form + auto guide",
      "map": "Map-based guide page",
      "cards": "Multilingual phrase cards"
    },
    "resultHeads": [
      "1. Idea name",
      "2. One-line definition",
      "3. Pain point",
      "4. Target user and solution",
      "5. 7-day MVP plan",
      "6. Sample questions for the app",
      "7. IP direction",
      "8. Cautions",
      "9. 30-second pitch",
      "10. Action for today"
    ],
    "targetPrefix": "Target",
    "solutionPrefix": "Solution",
    "notProvided": "Not provided"
  },
  "vi": {
    "brandSub": "AI thực hành khởi nghiệp cho sinh viên BUFS",
    "navMake": "Tạo ý tưởng",
    "navWhy": "Vì sao cần?",
    "navExamples": "Gợi ý",
    "navRights": "Bảo hộ ý tưởng",
    "eyebrow": "Ngoại ngữ · Du lịch · AI · Đa văn hóa",
    "heroTitle": "Biến một bất tiện<br>thành ý tưởng khởi nghiệp",
    "heroLead": "Nhập vấn đề của du học sinh, khách du lịch Busan hoặc khách du lịch y tế. AI sẽ sắp xếp kế hoạch MVP 7 ngày, câu thuyết trình và hướng bảo hộ ý tưởng.",
    "ctaStart": "Tạo ý tưởng ngay",
    "ctaWhy": "Xem cách dùng",
    "flow1Title": "Phát hiện bất tiện",
    "flow1Text": "Bạn nước ngoài gặp khó khăn ở trường, bệnh viện hoặc giao thông",
    "flow2Title": "AI cố vấn",
    "flow2Text": "Định nghĩa vấn đề, MVP và hướng bảo hộ",
    "flow3Title": "Sinh viên thuyết trình",
    "flow3Text": "Bài pitch 30 giây và kế hoạch 7 ngày",
    "languageLabel": "Ngôn ngữ",
    "languageTitle": "Chọn ngôn ngữ cho giao diện và câu trả lời AI.",
    "languageDesc": "Sinh viên có thể thực hành bằng tiếng Hàn, Anh, Việt, Nhật, Trung và Ả Rập.",
    "msgLabel": "Thông điệp chính",
    "msgTitle": "Khởi nghiệp không chỉ là cuộc thi để nhận tiền thưởng.",
    "msgText": "Khởi nghiệp bắt đầu từ việc phát hiện bất tiện của ai đó và biến nó thành một cấu trúc mà khách hàng có thể tin tưởng. Ứng dụng này là một món quà nhỏ để sinh viên trải nghiệm quá trình đó.",
    "strengthLabel": "Thế mạnh của sinh viên BUFS",
    "strengthTitle": "Ngoại ngữ có thể trở thành tài sản khởi nghiệp.",
    "strength1": "Gần gũi với du học sinh quốc tế",
    "strength2": "Năng lực đa ngôn ngữ và hiểu biết văn hóa",
    "strength3": "Du lịch Busan và mạng lưới toàn cầu",
    "strength4": "Tạo MVP nhanh bằng AI và công cụ no-code",
    "stepsLabel": "Tư duy khởi nghiệp 4 bước",
    "stepsTitle": "Bất tiện → Dịch vụ nhỏ → Tên gọi → Bảo vệ",
    "step1Title": "Tìm bất tiện",
    "step1Text": "Quan sát lúc bạn nước ngoài gặp khó khăn ở trường, bệnh viện, nhà hàng hoặc giao thông.",
    "step2Title": "Làm thật nhỏ",
    "step2Text": "Bắt đầu bằng MVP nhỏ như Google Form, chatbot, trang bản đồ hoặc thẻ câu đa ngôn ngữ.",
    "step3Title": "Đặt tên",
    "step3Text": "Làm rõ ý tưởng bằng tên dịch vụ dễ nhớ và phần giải thích một câu.",
    "step4Title": "Nghĩ cách bảo vệ",
    "step4Text": "Tên gọi có thể xem là nhãn hiệu, nội dung là bản quyền, quy trình AI là ứng viên sáng chế.",
    "builderTitle": "Công cụ tạo ý tưởng khởi nghiệp cho sinh viên",
    "builderDesc": "Nhập bất tiện bạn quan sát được, AI sẽ sắp xếp thành cấu trúc dùng được cho thuyết trình.",
    "modeBadge": "Netlify + AI kết nối",
    "targetLabel": "Đó là bất tiện của ai?",
    "problemLabel": "Bạn đã thấy bất tiện nào?",
    "problemPlaceholder": "Ví dụ: Du học sinh mới đến Hàn Quốc gặp khó khăn khi mở tài khoản ngân hàng, đăng ký điện thoại, đi bệnh viện và dùng thẻ giao thông.",
    "strengthFormLabel": "Thế mạnh của nhóm sinh viên là gì?",
    "toolLabel": "MVP đầu tiên sẽ làm bằng gì?",
    "submitBtn": "Tạo ý tưởng bằng AI",
    "copyBtn": "Sao chép kết quả",
    "emailBtn": "Gửi đến email phụ trách",
    "emailSubject": "Kết quả AI ý tưởng khởi nghiệp BUFS",
    "emailIntro": "Nội dung dưới đây được tạo bởi BUFS Startup Idea Builder AI.",
    "emailCopied": "Kết quả đã được sao chép và cửa sổ soạn email đã mở. Vui lòng kiểm tra rồi gửi.",
    "emailNoResult": "Vui lòng tạo kết quả AI trước.",
    "resetBtn": "Làm lại",
    "apiNote": "Nếu chưa cài API key, kết quả mẫu sẽ được hiển thị trước.",
    "resultTag": "Kết quả AI",
    "resultTitle": "Bản nháp ý tưởng để thuyết trình",
    "emptyTitle": "Hãy nhập bất tiện ở bên trái.",
    "emptyText": "AI sẽ tạo tên ý tưởng, định nghĩa một câu, kế hoạch MVP 7 ngày, hướng bảo hộ và bài pitch 30 giây.",
    "loadingTitle": "AI đang sắp xếp ý tưởng...",
    "loadingText": "Vui lòng chờ một chút.",
    "fallbackNote": "Đây là kết quả mẫu trước khi kết nối AI. Thêm OPENAI_API_KEY vào biến môi trường Netlify để nhận phản hồi AI thật.",
    "aiNote": "Kết quả AI đã kết nối",
    "copied": "Đã sao chép kết quả.",
    "copyFail": "Không thể sao chép. Vui lòng chọn nội dung và sao chép thủ công.",
    "examplesLabel": "TOP 5 ý tưởng gợi ý",
    "examplesTitle": "Những ý tưởng sinh viên có thể bắt đầu ngay",
    "caseLabel": "Ví dụ Medi Hana",
    "caseTitle": "Biến thời gian chờ của khách du lịch y tế thành trải nghiệm lưu trú an toàn",
    "caseText": "Medi Hana Care Route AI không giới thiệu bệnh viện hay đưa ra quyết định y tế. Dịch vụ này chuyển vấn đề chờ đợi, nghỉ ngơi, người nhà đi cùng và lưu trú ngắn hạn thành hướng dẫn tuyến đường an toàn.",
    "caseFlow1": "Câu hỏi của khách",
    "caseFlow2": "Phân tích tình huống",
    "caseFlow3": "Dữ liệu du lịch",
    "caseFlow4": "Tuyến lưu trú",
    "caseFlow5": "Kết nối tư vấn",
    "rightsLabel": "Cách bảo vệ ý tưởng",
    "rightsTitle": "Mỗi loại tài sản cần một quyền bảo hộ khác nhau",
    "right1Title": "Nhãn hiệu",
    "right1Text": "Bảo vệ tên dịch vụ và thương hiệu.",
    "right2Title": "Bản quyền",
    "right2Text": "Bảo vệ văn bản, video, bản dịch và nội dung thẻ câu.",
    "right3Title": "Thiết kế",
    "right3Text": "Bảo vệ giao diện ứng dụng, hình dáng sản phẩm và thiết kế thẻ.",
    "right4Title": "Giải pháp hữu ích",
    "right4Text": "Bảo vệ cải tiến thực dụng của cấu trúc thiết bị.",
    "right5Title": "Ứng viên sáng chế",
    "right5Text": "Xem xét quy trình AI phân tích và kết nối thông tin.",
    "right6Title": "Bí mật kinh doanh",
    "right6Text": "Cơ sở dữ liệu khách hàng, bí quyết vận hành và điều kiện đối tác là tài sản nội bộ.",
    "footerSub": "Ứng dụng giáo dục không chính thức cho thực hành khởi nghiệp của sinh viên BUFS",
    "footerNotice": "Ứng dụng này chỉ dành cho giáo dục và thuyết trình của sinh viên; không cung cấp phán đoán y tế, tư vấn pháp lý hay lời mời đầu tư.",
    "targetOptions": {
      "foreignStudent": "Du học sinh quốc tế",
      "medicalTourist": "Khách du lịch y tế nước ngoài",
      "busanTourist": "Khách nước ngoài đến Busan",
      "kBeautyCustomer": "Khách hàng quan tâm K-beauty",
      "hospitalVisitor": "Người nước ngoài đến bệnh viện",
      "multiculturalFamily": "Gia đình đa văn hóa/người chăm sóc"
    },
    "strengthOptions": {
      "language": "Ngoại ngữ và dịch thuật",
      "content": "Video và nội dung SNS",
      "tourism": "Lập kế hoạch tuyến du lịch",
      "ai": "Chatbot AI và no-code",
      "beauty": "Hiểu biết K-beauty"
    },
    "toolOptions": {
      "chatbot": "Chatbot AI",
      "webapp": "Ứng dụng web đơn giản",
      "form": "Google Form + hướng dẫn tự động",
      "map": "Trang hướng dẫn dựa trên bản đồ",
      "cards": "Thẻ câu đa ngôn ngữ"
    },
    "resultHeads": [
      "1. Tên ý tưởng",
      "2. Định nghĩa một câu",
      "3. Bất tiện phát hiện",
      "4. Khách hàng mục tiêu và cách giải quyết",
      "5. Kế hoạch MVP 7 ngày",
      "6. Câu hỏi mẫu cho ứng dụng",
      "7. Hướng bảo hộ quyền",
      "8. Lưu ý",
      "9. Bài pitch 30 giây",
      "10. Việc cần làm hôm nay"
    ],
    "targetPrefix": "Đối tượng",
    "solutionPrefix": "Giải pháp",
    "notProvided": "Chưa nhập"
  },
  "ja": {
    "brandSub": "BUFS学生向け起業実習AI",
    "navMake": "アイデア作成",
    "navWhy": "なぜ必要か",
    "navExamples": "おすすめ",
    "navRights": "権利化",
    "eyebrow": "外国語 · 観光 · AI · 多文化",
    "heroTitle": "一つの不便を<br>起業アイデアへ変えるAI",
    "heroLead": "留学生、釜山を訪れる観光客、医療観光客が感じる不便を入力すると、AIが7日間MVP計画、発表文、権利化の方向まで整理します。",
    "ctaStart": "今すぐアイデア作成",
    "ctaWhy": "使い方を見る",
    "flow1Title": "不便を発見",
    "flow1Text": "外国人の友人が病院・交通・学校で困る",
    "flow2Title": "AIコーチング",
    "flow2Text": "問題定義・MVP・権利化方向を生成",
    "flow3Title": "学生発表",
    "flow3Text": "30秒ピッチと7日間実行計画を完成",
    "languageLabel": "言語",
    "languageTitle": "言語を選ぶと画面とAI回答の言語が変わります。",
    "languageDesc": "学生は韓国語・英語・ベトナム語・日本語・中国語・アラビア語で実習できます。",
    "msgLabel": "代表メッセージ",
    "msgTitle": "起業は賞金を得るための発表ではありません。",
    "msgText": "起業とは、誰かの不便を発見し、それを顧客が信頼できる仕組みに変える過程です。このアプリは、その過程を学生が直接体験するための小さな贈り物です。",
    "strengthLabel": "BUFS学生の強み",
    "strengthTitle": "外国語は試験科目ではなく、起業の資産になります。",
    "strength1": "外国人留学生に近い現場",
    "strength2": "多言語・文化理解力",
    "strength3": "釜山観光とグローバルネットワーク",
    "strength4": "AI・ノーコードツールによる素早いMVP制作",
    "stepsLabel": "4段階の起業思考法",
    "stepsTitle": "不便 → 小さなサービス → 名前 → 保護",
    "step1Title": "不便を探す",
    "step1Text": "外国人の友人が学校・病院・食堂・交通で困る瞬間を観察します。",
    "step2Title": "小さく作る",
    "step2Text": "Googleフォーム、チャットボット、地図ページ、フレーズカードのような小さなMVPから始めます。",
    "step3Title": "名前を付ける",
    "step3Text": "覚えやすいサービス名と一文説明でアイデアを明確にします。",
    "step4Title": "保護を考える",
    "step4Text": "名前は商標、コンテンツは著作権、AI処理の流れは特許候補として整理します。",
    "builderTitle": "学生起業アイデア生成ツール",
    "builderDesc": "学生が見つけた不便を入力すると、AIが発表用の構成に整理します。",
    "modeBadge": "Netlify + AI接続型",
    "targetLabel": "誰の不便ですか？",
    "problemLabel": "どんな不便を見ましたか？",
    "problemPlaceholder": "例：韓国に来たばかりの留学生が銀行口座、携帯電話契約、病院訪問、交通カードの利用で困っている。",
    "strengthFormLabel": "学生チームの強みは何ですか？",
    "toolLabel": "最初のMVPは何で作りますか？",
    "submitBtn": "AIでアイデアを作成",
    "copyBtn": "結果をコピー",
    "emailBtn": "担当者へメール送信",
    "emailSubject": "BUFS起業アイデアAI結果",
    "emailIntro": "以下の内容はBUFS Startup Idea Builder AIで生成された結果です。",
    "emailCopied": "結果をコピーし、メール作成画面を開きました。内容を確認して送信してください。",
    "emailNoResult": "先にAI結果を生成してください。",
    "resetBtn": "リセット",
    "apiNote": "APIキーが設定されていない場合は、まずサンプル結果が表示されます。",
    "resultTag": "AI結果",
    "resultTitle": "発表用アイデア草案",
    "emptyTitle": "左側に不便を入力してください。",
    "emptyText": "AIがアイデア名、一文定義、7日間MVP計画、権利化方向、30秒発表文を作成します。",
    "loadingTitle": "AIがアイデアを整理しています...",
    "loadingText": "少しお待ちください。",
    "fallbackNote": "AI接続前のサンプル結果です。Netlify環境変数にOPENAI_API_KEYを追加すると、実際のAI応答に変わります。",
    "aiNote": "AI接続結果",
    "copied": "結果をコピーしました。",
    "copyFail": "コピーに失敗しました。内容を選択して手動でコピーしてください。",
    "examplesLabel": "おすすめアイデア TOP 5",
    "examplesTitle": "学生がすぐに始めやすいアイデア",
    "caseLabel": "Medi Hana事例",
    "caseTitle": "医療観光客の待ち時間を安全な滞在体験へ",
    "caseText": "Medi Hana Care Route AIは病院推薦や医療判断ではありません。病院訪問前後の待機・休憩・同伴家族の滞在問題を安全な動線案内に変える事例です。",
    "caseFlow1": "顧客質問",
    "caseFlow2": "状況分析",
    "caseFlow3": "観光データ",
    "caseFlow4": "滞在動線",
    "caseFlow5": "相談連携",
    "rightsLabel": "アイデアの保護法",
    "rightsTitle": "保護する対象によって権利は異なります",
    "right1Title": "商標",
    "right1Text": "サービス名とブランドを保護します。",
    "right2Title": "著作権",
    "right2Text": "文章、映像、翻訳文、フレーズカードのコンテンツを保護します。",
    "right3Title": "意匠",
    "right3Text": "アプリ画面、製品外観、カードデザインを保護します。",
    "right4Title": "実用新案",
    "right4Text": "装置構造の実用的な改善を保護します。",
    "right5Title": "特許候補",
    "right5Text": "AIが分析し接続する処理の流れを検討します。",
    "right6Title": "営業秘密",
    "right6Text": "顧客DB、運営ノウハウ、パートナー条件は内部資産です。",
    "footerSub": "BUFS学生起業サークル実習用の非公式教育アプリ",
    "footerNotice": "本アプリは学生発表・教育用の例であり、医療判断、法律助言、投資勧誘を提供しません。",
    "targetOptions": {
      "foreignStudent": "外国人留学生",
      "medicalTourist": "外国人医療観光客",
      "busanTourist": "釜山を訪れる外国人観光客",
      "kBeautyCustomer": "Kビューティー関心顧客",
      "hospitalVisitor": "外国人病院訪問者",
      "multiculturalFamily": "多文化家族・保護者"
    },
    "strengthOptions": {
      "language": "外国語・翻訳",
      "content": "映像・SNSコンテンツ",
      "tourism": "観光コース企画",
      "ai": "AIチャットボット・ノーコード",
      "beauty": "Kビューティー理解"
    },
    "toolOptions": {
      "chatbot": "AIチャットボット",
      "webapp": "簡単なWebアプリ",
      "form": "Googleフォーム＋自動案内文",
      "map": "地図ベース案内ページ",
      "cards": "多言語フレーズカード"
    },
    "resultHeads": [
      "1. アイデア名",
      "2. 一文定義",
      "3. 発見した不便",
      "4. 対象顧客と解決方法",
      "5. 7日間MVP計画",
      "6. アプリに入れる質問例",
      "7. 権利化の方向",
      "8. 注意事項",
      "9. 30秒発表文",
      "10. 今日すぐ行うこと"
    ],
    "targetPrefix": "対象",
    "solutionPrefix": "解決",
    "notProvided": "未入力"
  },
  "zh": {
    "brandSub": "面向BUFS学生的创业实践AI",
    "navMake": "生成想法",
    "navWhy": "为什么需要",
    "navExamples": "推荐项目",
    "navRights": "权利保护",
    "eyebrow": "外语 · 旅游 · AI · 多文化",
    "heroTitle": "把一个不便<br>变成创业想法",
    "heroLead": "输入留学生、釜山游客或医疗旅游客遇到的不便，AI会整理7天MVP计划、发表语句和知识产权方向。",
    "ctaStart": "立即生成想法",
    "ctaWhy": "查看用法",
    "flow1Title": "发现不便",
    "flow1Text": "外国朋友在医院、交通或学校遇到困难",
    "flow2Title": "AI辅导",
    "flow2Text": "生成问题定义、MVP和权利保护方向",
    "flow3Title": "学生发表",
    "flow3Text": "完成30秒演讲和7天行动计划",
    "languageLabel": "语言",
    "languageTitle": "选择语言后，页面和AI回答语言都会改变。",
    "languageDesc": "学生可以用韩语、英语、越南语、日语、中文和阿拉伯语进行练习。",
    "msgLabel": "核心信息",
    "msgTitle": "创业不是为了奖金而做的发表。",
    "msgText": "创业是发现某个人的不便，并把它变成客户可以信任的结构的过程。这个应用是让学生亲自体验这一过程的小礼物。",
    "strengthLabel": "BUFS学生的优势",
    "strengthTitle": "外语不是考试科目，而可以成为创业资产。",
    "strength1": "接近外国留学生的真实现场",
    "strength2": "多语言和文化理解能力",
    "strength3": "釜山旅游和全球网络",
    "strength4": "利用AI和无代码工具快速制作MVP",
    "stepsLabel": "4步创业思考法",
    "stepsTitle": "不便 → 小服务 → 名称 → 保护",
    "step1Title": "寻找不便",
    "step1Text": "观察外国朋友在学校、医院、餐厅、交通中遇到困难的时刻。",
    "step2Title": "做小一点",
    "step2Text": "先从Google表单、聊天机器人、地图页面、句子卡等小型MVP开始。",
    "step3Title": "命名",
    "step3Text": "用容易记住的服务名称和一句话说明，让想法更清晰。",
    "step4Title": "考虑保护",
    "step4Text": "名称可作为商标，内容可作为著作权，AI处理流程可作为专利候选整理。",
    "builderTitle": "学生创业想法生成器",
    "builderDesc": "输入学生看到的不便，AI会整理成适合发表的结构。",
    "modeBadge": "Netlify + AI连接型",
    "targetLabel": "这是谁的不便？",
    "problemLabel": "你发现了什么不便？",
    "problemPlaceholder": "例：刚到韩国的留学生在开银行账户、办理手机、去医院、使用交通卡方面遇到困难。",
    "strengthFormLabel": "学生团队的优势是什么？",
    "toolLabel": "第一个MVP用什么制作？",
    "submitBtn": "用AI生成想法",
    "copyBtn": "复制结果",
    "emailBtn": "发送到负责人邮箱",
    "emailSubject": "BUFS创业想法AI结果",
    "emailIntro": "以下内容由 BUFS Startup Idea Builder AI 生成。",
    "emailCopied": "结果已复制，并已打开邮件撰写窗口。请确认内容后发送。",
    "emailNoResult": "请先生成AI结果。",
    "resetBtn": "重置",
    "apiNote": "如果没有设置API Key，会先显示示例结果。",
    "resultTag": "AI结果",
    "resultTitle": "发表用想法草案",
    "emptyTitle": "请在左侧输入不便。",
    "emptyText": "AI会生成想法名称、一句话定义、7天MVP计划、权利保护方向和30秒发表稿。",
    "loadingTitle": "AI正在整理想法...",
    "loadingText": "请稍等。",
    "fallbackNote": "这是连接AI前的示例结果。在Netlify环境变量中添加OPENAI_API_KEY后，将显示真实AI回答。",
    "aiNote": "AI连接结果",
    "copied": "结果已复制。",
    "copyFail": "复制失败。请手动选择内容并复制。",
    "examplesLabel": "推荐项目 TOP 5",
    "examplesTitle": "学生可以马上开始的想法",
    "caseLabel": "Medi Hana案例",
    "caseTitle": "把医疗旅游客的等待时间变成安全的停留体验",
    "caseText": "Medi Hana Care Route AI不推荐医院，也不做医疗判断。它把医院访问前后的等待、休息、陪同家属停留问题，转化为安全路线引导。",
    "caseFlow1": "客户问题",
    "caseFlow2": "情况分析",
    "caseFlow3": "旅游数据",
    "caseFlow4": "停留路线",
    "caseFlow5": "咨询连接",
    "rightsLabel": "想法保护方法",
    "rightsTitle": "不同资产需要不同的权利",
    "right1Title": "商标",
    "right1Text": "保护服务名称和品牌。",
    "right2Title": "著作权",
    "right2Text": "保护文章、视频、翻译文本和句子卡内容。",
    "right3Title": "外观设计",
    "right3Text": "保护应用界面、产品外观和卡片设计。",
    "right4Title": "实用新型",
    "right4Text": "保护设备结构的实用改进。",
    "right5Title": "专利候选",
    "right5Text": "审查AI分析和连接信息的处理流程。",
    "right6Title": "商业秘密",
    "right6Text": "客户数据库、运营诀窍和合作伙伴条件是内部资产。",
    "footerSub": "BUFS学生创业社团实践用非官方教育应用",
    "footerNotice": "本应用仅用于学生发表和教育示例，不提供医疗判断、法律建议或投资劝诱。",
    "targetOptions": {
      "foreignStudent": "外国留学生",
      "medicalTourist": "外国医疗旅游客",
      "busanTourist": "访问釜山的外国游客",
      "kBeautyCustomer": "K-Beauty关注客户",
      "hospitalVisitor": "外国医院访问者",
      "multiculturalFamily": "多文化家庭/照护者"
    },
    "strengthOptions": {
      "language": "外语与翻译",
      "content": "视频与SNS内容",
      "tourism": "旅游路线规划",
      "ai": "AI聊天机器人与无代码",
      "beauty": "K-Beauty理解"
    },
    "toolOptions": {
      "chatbot": "AI聊天机器人",
      "webapp": "简单网页应用",
      "form": "Google表单 + 自动指南",
      "map": "基于地图的指南页面",
      "cards": "多语言句子卡"
    },
    "resultHeads": [
      "1. 想法名称",
      "2. 一句话定义",
      "3. 发现的不便",
      "4. 目标客户和解决方式",
      "5. 7天MVP计划",
      "6. 应用中的示例问题",
      "7. 权利保护方向",
      "8. 注意事项",
      "9. 30秒发表语句",
      "10. 今天马上要做的事"
    ],
    "targetPrefix": "对象",
    "solutionPrefix": "解决",
    "notProvided": "未输入"
  },
  "ar": {
    "brandSub": "أداة تدريب على ريادة الأعمال لطلاب BUFS بالذكاء الاصطناعي",
    "navMake": "اصنع فكرة",
    "navWhy": "لماذا نحتاجها؟",
    "navExamples": "أفكار مقترحة",
    "navRights": "حماية الفكرة",
    "eyebrow": "لغات · سياحة · ذكاء اصطناعي · تعدد ثقافات",
    "heroTitle": "حوّل مشكلة صغيرة<br>إلى فكرة مشروع",
    "heroLead": "اكتب مشكلة يواجهها الطلاب الدوليون أو زوار بوسان أو السياح العلاجيون. سيقوم الذكاء الاصطناعي بتنظيم خطة MVP لمدة 7 أيام، ونص عرض قصير، واتجاه حماية الفكرة.",
    "ctaStart": "ابدأ إنشاء الفكرة",
    "ctaWhy": "طريقة الاستخدام",
    "flow1Title": "اكتشاف المشكلة",
    "flow1Text": "صديق أجنبي يواجه صعوبة في المدرسة أو المستشفى أو المواصلات",
    "flow2Title": "توجيه بالذكاء الاصطناعي",
    "flow2Text": "تعريف المشكلة، MVP، واتجاه الحماية",
    "flow3Title": "عرض الطالب",
    "flow3Text": "عرض 30 ثانية وخطة عمل لمدة 7 أيام",
    "languageLabel": "اللغة",
    "languageTitle": "اختر اللغة لتغيير واجهة الصفحة ولغة إجابة الذكاء الاصطناعي.",
    "languageDesc": "يمكن للطلاب التدريب بالكورية والإنجليزية والفيتنامية واليابانية والصينية والعربية.",
    "msgLabel": "الرسالة الأساسية",
    "msgTitle": "ريادة الأعمال ليست مجرد مسابقة للفوز بجائزة.",
    "msgText": "تبدأ ريادة الأعمال عندما نكتشف مشكلة شخص ما ونحوّلها إلى نظام يمكن للعميل الوثوق به. هذا التطبيق هدية صغيرة ليختبر الطلاب هذه العملية بأنفسهم.",
    "strengthLabel": "نقاط قوة طلاب BUFS",
    "strengthTitle": "يمكن للغة الأجنبية أن تصبح أصلًا رياديًا.",
    "strength1": "قرب من الطلاب الدوليين",
    "strength2": "فهم متعدد اللغات والثقافات",
    "strength3": "سياحة بوسان وشبكات عالمية",
    "strength4": "إنشاء MVP سريع باستخدام AI وأدوات no-code",
    "stepsLabel": "منهج التفكير في 4 خطوات",
    "stepsTitle": "مشكلة → خدمة صغيرة → اسم → حماية",
    "step1Title": "ابحث عن المشكلة",
    "step1Text": "راقب اللحظات التي يتعثر فيها الأصدقاء الأجانب في المدرسة أو المستشفى أو المطعم أو المواصلات.",
    "step2Title": "ابنِ بشكل صغير",
    "step2Text": "ابدأ بـ MVP صغير مثل نموذج، روبوت محادثة، صفحة خريطة، أو بطاقات عبارات.",
    "step3Title": "أعطِها اسمًا",
    "step3Text": "اجعل الفكرة واضحة باسم خدمة سهل التذكر وشرح من جملة واحدة.",
    "step4Title": "فكر في الحماية",
    "step4Text": "الاسم علامة تجارية، المحتوى حق مؤلف، وتدفق معالجة AI يمكن مراجعته كمرشح براءة.",
    "builderTitle": "مولد أفكار المشاريع الطلابية",
    "builderDesc": "أدخل مشكلة لاحظتها، وسيقوم AI بتنظيمها في هيكل مناسب للعرض.",
    "modeBadge": "Netlify + AI متصل",
    "targetLabel": "مشكلة من هذه؟",
    "problemLabel": "ما المشكلة التي لاحظتها؟",
    "problemPlaceholder": "مثال: يواجه الطلاب الدوليون الجدد صعوبة في فتح حساب بنكي، تفعيل الهاتف، زيارة المستشفى، واستخدام بطاقة المواصلات.",
    "strengthFormLabel": "ما قوة فريق الطلاب؟",
    "toolLabel": "بماذا سنبني أول MVP؟",
    "submitBtn": "أنشئ الفكرة بالذكاء الاصطناعي",
    "copyBtn": "انسخ النتيجة",
    "emailBtn": "أرسل إلى بريد المسؤول",
    "emailSubject": "نتيجة AI لأفكار ريادة الأعمال في BUFS",
    "emailIntro": "تم إنشاء المحتوى التالي بواسطة BUFS Startup Idea Builder AI.",
    "emailCopied": "تم نسخ النتيجة وفتح نافذة كتابة البريد. يرجى مراجعة المحتوى ثم إرساله.",
    "emailNoResult": "يرجى إنشاء نتيجة AI أولاً.",
    "resetBtn": "إعادة ضبط",
    "apiNote": "إذا لم يتم إعداد مفتاح API، سيتم عرض نتيجة نموذجية أولًا.",
    "resultTag": "نتيجة AI",
    "resultTitle": "مسودة فكرة جاهزة للعرض",
    "emptyTitle": "اكتب المشكلة في الجهة اليسرى.",
    "emptyText": "سيُنشئ AI اسم الفكرة، تعريفًا من جملة واحدة، خطة MVP لمدة 7 أيام، اتجاه الحماية، وعرضًا مدته 30 ثانية.",
    "loadingTitle": "يقوم AI بتنظيم الفكرة...",
    "loadingText": "يرجى الانتظار قليلًا.",
    "fallbackNote": "هذه نتيجة نموذجية قبل الاتصال بالذكاء الاصطناعي. أضف OPENAI_API_KEY في متغيرات بيئة Netlify للحصول على رد AI حقيقي.",
    "aiNote": "نتيجة AI المتصل",
    "copied": "تم نسخ النتيجة.",
    "copyFail": "فشل النسخ. يرجى تحديد النص ونسخه يدويًا.",
    "examplesLabel": "أفضل 5 أفكار مقترحة",
    "examplesTitle": "أفكار يمكن للطلاب البدء بها فورًا",
    "caseLabel": "حالة Medi Hana",
    "caseTitle": "تحويل وقت انتظار السائح العلاجي إلى مسار إقامة آمن",
    "caseText": "Medi Hana Care Route AI لا يوصي بالمستشفيات ولا يقدم قرارات طبية. بل يحول الانتظار والراحة واحتياجات المرافقين والإقامة القصيرة إلى إرشاد لمسار آمن.",
    "caseFlow1": "سؤال العميل",
    "caseFlow2": "تحليل الحالة",
    "caseFlow3": "بيانات سياحية",
    "caseFlow4": "مسار إقامة",
    "caseFlow5": "ربط بالاستشارة",
    "rightsLabel": "طريقة حماية الأفكار",
    "rightsTitle": "الأصول المختلفة تحتاج إلى حقوق مختلفة",
    "right1Title": "علامة تجارية",
    "right1Text": "تحمي أسماء الخدمات والعلامات.",
    "right2Title": "حق المؤلف",
    "right2Text": "يحمي النصوص والفيديو والترجمات ومحتوى بطاقات العبارات.",
    "right3Title": "تصميم",
    "right3Text": "يحمي شاشات التطبيق ومظهر المنتج وتصميم البطاقات.",
    "right4Title": "نموذج منفعة",
    "right4Text": "يحمي التحسينات العملية في بنية الأجهزة.",
    "right5Title": "مرشح براءة",
    "right5Text": "يراجع تدفق تحليل AI وربط المعلومات.",
    "right6Title": "سر تجاري",
    "right6Text": "قاعدة بيانات العملاء وخبرة التشغيل وشروط الشركاء أصول داخلية.",
    "footerSub": "تطبيق تعليمي غير رسمي لتدريب طلاب BUFS على ريادة الأعمال",
    "footerNotice": "هذا التطبيق مثال للتعليم والعروض الطلابية فقط، ولا يقدم حكمًا طبيًا أو نصيحة قانونية أو دعوة للاستثمار.",
    "targetOptions": {
      "foreignStudent": "طالب دولي",
      "medicalTourist": "سائح علاجي أجنبي",
      "busanTourist": "زائر أجنبي إلى بوسان",
      "kBeautyCustomer": "عميل مهتم بـ K-beauty",
      "hospitalVisitor": "زائر أجنبي للمستشفى",
      "multiculturalFamily": "أسرة متعددة الثقافات/مرافق"
    },
    "strengthOptions": {
      "language": "لغات وترجمة",
      "content": "فيديو ومحتوى SNS",
      "tourism": "تخطيط مسارات سياحية",
      "ai": "روبوت AI وأدوات no-code",
      "beauty": "معرفة K-beauty"
    },
    "toolOptions": {
      "chatbot": "روبوت محادثة AI",
      "webapp": "تطبيق ويب بسيط",
      "form": "Google Form + دليل تلقائي",
      "map": "صفحة إرشاد بالخريطة",
      "cards": "بطاقات عبارات متعددة اللغات"
    },
    "resultHeads": [
      "1. اسم الفكرة",
      "2. تعريف من جملة واحدة",
      "3. المشكلة المكتشفة",
      "4. المستخدم المستهدف والحل",
      "5. خطة MVP لمدة 7 أيام",
      "6. أسئلة نموذجية للتطبيق",
      "7. اتجاه حماية الحقوق",
      "8. تنبيهات",
      "9. عرض 30 ثانية",
      "10. ما يجب فعله اليوم"
    ],
    "targetPrefix": "الهدف",
    "solutionPrefix": "الحل",
    "notProvided": "غير مذكور"
  }
};
const targets = {
  "foreignStudent": {
    "pain": {
      "ko": "입국 후 학교생활, 행정, 병원, 교통, 은행 업무를 낯선 언어로 처리해야 한다",
      "en": "They must handle school life, administration, hospitals, transit, and banking in an unfamiliar language.",
      "vi": "Họ phải xử lý đời sống trường học, hành chính, bệnh viện, giao thông và ngân hàng bằng ngôn ngữ chưa quen.",
      "ja": "入国後、学校生活・行政手続き・病院・交通・銀行業務を慣れない言語で処理しなければなりません。",
      "zh": "入境后，他们需要用不熟悉的语言处理学校生活、行政手续、医院、交通和银行业务。",
      "ar": "يحتاجون إلى التعامل مع الحياة الجامعية والإجراءات والمستشفيات والمواصلات والبنوك بلغة غير مألوفة."
    },
    "names": [
      "BUFS Global Helper",
      "Campus Bridge AI",
      "Global Student Mate"
    ],
    "pitchTarget": {
      "ko": "한국에 처음 온 외국인 유학생",
      "en": "international students newly arriving in Korea",
      "vi": "du học sinh mới đến Hàn Quốc",
      "ja": "韓国に来たばかりの外国人留学生",
      "zh": "刚到韩国的外国留学生",
      "ar": "الطلاب الدوليون الذين وصلوا حديثًا إلى كوريا"
    }
  },
  "medicalTourist": {
    "pain": {
      "ko": "병원 방문 전후에 어디서 쉬고 이동해야 할지 알기 어렵다",
      "en": "They do not know where to rest or how to move before and after hospital visits.",
      "vi": "Họ không biết nên nghỉ ở đâu và di chuyển thế nào trước và sau khi đến bệnh viện.",
      "ja": "病院訪問の前後にどこで休み、どのように移動すればよいか分かりにくいです。",
      "zh": "他们不知道医院访问前后该在哪里休息、如何移动。",
      "ar": "لا يعرفون أين يستريحون أو كيف يتنقلون قبل زيارة المستشفى وبعدها."
    },
    "names": [
      "Medi Hana Care Route AI",
      "Safe Stay Route AI",
      "Medi Companion Guide"
    ],
    "pitchTarget": {
      "ko": "한국을 방문한 외국인 의료관광객",
      "en": "foreign medical tourists visiting Korea",
      "vi": "khách du lịch y tế nước ngoài đến Hàn Quốc",
      "ja": "韓国を訪れる外国人医療観光客",
      "zh": "访问韩国的外国医疗旅游客",
      "ar": "السياح العلاجيون الأجانب الذين يزورون كوريا"
    }
  },
  "busanTourist": {
    "pain": {
      "ko": "맛집, 교통, 포토존, 짐 보관, 동선 선택을 자기 언어로 쉽게 알기 어렵다",
      "en": "It is hard to choose restaurants, transit, photo spots, luggage storage, and routes in their own language.",
      "vi": "Khó chọn quán ăn, giao thông, điểm chụp ảnh, nơi giữ hành lý và tuyến đi bằng ngôn ngữ của họ.",
      "ja": "飲食店、交通、フォトスポット、荷物保管、動線選択を自分の言語で簡単に知ることが難しいです。",
      "zh": "他们很难用自己的语言了解餐厅、交通、拍照点、行李寄存和路线选择。",
      "ar": "يصعب عليهم اختيار المطاعم والمواصلات ومواقع التصوير وحفظ الأمتعة والمسارات بلغتهم."
    },
    "names": [
      "Busan Easy Trip AI",
      "B-Route Mate",
      "Global Busan Guide"
    ],
    "pitchTarget": {
      "ko": "부산을 처음 방문한 외국인 관광객",
      "en": "foreign tourists visiting Busan for the first time",
      "vi": "khách nước ngoài lần đầu đến Busan",
      "ja": "釜山を初めて訪れる外国人観光客",
      "zh": "第一次访问釜山的外国游客",
      "ar": "السياح الأجانب الذين يزورون بوسان لأول مرة"
    }
  },
  "kBeautyCustomer": {
    "pain": {
      "ko": "피부 타입, 기후, 제품 사용 순서, 예산에 맞는 안내를 자기 언어로 받기 어렵다",
      "en": "They struggle to receive guidance by skin type, climate, product order, and budget in their own language.",
      "vi": "Khó nhận hướng dẫn theo loại da, khí hậu, thứ tự dùng sản phẩm và ngân sách bằng ngôn ngữ của họ.",
      "ja": "肌タイプ、気候、使用順序、予算に合う案内を自分の言語で受けにくいです。",
      "zh": "他们很难用自己的语言获得按肤质、气候、产品顺序和预算定制的说明。",
      "ar": "يصعب عليهم الحصول على إرشاد بلغتهم حسب نوع البشرة والمناخ وترتيب المنتجات والميزانية."
    },
    "names": [
      "K-Beauty Fit AI",
      "Glow Korea Guide",
      "Skin Route AI"
    ],
    "pitchTarget": {
      "ko": "K-뷰티에 관심 있는 외국인 고객",
      "en": "foreign customers interested in K-beauty",
      "vi": "khách nước ngoài quan tâm đến K-beauty",
      "ja": "Kビューティーに関心のある外国人顧客",
      "zh": "对K-Beauty感兴趣的外国客户",
      "ar": "العملاء الأجانب المهتمون بـ K-beauty"
    }
  },
  "hospitalVisitor": {
    "pain": {
      "ko": "증상, 통증, 알레르기, 복용약을 병원에서 정확히 전달하기 어렵다",
      "en": "They cannot easily explain symptoms, pain, allergies, and medications at the hospital.",
      "vi": "Họ khó trình bày chính xác triệu chứng, mức đau, dị ứng và thuốc đang dùng tại bệnh viện.",
      "ja": "病院で症状、痛み、アレルギー、服用薬を正確に伝えることが難しいです。",
      "zh": "他们很难在医院准确表达症状、疼痛、过敏和正在服用的药物。",
      "ar": "يصعب عليهم شرح الأعراض والألم والحساسية والأدوية بدقة في المستشفى."
    },
    "names": [
      "Hospital Phrase Card",
      "Medi Talk Card",
      "Safe Visit Card"
    ],
    "pitchTarget": {
      "ko": "한국 병원을 방문하는 외국인",
      "en": "foreigners visiting hospitals in Korea",
      "vi": "người nước ngoài đến bệnh viện tại Hàn Quốc",
      "ja": "韓国の病院を訪れる外国人",
      "zh": "访问韩国医院的外国人",
      "ar": "الأجانب الذين يزورون المستشفيات في كوريا"
    }
  },
  "multiculturalFamily": {
    "pain": {
      "ko": "가족 돌봄, 병원 동행, 행정서류, 학교 안내를 이해하기 어렵다",
      "en": "They struggle with family care, hospital accompaniment, administrative documents, and school notices.",
      "vi": "Họ gặp khó khăn với chăm sóc gia đình, đi cùng đến bệnh viện, giấy tờ hành chính và thông báo của trường.",
      "ja": "家族のケア、病院同行、行政書類、学校案内を理解することが難しいです。",
      "zh": "他们在家庭照护、医院陪同、行政文件和学校通知方面遇到困难。",
      "ar": "يواجهون صعوبة في رعاية الأسرة ومرافقة المستشفى والوثائق الإدارية وإعلانات المدرسة."
    },
    "names": [
      "Family Bridge AI",
      "Together Guide AI",
      "Shalom Care Helper"
    ],
    "pitchTarget": {
      "ko": "한국 생활을 준비하는 다문화 가족",
      "en": "multicultural families preparing for life in Korea",
      "vi": "gia đình đa văn hóa chuẩn bị cuộc sống tại Hàn Quốc",
      "ja": "韓国生活を準備する多文化家族",
      "zh": "准备在韩国生活的多文化家庭",
      "ar": "الأسر متعددة الثقافات التي تستعد للحياة في كوريا"
    }
  }
};
const strengths = {
  "language": {
    "ko": "외국어 번역과 문화 이해",
    "en": "language translation and cultural understanding",
    "vi": "dịch thuật ngoại ngữ và hiểu biết văn hóa",
    "ja": "外国語翻訳と文化理解",
    "zh": "外语翻译和文化理解",
    "ar": "الترجمة وفهم الثقافة"
  },
  "content": {
    "ko": "영상·SNS 콘텐츠 제작",
    "en": "video and SNS content creation",
    "vi": "sản xuất video và nội dung mạng xã hội",
    "ja": "映像・SNSコンテンツ制作",
    "zh": "视频与社交媒体内容制作",
    "ar": "إنتاج الفيديو ومحتوى وسائل التواصل"
  },
  "tourism": {
    "ko": "관광 코스 기획과 현장 조사",
    "en": "tour route planning and field research",
    "vi": "lập kế hoạch tuyến du lịch và khảo sát hiện trường",
    "ja": "観光コース企画と現地調査",
    "zh": "旅游路线规划和现场调查",
    "ar": "تخطيط المسارات السياحية والبحث الميداني"
  },
  "ai": {
    "ko": "AI 챗봇과 노코드 자동화",
    "en": "AI chatbot and no-code automation",
    "vi": "chatbot AI và tự động hóa no-code",
    "ja": "AIチャットボットとノーコード自動化",
    "zh": "AI聊天机器人和无代码自动化",
    "ar": "روبوت محادثة AI وأتمتة no-code"
  },
  "beauty": {
    "ko": "K-뷰티 제품 이해와 상담 콘텐츠",
    "en": "K-beauty product knowledge and consultation content",
    "vi": "hiểu biết sản phẩm K-beauty và nội dung tư vấn",
    "ja": "Kビューティー製品理解と相談コンテンツ",
    "zh": "K-Beauty产品理解和咨询内容",
    "ar": "معرفة منتجات K-beauty ومحتوى الاستشارة"
  }
};
const tools = {
  "chatbot": {
    "ko": "AI 챗봇",
    "en": "AI chatbot",
    "vi": "chatbot AI",
    "ja": "AIチャットボット",
    "zh": "AI聊天机器人",
    "ar": "روبوت محادثة AI"
  },
  "webapp": {
    "ko": "간단한 웹앱",
    "en": "simple web app",
    "vi": "ứng dụng web đơn giản",
    "ja": "簡単なWebアプリ",
    "zh": "简单网页应用",
    "ar": "تطبيق ويب بسيط"
  },
  "form": {
    "ko": "구글폼과 자동 안내문",
    "en": "Google Form and automatic guide",
    "vi": "Google Form và hướng dẫn tự động",
    "ja": "Googleフォームと自動案内文",
    "zh": "Google表单和自动指南",
    "ar": "Google Form ودليل تلقائي"
  },
  "map": {
    "ko": "지도 기반 안내 페이지",
    "en": "map-based guide page",
    "vi": "trang hướng dẫn dựa trên bản đồ",
    "ja": "地図ベース案内ページ",
    "zh": "基于地图的指南页面",
    "ar": "صفحة إرشاد بالخريطة"
  },
  "cards": {
    "ko": "다국어 문장카드",
    "en": "multilingual phrase cards",
    "vi": "thẻ câu đa ngôn ngữ",
    "ja": "多言語フレーズカード",
    "zh": "多语言句子卡",
    "ar": "بطاقات عبارات متعددة اللغات"
  }
};
const topIdeas = [
  {
    "title": {
      "ko": "외국인 유학생 정착 AI 도우미",
      "en": "AI settlement helper for international students",
      "vi": "AI hỗ trợ du học sinh ổn định",
      "ja": "留学生定着AIサポーター",
      "zh": "留学生安顿AI助手",
      "ar": "مساعد AI لاستقرار الطلاب الدوليين"
    },
    "target": "foreignStudent",
    "problem": "한국에 처음 온 유학생이 기숙사, 은행, 병원, 교통, 학교 행정 절차를 어려워한다.",
    "strength": "language",
    "tool": "chatbot",
    "why": {
      "ko": "부산외대 안에서 바로 인터뷰하고 테스트할 수 있습니다.",
      "en": "You can interview and test users inside BUFS right away.",
      "vi": "Có thể phỏng vấn và thử nghiệm ngay trong BUFS.",
      "ja": "釜山外大の中ですぐにインタビューしてテストできます。",
      "zh": "可以在釜山外大内部立即采访并测试。",
      "ar": "يمكن إجراء مقابلات واختبار المستخدمين داخل BUFS مباشرة."
    }
  },
  {
    "title": {
      "ko": "부산외대 캠퍼스 AI 가이드",
      "en": "BUFS campus AI guide",
      "vi": "AI hướng dẫn campus BUFS",
      "ja": "BUFSキャンパスAIガイド",
      "zh": "BUFS校园AI指南",
      "ar": "دليل حرم BUFS بالذكاء الاصطناعي"
    },
    "target": "foreignStudent",
    "problem": "신입 유학생이 행정실, 학식, 버스, 주변 병원과 식당 위치를 잘 모른다.",
    "strength": "ai",
    "tool": "map",
    "why": {
      "ko": "학교 안 데이터만으로도 첫 MVP를 만들 수 있습니다.",
      "en": "The first MVP can be made with campus data only.",
      "vi": "MVP đầu tiên có thể tạo chỉ bằng dữ liệu trong trường.",
      "ja": "学校内のデータだけでも最初のMVPを作れます。",
      "zh": "仅用校园数据就可以制作第一个MVP。",
      "ar": "يمكن بناء أول MVP باستخدام بيانات الحرم فقط."
    }
  },
  {
    "title": {
      "ko": "외국인 병원 방문 문장카드",
      "en": "Hospital phrase cards for foreigners",
      "vi": "Thẻ câu dùng khi đi bệnh viện",
      "ja": "外国人病院訪問フレーズカード",
      "zh": "外国人医院就诊句子卡",
      "ar": "بطاقات عبارات للمستشفى للأجانب"
    },
    "target": "hospitalVisitor",
    "problem": "외국인이 병원에서 증상, 복용약, 알레르기, 통증 정도를 정확히 설명하기 어렵다.",
    "strength": "language",
    "tool": "cards",
    "why": {
      "ko": "의료 판단 없이 의사소통을 돕는 안전한 서비스입니다.",
      "en": "It safely supports communication without medical judgment.",
      "vi": "Đây là dịch vụ an toàn hỗ trợ giao tiếp mà không đưa ra phán đoán y tế.",
      "ja": "医療判断なしで意思疎通を助ける安全なサービスです。",
      "zh": "这是不进行医疗判断、只帮助沟通的安全服务。",
      "ar": "يدعم التواصل بأمان دون تقديم حكم طبي."
    }
  },
  {
    "title": {
      "ko": "부산 K-컬처 팬덤 투어 AI",
      "en": "Busan K-culture fandom tour AI",
      "vi": "AI tour fandom K-culture Busan",
      "ja": "釜山KカルチャーファンダムツアーAI",
      "zh": "釜山K文化粉丝旅游AI",
      "ar": "جولة جماهير K-culture في بوسان بالذكاء الاصطناعي"
    },
    "target": "busanTourist",
    "problem": "외국인 팬이 K-pop, 드라마, 굿즈샵, 포토존, 맛집을 하루 코스로 연결하기 어렵다.",
    "strength": "content",
    "tool": "webapp",
    "why": {
      "ko": "학생들이 재미있게 콘텐츠로 확장할 수 있습니다.",
      "en": "Students can expand it into fun content.",
      "vi": "Sinh viên có thể mở rộng thành nội dung thú vị.",
      "ja": "学生が楽しくコンテンツへ拡張できます。",
      "zh": "学生可以有趣地扩展成内容。",
      "ar": "يمكن للطلاب توسيعها إلى محتوى ممتع."
    }
  },
  {
    "title": {
      "ko": "K-뷰티 다국어 상담 서비스",
      "en": "Multilingual K-beauty consultation",
      "vi": "Tư vấn K-beauty đa ngôn ngữ",
      "ja": "Kビューティー多言語相談",
      "zh": "K-Beauty多语咨询服务",
      "ar": "استشارة K-beauty متعددة اللغات"
    },
    "target": "kBeautyCustomer",
    "problem": "외국인 고객이 피부 타입과 현지 기후에 맞는 K-뷰티 제품 사용 순서를 알기 어렵다.",
    "strength": "beauty",
    "tool": "form",
    "why": {
      "ko": "동남아, 베트남 시장과 연결하기 좋은 아이디어입니다.",
      "en": "It connects well with Vietnam and Southeast Asian markets.",
      "vi": "Ý tưởng này phù hợp để kết nối với Việt Nam và thị trường Đông Nam Á.",
      "ja": "ベトナムや東南アジア市場とつなげやすいアイデアです。",
      "zh": "这是适合连接越南和东南亚市场的想法。",
      "ar": "فكرة مناسبة للربط مع فيتنام وأسواق جنوب شرق آسيا."
    }
  }
];
const mvpStepsByLang = {
  "ko": [
    "1일차: 실제 사용자 3명 인터뷰",
    "2일차: 질문 10개 정리",
    "3일차: 다국어 답변 초안 작성",
    "4일차: MVP 화면 또는 챗봇 구성",
    "5일차: 질문 입력 → 답변 → 다음 행동 안내 테스트",
    "6일차: 사용자 피드백 반영",
    "7일차: 1장 발표자료와 30초 피치 완성"
  ],
  "en": [
    "Day 1: Interview 3 real users",
    "Day 2: Organize 10 frequent questions",
    "Day 3: Draft multilingual answers",
    "Day 4: Build an MVP screen or chatbot flow",
    "Day 5: Test question → answer → next action guidance",
    "Day 6: Apply user feedback",
    "Day 7: Complete a one-page deck and 30-second pitch"
  ],
  "vi": [
    "Ngày 1: Phỏng vấn 3 người dùng thật",
    "Ngày 2: Sắp xếp 10 câu hỏi thường gặp",
    "Ngày 3: Soạn câu trả lời đa ngôn ngữ",
    "Ngày 4: Tạo màn hình MVP hoặc luồng chatbot",
    "Ngày 5: Kiểm tra câu hỏi → câu trả lời → hướng dẫn hành động tiếp theo",
    "Ngày 6: Chỉnh sửa theo phản hồi người dùng",
    "Ngày 7: Hoàn thành 1 trang thuyết trình và bài pitch 30 giây"
  ],
  "ja": [
    "1日目：実際のユーザー3人にインタビュー",
    "2日目：よく出る質問10個を整理",
    "3日目：多言語回答の草案を作成",
    "4日目：MVP画面またはチャットボットの流れを構成",
    "5日目：質問→回答→次の行動案内をテスト",
    "6日目：ユーザーフィードバックを反映",
    "7日目：1枚の発表資料と30秒ピッチを完成"
  ],
  "zh": [
    "第1天：采访3名真实用户",
    "第2天：整理10个常见问题",
    "第3天：编写多语言回答草案",
    "第4天：制作MVP界面或聊天机器人流程",
    "第5天：测试“提问→回答→下一步行动引导”",
    "第6天：根据用户反馈修改",
    "第7天：完成一页发表资料和30秒演讲"
  ],
  "ar": [
    "اليوم 1: مقابلة 3 مستخدمين حقيقيين",
    "اليوم 2: تنظيم 10 أسئلة متكررة",
    "اليوم 3: كتابة مسودة إجابات متعددة اللغات",
    "اليوم 4: بناء شاشة MVP أو تدفق روبوت المحادثة",
    "اليوم 5: اختبار سؤال → إجابة → إرشاد للخطوة التالية",
    "اليوم 6: تطبيق ملاحظات المستخدمين",
    "اليوم 7: إكمال شريحة واحدة وعرض مدته 30 ثانية"
  ]
};
const sampleQuestionsByTarget = {
  "foreignStudent": {
    "ko": [
      "외국인등록은 어디서 시작하나요?",
      "학교 근처 은행은 어디인가요?",
      "아플 때 어느 병원에 가면 되나요?"
    ],
    "en": [
      "Where do I start alien registration?",
      "Which bank is near campus?",
      "Which clinic should I visit when I am sick?"
    ],
    "vi": [
      "Tôi bắt đầu đăng ký người nước ngoài ở đâu?",
      "Ngân hàng nào gần trường?",
      "Khi bị ốm tôi nên đến bệnh viện nào?"
    ],
    "ja": [
      "外国人登録はどこから始めますか？",
      "学校の近くの銀行はどこですか？",
      "体調が悪い時はどの病院に行けばよいですか？"
    ],
    "zh": [
      "外国人登记从哪里开始？",
      "学校附近有哪些银行？",
      "生病时应该去哪家医院？"
    ],
    "ar": [
      "من أين أبدأ تسجيل الأجانب؟",
      "أي بنك قريب من الجامعة؟",
      "إلى أي عيادة أذهب عندما أمرض؟"
    ]
  },
  "medicalTourist": {
    "ko": [
      "병원 상담 후 오래 걷지 않는 코스가 있나요?",
      "보호자가 쉴 수 있는 곳은 어디인가요?",
      "지도와 사진으로 안내해 주세요."
    ],
    "en": [
      "Is there a route with little walking after hospital consultation?",
      "Where can my companion rest?",
      "Please guide me with a map and photos."
    ],
    "vi": [
      "Có tuyến nào ít phải đi bộ sau khi tư vấn bệnh viện không?",
      "Người đi cùng có thể nghỉ ở đâu?",
      "Hãy hướng dẫn bằng bản đồ và hình ảnh."
    ],
    "ja": [
      "病院相談後、あまり歩かないコースはありますか？",
      "付き添いの人が休める場所はどこですか？",
      "地図と写真で案内してください。"
    ],
    "zh": [
      "医院咨询后有没有少走路的路线？",
      "陪同人员可以在哪里休息？",
      "请用地图和照片为我导航。"
    ],
    "ar": [
      "هل يوجد مسار لا يتطلب مشيًا كثيرًا بعد استشارة المستشفى؟",
      "أين يمكن للمرافق أن يستريح؟",
      "أرشدني بخريطة وصور من فضلك."
    ]
  },
  "busanTourist": {
    "ko": [
      "부산에서 반나절 코스를 추천해 주세요.",
      "짐을 들고 다니지 않는 동선이 있나요?",
      "사진 찍기 좋은 곳을 알려주세요."
    ],
    "en": [
      "Please recommend a half-day route in Busan.",
      "Is there a route without carrying luggage?",
      "Tell me good photo spots."
    ],
    "vi": [
      "Hãy gợi ý tuyến nửa ngày ở Busan.",
      "Có tuyến nào không phải mang hành lý không?",
      "Hãy chỉ cho tôi điểm chụp ảnh đẹp."
    ],
    "ja": [
      "釜山で半日コースをおすすめしてください。",
      "荷物を持ち歩かない動線はありますか？",
      "写真を撮るのに良い場所を教えてください。"
    ],
    "zh": [
      "请推荐釜山半日路线。",
      "有没有不用一直带行李的路线？",
      "请告诉我适合拍照的地方。"
    ],
    "ar": [
      "اقترح لي مسار نصف يوم في بوسان.",
      "هل يوجد مسار دون حمل الأمتعة؟",
      "أخبرني بمواقع جيدة للتصوير."
    ]
  },
  "kBeautyCustomer": {
    "ko": [
      "습한 날씨에 맞는 기초 제품 순서를 알려주세요.",
      "민감성 피부가 피해야 할 표현은 무엇인가요?",
      "예산에 맞게 제품군을 추천해 주세요."
    ],
    "en": [
      "Tell me the basic product order for humid weather.",
      "What should sensitive skin avoid?",
      "Recommend product groups within my budget."
    ],
    "vi": [
      "Hãy cho tôi thứ tự sản phẩm cơ bản phù hợp thời tiết ẩm.",
      "Da nhạy cảm nên tránh điều gì?",
      "Hãy gợi ý nhóm sản phẩm theo ngân sách."
    ],
    "ja": [
      "湿気の多い天気に合う基礎製品の順番を教えてください。",
      "敏感肌が避けるべき表現は何ですか？",
      "予算に合う製品群をおすすめしてください。"
    ],
    "zh": [
      "请告诉我适合潮湿天气的基础护肤顺序。",
      "敏感肌应该避免哪些成分或说明？",
      "请根据预算推荐产品组合。"
    ],
    "ar": [
      "أخبرني بترتيب المنتجات الأساسية في الطقس الرطب.",
      "ما الذي يجب أن تتجنبه البشرة الحساسة؟",
      "اقترح مجموعات منتجات تناسب ميزانيتي."
    ]
  },
  "hospitalVisitor": {
    "ko": [
      "알레르기가 있다는 말을 어떻게 하나요?",
      "복용 중인 약을 어떻게 설명하나요?",
      "통증 정도를 어떻게 말하나요?"
    ],
    "en": [
      "How do I say that I have an allergy?",
      "How do I explain my current medication?",
      "How do I describe my pain level?"
    ],
    "vi": [
      "Tôi nói mình bị dị ứng như thế nào?",
      "Tôi giải thích thuốc đang dùng như thế nào?",
      "Tôi nói mức độ đau như thế nào?"
    ],
    "ja": [
      "アレルギーがあることをどう言いますか？",
      "服用中の薬をどう説明しますか？",
      "痛みの程度をどう伝えますか？"
    ],
    "zh": [
      "我该怎么说自己有过敏？",
      "我该如何说明正在服用的药？",
      "我该如何表达疼痛程度？"
    ],
    "ar": [
      "كيف أقول إن لدي حساسية؟",
      "كيف أشرح الأدوية التي أتناولها؟",
      "كيف أصف مستوى الألم؟"
    ]
  },
  "multiculturalFamily": {
    "ko": [
      "가족 병원 동행 때 필요한 문장은 무엇인가요?",
      "학교 안내문을 쉽게 설명해 주세요.",
      "행정서류 준비 순서를 알려주세요."
    ],
    "en": [
      "What phrases are needed when accompanying family to a hospital?",
      "Explain the school notice simply.",
      "Tell me the order for preparing administrative documents."
    ],
    "vi": [
      "Cần câu nào khi đi cùng gia đình đến bệnh viện?",
      "Hãy giải thích thông báo của trường dễ hiểu.",
      "Hãy cho tôi thứ tự chuẩn bị giấy tờ hành chính."
    ],
    "ja": [
      "家族の病院同行で必要なフレーズは何ですか？",
      "学校のお知らせを簡単に説明してください。",
      "行政書類を準備する順番を教えてください。"
    ],
    "zh": [
      "陪家人去医院时需要哪些句子？",
      "请简单解释学校通知。",
      "请告诉我准备行政文件的顺序。"
    ],
    "ar": [
      "ما العبارات اللازمة عند مرافقة الأسرة إلى المستشفى؟",
      "اشرح إعلان المدرسة ببساطة.",
      "أخبرني بترتيب تجهيز الوثائق الإدارية."
    ]
  }
};
const cautionText = {
  "base": {
    "ko": [
      "개인정보는 꼭 필요한 최소한만 수집합니다.",
      "공식 안내가 필요한 내용은 공식 링크를 함께 확인합니다."
    ],
    "en": [
      "Collect only the minimum personal information needed.",
      "For official procedures, always check the official link together."
    ],
    "vi": [
      "Chỉ thu thập lượng thông tin cá nhân tối thiểu cần thiết.",
      "Với nội dung cần hướng dẫn chính thức, hãy kiểm tra kèm liên kết chính thức."
    ],
    "ja": [
      "個人情報は必要最小限だけ収集します。",
      "公式案内が必要な内容は、必ず公式リンクも一緒に確認します。"
    ],
    "zh": [
      "个人信息只收集必要的最小范围。",
      "需要官方 안내的内容，必须一起确认官方链接。"
    ],
    "ar": [
      "اجمع الحد الأدنى الضروري فقط من المعلومات الشخصية.",
      "في الإجراءات الرسمية، تحقق دائمًا من الرابط الرسمي معًا."
    ]
  },
  "medical": {
    "ko": "의료 진단, 치료효과 보장, 특정 병원 확정 추천 표현은 사용하지 않습니다.",
    "en": "Do not use medical diagnosis, guaranteed treatment effects, or fixed hospital recommendation wording.",
    "vi": "Không dùng cách diễn đạt chẩn đoán y tế, đảm bảo hiệu quả điều trị, hoặc khuyến nghị cố định bệnh viện cụ thể.",
    "ja": "医療診断、治療効果の保証、特定病院の確定推薦表現は使用しません。",
    "zh": "不要使用医疗诊断、保证治疗效果或确定推荐特定医院的表达。",
    "ar": "لا تستخدم عبارات التشخيص الطبي أو ضمان نتائج العلاج أو التوصية المؤكدة بمستشفى محدد."
  }
};
const rightsText = {
  "trademark": {
    "ko": "{name} 같은 서비스 이름은 상표로 검토할 수 있습니다.",
    "en": "A service name such as {name} can be reviewed as a trademark.",
    "vi": "Tên dịch vụ như {name} có thể được xem xét như nhãn hiệu.",
    "ja": "{name} のようなサービス名は商標として検討できます。",
    "zh": "像 {name} 这样的服务名称可以作为商标进行审查。",
    "ar": "يمكن مراجعة اسم خدمة مثل {name} كعلامة تجارية."
  },
  "copyright": {
    "ko": "번역문, 안내문, 카드 문구, 영상 스크립트는 콘텐츠 자산으로 관리합니다.",
    "en": "Translations, guides, phrase cards, and video scripts should be managed as content assets.",
    "vi": "Bản dịch, hướng dẫn, nội dung thẻ câu và kịch bản video nên được quản lý như tài sản nội dung.",
    "ja": "翻訳文、案内文、カード文句、映像スクリプトはコンテンツ資産として管理します。",
    "zh": "翻译文本、指南、句子卡和视频脚本应作为内容资产管理。",
    "ar": "تُدار الترجمات والأدلة وبطاقات العبارات ونصوص الفيديو كأصول محتوى."
  },
  "patent": {
    "ko": "사용자 상황을 분석하고 맞춤 안내를 생성하는 처리 흐름은 특허 가능성을 검토할 수 있습니다.",
    "en": "The process flow that analyzes user situations and generates tailored guidance can be reviewed as a patent candidate.",
    "vi": "Quy trình phân tích tình huống người dùng và tạo hướng dẫn phù hợp có thể được xem xét như ứng viên sáng chế.",
    "ja": "ユーザー状況を分析し、個別案内を生成する処理フローは特許候補として検討できます。",
    "zh": "分析用户情况并生成定制指南的处理流程可作为专利候选进行审查。",
    "ar": "يمكن مراجعة تدفق المعالجة الذي يحلل حالة المستخدم وينشئ إرشادًا مخصصًا كمرشح براءة."
  },
  "notice": {
    "ko": "진단, 치료효과, 병원 확정 추천 표현은 피하고 의사소통·체류안내 보조로 범위를 제한해야 합니다.",
    "en": "Avoid diagnosis, treatment effect guarantees, and fixed hospital recommendations; limit the scope to communication and stay guidance support.",
    "vi": "Tránh chẩn đoán, bảo đảm hiệu quả điều trị và khuyến nghị cố định bệnh viện; giới hạn phạm vi ở hỗ trợ giao tiếp và hướng dẫn lưu trú.",
    "ja": "診断、治療効果、病院の確定推薦表現は避け、意思疎通・滞在案内補助に範囲を限定します。",
    "zh": "避免诊断、治疗效果保证和确定推荐医院的表达；范围应限制为沟通和停留指南辅助。",
    "ar": "تجنب التشخيص وضمان نتائج العلاج والتوصية المؤكدة بالمستشفى؛ وحصر النطاق في دعم التواصل وإرشاد الإقامة."
  }
};
const pitchTemplate = {
  "ko": "저희는 {target}이 겪는 “{problem}” 문제를 해결하고자 합니다. 첫 단계로 {tool} MVP를 만들고 실제 사용자 3명에게 테스트하겠습니다. 반응이 좋으면 서비스 이름은 상표로, 안내 콘텐츠는 저작권으로, AI가 상황을 분석하고 안내하는 흐름은 특허 후보로 검토하겠습니다.",
  "en": "We want to solve the problem of “{problem}” faced by {target}. As a first step, we will build a {tool} MVP and test it with 3 real users. If the response is positive, we will review the service name as a trademark, the guide content as copyright, and the AI analysis flow as a patent candidate.",
  "vi": "Chúng tôi muốn giải quyết vấn đề “{problem}” mà {target} đang gặp. Bước đầu tiên, chúng tôi sẽ tạo MVP bằng {tool} và thử nghiệm với 3 người dùng thật. Nếu phản hồi tích cực, chúng tôi sẽ xem xét tên dịch vụ như nhãn hiệu, nội dung hướng dẫn như bản quyền, và quy trình AI như ứng viên sáng chế.",
  "ja": "私たちは、{target} が感じる「{problem}」という問題を解決したいと考えています。第一段階として {tool} のMVPを作り、実際のユーザー3人にテストします。反応が良ければ、サービス名は商標、案内コンテンツは著作権、AIが状況を分析して案内する流れは特許候補として検討します。",
  "zh": "我们希望解决 {target} 所遇到的“{problem}”问题。第一步，我们将制作 {tool} MVP，并让3名真实用户测试。如果反馈良好，服务名称将作为商标、指南内容作为著作权、AI分析并引导的流程作为专利候选进行审查。",
  "ar": "نريد حل مشكلة “{problem}” التي يواجهها {target}. كخطوة أولى، سنبني MVP باستخدام {tool} ونختبره مع 3 مستخدمين حقيقيين. إذا كانت الاستجابة جيدة، سنراجع اسم الخدمة كعلامة تجارية، ومحتوى الإرشاد كحق مؤلف، وتدفق تحليل AI كمرشح براءة."
};
const oneLineTemplate = {
  "ko": "{target}의 불편을 {tool}로 해결하는 다국어 AI 서비스입니다.",
  "en": "A multilingual AI service that solves the inconvenience of {target} with a {tool}.",
  "vi": "Dịch vụ AI đa ngôn ngữ giải quyết bất tiện của {target} bằng {tool}.",
  "ja": "{target} の不便を {tool} で解決する多言語AIサービスです。",
  "zh": "这是一项用 {tool} 解决 {target} 不便的多语言AI服务。",
  "ar": "خدمة ذكاء اصطناعي متعددة اللغات تحل مشكلة {target} باستخدام {tool}."
};
const solutionTemplate = {
  "ko": "{strength}을 활용해 사용자의 상황을 묻고, 필요한 안내를 짧은 카드나 대화형 답변으로 제공합니다.",
  "en": "Using {strength}, it asks about the user’s situation and provides needed guidance through short cards or conversational answers.",
  "vi": "Sử dụng {strength}, dịch vụ hỏi tình huống của người dùng và cung cấp hướng dẫn cần thiết bằng thẻ ngắn hoặc câu trả lời hội thoại.",
  "ja": "{strength}を活用してユーザーの状況を尋ね、必要な案内を短いカードや対話型回答で提供します。",
  "zh": "利用{strength}询问用户情况，并通过简短卡片或对话式回答提供必要指南。",
  "ar": "باستخدام {strength}، يسأل التطبيق عن حالة المستخدم ويقدم الإرشاد المطلوب عبر بطاقات قصيرة أو إجابات حوارية."
};
const nextActionText = {
  "ko": "오늘 바로 외국인 친구 3명에게 가장 불편했던 순간을 인터뷰하고, 질문 10개를 정리하세요.",
  "en": "Today, interview 3 foreign friends about their most inconvenient moment and organize 10 questions.",
  "vi": "Hôm nay, hãy phỏng vấn 3 người bạn nước ngoài về thời điểm bất tiện nhất và sắp xếp 10 câu hỏi.",
  "ja": "今日すぐに外国人の友人3人へ最も不便だった瞬間をインタビューし、質問10個を整理してください。",
  "zh": "今天就采访3位外国朋友最不方便的时刻，并整理10个问题。",
  "ar": "اليوم، قابل 3 أصدقاء أجانب حول أكثر لحظة كانت مزعجة لهم، ثم نظّم 10 أسئلة."
};

function lang() { return ui[currentLang] ? currentLang : "ko"; }
function t(key) { return (ui[lang()] && ui[lang()][key]) || ui.ko[key] || key; }
function localized(obj) { if (typeof obj === "string") return obj; return obj?.[lang()] || obj?.en || obj?.ko || ""; }
function escapeHtml(str) { return String(str || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c] || c)); }
function format(template, values) { return String(template || "").replace(/\{(\w+)\}/g, (_, k) => values[k] ?? ""); }
function fillSelect(id, options) {
  const select = document.getElementById(id);
  if (!select) return;
  const previous = select.value;
  select.innerHTML = Object.entries(options).map(([value,label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("");
  if (previous && options[previous]) select.value = previous;
}
function renderEmpty(force = false) {
  const box = document.getElementById("resultBox");
  if (!box) return;
  if (force || !box.dataset.hasResult || box.dataset.hasResult === "false") {
    box.innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("emptyTitle"))}</strong><p>${escapeHtml(t("emptyText"))}</p></div>`;
    box.dataset.hasResult = "false";
  }
}
function applyLanguage(nextLang) {
  currentLang = ui[nextLang] ? nextLang : "ko";
  localStorage.setItem("bufsLang", currentLang);
  const meta = languageMeta[currentLang] || languageMeta.ko;
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.body.classList.toggle("rtl", meta.dir === "rtl");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
  fillSelect("target", t("targetOptions"));
  fillSelect("strength", t("strengthOptions"));
  fillSelect("tool", t("toolOptions"));
  renderTemplates();
  renderEmpty(false);
}
function getFormData() {
  return {
    target: document.getElementById("target").value,
    problem: document.getElementById("problem").value,
    strength: document.getElementById("strength").value,
    tool: document.getElementById("tool").value,
    language: languageMeta[lang()].prompt,
    languageCode: lang()
  };
}
function getMvpSteps() { return mvpStepsByLang[lang()] || mvpStepsByLang.ko; }
function getSampleQuestions(target) { return (sampleQuestionsByTarget[target] && sampleQuestionsByTarget[target][lang()]) || sampleQuestionsByTarget[target]?.ko || sampleQuestionsByTarget.foreignStudent[lang()] || sampleQuestionsByTarget.foreignStudent.ko; }
function getCautions(target) {
  const list = [...((cautionText.base && cautionText.base[lang()]) || cautionText.base.ko)];
  if (["medicalTourist", "hospitalVisitor", "kBeautyCustomer"].includes(target)) list.push(cautionText.medical[lang()] || cautionText.medical.ko);
  return list;
}
function getRights(tool, target, name) {
  const list = [
    { type: t("right1Title"), desc: format(rightsText.trademark[lang()] || rightsText.trademark.ko, { name }) },
    { type: t("right2Title"), desc: rightsText.copyright[lang()] || rightsText.copyright.ko }
  ];
  if (["chatbot", "webapp", "form", "map"].includes(tool)) list.push({ type: t("right5Title"), desc: rightsText.patent[lang()] || rightsText.patent.ko });
  if (["medicalTourist", "hospitalVisitor"].includes(target)) list.push({ type: t("apiNote").includes("API") ? (lang()==="ko" ? "주의" : lang()==="en" ? "Caution" : lang()==="vi" ? "Lưu ý" : lang()==="ja" ? "注意" : lang()==="zh" ? "注意" : "تنبيه") : "주의", desc: rightsText.notice[lang()] || rightsText.notice.ko });
  return list;
}
function makeFallbackResult(data) {
  const target = targets[data.target];
  const selectedName = target.names[0];
  const problem = (data.problem || "").trim() || localized(target.pain);
  const targetLabel = localized(target.pitchTarget);
  const toolLabel = localized(tools[data.tool]);
  const strengthLabel = localized(strengths[data.strength]);
  return {
    ideaName: selectedName,
    oneLine: format(oneLineTemplate[lang()] || oneLineTemplate.ko, { target: targetLabel, tool: toolLabel }),
    problemSummary: problem,
    targetUser: targetLabel,
    solution: format(solutionTemplate[lang()] || solutionTemplate.ko, { strength: strengthLabel }),
    mvpPlan: getMvpSteps(),
    sampleQuestions: getSampleQuestions(data.target),
    rights: getRights(data.tool, data.target, selectedName),
    cautions: getCautions(data.target),
    pitch30: format(pitchTemplate[lang()] || pitchTemplate.ko, { target: targetLabel, problem, tool: toolLabel }),
    nextAction: nextActionText[lang()] || nextActionText.ko
  };
}
function renderResult(item, isFallback = false) {
  const h = t("resultHeads");
  const safe = (value) => escapeHtml(value || t("notProvided"));
  const list = arr => Array.isArray(arr) && arr.length ? `<ul>${arr.map(v => `<li>${safe(v)}</li>`).join("")}</ul>` : `<p>${escapeHtml(t("notProvided"))}</p>`;
  const rights = Array.isArray(item.rights) && item.rights.length ? `<ul>${item.rights.map(v => `<li><strong>${safe(v.type)}</strong>: ${safe(v.desc)}</li>`).join("")}</ul>` : `<p>${escapeHtml(t("notProvided"))}</p>`;
  return `${isFallback ? `<div class="fallback-note">${escapeHtml(t("fallbackNote"))}</div>` : `<div class="ai-badge">${escapeHtml(t("aiNote"))}</div>`}
    <div class="result-section"><h4>${safe(h[0])}</h4><p><strong>${safe(item.ideaName)}</strong></p></div>
    <div class="result-section"><h4>${safe(h[1])}</h4><p>${safe(item.oneLine)}</p></div>
    <div class="result-section"><h4>${safe(h[2])}</h4><p>${safe(item.problemSummary)}</p></div>
    <div class="result-section"><h4>${safe(h[3])}</h4><p><strong>${escapeHtml(t("targetPrefix"))}:</strong> ${safe(item.targetUser)}</p><p><strong>${escapeHtml(t("solutionPrefix"))}:</strong> ${safe(item.solution)}</p></div>
    <div class="result-section"><h4>${safe(h[4])}</h4>${list(item.mvpPlan)}</div>
    <div class="result-section"><h4>${safe(h[5])}</h4>${list(item.sampleQuestions)}</div>
    <div class="result-section"><h4>${safe(h[6])}</h4>${rights}</div>
    <div class="result-section"><h4>${safe(h[7])}</h4>${list(item.cautions)}</div>
    <div class="result-section"><h4>${safe(h[8])}</h4><p>${safe(item.pitch30)}</p></div>
    <div class="result-section"><h4>${safe(h[9])}</h4><p>${safe(item.nextAction)}</p></div>`;
}
async function askAi(data) {
  const response = await fetch("/.netlify/functions/generate-idea", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      target: localized(targets[data.target].pitchTarget),
      problem: data.problem,
      strength: localized(strengths[data.strength]),
      mvpTool: localized(tools[data.tool]),
      language: data.language,
      languageCode: data.languageCode,
      context: "BUFS student startup practice app. Return all JSON values in the selected language."
    })
  });
  const result = await response.json();
  if (!response.ok || result.error) throw new Error(result.error || "AI connection failed");
  return result;
}
function renderTemplates() {
  const wrap = document.getElementById("templateCards");
  if (!wrap) return;
  wrap.innerHTML = topIdeas.map((idea, i) => `<article class="example-card" tabindex="0" role="button" data-index="${i}" aria-label="${escapeHtml(localized(idea.title))}"><div class="rank">${i+1}</div><h3>${escapeHtml(localized(idea.title))}</h3><p>${escapeHtml(localized(idea.why))}</p></article>`).join("");
  wrap.querySelectorAll(".example-card").forEach(card => {
    const load = () => {
      const item = topIdeas[Number(card.dataset.index)];
      document.getElementById("target").value = item.target;
      document.getElementById("problem").value = item.problem;
      document.getElementById("strength").value = item.strength;
      document.getElementById("tool").value = item.tool;
      document.getElementById("idea-builder").scrollIntoView({behavior:"smooth"});
    };
    card.addEventListener("click", load);
    card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " ") { e.preventDefault(); load(); } });
  });
}
let lastText = "";
document.addEventListener("click", e => { const btn = e.target.closest(".lang-btn"); if (btn) applyLanguage(btn.dataset.lang); });
document.getElementById("ideaForm").addEventListener("submit", async e => {
  e.preventDefault();
  const data = getFormData();
  const resultBox = document.getElementById("resultBox");
  resultBox.dataset.hasResult = "true";
  resultBox.innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("loadingTitle"))}</strong><p>${escapeHtml(t("loadingText"))}</p></div>`;
  try {
    const aiResult = await askAi(data);
    resultBox.innerHTML = renderResult(aiResult, false);
    lastText = resultBox.innerText;
  } catch (err) {
    const fallback = makeFallbackResult(data);
    resultBox.innerHTML = renderResult(fallback, true);
    lastText = resultBox.innerText;
  }
});
document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = lastText || document.getElementById("resultBox").innerText;
  try { await navigator.clipboard.writeText(text); alert(t("copied")); } catch { alert(t("copyFail")); }
});

const RESULT_EMAIL_TO = "hotissue0@bufs.ac.kr";
function makeEmailBody(text) {
  const clean = String(text || "").trim();
  const maxLength = 5500;
  const clipped = clean.length > maxLength
    ? clean.slice(0, maxLength) + "\n\n[The content is long, so part of it was inserted into the email body. The full result has been copied to the clipboard.]"
    : clean;
  return `${t("emailIntro")}\n\n${clipped}\n\n---\nBUFS Startup Idea Builder AI\nhttps://bufs-startup-ai-app.netlify.app/`;
}

document.getElementById("emailBtn").addEventListener("click", async () => {
  const resultBox = document.getElementById("resultBox");
  const text = (lastText || resultBox.innerText || "").trim();
  if (!text || resultBox.dataset.hasResult !== "true") {
    alert(t("emailNoResult"));
    return;
  }
  try { await navigator.clipboard.writeText(text); } catch {}
  const subject = encodeURIComponent(t("emailSubject"));
  const body = encodeURIComponent(makeEmailBody(text));
  window.location.href = `mailto:${RESULT_EMAIL_TO}?subject=${subject}&body=${body}`;
  setTimeout(() => alert(t("emailCopied")), 300);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("ideaForm").reset();
  document.getElementById("problem").value = "";
  document.getElementById("resultBox").dataset.hasResult = "false";
  renderEmpty(true);
  lastText = "";
});
applyLanguage(currentLang);
