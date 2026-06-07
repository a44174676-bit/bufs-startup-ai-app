const languageMeta = {
  ko: { label: "한국어", prompt: "Korean", dir: "ltr" },
  en: { label: "English", prompt: "English", dir: "ltr" },
  vi: { label: "Tiếng Việt", prompt: "Vietnamese", dir: "ltr" },
  ja: { label: "日本語", prompt: "Japanese", dir: "ltr" },
  zh: { label: "中文", prompt: "Chinese", dir: "ltr" },
  ar: { label: "العربية", prompt: "Arabic", dir: "rtl" }
};

let currentLang = localStorage.getItem("bridgeLang") || "ko";
let lastResult = null;
let lastForm = null;
let selectedIdea = null;

const ui = {
  ko: {
    skip: "본문 바로가기",
    brandSub: "창업지원단용 학생창업 접수·진단 플랫폼",
    navApply: "아이디어 접수", navFlow: "운영 흐름", navCriteria: "진단 기준",
    eyebrow: "AI · 학생창업 · 다국어 · 사업화",
    heroTitle: "학생의 작은 문제 발견을<br>창업 가능성으로 연결합니다",
    heroLead: "특정 산업에 치우치지 않고, 캠퍼스 생활·AI 서비스·콘텐츠·관광·교육·ESG·제품 아이디어까지 창업지원단이 실제로 접수하고 진단할 수 있도록 설계했습니다.",
    ctaStart: "아이디어 진단 시작", ctaFlow: "운영 구조 보기",
    heroCard1: "문제 입력", heroCard1t: "학생이 본 불편과 고객을 입력",
    heroCard2: "5개 아이디어", heroCard2t: "AI가 분야별 창업 가능성 제안",
    heroCard3: "지원 연계", heroCard3t: "멘토링·권리화·보육센터 트랙",
    languageLabel: "언어 선택",
    languageTitle: "학생과 외국인 유학생 모두 참여할 수 있게 다국어로 운영합니다.",
    languageDesc: "화면과 AI 결과 언어가 함께 바뀝니다. 창업지원단은 다국어 접수 통로로 활용할 수 있습니다.",
    flowLabel: "운영 흐름", flowTitle: "창업지원단이 실제로 쓰기 위한 접수·진단·연계 구조",
    flow1: "다국어 접수", flow1t: "팀 정보, 분야, 문제, 고객, MVP 방식 입력",
    flow2: "AI 1차 진단", flow2t: "5개 아이디어, 점수, 난이도, 수익모델 제안",
    flow3: "메일 제출·링크", flow3t: "AI 진단 결과를 hotissue0@bufs.ac.kr로 제출하고 디지털 포트폴리오 링크를 생성",
    flow4: "후속 지원", flow4t: "멘토링, 특허·상표 검토, 창업보육센터 연계",
    builderTitle: "학생창업 아이디어 접수·진단",
    builderDesc: "의료관광에 한정하지 않고, 모든 전공 학생의 창업 아이디어를 창업지원단 관점으로 진단합니다.",
    teamLabel: "팀명", leaderLabel: "대표 학생 이름", departmentLabel: "학과/전공", emailLabel: "연락 이메일",
    teamPlaceholder: "예: Global Bridge Team", leaderPlaceholder: "예: 홍길동", departmentPlaceholder: "예: 베트남어전공 / AI융합 / 관광 등", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "아이디어 분야",
    problemLabel: "해결하고 싶은 문제", problemPlaceholder: "예: 학생들이 교내 비교과, 장학, 진로 정보를 흩어진 공지에서 찾기 어려워합니다.",
    customerLabel: "누가 가장 불편한가요?", customerPlaceholder: "예: 신입생, 외국인 유학생, 취업 준비생, 지역 소상공인",
    limitLabel: "기존 해결 방식의 한계", limitPlaceholder: "예: 공지가 여러 페이지에 흩어져 있고, 개인 상황에 맞는 안내가 어렵습니다.",
    ideaHintLabel: "이미 생각한 해결 아이디어가 있나요?", ideaHintPlaceholder: "없어도 됩니다. AI가 5개 방향을 제안합니다.",
    strengthLabel: "우리 팀의 강점", mvpLabel: "첫 MVP 방식", supportLabel: "학교에 요청하고 싶은 지원",
    consentText: "제출 아이디어는 학생/팀의 자산이며, 심사·멘토링 목적 열람에 동의합니다. 특허·상표 등 권리화는 별도 협의가 필요함을 이해합니다.",
    generateBtn: "AI로 5개 아이디어 진단", pdfBtn: "메일 제출", resetBtn: "초기화",
    apiNote: "실제 AI 응답은 Netlify 환경변수 OPENAI_API_KEY가 설정되어 있을 때 작동합니다.",
    resultTag: "AI 진단 결과", resultTitle: "5개 창업 가능성",
    emptyTitle: "왼쪽 양식을 입력해 보세요.", emptyText: "AI가 5개의 아이디어, 점수, MVP, 수익모델, 권리화 방향을 제시합니다.",
    loadingTitle: "AI가 창업 가능성을 진단하고 있습니다...", loadingText: "5개 아이디어, 점수, 실행계획을 정리하는 중입니다.",
    fallbackNote: "AI 연결 전 예시 결과입니다. Netlify 환경변수 OPENAI_API_KEY를 넣으면 실제 AI 응답으로 바뀝니다.",
    aiNote: "AI 연결 결과", recommended: "AI 추천", option: "대안", score: "점수", difficulty: "난이도", mvp: "MVP", revenue: "수익모델", ip: "권리화", risk: "주의", selectIdea: "이 아이디어 선택",
    selectedTitle: "선택 아이디어 상세", mailBtn: "창업지원단 메일 제출", linkBtn: "아이디어 링크 만들기", copyBtn: "결과 복사", copied: "복사했습니다.", copyFail: "복사에 실패했습니다.", mailNeedResult: "먼저 AI 진단 결과를 생성해 주세요.", linkMade: "아이디어 링크가 생성되었습니다.",
    criteriaLabel: "진단 기준", criteriaTitle: "창업지원단 심사에 연결하기 쉬운 8개 기준", criteriaDescA: "학생 아이디어의 실행 가능성을 빠르게 확인합니다.", criteriaDescB: "후속 멘토링과 지원 연계 판단에 활용합니다.",
    footerSub: "부산외대 창업지원단 활용을 가정한 학생창업 접수·진단 MVP", footerNote: "교육·제안용 MVP입니다. 실제 운영 시 개인정보처리방침, 권리 귀속 동의, 관리자 승인 절차가 필요합니다.",
    mailSubject: "[BUFS Startup Bridge AI] 학생창업 아이디어 제출", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "학생창업 아이디어 링크", backHome: "앱으로 돌아가기", regNo: "접수번호", problemShort: "문제", teamShort: "팀", categoryShort: "분야", solutionShort: "해결", sevenDayMvp: "7일 MVP", fourWeekPlan: "4주 실행계획", interview: "고객 인터뷰", applicationEmailGreeting: "안녕하세요.", applicationEmailIntro: "BUFS Startup Bridge AI v2 아이디어를 제출합니다.", selectedIdeaLabel: "선택 아이디어", aiDiagnosis: "AI 진단 결과",
    categoryOptions: { aiSoftware: "AI·소프트웨어 서비스", languageGlobal: "외국어·번역·다문화 서비스", tourismLocal: "관광·로컬·지역문제 해결", contentMedia: "콘텐츠·미디어·SNS 창업", education: "교육·학습·튜터링 서비스", beautyLifestyle: "K-뷰티·라이프스타일 상품", goodsProduct: "굿즈·제품·제조 아이디어", esgSocial: "ESG·사회문제 해결", campusLife: "캠퍼스 생활 불편 해결", healthWellness: "헬스케어·웰니스" },
    strengthOptions: { language: "외국어·번역", content: "영상·SNS 콘텐츠", planning: "기획·리서치", development: "웹·앱·AI 제작", design: "디자인·브랜딩", network: "현장 네트워크" },
    mvpOptions: { chatbot: "AI 챗봇", webapp: "간단한 웹앱", form: "구글폼+자동 안내", map: "지도 기반 안내", content: "SNS/영상 콘텐츠", prototype: "제품 콘셉트보드" },
    supportOptions: { mentoring: "창업 멘토링", ip: "특허·상표 검토", space: "창업공간/보육센터", funding: "시제품·활동비", team: "팀원 매칭", education: "교육/특강" },
    criteria: ["문제 명확성", "고객 검증 가능성", "부산외대 역량 적합성", "7일 MVP 가능성", "수익모델 가능성", "권리화 가능성", "윤리·법률 리스크", "창업지원 연계성"],
    fallback: {
      problem: "학생들이 겪는 불편",
      names: ["캠퍼스 브릿지 AI", "학생 공지 파인더", "스마트 학생 도우미", "로컬 커넥트 랩", "학생 지원 데스크"],
      oneLine: "입력한 문제를 작게 해결하는 학생창업 아이디어입니다.",
      target: "부산외대 학생",
      solution: "팀의 강점을 활용하여 선택한 MVP 방식으로 문제를 검증합니다.",
      difficulty: ["쉬움", "쉬움", "보통", "보통", "높음"],
      mvpPlan: ["1일차: 고객 5명 인터뷰", "2일차: 반복 질문 10개 정리", "3일차: MVP 화면 초안 제작", "4일차: 폼/챗봇/페이지 구현", "5일차: 사용자 테스트", "6일차: 수정", "7일차: 발표자료 완성"],
      fourWeekPlan: ["1주차: 문제 검증", "2주차: MVP 제작", "3주차: 사용자 테스트", "4주차: 발표 및 지원 신청"],
      interviewQuestions: ["가장 불편한 순간은 언제인가요?", "현재는 어떻게 해결하나요?", "이 문제가 해결되면 어떤 점이 좋아지나요?", "돈이나 시간을 절약할 가치가 있나요?", "가장 먼저 필요한 기능은 무엇인가요?"],
      teamRoles: ["기획", "고객 인터뷰", "콘텐츠/디자인", "웹/AI 제작"],
      revenueModel: ["학교·기관 제휴", "프리미엄 기능", "운영 대행"],
      ipDirection: ["서비스명은 상표 후보", "콘텐츠는 저작권 관리", "AI 처리 흐름은 특허 후보 검토"],
      risks: ["개인정보 최소 수집", "공식 정보는 출처 확인", "권리화 전 학생 동의 필요"],
      recommend: "학교 안에서 바로 인터뷰와 MVP 테스트가 가능하며, 창업지원단 멘토링과 연결하기 쉽습니다.",
      whyRecommended: "가장 빠르게 학교 안에서 검증할 수 있습니다.",
      mentoringQuestions: ["가장 먼저 만날 고객 5명은 누구인가요?", "7일 안에 보여줄 수 있는 화면은 무엇인가요?", "개인정보나 법률 리스크는 없나요?"]
    }
  },

  en: {
    skip: "Skip to main content",
    brandSub: "Student startup intake and diagnosis platform for the startup support office",
    navApply: "Submit idea", navFlow: "Process", navCriteria: "Diagnosis criteria",
    eyebrow: "AI · Student Startup · Multilingual · Commercialization",
    heroTitle: "Turn student problem discovery<br>into startup potential",
    heroLead: "Built for a startup support office to receive and diagnose ideas across campus life, AI services, content, tourism, education, ESG, and product concepts—not one narrow industry.",
    ctaStart: "Start diagnosis", ctaFlow: "View process",
    heroCard1: "Input problem", heroCard1t: "Students enter a pain point and target user",
    heroCard2: "5 ideas", heroCard2t: "AI proposes startup possibilities by category",
    heroCard3: "Support track", heroCard3t: "Mentoring, IP review, and incubation track",
    languageLabel: "Language",
    languageTitle: "Operate in multiple languages for both Korean and international students.",
    languageDesc: "The interface and AI result language change together. The startup support office can use it as a multilingual intake channel.",
    flowLabel: "Operating flow", flowTitle: "A practical intake, diagnosis, and support-linkage structure for the startup office",
    flow1: "Multilingual intake", flow1t: "Enter team, category, problem, customer, and MVP type",
    flow2: "AI first diagnosis", flow2t: "Suggest 5 ideas, scores, difficulty, and revenue models",
    flow3: "Email submit · Link", flow3t: "Submit AI diagnosis to hotissue0@bufs.ac.kr and create a digital portfolio link",
    flow4: "Follow-up support", flow4t: "Mentoring, patent/trademark review, and incubation linkage",
    builderTitle: "Student startup idea intake and diagnosis",
    builderDesc: "A general startup-support diagnosis tool for students of all majors, not limited to medical tourism.",
    teamLabel: "Team name", leaderLabel: "Student leader", departmentLabel: "Department/Major", emailLabel: "Contact email",
    teamPlaceholder: "Example: Global Bridge Team", leaderPlaceholder: "Example: Hong Gil-dong", departmentPlaceholder: "Example: Vietnamese / AI convergence / Tourism", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "Idea category",
    problemLabel: "Problem to solve", problemPlaceholder: "Example: Students struggle to find extracurricular programs, scholarships, and career notices because information is scattered.",
    customerLabel: "Who feels this pain most?", customerPlaceholder: "Example: freshmen, international students, job seekers, local small businesses",
    limitLabel: "Limits of current solutions", limitPlaceholder: "Example: Notices are scattered across pages and are not personalized.",
    ideaHintLabel: "Do you already have a solution idea?", ideaHintPlaceholder: "Optional. AI will suggest five possible directions.",
    strengthLabel: "Team strength", mvpLabel: "First MVP type", supportLabel: "Support needed from the school",
    consentText: "I understand that the submitted idea belongs to the student/team, will be reviewed for screening and mentoring, and any IP ownership requires a separate agreement.",
    generateBtn: "Diagnose 5 ideas with AI", pdfBtn: "Email submit", resetBtn: "Reset",
    apiNote: "Actual AI output works when OPENAI_API_KEY is set in Netlify environment variables.",
    resultTag: "AI diagnosis result", resultTitle: "5 startup possibilities",
    emptyTitle: "Fill out the form on the left.", emptyText: "AI will suggest 5 ideas, scores, MVP, revenue model, and IP direction.",
    loadingTitle: "AI is diagnosing startup potential...", loadingText: "Preparing 5 ideas, scores, and action plans.",
    fallbackNote: "Sample result before AI connection. Add OPENAI_API_KEY in Netlify environment variables for real AI output.",
    aiNote: "AI-connected result", recommended: "AI recommendation", option: "Option", score: "Score", difficulty: "Difficulty", mvp: "MVP", revenue: "Revenue model", ip: "IP direction", risk: "Caution", selectIdea: "Select this idea",
    selectedTitle: "Selected idea detail", mailBtn: "Submit to startup office by email", linkBtn: "Create idea link", copyBtn: "Copy result", copied: "Copied.", copyFail: "Copy failed.", mailNeedResult: "Please generate an AI diagnosis result first.", linkMade: "Idea link has been created.",
    criteriaLabel: "Diagnosis criteria", criteriaTitle: "8 criteria that connect easily to startup-office screening", criteriaDescA: "Quickly checks whether a student idea can be executed.", criteriaDescB: "Used to judge follow-up mentoring and support linkage.",
    footerSub: "Student startup intake and diagnosis MVP designed for BUFS startup support", footerNote: "This is an educational/proposal MVP. Real operation requires a privacy policy, IP ownership consent, and admin approval process.",
    mailSubject: "[BUFS Startup Bridge AI] Student startup idea submission", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "Student startup idea link", backHome: "Back to app", regNo: "Application ID", problemShort: "Problem", teamShort: "Team", categoryShort: "Category", solutionShort: "Solution", sevenDayMvp: "7-day MVP", fourWeekPlan: "4-week plan", interview: "Customer interview", applicationEmailGreeting: "Hello.", applicationEmailIntro: "I am submitting a BUFS Startup Bridge AI v2 idea.", selectedIdeaLabel: "Selected idea", aiDiagnosis: "AI diagnosis result",
    categoryOptions: { aiSoftware: "AI/software service", languageGlobal: "Language/translation/multicultural service", tourismLocal: "Tourism/local problem solution", contentMedia: "Content/media/SNS startup", education: "Education/learning/tutoring service", beautyLifestyle: "K-beauty/lifestyle product", goodsProduct: "Goods/product/manufacturing idea", esgSocial: "ESG/social problem solution", campusLife: "Campus life problem solution", healthWellness: "Healthcare/wellness" },
    strengthOptions: { language: "Language/translation", content: "Video/SNS content", planning: "Planning/research", development: "Web/app/AI building", design: "Design/branding", network: "Field network" },
    mvpOptions: { chatbot: "AI chatbot", webapp: "Simple web app", form: "Google Form + auto guide", map: "Map-based guide", content: "SNS/video content", prototype: "Product concept board" },
    supportOptions: { mentoring: "Startup mentoring", ip: "Patent/trademark review", space: "Startup space/incubation", funding: "Prototype/activity fund", team: "Team matching", education: "Training/lecture" },
    criteria: ["Problem clarity", "Customer validation potential", "Fit with BUFS strengths", "7-day MVP feasibility", "Revenue model potential", "IP review potential", "Ethical/legal risk", "Startup support linkage"],
    fallback: {
      problem: "a student pain point", names: ["Campus Bridge AI", "Student Notice Finder", "Smart Student Mate", "Local Connect Lab", "Student Support Desk"], oneLine: "A student startup idea that solves the entered problem in a small and testable way.", target: "BUFS students", solution: "Use the team’s strengths to validate the problem through the selected MVP type.", difficulty: ["Easy", "Easy", "Medium", "Medium", "Hard"],
      mvpPlan: ["Day 1: Interview 5 users", "Day 2: Organize 10 repeated questions", "Day 3: Draft the MVP screen", "Day 4: Build a form/chatbot/page", "Day 5: Run user testing", "Day 6: Revise", "Day 7: Complete pitch materials"],
      fourWeekPlan: ["Week 1: Validate the problem", "Week 2: Build the MVP", "Week 3: Test with users", "Week 4: Pitch and apply for support"],
      interviewQuestions: ["When is the most inconvenient moment?", "How do you solve it now?", "What would improve if this were solved?", "Is it worth saving money or time?", "What is the first feature you need?"],
      teamRoles: ["Planning", "Customer interview", "Content/design", "Web/AI build"], revenueModel: ["School/institution partnership", "Premium feature", "Operation outsourcing"], ipDirection: ["Service name as trademark candidate", "Content managed by copyright", "AI process flow as patent-review candidate"], risks: ["Minimize personal data", "Check official sources", "Student consent required before IP filing"], recommend: "It can be interviewed and tested on campus quickly and is easy to connect to startup-office mentoring.", whyRecommended: "It is the fastest to validate within campus.", mentoringQuestions: ["Who are the first 5 customers to meet?", "What screen can be shown within 7 days?", "Are there privacy or legal risks?"]
    }
  },

  vi: {
    skip: "Bỏ qua đến nội dung chính",
    brandSub: "Nền tảng tiếp nhận và chẩn đoán ý tưởng khởi nghiệp sinh viên cho bộ phận hỗ trợ khởi nghiệp",
    navApply: "Nộp ý tưởng", navFlow: "Quy trình", navCriteria: "Tiêu chí chẩn đoán",
    eyebrow: "AI · Khởi nghiệp sinh viên · Đa ngôn ngữ · Thương mại hóa",
    heroTitle: "Biến một vấn đề sinh viên phát hiện<br>thành cơ hội khởi nghiệp",
    heroLead: "Được thiết kế để bộ phận hỗ trợ khởi nghiệp có thể tiếp nhận và chẩn đoán ý tưởng ở nhiều lĩnh vực như đời sống campus, dịch vụ AI, nội dung, du lịch, giáo dục, ESG và sản phẩm, không thiên về một ngành riêng lẻ.",
    ctaStart: "Bắt đầu chẩn đoán", ctaFlow: "Xem quy trình",
    heroCard1: "Nhập vấn đề", heroCard1t: "Sinh viên nhập bất tiện và khách hàng mục tiêu",
    heroCard2: "5 ý tưởng", heroCard2t: "AI đề xuất khả năng khởi nghiệp theo lĩnh vực",
    heroCard3: "Kết nối hỗ trợ", heroCard3t: "Mentoring, xem xét quyền SHTT và vườn ươm",
    languageLabel: "Ngôn ngữ",
    languageTitle: "Vận hành đa ngôn ngữ để cả sinh viên Hàn Quốc và du học sinh đều tham gia được.",
    languageDesc: "Ngôn ngữ giao diện và kết quả AI thay đổi cùng nhau. Bộ phận hỗ trợ khởi nghiệp có thể dùng như kênh tiếp nhận đa ngôn ngữ.",
    flowLabel: "Quy trình vận hành", flowTitle: "Cấu trúc tiếp nhận, chẩn đoán và liên kết hỗ trợ có thể dùng thực tế",
    flow1: "Tiếp nhận đa ngôn ngữ", flow1t: "Nhập thông tin nhóm, lĩnh vực, vấn đề, khách hàng và MVP",
    flow2: "Chẩn đoán AI lần 1", flow2t: "Đề xuất 5 ý tưởng, điểm số, độ khó và mô hình doanh thu",
    flow3: "Gửi email · Liên kết", flow3t: "Gửi kết quả chẩn đoán AI đến hotissue0@bufs.ac.kr và tạo liên kết portfolio số",
    flow4: "Hỗ trợ tiếp theo", flow4t: "Mentoring, xem xét sáng chế/nhãn hiệu và kết nối vườn ươm",
    builderTitle: "Tiếp nhận và chẩn đoán ý tưởng khởi nghiệp sinh viên",
    builderDesc: "Công cụ chẩn đoán chung cho sinh viên mọi chuyên ngành, không giới hạn ở du lịch y tế.",
    teamLabel: "Tên nhóm", leaderLabel: "Tên trưởng nhóm", departmentLabel: "Khoa/Chuyên ngành", emailLabel: "Email liên hệ",
    teamPlaceholder: "Ví dụ: Global Bridge Team", leaderPlaceholder: "Ví dụ: Nguyễn Văn A", departmentPlaceholder: "Ví dụ: Tiếng Việt / AI hội tụ / Du lịch", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "Lĩnh vực ý tưởng",
    problemLabel: "Vấn đề muốn giải quyết", problemPlaceholder: "Ví dụ: Sinh viên khó tìm chương trình ngoại khóa, học bổng và thông tin nghề nghiệp vì thông báo bị phân tán.",
    customerLabel: "Ai gặp bất tiện này nhiều nhất?", customerPlaceholder: "Ví dụ: tân sinh viên, du học sinh, sinh viên chuẩn bị việc làm, cửa hàng địa phương",
    limitLabel: "Hạn chế của cách giải quyết hiện tại", limitPlaceholder: "Ví dụ: thông tin nằm rải rác ở nhiều trang và chưa được cá nhân hóa.",
    ideaHintLabel: "Bạn đã có ý tưởng giải pháp chưa?", ideaHintPlaceholder: "Không bắt buộc. AI sẽ đề xuất 5 hướng.",
    strengthLabel: "Thế mạnh của nhóm", mvpLabel: "Hình thức MVP đầu tiên", supportLabel: "Hỗ trợ muốn nhận từ trường",
    consentText: "Tôi hiểu rằng ý tưởng đã nộp thuộc về sinh viên/nhóm, được xem xét cho mục đích sàng lọc và mentoring, và quyền SHTT cần thỏa thuận riêng.",
    generateBtn: "AI chẩn đoán 5 ý tưởng", pdfBtn: "Gửi email", resetBtn: "Làm lại",
    apiNote: "Kết quả AI thực tế hoạt động khi OPENAI_API_KEY được thiết lập trong biến môi trường Netlify.",
    resultTag: "Kết quả chẩn đoán AI", resultTitle: "5 khả năng khởi nghiệp",
    emptyTitle: "Hãy điền biểu mẫu bên trái.", emptyText: "AI sẽ đề xuất 5 ý tưởng, điểm số, MVP, mô hình doanh thu và hướng bảo hộ quyền.",
    loadingTitle: "AI đang chẩn đoán khả năng khởi nghiệp...", loadingText: "Đang chuẩn bị 5 ý tưởng, điểm số và kế hoạch hành động.",
    fallbackNote: "Đây là kết quả mẫu trước khi kết nối AI. Hãy thêm OPENAI_API_KEY vào biến môi trường Netlify để nhận kết quả AI thực tế.",
    aiNote: "Kết quả đã kết nối AI", recommended: "AI đề xuất", option: "Phương án", score: "Điểm", difficulty: "Độ khó", mvp: "MVP", revenue: "Mô hình doanh thu", ip: "Hướng SHTT", risk: "Lưu ý", selectIdea: "Chọn ý tưởng này",
    selectedTitle: "Chi tiết ý tưởng đã chọn", mailBtn: "Gửi email cho bộ phận khởi nghiệp", linkBtn: "Tạo liên kết ý tưởng", copyBtn: "Sao chép kết quả", copied: "Đã sao chép.", copyFail: "Sao chép thất bại.", mailNeedResult: "Vui lòng tạo kết quả chẩn đoán AI trước.", linkMade: "Liên kết ý tưởng đã được tạo.",
    criteriaLabel: "Tiêu chí chẩn đoán", criteriaTitle: "8 tiêu chí dễ kết nối với sàng lọc của bộ phận khởi nghiệp", criteriaDescA: "Nhanh chóng kiểm tra khả năng thực hiện của ý tưởng sinh viên.", criteriaDescB: "Dùng để đánh giá mentoring và liên kết hỗ trợ tiếp theo.",
    footerSub: "MVP tiếp nhận và chẩn đoán ý tưởng sinh viên cho hỗ trợ khởi nghiệp BUFS", footerNote: "Đây là MVP phục vụ giáo dục/đề xuất. Khi vận hành thực tế cần chính sách bảo mật, đồng ý về quyền SHTT và quy trình phê duyệt quản trị.",
    mailSubject: "[BUFS Startup Bridge AI] Nộp ý tưởng khởi nghiệp sinh viên", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "Liên kết ý tưởng khởi nghiệp sinh viên", backHome: "Quay lại ứng dụng", regNo: "Mã tiếp nhận", problemShort: "Vấn đề", teamShort: "Nhóm", categoryShort: "Lĩnh vực", solutionShort: "Giải pháp", sevenDayMvp: "MVP 7 ngày", fourWeekPlan: "Kế hoạch 4 tuần", interview: "Phỏng vấn khách hàng", applicationEmailGreeting: "Xin chào.", applicationEmailIntro: "Tôi xin nộp ý tưởng từ BUFS Startup Bridge AI v2.", selectedIdeaLabel: "Ý tưởng đã chọn", aiDiagnosis: "Kết quả chẩn đoán AI",
    categoryOptions: { aiSoftware: "Dịch vụ AI/phần mềm", languageGlobal: "Dịch vụ ngoại ngữ/biên dịch/đa văn hóa", tourismLocal: "Giải pháp du lịch/vấn đề địa phương", contentMedia: "Khởi nghiệp nội dung/truyền thông/SNS", education: "Dịch vụ giáo dục/học tập/gia sư", beautyLifestyle: "Sản phẩm K-beauty/lifestyle", goodsProduct: "Ý tưởng goods/sản phẩm/sản xuất", esgSocial: "Giải pháp ESG/vấn đề xã hội", campusLife: "Giải quyết bất tiện đời sống campus", healthWellness: "Chăm sóc sức khỏe/wellness" },
    strengthOptions: { language: "Ngoại ngữ/biên dịch", content: "Nội dung video/SNS", planning: "Lập kế hoạch/nghiên cứu", development: "Xây dựng web/app/AI", design: "Thiết kế/branding", network: "Mạng lưới hiện trường" },
    mvpOptions: { chatbot: "Chatbot AI", webapp: "Web app đơn giản", form: "Google Form + hướng dẫn tự động", map: "Hướng dẫn dựa trên bản đồ", content: "Nội dung SNS/video", prototype: "Bảng concept sản phẩm" },
    supportOptions: { mentoring: "Mentoring khởi nghiệp", ip: "Xem xét sáng chế/nhãn hiệu", space: "Không gian khởi nghiệp/vườn ươm", funding: "Kinh phí prototype/hoạt động", team: "Kết nối thành viên nhóm", education: "Đào tạo/chuyên đề" },
    criteria: ["Độ rõ của vấn đề", "Khả năng kiểm chứng khách hàng", "Phù hợp với thế mạnh BUFS", "Khả năng MVP trong 7 ngày", "Tiềm năng mô hình doanh thu", "Tiềm năng xem xét SHTT", "Rủi ro đạo đức/pháp lý", "Khả năng liên kết hỗ trợ khởi nghiệp"],
    fallback: {
      problem: "một bất tiện của sinh viên", names: ["Campus Bridge AI", "Công cụ tìm thông báo sinh viên", "Trợ lý sinh viên thông minh", "Local Connect Lab", "Bàn hỗ trợ sinh viên"], oneLine: "Ý tưởng khởi nghiệp sinh viên giúp giải quyết vấn đề đã nhập theo cách nhỏ và có thể kiểm chứng.", target: "Sinh viên BUFS", solution: "Tận dụng thế mạnh của nhóm để kiểm chứng vấn đề bằng hình thức MVP đã chọn.", difficulty: ["Dễ", "Dễ", "Trung bình", "Trung bình", "Khó"],
      mvpPlan: ["Ngày 1: Phỏng vấn 5 người dùng", "Ngày 2: Tổng hợp 10 câu hỏi lặp lại", "Ngày 3: Phác thảo màn hình MVP", "Ngày 4: Xây dựng form/chatbot/trang", "Ngày 5: Thử nghiệm với người dùng", "Ngày 6: Chỉnh sửa", "Ngày 7: Hoàn thành tài liệu trình bày"],
      fourWeekPlan: ["Tuần 1: Kiểm chứng vấn đề", "Tuần 2: Xây dựng MVP", "Tuần 3: Thử nghiệm với người dùng", "Tuần 4: Trình bày và xin hỗ trợ"],
      interviewQuestions: ["Khoảnh khắc bất tiện nhất là khi nào?", "Hiện tại bạn giải quyết như thế nào?", "Nếu vấn đề được giải quyết thì điều gì tốt hơn?", "Có đáng để tiết kiệm tiền hoặc thời gian không?", "Tính năng đầu tiên cần có là gì?"],
      teamRoles: ["Lập kế hoạch", "Phỏng vấn khách hàng", "Nội dung/thiết kế", "Xây dựng web/AI"], revenueModel: ["Hợp tác với trường/tổ chức", "Tính năng premium", "Dịch vụ vận hành thay mặt"], ipDirection: ["Tên dịch vụ là ứng viên nhãn hiệu", "Nội dung được quản lý bằng quyền tác giả", "Luồng xử lý AI là ứng viên xem xét sáng chế"], risks: ["Tối thiểu hóa dữ liệu cá nhân", "Kiểm tra nguồn thông tin chính thức", "Cần đồng ý của sinh viên trước khi nộp SHTT"], recommend: "Có thể phỏng vấn và thử nghiệm nhanh trong campus, dễ kết nối mentoring của bộ phận khởi nghiệp.", whyRecommended: "Có thể kiểm chứng nhanh nhất trong trường.", mentoringQuestions: ["5 khách hàng đầu tiên cần gặp là ai?", "Màn hình nào có thể cho xem trong 7 ngày?", "Có rủi ro dữ liệu cá nhân hoặc pháp lý không?"]
    }
  },

  ja: {
    skip: "本文へスキップ",
    brandSub: "起業支援部署向け学生起業アイデア受付・診断プラットフォーム",
    navApply: "アイデア受付", navFlow: "運営フロー", navCriteria: "診断基準",
    eyebrow: "AI · 学生起業 · 多言語 · 事業化",
    heroTitle: "学生が見つけた小さな課題を<br>起業可能性へつなげます",
    heroLead: "特定産業に偏らず、キャンパス生活、AIサービス、コンテンツ、観光、教育、ESG、製品アイデアまで、起業支援部署が実際に受付・診断できるよう設計しました。",
    ctaStart: "診断を開始", ctaFlow: "運営構造を見る",
    heroCard1: "課題入力", heroCard1t: "学生が見た不便と顧客を入力",
    heroCard2: "5つのアイデア", heroCard2t: "AIが分野別の起業可能性を提案",
    heroCard3: "支援連携", heroCard3t: "メンタリング・権利化・インキュベーション連携",
    languageLabel: "言語選択",
    languageTitle: "韓国人学生と外国人留学生の両方が参加できる多言語運営です。",
    languageDesc: "画面とAI結果の言語が同時に変わります。起業支援部署は多言語受付チャネルとして活用できます。",
    flowLabel: "運営フロー", flowTitle: "起業支援部署が実際に使える受付・診断・支援連携構造",
    flow1: "多言語受付", flow1t: "チーム情報、分野、課題、顧客、MVP方式を入力",
    flow2: "AI一次診断", flow2t: "5つのアイデア、点数、難易度、収益モデルを提案",
    flow3: "メール提出・リンク", flow3t: "AI診断結果をhotissue0@bufs.ac.krへ提出し、デジタルポートフォリオリンクを生成",
    flow4: "後続支援", flow4t: "メンタリング、特許・商標レビュー、インキュベーション連携",
    builderTitle: "学生起業アイデア受付・診断",
    builderDesc: "医療観光に限定せず、全専攻学生の起業アイデアを起業支援部署の視点で診断します。",
    teamLabel: "チーム名", leaderLabel: "代表学生名", departmentLabel: "学科/専攻", emailLabel: "連絡メール",
    teamPlaceholder: "例: Global Bridge Team", leaderPlaceholder: "例: 山田太郎", departmentPlaceholder: "例: ベトナム語専攻 / AI融合 / 観光", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "アイデア分野",
    problemLabel: "解決したい課題", problemPlaceholder: "例: 学生が比較科目、奨学金、進路情報を散らばった告知から探しにくい。",
    customerLabel: "誰が最も不便を感じますか？", customerPlaceholder: "例: 新入生、外国人留学生、就職準備生、地域の小規模事業者",
    limitLabel: "既存の解決方法の限界", limitPlaceholder: "例: 告知が複数ページに散らばり、個人状況に合わせた案内が難しい。",
    ideaHintLabel: "すでに考えた解決アイデアはありますか？", ideaHintPlaceholder: "なくても構いません。AIが5つの方向を提案します。",
    strengthLabel: "チームの強み", mvpLabel: "最初のMVP方式", supportLabel: "学校に求めたい支援",
    consentText: "提出したアイデアは学生/チームの資産であり、審査・メンタリング目的の閲覧に同意します。知的財産権の帰属は別途協議が必要であることを理解します。",
    generateBtn: "AIで5つのアイデアを診断", pdfBtn: "メール提出", resetBtn: "リセット",
    apiNote: "実際のAI応答はNetlify環境変数OPENAI_API_KEYが設定されている場合に動作します。",
    resultTag: "AI診断結果", resultTitle: "5つの起業可能性",
    emptyTitle: "左側のフォームを入力してください。", emptyText: "AIが5つのアイデア、点数、MVP、収益モデル、権利化方向を提示します。",
    loadingTitle: "AIが起業可能性を診断しています...", loadingText: "5つのアイデア、点数、実行計画を整理中です。",
    fallbackNote: "AI接続前のサンプル結果です。Netlify環境変数OPENAI_API_KEYを追加すると実際のAI応答に変わります。",
    aiNote: "AI接続結果", recommended: "AI推薦", option: "代案", score: "点数", difficulty: "難易度", mvp: "MVP", revenue: "収益モデル", ip: "権利化", risk: "注意", selectIdea: "このアイデアを選択",
    selectedTitle: "選択アイデア詳細", mailBtn: "起業支援部署へメール提出", linkBtn: "アイデアリンク作成", copyBtn: "結果をコピー", copied: "コピーしました。", copyFail: "コピーに失敗しました。", mailNeedResult: "先にAI診断結果を生成してください。", linkMade: "アイデアリンクが生成されました。",
    criteriaLabel: "診断基準", criteriaTitle: "起業支援部署の審査につなげやすい8つの基準", criteriaDescA: "学生アイデアの実行可能性を素早く確認します。", criteriaDescB: "後続メンタリングと支援連携の判断に活用します。",
    footerSub: "BUFS起業支援での活用を想定した学生起業受付・診断MVP", footerNote: "教育・提案用MVPです。実運営時にはプライバシーポリシー、権利帰属同意、管理者承認手続きが必要です。",
    mailSubject: "[BUFS Startup Bridge AI] 学生起業アイデア提出", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "学生起業アイデアリンク", backHome: "アプリに戻る", regNo: "受付番号", problemShort: "課題", teamShort: "チーム", categoryShort: "分野", solutionShort: "解決", sevenDayMvp: "7日MVP", fourWeekPlan: "4週間実行計画", interview: "顧客インタビュー", applicationEmailGreeting: "こんにちは。", applicationEmailIntro: "BUFS Startup Bridge AI v2のアイデアを提出します。", selectedIdeaLabel: "選択アイデア", aiDiagnosis: "AI診断結果",
    categoryOptions: { aiSoftware: "AI・ソフトウェアサービス", languageGlobal: "外国語・翻訳・多文化サービス", tourismLocal: "観光・ローカル課題解決", contentMedia: "コンテンツ・メディア・SNS起業", education: "教育・学習・チュータリングサービス", beautyLifestyle: "Kビューティー・ライフスタイル商品", goodsProduct: "グッズ・製品・製造アイデア", esgSocial: "ESG・社会課題解決", campusLife: "キャンパス生活の不便解決", healthWellness: "ヘルスケア・ウェルネス" },
    strengthOptions: { language: "外国語・翻訳", content: "動画・SNSコンテンツ", planning: "企画・リサーチ", development: "Web・アプリ・AI制作", design: "デザイン・ブランディング", network: "現場ネットワーク" },
    mvpOptions: { chatbot: "AIチャットボット", webapp: "簡単なWebアプリ", form: "Googleフォーム+自動案内", map: "地図ベース案内", content: "SNS/動画コンテンツ", prototype: "製品コンセプトボード" },
    supportOptions: { mentoring: "起業メンタリング", ip: "特許・商標レビュー", space: "起業スペース/インキュベーション", funding: "試作品・活動費", team: "チームメンバー マッチング", education: "教育/特講" },
    criteria: ["課題の明確性", "顧客検証可能性", "BUFSの強みとの適合性", "7日MVP可能性", "収益モデル可能性", "権利化レビュー可能性", "倫理・法的リスク", "起業支援連携性"],
    fallback: {
      problem: "学生が感じる不便", names: ["キャンパスブリッジAI", "学生告知ファインダー", "スマート学生メイト", "ローカルコネクトラボ", "学生支援デスク"], oneLine: "入力された課題を小さく検証可能な形で解決する学生起業アイデアです。", target: "BUFS学生", solution: "チームの強みを活用し、選択したMVP方式で課題を検証します。", difficulty: ["易しい", "易しい", "普通", "普通", "難しい"],
      mvpPlan: ["1日目: ユーザー5名にインタビュー", "2日目: 繰り返し出る質問10個を整理", "3日目: MVP画面案を作成", "4日目: フォーム/チャットボット/ページを構築", "5日目: ユーザーテスト", "6日目: 修正", "7日目: 発表資料を完成"],
      fourWeekPlan: ["1週目: 課題検証", "2週目: MVP制作", "3週目: ユーザーテスト", "4週目: 発表・支援申請"],
      interviewQuestions: ["最も不便な瞬間はいつですか？", "現在はどのように解決していますか？", "解決されると何が良くなりますか？", "お金や時間を節約する価値がありますか？", "最初に必要な機能は何ですか？"],
      teamRoles: ["企画", "顧客インタビュー", "コンテンツ/デザイン", "Web/AI制作"], revenueModel: ["学校・機関連携", "プレミアム機能", "運営代行"], ipDirection: ["サービス名は商標候補", "コンテンツは著作権管理", "AI処理フローは特許候補として検討"], risks: ["個人情報を最小限に収集", "公式情報の出典を確認", "権利化前に学生の同意が必要"], recommend: "学内で素早くインタビューとMVPテストができ、起業支援部署のメンタリングにつなげやすいです。", whyRecommended: "学内で最も早く検証できます。", mentoringQuestions: ["最初に会う顧客5名は誰ですか？", "7日以内に見せられる画面は何ですか？", "個人情報や法的リスクはありませんか？"]
    }
  },

  zh: {
    skip: "跳到主要内容",
    brandSub: "面向创业支援部门的学生创业想法接收与诊断平台",
    navApply: "提交想法", navFlow: "运营流程", navCriteria: "诊断标准",
    eyebrow: "AI · 学生创业 · 多语言 · 商业化",
    heroTitle: "把学生发现的小问题<br>连接为创业可能性",
    heroLead: "本平台不偏向某一产业，而是让创业支援部门能够接收并诊断校园生活、AI服务、内容、旅游、教育、ESG和产品等多领域想法。",
    ctaStart: "开始诊断", ctaFlow: "查看运营结构",
    heroCard1: "输入问题", heroCard1t: "学生输入发现的不便和目标用户",
    heroCard2: "5个想法", heroCard2t: "AI按领域提出创业可能性",
    heroCard3: "支持连接", heroCard3t: "导师辅导、知识产权审查、孵化中心通道",
    languageLabel: "语言选择",
    languageTitle: "以多语言方式运营，让本地学生和外国留学生都能参与。",
    languageDesc: "页面语言和AI结果语言会同时切换。创业支援部门可将其作为多语言接收渠道。",
    flowLabel: "运营流程", flowTitle: "创业支援部门实际可用的接收、诊断与支持连接结构",
    flow1: "多语言接收", flow1t: "输入团队、领域、问题、客户和MVP方式",
    flow2: "AI初步诊断", flow2t: "提出5个想法、评分、难度和收入模型",
    flow3: "邮件提交·链接", flow3t: "将AI诊断结果提交至hotissue0@bufs.ac.kr，并生成数字作品集链接",
    flow4: "后续支持", flow4t: "导师辅导、专利/商标审查、孵化中心连接",
    builderTitle: "学生创业想法接收与诊断",
    builderDesc: "这是面向所有专业学生的通用创业诊断工具，不限于医疗旅游。",
    teamLabel: "团队名称", leaderLabel: "学生负责人", departmentLabel: "院系/专业", emailLabel: "联系邮箱",
    teamPlaceholder: "例: Global Bridge Team", leaderPlaceholder: "例: 张三", departmentPlaceholder: "例: 越南语专业 / AI融合 / 旅游", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "想法领域",
    problemLabel: "想解决的问题", problemPlaceholder: "例: 学生很难从分散的公告中找到课外活动、奖学金和就业信息。",
    customerLabel: "谁最受这个问题影响？", customerPlaceholder: "例: 新生、外国留学生、求职学生、当地小商户",
    limitLabel: "现有解决方式的局限", limitPlaceholder: "例: 信息分散在多个页面，难以根据个人情况提供引导。",
    ideaHintLabel: "是否已有解决想法？", ideaHintPlaceholder: "没有也可以。AI会提出5个方向。",
    strengthLabel: "团队优势", mvpLabel: "第一个MVP方式", supportLabel: "希望学校提供的支持",
    consentText: "我理解提交的想法属于学生/团队资产，仅用于评审和导师辅导，知识产权归属需另行协商。",
    generateBtn: "用AI诊断5个想法", pdfBtn: "邮件提交", resetBtn: "重置",
    apiNote: "实际AI输出需要在Netlify环境变量中设置OPENAI_API_KEY。",
    resultTag: "AI诊断结果", resultTitle: "5种创业可能性",
    emptyTitle: "请填写左侧表单。", emptyText: "AI将提出5个想法、评分、MVP、收入模型和知识产权方向。",
    loadingTitle: "AI正在诊断创业可能性...", loadingText: "正在整理5个想法、评分和行动计划。",
    fallbackNote: "这是AI连接前的示例结果。将OPENAI_API_KEY添加到Netlify环境变量后会显示真实AI结果。",
    aiNote: "AI连接结果", recommended: "AI推荐", option: "选项", score: "评分", difficulty: "难度", mvp: "MVP", revenue: "收入模型", ip: "知识产权方向", risk: "注意", selectIdea: "选择此想法",
    selectedTitle: "所选想法详情", mailBtn: "通过邮件提交给创业支援部门", linkBtn: "生成想法链接", copyBtn: "复制结果", copied: "已复制。", copyFail: "复制失败。", mailNeedResult: "请先生成AI诊断结果。", linkMade: "想法链接已生成。",
    criteriaLabel: "诊断标准", criteriaTitle: "便于连接创业支援部门评审的8项标准", criteriaDescA: "快速检查学生想法的执行可能性。", criteriaDescB: "用于判断后续导师辅导与支持连接。",
    footerSub: "面向BUFS创业支援的学生创业接收与诊断MVP", footerNote: "这是教育/提案用MVP。实际运营需要隐私政策、知识产权归属同意和管理员审批流程。",
    mailSubject: "[BUFS Startup Bridge AI] 学生创业想法提交", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "学生创业想法链接", backHome: "返回应用", regNo: "接收编号", problemShort: "问题", teamShort: "团队", categoryShort: "领域", solutionShort: "解决方案", sevenDayMvp: "7天MVP", fourWeekPlan: "4周计划", interview: "客户访谈", applicationEmailGreeting: "您好。", applicationEmailIntro: "我提交BUFS Startup Bridge AI v2想法。", selectedIdeaLabel: "所选想法", aiDiagnosis: "AI诊断结果",
    categoryOptions: { aiSoftware: "AI/软件服务", languageGlobal: "外语/翻译/多文化服务", tourismLocal: "旅游/本地问题解决", contentMedia: "内容/媒体/SNS创业", education: "教育/学习/辅导服务", beautyLifestyle: "K-Beauty/生活方式产品", goodsProduct: "周边/产品/制造想法", esgSocial: "ESG/社会问题解决", campusLife: "校园生活不便解决", healthWellness: "医疗健康/身心健康" },
    strengthOptions: { language: "外语/翻译", content: "视频/SNS内容", planning: "策划/调研", development: "Web/App/AI制作", design: "设计/品牌", network: "现场网络" },
    mvpOptions: { chatbot: "AI聊天机器人", webapp: "简单Web应用", form: "Google表单+自动引导", map: "地图型引导", content: "SNS/视频内容", prototype: "产品概念板" },
    supportOptions: { mentoring: "创业导师辅导", ip: "专利/商标审查", space: "创业空间/孵化", funding: "样品/活动经费", team: "团队匹配", education: "培训/讲座" },
    criteria: ["问题清晰度", "客户验证可能性", "与BUFS优势的适配度", "7天MVP可行性", "收入模型可能性", "知识产权审查可能性", "伦理/法律风险", "创业支持连接性"],
    fallback: {
      problem: "学生遇到的不便", names: ["校园桥接AI", "学生公告查找器", "智能学生伙伴", "本地连接实验室", "学生支持服务台"], oneLine: "以小而可验证的方式解决输入问题的学生创业想法。", target: "BUFS学生", solution: "利用团队优势，通过所选MVP方式验证问题。", difficulty: ["容易", "容易", "中等", "中等", "较难"],
      mvpPlan: ["第1天：采访5名用户", "第2天：整理10个重复问题", "第3天：制作MVP界面草案", "第4天：搭建表单/聊天机器人/页面", "第5天：用户测试", "第6天：修改", "第7天：完成发表材料"],
      fourWeekPlan: ["第1周：验证问题", "第2周：制作MVP", "第3周：用户测试", "第4周：发表并申请支持"],
      interviewQuestions: ["最不方便的时刻是什么时候？", "现在如何解决？", "如果解决了会带来什么改善？", "是否值得节省金钱或时间？", "最先需要的功能是什么？"],
      teamRoles: ["策划", "客户访谈", "内容/设计", "Web/AI制作"], revenueModel: ["学校/机构合作", "高级功能", "运营代办"], ipDirection: ["服务名称可作为商标候选", "内容可通过著作权管理", "AI处理流程可作为专利审查候选"], risks: ["最小化收集个人信息", "确认官方信息来源", "知识产权申请前需要学生同意"], recommend: "可在校园内快速访谈和测试MVP，容易连接创业支援部门的导师辅导。", whyRecommended: "最容易在校园内快速验证。", mentoringQuestions: ["最先要见的5位客户是谁？", "7天内可以展示什么界面？", "是否存在个人信息或法律风险？"]
    }
  },

  ar: {
    skip: "تجاوز إلى المحتوى الرئيسي",
    brandSub: "منصة لاستقبال وتشخيص أفكار ريادة الأعمال الطلابية لمكتب دعم الشركات الناشئة",
    navApply: "تقديم الفكرة", navFlow: "مسار التشغيل", navCriteria: "معايير التشخيص",
    eyebrow: "ذكاء اصطناعي · ريادة طلابية · تعدد لغات · تجارية",
    heroTitle: "نحوّل المشكلة الصغيرة التي يكتشفها الطالب<br>إلى فرصة ريادية",
    heroLead: "صُممت المنصة ليستقبل مكتب دعم الشركات الناشئة أفكارًا في مجالات متنوعة مثل حياة الحرم الجامعي، خدمات الذكاء الاصطناعي، المحتوى، السياحة، التعليم، ESG، والمنتجات، دون التركيز على قطاع واحد فقط.",
    ctaStart: "ابدأ التشخيص", ctaFlow: "عرض هيكل التشغيل",
    heroCard1: "إدخال المشكلة", heroCard1t: "يدخل الطالب نقطة الألم والعميل المستهدف",
    heroCard2: "5 أفكار", heroCard2t: "يقترح الذكاء الاصطناعي فرصًا ريادية حسب المجال",
    heroCard3: "ربط الدعم", heroCard3t: "إرشاد، مراجعة الملكية الفكرية، ومسار الحاضنة",
    languageLabel: "اختيار اللغة",
    languageTitle: "تشغيل متعدد اللغات ليشارك الطلاب المحليون والطلاب الدوليون معًا.",
    languageDesc: "تتغير لغة الواجهة ونتائج الذكاء الاصطناعي معًا. يمكن لمكتب دعم الشركات الناشئة استخدامها كقناة استقبال متعددة اللغات.",
    flowLabel: "مسار التشغيل", flowTitle: "هيكل عملي للاستقبال والتشخيص وربط الدعم لمكتب ريادة الأعمال",
    flow1: "استقبال متعدد اللغات", flow1t: "إدخال الفريق، المجال، المشكلة، العميل، ونوع MVP",
    flow2: "تشخيص أولي بالذكاء الاصطناعي", flow2t: "اقتراح 5 أفكار، درجات، مستوى الصعوبة، ونماذج الدخل",
    flow3: "إرسال بالبريد · رابط", flow3t: "إرسال نتيجة تشخيص AI إلى hotissue0@bufs.ac.kr وإنشاء رابط ملف رقمي",
    flow4: "دعم لاحق", flow4t: "إرشاد، مراجعة براءة/علامة تجارية، وربط بالحاضنة",
    builderTitle: "استقبال وتشخيص أفكار ريادة الأعمال الطلابية",
    builderDesc: "أداة عامة لتشخيص أفكار الطلاب من كل التخصصات، وليست محدودة بالسياحة الطبية.",
    teamLabel: "اسم الفريق", leaderLabel: "اسم قائد الفريق", departmentLabel: "القسم/التخصص", emailLabel: "البريد الإلكتروني",
    teamPlaceholder: "مثال: Global Bridge Team", leaderPlaceholder: "مثال: أحمد محمد", departmentPlaceholder: "مثال: اللغة الفيتنامية / تقارب AI / السياحة", emailPlaceholder: "student@bufs.ac.kr",
    categoryLabel: "مجال الفكرة",
    problemLabel: "المشكلة المراد حلها", problemPlaceholder: "مثال: يصعب على الطلاب العثور على الأنشطة غير المنهجية والمنح ومعلومات التوظيف لأنها موزعة في إعلانات متعددة.",
    customerLabel: "من يعاني من هذه المشكلة أكثر؟", customerPlaceholder: "مثال: الطلاب الجدد، الطلاب الدوليون، الباحثون عن عمل، المتاجر المحلية الصغيرة",
    limitLabel: "حدود الحلول الحالية", limitPlaceholder: "مثال: المعلومات موزعة على صفحات كثيرة وليست مخصصة لحالة كل شخص.",
    ideaHintLabel: "هل لديك فكرة حل بالفعل؟", ideaHintPlaceholder: "اختياري. سيقترح الذكاء الاصطناعي خمسة اتجاهات.",
    strengthLabel: "قوة الفريق", mvpLabel: "نوع MVP الأول", supportLabel: "الدعم المطلوب من الجامعة",
    consentText: "أفهم أن الفكرة المقدمة ملك للطالب/الفريق، وسيتم الاطلاع عليها لأغراض الفرز والإرشاد، وأن ملكية حقوق الملكية الفكرية تحتاج إلى اتفاق منفصل.",
    generateBtn: "تشخيص 5 أفكار بالذكاء الاصطناعي", pdfBtn: "إرسال بالبريد", resetBtn: "إعادة ضبط",
    apiNote: "تعمل نتائج الذكاء الاصطناعي الفعلية عند ضبط OPENAI_API_KEY في متغيرات بيئة Netlify.",
    resultTag: "نتيجة تشخيص AI", resultTitle: "5 فرص ريادية",
    emptyTitle: "املأ النموذج في الجهة اليسرى.", emptyText: "سيقترح AI خمس أفكار ودرجات وMVP ونموذج دخل واتجاه الملكية الفكرية.",
    loadingTitle: "يقوم AI بتشخيص الإمكانية الريادية...", loadingText: "يتم إعداد 5 أفكار ودرجات وخطط عمل.",
    fallbackNote: "هذه نتيجة نموذجية قبل الاتصال بالذكاء الاصطناعي. أضف OPENAI_API_KEY إلى متغيرات Netlify للحصول على نتيجة فعلية.",
    aiNote: "نتيجة متصلة بالذكاء الاصطناعي", recommended: "توصية AI", option: "خيار", score: "الدرجة", difficulty: "الصعوبة", mvp: "MVP", revenue: "نموذج الدخل", ip: "اتجاه الملكية الفكرية", risk: "تنبيه", selectIdea: "اختر هذه الفكرة",
    selectedTitle: "تفاصيل الفكرة المختارة", mailBtn: "إرسال بالبريد إلى مكتب ريادة الأعمال", linkBtn: "إنشاء رابط الفكرة", copyBtn: "نسخ النتيجة", copied: "تم النسخ.", copyFail: "فشل النسخ.", mailNeedResult: "يرجى إنشاء نتيجة تشخيص AI أولاً.", linkMade: "تم إنشاء رابط الفكرة.",
    criteriaLabel: "معايير التشخيص", criteriaTitle: "8 معايير سهلة الربط بفرز مكتب دعم الشركات الناشئة", criteriaDescA: "تفحص بسرعة قابلية تنفيذ فكرة الطالب.", criteriaDescB: "تستخدم للحكم على الإرشاد اللاحق وربط الدعم.",
    footerSub: "MVP لاستقبال وتشخيص أفكار الطلاب لاستخدامها في دعم ريادة الأعمال بجامعة BUFS", footerNote: "هذا MVP تعليمي/اقتراحي. التشغيل الحقيقي يحتاج إلى سياسة خصوصية، موافقة على ملكية الحقوق، وإجراءات موافقة إدارية.",
    mailSubject: "[BUFS Startup Bridge AI] تقديم فكرة ريادة طلابية", mailTo: "hotissue0@bufs.ac.kr",
    portfolioTitle: "رابط فكرة ريادة طلابية", backHome: "العودة إلى التطبيق", regNo: "رقم الطلب", problemShort: "المشكلة", teamShort: "الفريق", categoryShort: "المجال", solutionShort: "الحل", sevenDayMvp: "MVP خلال 7 أيام", fourWeekPlan: "خطة 4 أسابيع", interview: "مقابلة العملاء", applicationEmailGreeting: "مرحبًا.", applicationEmailIntro: "أقدم فكرة من BUFS Startup Bridge AI v2.", selectedIdeaLabel: "الفكرة المختارة", aiDiagnosis: "نتيجة تشخيص AI",
    categoryOptions: { aiSoftware: "خدمة AI/برمجيات", languageGlobal: "خدمة لغات/ترجمة/تعدد ثقافي", tourismLocal: "حل سياحي/مشكلة محلية", contentMedia: "مشروع محتوى/إعلام/SNS", education: "خدمة تعليم/تعلم/تدريس", beautyLifestyle: "منتج K-Beauty/نمط حياة", goodsProduct: "فكرة بضائع/منتج/تصنيع", esgSocial: "حل ESG/مشكلة اجتماعية", campusLife: "حل مشكلة في حياة الحرم الجامعي", healthWellness: "رعاية صحية/عافية" },
    strengthOptions: { language: "لغات/ترجمة", content: "محتوى فيديو/SNS", planning: "تخطيط/بحث", development: "بناء ويب/تطبيق/AI", design: "تصميم/علامة تجارية", network: "شبكة ميدانية" },
    mvpOptions: { chatbot: "روبوت محادثة AI", webapp: "تطبيق ويب بسيط", form: "نموذج Google + دليل تلقائي", map: "دليل يعتمد على الخريطة", content: "محتوى SNS/فيديو", prototype: "لوحة مفهوم المنتج" },
    supportOptions: { mentoring: "إرشاد ريادي", ip: "مراجعة براءة/علامة تجارية", space: "مساحة ريادية/حاضنة", funding: "تمويل نموذج أولي/نشاط", team: "مطابقة أعضاء الفريق", education: "تدريب/محاضرة" },
    criteria: ["وضوح المشكلة", "إمكانية التحقق من العملاء", "التوافق مع قوة BUFS", "قابلية MVP خلال 7 أيام", "إمكانية نموذج الدخل", "إمكانية مراجعة الملكية الفكرية", "مخاطر أخلاقية/قانونية", "قابلية الربط بدعم ريادة الأعمال"],
    fallback: {
      problem: "نقطة ألم لدى الطلاب", names: ["Campus Bridge AI", "باحث إعلانات الطلاب", "رفيق الطالب الذكي", "Local Connect Lab", "مكتب دعم الطلاب"], oneLine: "فكرة ريادية طلابية تحل المشكلة المدخلة بطريقة صغيرة وقابلة للاختبار.", target: "طلاب BUFS", solution: "استخدم قوة الفريق للتحقق من المشكلة من خلال نوع MVP المختار.", difficulty: ["سهل", "سهل", "متوسط", "متوسط", "صعب"],
      mvpPlan: ["اليوم 1: مقابلة 5 مستخدمين", "اليوم 2: تنظيم 10 أسئلة متكررة", "اليوم 3: إعداد مسودة شاشة MVP", "اليوم 4: بناء نموذج/روبوت/صفحة", "اليوم 5: اختبار مع المستخدمين", "اليوم 6: تعديل", "اليوم 7: إكمال مواد العرض"],
      fourWeekPlan: ["الأسبوع 1: التحقق من المشكلة", "الأسبوع 2: بناء MVP", "الأسبوع 3: اختبار المستخدمين", "الأسبوع 4: العرض وطلب الدعم"],
      interviewQuestions: ["متى تكون اللحظة الأكثر إزعاجًا؟", "كيف تحلها الآن؟", "ما الذي سيتحسن إذا تم حلها؟", "هل تستحق توفير المال أو الوقت؟", "ما أول وظيفة تحتاجها؟"],
      teamRoles: ["تخطيط", "مقابلة العملاء", "محتوى/تصميم", "بناء ويب/AI"], revenueModel: ["شراكة مع جامعة/مؤسسة", "ميزة مدفوعة", "تشغيل بالوكالة"], ipDirection: ["اسم الخدمة مرشح كعلامة تجارية", "إدارة المحتوى بحقوق النشر", "مسار معالجة AI مرشح للمراجعة كبراءة"], risks: ["تقليل جمع البيانات الشخصية", "التحقق من المصادر الرسمية", "موافقة الطالب مطلوبة قبل إيداع حقوق الملكية الفكرية"], recommend: "يمكن إجراء مقابلات واختبار MVP بسرعة داخل الحرم، ومن السهل ربطه بإرشاد مكتب ريادة الأعمال.", whyRecommended: "الأسرع للتحقق داخل الحرم الجامعي.", mentoringQuestions: ["من هم أول 5 عملاء يجب مقابلتهم؟", "ما الشاشة التي يمكن عرضها خلال 7 أيام؟", "هل توجد مخاطر بيانات شخصية أو قانونية؟"]
    }
  }
};

function t(key) { return ui[currentLang]?.[key] ?? ui.en[key] ?? ui.ko[key] ?? key; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c])); }
function fillSelect(id, options) { const el = document.getElementById(id); if (!el) return; const previous = el.value; el.innerHTML = Object.entries(options || {}).map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join(""); if (previous && options?.[previous]) el.value = previous; }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("bridgeLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "ja" ? "ja" : lang;
  document.documentElement.dir = languageMeta[lang]?.dir || "ltr";
  document.body.classList.toggle("rtl", document.documentElement.dir === "rtl");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  fillSelect("category", t("categoryOptions"));
  fillSelect("strength", t("strengthOptions"));
  fillSelect("mvpTool", t("mvpOptions"));
  fillSelect("supportNeed", t("supportOptions"));
  renderCriteria();
  if (!lastResult) renderEmpty();
}

function renderCriteria() {
  const el = document.getElementById("criteriaGrid");
  if (!el) return;
  el.innerHTML = (t("criteria") || []).map((criterion, index) => `<article><b>${String(index + 1).padStart(2, "0")} ${escapeHtml(criterion)}</b><p>${escapeHtml(index < 4 ? t("criteriaDescA") : t("criteriaDescB"))}</p></article>`).join("");
}
function renderEmpty() { const box = document.getElementById("resultBox"); if (box) box.innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("emptyTitle"))}</strong><p>${escapeHtml(t("emptyText"))}</p></div>`; }
function makeApplicationId() { const d = new Date(); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, "0"); const day = String(d.getDate()).padStart(2, "0"); return `BUFS-${y}${m}${day}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`; }
function getFormData() {
  return {
    teamName: document.getElementById("teamName").value,
    leaderName: document.getElementById("leaderName").value,
    department: document.getElementById("department").value,
    email: document.getElementById("email").value,
    category: document.getElementById("category").value,
    categoryLabel: t("categoryOptions")[document.getElementById("category").value],
    problem: document.getElementById("problem").value,
    targetUser: document.getElementById("targetUser").value,
    currentLimit: document.getElementById("currentLimit").value,
    roughIdea: document.getElementById("roughIdea").value,
    strength: document.getElementById("strength").value,
    strengthLabel: t("strengthOptions")[document.getElementById("strength").value],
    mvpTool: document.getElementById("mvpTool").value,
    mvpToolLabel: t("mvpOptions")[document.getElementById("mvpTool").value],
    supportNeed: document.getElementById("supportNeed").value,
    supportNeedLabel: t("supportOptions")[document.getElementById("supportNeed").value],
    language: languageMeta[currentLang].prompt,
    languageCode: currentLang,
    createdAt: new Date().toISOString(),
    applicationId: makeApplicationId()
  };
}
async function askAi(data) { const res = await fetch("/.netlify/functions/generate-ideas", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const out = await res.json(); if (!res.ok || out.error) throw new Error(out.error || "AI error"); return out; }

function fallback(data) {
  const f = t("fallback");
  const categoryLabel = data.categoryLabel || t("categoryOptions")[data.category] || "";
  const base = data.problem || f.problem;
  return {
    applicationId: data.applicationId,
    problemSummary: base,
    recommendedRank: 1,
    recommendReason: f.recommend,
    mentoringQuestions: f.mentoringQuestions,
    nextSupportTrack: [t("supportOptions").mentoring, t("supportOptions").funding, t("supportOptions").ip, t("supportOptions").space],
    ideas: f.names.map((name, index) => ({
      rank: index + 1,
      ideaName: index === 0 ? `${categoryLabel} Bridge AI` : name,
      oneLine: f.oneLine,
      targetUser: data.targetUser || f.target,
      solution: `${data.strengthLabel || ""} · ${data.mvpToolLabel || ""}: ${f.solution}`,
      score: 88 - index * 5,
      difficulty: f.difficulty[index] || f.difficulty[0],
      mvpType: data.mvpToolLabel || t("mvp"),
      mvpPlan: f.mvpPlan,
      fourWeekPlan: f.fourWeekPlan,
      interviewQuestions: f.interviewQuestions,
      teamRoles: f.teamRoles,
      revenueModel: f.revenueModel,
      ipDirection: f.ipDirection,
      risks: f.risks,
      whyRecommended: index === 0 ? f.whyRecommended : f.recommend
    }))
  };
}

function renderResult(result, isFallback = false) {
  lastResult = result;
  selectedIdea = result.ideas?.[0] || null;
  const ideas = (result.ideas || []).map(idea => renderIdea(idea, result.recommendedRank)).join("");
  const html = `
    <div class="print-header"><h1>BUFS Startup Bridge AI v2</h1></div>
    ${isFallback ? `<div class="fallback-note">${escapeHtml(t("fallbackNote"))}</div>` : `<div class="ai-badge">${escapeHtml(t("aiNote"))}</div>`}
    <div class="summary-card">
      <p><strong>${escapeHtml(t("regNo"))}:</strong> ${escapeHtml(result.applicationId || lastForm?.applicationId || "")}</p>
      <p><strong>${escapeHtml(t("problemShort"))}:</strong> ${escapeHtml(result.problemSummary || "")}</p>
      <p><strong>${escapeHtml(t("recommended"))}:</strong> #${escapeHtml(result.recommendedRank || 1)} · ${escapeHtml(result.recommendReason || "")}</p>
    </div>
    ${ideas}
    <div id="selectedDetail">${selectedIdea ? renderDetail(selectedIdea) : ""}</div>
    <div class="submission-tools">
      <button class="btn soft" onclick="submitEmail()">${escapeHtml(t("mailBtn"))}</button>
      <button class="btn ghost" onclick="createIdeaLink()">${escapeHtml(t("linkBtn"))}</button>
      <button class="btn ghost" onclick="copyResult()">${escapeHtml(t("copyBtn"))}</button>
    </div>`;
  document.getElementById("resultBox").innerHTML = html;
}
function renderIdea(idea, recommendedRank) {
  const risk = (idea.risks || []).slice(0, 1).join(" ");
  const isRecommended = idea.rank === recommendedRank;
  return `<article class="idea-card ${isRecommended ? "recommended" : ""}">
    <div class="idea-head"><div><h4>${idea.rank}. ${escapeHtml(idea.ideaName)}</h4><p>${escapeHtml(idea.oneLine)}</p></div><div class="score"><small>${escapeHtml(t("score"))}</small>${escapeHtml(idea.score)}</div></div>
    <div class="chips"><span class="chip ${isRecommended ? "yellow" : ""}">${escapeHtml(isRecommended ? t("recommended") : t("option"))}</span><span class="chip green">${escapeHtml(t("difficulty"))}: ${escapeHtml(idea.difficulty)}</span><span class="chip">${escapeHtml(t("mvp"))}: ${escapeHtml(idea.mvpType)}</span></div>
    <p><strong>${escapeHtml(t("revenue"))}:</strong> ${escapeHtml((idea.revenueModel || []).slice(0, 2).join(", "))}</p>
    <p><strong>${escapeHtml(t("risk"))}:</strong> ${escapeHtml(risk)}</p>
    <div class="idea-actions"><button class="mini-btn primary" onclick="selectIdea(${idea.rank})">${escapeHtml(t("selectIdea"))}</button></div>
  </article>`;
}
function renderDetail(idea) {
  return `<div class="detail-card"><h3>${escapeHtml(t("selectedTitle"))}: ${escapeHtml(idea.ideaName)}</h3><p>${escapeHtml(idea.solution || "")}</p><div class="detail-grid">
    <div class="detail-block"><h4>${escapeHtml(t("sevenDayMvp"))}</h4><ul>${(idea.mvpPlan || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    <div class="detail-block"><h4>${escapeHtml(t("fourWeekPlan"))}</h4><ul>${(idea.fourWeekPlan || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    <div class="detail-block"><h4>${escapeHtml(t("interview"))}</h4><ul>${(idea.interviewQuestions || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    <div class="detail-block"><h4>${escapeHtml(t("ip"))}</h4><ul>${(idea.ipDirection || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
  </div></div>`;
}
window.selectIdea = function(rank) { selectedIdea = (lastResult.ideas || []).find(item => item.rank === rank) || selectedIdea; document.getElementById("selectedDetail").innerHTML = renderDetail(selectedIdea); document.getElementById("selectedDetail").scrollIntoView({ behavior: "smooth", block: "start" }); };
function resultText() {
  const box = document.getElementById("resultBox");
  if (!box) return "";
  const clone = box.cloneNode(true);
  clone.querySelectorAll(".submission-tools,.print-header,button").forEach(el => el.remove());
  return clone.innerText.trim();
}
window.copyResult = async function() { try { await navigator.clipboard.writeText(resultText()); alert(t("copied")); } catch { alert(t("copyFail")); } };
window.submitEmail = function() {
  if (!lastResult) { alert(t("mailNeedResult")); return; }
  const data = lastForm || {};
  const subject = encodeURIComponent(`${t("mailSubject")} - ${data.teamName || ""}`);
  const body = encodeURIComponent(`${t("applicationEmailGreeting")}\n${t("applicationEmailIntro")}\n\n${t("teamShort")}: ${data.teamName || ""}\n${t("leaderLabel")}: ${data.leaderName || ""}\n${t("departmentLabel")}: ${data.department || ""}\n${t("emailLabel")}: ${data.email || ""}\n${t("regNo")}: ${(lastResult && lastResult.applicationId) || data.applicationId || ""}\n${t("selectedIdeaLabel")}: ${(selectedIdea && selectedIdea.ideaName) || ""}\n\n--- ${t("aiDiagnosis")} ---\n${resultText()}`);
  location.href = `mailto:${t("mailTo")}?subject=${subject}&body=${body}`;
};
function encodeData(obj) { return btoa(unescape(encodeURIComponent(JSON.stringify(obj)))); }
function decodeData(str) { return JSON.parse(decodeURIComponent(escape(atob(str)))); }
window.createIdeaLink = function() { if (!lastResult) return; const compact = { form: lastForm, result: lastResult, selected: selectedIdea, lang: currentLang }; const url = `${location.origin}${location.pathname}#portfolio=${encodeData(compact)}`; navigator.clipboard.writeText(url); alert(`${t("linkMade")}\n${url}`); };
function renderPortfolio(payload) {
  document.body.classList.add("portfolio-only");
  currentLang = payload.lang || currentLang;
  const f = payload.form || {}, r = payload.result || {}, idea = payload.selected || r.ideas?.[0] || {};
  applyLanguage(currentLang);
  document.querySelector("main").innerHTML = `<section class="portfolio-view"><div class="portfolio-card"><p class="section-label">${escapeHtml(t("portfolioTitle"))}</p><h1>${escapeHtml(idea.ideaName || "Idea")}</h1><p><strong>${escapeHtml(t("regNo"))}:</strong> ${escapeHtml(r.applicationId || f.applicationId || "")}</p><p><strong>${escapeHtml(t("teamShort"))}:</strong> ${escapeHtml(f.teamName || "")} / ${escapeHtml(f.leaderName || "")}</p><p><strong>${escapeHtml(t("categoryShort"))}:</strong> ${escapeHtml(f.categoryLabel || "")}</p><p><strong>${escapeHtml(t("problemShort"))}:</strong> ${escapeHtml(r.problemSummary || f.problem || "")}</p><p><strong>${escapeHtml(t("solutionShort"))}:</strong> ${escapeHtml(idea.solution || "")}</p><p><strong>${escapeHtml(t("score"))}:</strong> ${escapeHtml(idea.score || "")}</p>${renderDetail(idea)}<p><a class="btn primary" href="${location.pathname}">${escapeHtml(t("backHome"))}</a></p></div></section>`;
}

document.getElementById("ideaForm").addEventListener("submit", async event => {
  event.preventDefault();
  const data = getFormData();
  lastForm = data;
  document.getElementById("resultBox").innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("loadingTitle"))}</strong><p>${escapeHtml(t("loadingText"))}</p></div>`;
  try { const ai = await askAi(data); ai.applicationId = ai.applicationId || data.applicationId; renderResult(ai, false); } catch (error) { renderResult(fallback(data), true); }
});
document.getElementById("mailSubmitBtn").addEventListener("click", () => submitEmail());
document.getElementById("resetBtn").addEventListener("click", () => { document.getElementById("ideaForm").reset(); lastResult = null; lastForm = null; selectedIdea = null; renderEmpty(); });
document.addEventListener("click", event => { const button = event.target.closest(".lang-btn"); if (button) applyLanguage(button.dataset.lang); });

if (location.hash.startsWith("#portfolio=")) {
  try { renderPortfolio(decodeData(location.hash.replace("#portfolio=", ""))); } catch (error) { applyLanguage(currentLang); }
} else {
  applyLanguage(currentLang);
}
