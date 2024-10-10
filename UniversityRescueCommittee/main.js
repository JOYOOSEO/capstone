/*
    저장될 쿠키
*/
let checkCookies;
/*
    언어
*/
let ifSelectLanguage = false;
/*
    학생 수치
*/
let student = 0; // 현재 보유 학생
let addClickStudent = 1e4; // 클릭당 추가 학생
let addPerSecondStudent = 0; // 초당 추가 학생
/*
    팝업
*/
let arrAppearPopupBool = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false]
]

// Tooltip
const arrTooltipTagColor = [ // 고정
    [],
    ['#ADB5BD,#F8F9FA', 'rgb(82,28,20),rgb(241,183,139)', 'rgb(214,138,46),rgb(242,225,193)', 'rgb(255,61,0),rgb(255,214,0)', 'rgb(102,7,8),rgb(229,56,59)', 'rgb(9,132,0),rgb(118,82,35)', 'rgb(255,255,0),rgb(225,98,110)', 'rgb(0,0,0),rgb(225,255,255)', 'rgb(0,0,0),rgb(225,255,255)', 'rgb(0,0,0),rgb(225,255,255)']
]
/*
    통계 메뉴
*/
let statsTotalStudent = 0;
let statsStudent = 0;
let statsTotalAddPerSecondStudent = 0;
let statsAddPerSecondStudent = 0;
let statsTotalAddClickStudent = 0;
let statsAddClickStudent = 0;
let statsTotalClickCount = 0;
let statsClickCount = 0;
let statsTotalProductCount = 0;
let statsProductCount = 0;
let statsReturningCount = 0;
/*
    회귀 메뉴
*/
let returningCurrentLevel = 0; // 현재 레벨
let returningIncreaseLevel = 0; // 증가된 레벨
let returningExp = 0; // 현재 경험치
let returningExpMax = ((1 ** 3) / 2) * 1e12; // 다음 레벨업하기 위한 필요 경험치
let returningProductionMultiple = 1; // 회귀 입학 효율 배수
/*
    업그레이드
*/
let arrUpgradeId = []; // 남아있는 숫자가 강화 메뉴에 등장, 구매하면 해당 강화의 숫자는 제거됨
let arrUpgradeEnable = [ // 강화가 재반복 등장하는 것을 막기 위한 배열
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false]
];
let arrUpgradePrice = [ // 강화 가격 | 고정
    [50*10, 50*100, 50*5000, 50*25e4, 50*2500e4, 50*25e8, 50*1.25e12, 50*625e12, 50*62.5e16, 50*6.25e20],
    [160*10, 160*100, 160*5000, 160*25e4, 160*2500e4, 160*25e8, 160*1.25e12, 160*625e12, 160*62.5e16, 160*6.25e20],
    [2700*10, 2700*100, 2700*5000, 2700*25e4, 2700*2500e4, 2700*25e8, 2700*1.25e12, 2700*625e12, 2700*62.5e16, 2700*6.25e200],
    [3.9e4*10, 3.9e4*100, 3.9e4*5000, 3.9e4*25e4, 3.9e4*2500e4, 3.9e4*25e8, 3.9e4*1.25e12, 3.9e4*625e12, 3.9e4*62.5e16, 3.9e4*6.25e20],
    [52e4*10, 52e4*100, 52e4*5000, 52e4*25e4, 52e4*2500e4, 52e4*25e8, 52e4*1.25e12, 52e4*625e12, 52e4*62.5e16, 52e4*6.25e20],
    [670e4*10, 670e4*100, 670e4*5000, 670e4*25e4, 670e4*2500e4, 670e4*25e8, 670e4*1.25e12, 670e4*625e12, 670e4*62.5e16, 670e4*6.25e20],
    [8500e4*10, 8500e4*100, 8500e4*5000, 8500e4*25e4, 8500e4*2500e4, 8500e4*25e8, 8500e4*1.25e12, 8500e4*625e12, 8500e4*62.5e16, 8500e4*6.25e20],
    [10.8e8*10, 10.8e8*100, 10.8e8*5000, 10.8e8*25e4, 10.8e8*2500e4, 10.8e8*25e8, 10.8e8*1.25e12, 10.8e8*625e12, 10.8e8*62.5e16, 10.8e8*6.25e20],
    [229e8*10, 229e8*100, 229e8*5000, 229e8*25e4, 229e8*2500e4, 229e8*25e8, 229e8*1.25e12, 229e8*625e12, 229e8*62.5e16, 229e8*6.25e20],
    [3630e8*10, 3630e8*100, 3630e8*5000, 3630e8*25e4, 3630e8*2500e4, 3630e8*25e8, 3630e8*1.25e12, 3630e8*625e12, 3630e8*62.5e16, 3630e8*6.25e20],
    [5.18e12*10, 5.18e12*100, 5.18e12*5000, 5.18e12*25e4, 5.18e12*2500e4, 5.18e12*25e8, 5.18e12*1.25e12, 5.18e12*625e12, 5.18e12*62.5e16, 5.18e12*6.25e20],
    [70.7e12*10, 70.7e12*100, 70.7e12*5000, 70.7e12*25e4, 70.7e12*2500e4, 70.7e12*25e8, 70.7e12*1.25e12, 70.7e12*625e12, 70.7e12*62.5e16, 70.7e12*6.25e20],
    [951e12*10, 951e12*100, 951e12*5000, 951e12*25e4, 951e12*2500e4, 951e12*25e8, 951e12*1.25e12, 951e12*625e12, 951e12*62.5e16, 951e12*6.25e20],
    [1.29e16*10, 1.29e16*100, 1.29e16*5000, 1.29e16*25e4, 1.29e16*2500e4, 1.29e16*25e8, 1.29e16*1.25e12, 1.29e16*625e12, 1.29e16*62.5e16, 1.29e16*6.25e20],
    [26.7e16*10, 26.7e16*100, 26.7e16*5000, 26.7e16*25e4, 26.7e16*2500e4, 26.7e16*25e8, 26.7e16*1.25e12, 26.7e16*625e12, 26.7e16*62.5e16, 26.7e16*6.25e20],
    [428e16*10, 428e16*100, 428e16*5000, 428e16*25e4, 428e16*2500e4, 428e16*25e8, 428e16*1.25e12, 428e16*625e12, 428e16*62.5e16, 428e16*6.25e20],
    []
];
let arrProductUpgradePurchaseBool = [ // 구매가 완료된 강화 ID 번호
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
/*
    입학 효율
*/
let productionMultiple = 1; // 입학 효율 배수
/*
    증축
*/
const productLength = 16; // 증축 개수 | 고정

let arrProductAppear = [true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false];
let arrProductUnlock = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let arrProductGetCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 보유한 증축 개수

let arrProductPrice = [ // 증축 가격 | 고정
    50, // 50
    160, // 160
    2700, // 2700
    3.9e4, // 3.9만
    52e4, // 52만
    670e4, // 670만
    8500e4, // 8500만
    10.8e8, // 10.8억
    229e8, // 229 억
    3630e8, // 3630 억
    5.18e12, // 5.18 조
    70.7e12, // 70.7 조
    951e12, // 951 조
    1.29e16, // 1.29 경
    26.7e16, // 26.7 경
    428e16 // 428 경
];

let arrProductAddDefaultValue = [ // 증축 초당 증가량 | 고정
    1, // 1
    10, // 10
    55, // 55
    300, // 300
    2000, // 2000
    1 * 1e4, // 1만
    5.5 * 1e4, // 5.5만
    30 * 1e4, // 30만
    200 * 1e4, // 200만
    1500 * 1e4, // 1500만
    8000 * 1e4, // 8000만
    5.5 * 1e8, // 5.5억
    35 * 1e8, // 35억
    300 * 1e8, // 300억
    2000 * 1e8, // 2000억
    1.5 * 1e12 // 1.5조
];
let arrProductAddBonusValue = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // 증축 초당 증가량 배율 보너스
let arrProductAddTotalValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 증축 최종 초당 증가량 | 공식: 기본 * 보너스 * 효율 배수 * 회귀 효율 배수

let arrProductStatsProductionTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 증축 정보: 지금까지 입학한 학생 수
let productAddPerSecondTotal = 0; // 모든 증축의 초당 증가량을 합한 값

let arrProductUpgradeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 증축 업그레이드 완료된 개수
let arrProductUpgradeCountMax = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // 증축 업그레이드 최대 개수

let arrProductBackgroundEnable = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] // 고정
let arrProductRowIconCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 오프라인 생산
let lastSaveTime;
let offlineTimeDiff;
let offlineEfficiency = 0.05;
let maxOfflineTime = 3600 * 24;
let offlineEarnings;
// 기억 왜곡
let arrMemoryId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 고정
let arrMemoryEnable = [false, false, false, false, false, false, false, false, false, false, false];
let arrMemoryPrice = [1, 5, 100, 500, 1000, 2500, 10000, 25000, 100000, 250000]; // 고정
// 도전 과제
let arrAchievementId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]
let arrAchievementEnable = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
];

// FormatNumber list | 고정
const arrFormatNumberKr = ['','만','억','조','경','해','자','양','구','간','정','재','극','항하사','아승기','나유타','불가사의','무량대수','무한']
let arrFormatStandardKr = [1,1e4,1e8,1e12,1e16,1e20,1e24,1e28,1e32,1e36,1e40,1e44,1e48,1e52,1e56,1e60,1e64,1e68,1e72]


/*
    언어
*/
const translations = {
    KO: {
        windowTitle: (value) => `${value} 명 - 대학 구조 위원회`,
        popupLanguageText_description: '',
        popupTitle: [
            [
                '최초의 입학생',
                '학교 시설 최초 증축',
                '교통 시설 최초 증축',
                '주거지 최초 증축',
                '은행 최초 증축',
                '공항 최초 증축',
                '기업 최초 증축',
                '정부 최초 증축',
                '세계 정부 최초 증축',
                '복제 실험실 최초 증축',
                '우주정거장 최초 증축',
                '차원 포털 최초 증축',
                '블랙홀 최초 증축',
                '타임머신 최초 증축',
                '평행 세계 최초 증축',
                '또 다른 나 최초 증축'
            ],
            [
                '대학 구조 위원회',
                '과거로 돌아왔습니다.',
                '끝'
            ],
            [
                '언어 선택',
                '이름을 바꾸시겠습니까?',
                '당신이 없는 동안...',
                '<b class="returning">돌아갈 시간</b>'
            ],
        ],
        popupDescription: [
            [
                '당신이 위원장 자리에 앉은 이후 드디어 최초의 입학생이 생겼습니다.<br><br>올해 입학생은 이 학생이 유일하지만, 표정을 보니 앞으로의 행보가 기대되는군요.',
                '빈약했던 학교에 다양한 시설을 설치했습니다.<br><br>더 많은 시설을 설치하기 위해 당신은 프렌차이즈와 계약할 계획을 세웁니다.',
                '교통 시설',
                '주거지',
                '은행',
                '공항',
                '기업',
                '현 정부는 우리 학교를 위해 많은 정책을 실시하고 많은 법을 논의할 것입니다.<br><br>참고로 현 대통령은 당신이 위원장 자리에 앉았을 때 최초로 입학했던 학생이였습니다.',
                '세계 정부',
                '복제 실험실',
                '우주정거장',
                '차원 포털',
                '블랙홀',
                '타임머신',
                '평행 세계',
                '또 다른 나'
            ],
            [
                '올해의 유일한 졸업생인 당신은 총장님의 부름에 한걸음 달려갑니다.<br><br>총장님은 당신을 보자 이렇게 말합니다.<br><br><b class="fsItalic fs90">\"학교가 곧 폐교 직전이네. 그래서 대학 구조 위원회를 만들었는데, 네가 위원장을 맡았으면 한다. 거절한다면 졸업장은 주지 않을걸세.\"</b><br><br><br>좋든 싫든 당신은 졸업장을 돌려받기 위한 위원회 활동을 시작합니다.',
                '갑자기 눈앞에는 위원장 자리를 권하는 총장님이 있습니다. 시계를 보니 날짜도 과거로 왔습니다.<br><br>지금까지의 기억이 생생한데 이 상황이 혼란스럽기만 합니다.<br><br>당신의 반응을 살피던 총장님은 조심스럽게 말을 꺼냈습니다.<br><br><b class="fsItalic fs90">\"그렇게 좋은 기분은 아니지? 익숙해질 거야.\"</b>',
                '끝'
            ],
            [
                '언어는 설정 메뉴에서 바꿀 수 있습니다.',
                '학교의 이름을 바꿀 수 있습니다!<br><br>학교의 이름을 바꾸는 것은 재미를 위한 것으로, 진행에 영향을 주지 않습니다.<br><br>가급적 부적절한 단어 사용은 삼가시길 바랍니다.',
                '당신이 없는동안 수많은 학생이 입학했습니다!<br><br><b class="fs200"><b id="showOfflineEarnings"></b> 명 입학</b><br><b class="fcDefault fs75">총 <b id="showOfflineTimeDiff" class="textShadow fcWhite fs110"></b> 초 동안 <b id="showOfflineEfficiency" class="textShadow fcWhite fs110"></b>%의 효율 / 최대 <b id="showMaxOfflineTime" class="textShadow fcWhite fs110"></b>시간</b>',
                '<b class="returning">돌아갈 시간</b>'
            ]
        ],
        popupButton_text: ['닫기', '바꾸기', '과거로 돌아가기'],
        universityMyName: '대림',
        universityNameSuffix: ' 대학교',
        students: (value) => `${value} 명`,
        perSecond: (value) => `초당: ${value} 명`,
        newsTitle: '학교 소식',
        newsContents: [
            [
                '이 학교가 있는지 조차 모르는 사람이 많습니다.', 
                '우리 학교가 입학생이 기피하는 학교로 선정되었습니다.', 
                '비어있는 강의실은 음산한 분위기를 내고 있습니다.', 
                '이 학교의 평가는 별점 1점입니다.', 
                '남아있는 학생마저 자퇴를 준비하고 있습니다.',
                '학교에 학생보다 교수가 더 많습니다.'
            ],
            [],
            []
        ],
        menuSettingText_title: '설정',
        menuSettingText_subtitleCommon: '기본',
        menuStatsText_title: '통계',
        menuStatsText_subtitleCommon: '기본',
        menuStatsText_subtitleDetail: '세부',
        menuStatsText_statsTotalStudent: (value) => `누적된 총 입학 학생 (전체): <b class="fcWhite">${value}</b>`,
        menuStatsText_statsStudent: (value1, value2) => `누적된 총 입학 학생 (이번 회귀): <b class="fcWhite">${value1} (${value2}%)</b>`,
        menuStatsText_showPerSecondStudent: (value) => `초당 입학 학생: <b class="fcWhite">${value}</b>`,
        menuStatsText_statsTotalPerSecondStudent: (value) => `누적된 초당 입학 학생 (전체): <b class="fcWhite">${value}</b>`,
        menuStatsText_statsPerSecondStudent: (value1, value2) => `누적된 초당 입학 학생 (이번 회귀): <b class="fcWhite">${value1} (${value2}%)</b>`,
        menuStatsText_showClickStudent: (value) => `클릭당 입학 학생: <b class="fcWhite">${value}</b>`,
        menuStatsText_statsTotalClickStudent: (value) => `누적된 클릭당 입학 학생 (전체): <b class="fcWhite">${value}</b>`,
        menuStatsText_statsClickStudent: (value1, value2) => `누적된 클릭당 입학 학생 (이번 회귀): <b class="fcWhite">${value1} (${value2}%)</b>`,
        menuStatsText_statsTotalClickCount: (value) => `누적된 클릭 횟수 (전체): <b class="fcWhite">${value}</b>`,
        menuStatsText_statsClickCount: (value1, value2) => `누적된 클릭 횟수 (이번 회귀): <b class="fcWhite">${value1} (${value2}%)</b>`,
        menuStatsText_statsTotalProductCount: (value) => `누적된 증축 횟수 (전체): <b class="fcWhite">${value}</b>`,
        menuStatsText_statsProductCount: (value1, value2) => `누적된 증축 횟수 (이번 회귀): <b class="fcWhite">${value1} (${value2}%)</b>`,
        menuStatsText_statsReturningCount: (value1) => `누적된 회귀 횟수: <b class="fcWhite">${value1}</b>`,
        menuStatsText_subtitleUpgrade: '강화',
        menuStatsText_subtitleAchievement: '도전 과제',
        menuSubtitleProduct: '증축',
        menuInfoText_title: '정보',
        menuInfoText_subtitleIntroduce: '소개',
        menuInfoText_introduceText_1: '대학 구조 위원회는 대한민국 대학생이 <a href="https://store.steampowered.com/app/1454400/Cookie_Clicker/" target="_blank">쿠키 클리커</a>에 영감을 받아 개발한 게임입니다.',
        menuInfoText_introduceText_2: '<b>HTML, CSS, JavaScript</b>를 사용해 개발했습니다.',
        menuInfoText_subtitleCredit: '개발자',
        menuInfoText_subtitlePatchNote: '패치 노트',
        menuReturningText_title: '회귀',
        menuReturningText_panelLevel: (value) => `경험 등급 <b class="fcWhite">${value}</b>`,
        menuReturningText_timeDate: (value) => `위원회가 <b class="fcWhite">${value}</b> 일간 운영되었습니다`,
        menuReturningText_nowReturningText_1: '지금 회귀한다면',
        menuReturningText_nowReturningIncreaseLevel: (value1, value2) => `등급 +${value1}<b class="fcDefault fs75 fsItalic">(SpS +${value2}%)</b>`,
        menuReturningText_nowReturningText_2: '을(를) 얻습니다.',
        menuReturningText_emptyExp: (value) => `다음 등급까지 <b class="fcWhite">${value}</b> 명 입학 필요`,
        menuReturningText_subtitleLevel: '회귀 레벨',
        menuReturningText_subtitleAbility: '기억 왜곡',
        arrProductName: ['학생','학교 시설','교통 시설','주거지','은행','공항','기업','정부','세계 정부','복제 실험실','우주정거장','차원 포털','블랙홀','타임머신','평행 세계','또 다른 나'],
        tooltipTagName: [
            ['증축', '강화', '기억 왜곡', '도전 과제'],
            ['금속', '초콜릿', '호박꿀', '오렌지 즙', '경고등', '짙은 나무', '불꽃', '다이아몬드', '4차원', '공허'],
            [],
            ['비활성화', '활성화'],
            ['잠김', '해금']
        ],
        productTooltipDescription: [
            '학생 한 명 한 명이 소중한 법입니다.',
            '학업, 오락, 휴식 시설 같은 원하는 모든 시설을 갖춥니다. 학생을 위해서 못해줄 건 없는 법입니다.',
            '세계 어디든 우리 학교로 쉽게 올 수 있는 다양한 교통 수단을 만듭니다. 재학생은 무료로 이용할 수 있습니다.',
            '반지하, 주택, 아파트 등 거주가 가능한 시설을 학교 주변에 짓습니다. 우리 학교 학생이라면 재학하는 동안 한 채씩 무료로 거주할 수 있습니다.',
            '우리 학교 재학생이라면 증명 없이 필요한 비용을 반드시 대출할 수 있는 은행을 설립합니다. 이자는 평생 없습니다.',
            '각 국 나라에서 학교로 1시간마다 운행하는 공항을 세웁니다. 물론 재학생은 무료로 이용할 수 있습니다.',
            '기업은 자기 회사로 데려올 재학생을 항상 눈여겨 보고 있습니다.',
            '정부는 우리 학생과 학교를 위한 지원과 정책을 실시합니다.',
            '세계는 앞으로 우리 학교만을 위해 움직입니다.',
            '자원을 받은 학생을 복제해 더 많은 학생을 만듭니다. 학구열 앞에서는 윤리와 혼란 따위는 중요한 것이 아닙니다.',
            '우리 학교에서 가까운 행성까지 우주선을 통해 이동합니다. 재학생이라면 탑승료와 동면 서비스는 무료입니다.',
            '천문학과가 아니라면 마주할 수 없는 거리를 순식간에 이동할 수 있는 포털을 세웁니다. 학생이라고 주장하는 존재에게 우리 학교를 설명할 수 있겠네요.',
            '블랙홀 내부에서 살아있는 학생을 우리 학교로 구조합니다. 때로는 위험을 감수할줄도 알아야 합니다.',
            '과거 혹은 미래로 가 더 많은 학생을 현재 시간대로 데려옵니다. 시대 차이 따위 극복 가능한 법이죠.',
            '평행 세계를 횡단하는 방법을 찾아 다른 세계 학생에게 우리 학교를 홍보합니다. 횡단 비용은 많이 들지만 같은 홍보물을 반복해 쓸 수 있어 경제적이죠.',
            '당신은 혼자가 아닙니다. 그리고 또 다른 당신도 혼자가 아니죠.'
        ],
        productTooltipGetCount: (value) => `${value} 보유`,
        productTooltipStats_1: (value) => `보유마다 <b class="fcWhite fs110">${value} 명</b> 입학`,
        productTooltipStats_2: (value) => `초당 총 <b class="fcWhite fs110">${value} 명</b> 입학`,
        productTooltipStats_3: (value) => `지금까지 <b class="fcWhite fs110">${value} 명</b> 입학`,
        productTooltipUpgradeDone: '강화 완료 목록',
        menuSubtitleUpgrade: '강화',
        upgradeMenuButtonExpand: '펼치기',
        upgradeMenuButtonFold: '접기',
        upgradeName: [
            ['학습의 경로', '10년제 대학교', '식사 지원', '인생 항해자', '지식 공유', '지혜의 서재', '원주율 끝까지 외우기 대회', '하루에 42시간 7분 공부', '고대의 마법서', '외계 학문 연구'],
            ['교내 상가', '탐구실', '토론의 방', '창의력 공방', '비상 대응소', '1천 제곱 킬로미터 운동장', '연금술 실험실', '지식의 사원', '현실 조작', '미지의 지하실'],
            ['교통비 무료', '다인승차량', '속도 규제 해제', '초고속 환승', '전용 초고속도로', '', '', '', '', ''],
            ['보금자리', '인프라 확대', '영혼의 안식처', '삶의 거처', '관리비 무료', '1인 1채', '뿌리의 공간', '쾌적한 공간', '', ''],
            ['자산의 금고', '환율 고정', '이익의 전당', '신용카드', '인터넷 뱅킹 지원', '수업료 전액 대출', '부의 창고', '자본의 정원', '고리대금', '금전의 흐름'],
            ['비상 연결지', '하늘 도로', '공중 교차로', '관제탑', '24시간 운행', '공중 급유', '지평선 거점', '응급상황 대비', '초고속 비행', '무료 면세점 확대'],
            ['', '', '', '당일 답신', '졸업생 우대 입사', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['복제인간', '생명 재구성', '정체성 조작', '인체 재구성 프로젝트', '복사기', '이중 존재', '존재 변형', '새로운 쌍둥이', '유전자 조작', '복제 재활용 처리소'],
            ['무중력 기지', '장기 체류', '우주선 환승', '냉동 서비스', '우주 관측소', '행성 전초기지', '인공위성 정박', '은하 연구소', '은하계 횡단', '궤도 관문'],
            ['시공간 이동', '여행 서비스', '빠른 등하교', '포털 사이트', '연결 통로', '차원 간섭체', '포털건', '빛보다 빠르게', '전술 차원 도약', '포털 속 미지의 존재'], // 포털 사이트: 동음의어를 활용한 말장난 ||| 포털건: 게임 포탈 시리즈에 등장하는 장비 ||| 전술 차원 도약: 스타크래프트2 속 전투순양함 기술 패러디
            ['어둠의 심연', '무한의 늪', '중력의 소용돌이', '왜곡의 영역', '빛 포식자', '가르강튀아', '사건의 지평선', '우주의 구멍', 'M87*', '화이트 홀'], // 가르강튀아: 영화 인터스텔라에 등장하는 블랙홀 ||| M87*: 인류 최초로 촬영된 블랙홀
            ['과거와 미래', '시간 여행자', '시간 가속', '잃어버린 시계', '시간의 오버플로우', '시공간 여행선', '드로리언 DMC-12', '시간의 섬광', '타임 패러독스', '타디스'], // 시간 여행자: 소설 타임머신 패러디 ||| 시간의 오버플로우: 시간을 저장한 변수가 오버플로우가 나면 시간이 과거로 출력된다는 프로그래밍 현상 ||| 드로리언 DMC-12: 백 투더 퓨처 패러디 ||| 타디스: 닥터후 패러디
            ['4차원', '다차원 우주', '현실과 비현실의 다리', '평행 세계 탐험소', '복잡한 연결망', '끝없는 개척', '양자역학', '무한 차원', '데우스 엑스 마키나', '서울로 가는 길'], // 데우스 엑스 마키나: 창작물에 개연성을 억지로 맞추기 위해 평행 세계 소재를 사용한데서 비롯 ||| 서울로 가는 길: 쿠키클리커 패러디, 선택한 언어 설정에 맞는 국가의 수도로 이름 변경
            ['대체 자아', '그림자 존재', '정신질환 의심', '거울에 비친 나', '대면 세계', '철학적 주제', 'DNA 대조 결과 일치', '괴테의 일기장', '기억 동화', '도플갱어'] // 괴테의 일기장: 괴테는 일기장에 도플갱어를 만났다는 내용이 존재
        
        ],
        upgradeDescription: [
            ['학생의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['학교 시설의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['교통 시설의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['주거 시설의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['은행의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['공항의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['기업의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['정부의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['세계 정부의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['복제 실험실의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['우주정거장의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['차원 포털의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['블랙홀의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['타임머신의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['평행 세계의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['또 다른 나의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가'],
            ['클릭의 입학 효율 <b class="fcWhite fs110">두 배</b> 증가']
        ],
        memoryPrice: (value) => `기억 등급 ${value}`,
        memoryName: ['기억 축적', '경험적 사고', '무의식', '초장기 기억력', '해마 2개', '머릿속 저장소', '절대 기억', '악마랑 기억력 시험보기', '천사랑 기억력 시험보기', '10', '11', '', '', '', '', '', '', '', '', ''],
        memoryDescription: [
            '기억 등급 1당 영구적으로 <b class="fcWhite fs110">SpS +1%</b>',
            '입학 효율 배수 <b class="fcWhite fs110">+5%</b>',
            '클릭 효율 <b class="fcWhite fs110">두 배</b> 증가',
            '비접속 효율 <b class="fcWhite fs110">+10%로 상향</b>',
            '금속 등급의 강화 비용 <b class="fcWhite fs110">-25%</b>',
            '비접속 효율 <b class="fcWhite fs110">+20%로 상향</b>',
            '학생의 효율 <b class="fcWhite fs110">+50%</b>',
            '비접속 최대 시간을 <b class="fcWhite fs110">36시간으로 증가</b>',
            '입학 효율 배수 <b class="fcWhite fs110">+5%</b>',
            '학교 시설 효율 <b class="fcWhite fs110">+50%</b>',
            '',
            '111',
            '112',
            '113',
            '114',
            '115',
            '',
            '',
            '',
            ''
        ],
        memoryFlavorText: [
            '123',
            '11',
            '1010',
            '01010',
            '101010',
            '10101',
            '10101',
            '010',
            '1010',
            '10',
            '10101',
            '010',
            '101',
            '0101',
            '0101',
            '01010',
            '101',
            '010101',
            '0101',
            '010101'
        ],
        achievementName: [],
        achievementDescription: []
    },
    EN: {
        windowTitle: (value) => `${value} people - Rescue Committee`,
        popupTitle: [
            [
                '최초의 입학생',
                '학교 시설 최초 증축',
                '교통 시설 최초 증축',
                '주거지 최초 증축',
                '은행 최초 증축',
                '공항 최초 증축',
                '기업 최초 증축',
                '정부 최초 증축',
                '세계 정부 최초 증축',
                '복제 실험실 최초 증축',
                '우주정거장 최초 증축',
                '차원 포털 최초 증축',
                '블랙홀 최초 증축',
                '타임머신 최초 증축',
                '평행 세계 최초 증축',
                '또 다른 나 최초 증축'
            ],
            [
                '대학 구조 위원회',
                '과거로 돌아왔습니다.',
                '끝'
            ],
            [
                'Select Language',
                '이름을 바꾸시겠습니까?',
                '당신이 없는 동안...',
                '<b class="returning">돌아갈 시간</b>'
            ],
        ],
        popupDescription: [
            [
                '당신이 위원장 자리에 앉은 이후 드디어 최초의 입학생이 생겼습니다.<br><br>올해 입학생은 이 학생이 유일하지만, 표정을 보니 앞으로의 행보가 기대되는군요.',
                '빈약했던 학교에 다양한 시설을 설치했습니다.<br><br>더 많은 시설을 설치하기 위해 당신은 프렌차이즈와 계약할 계획을 세웁니다.',
                '교통 시설',
                '주거지',
                '은행',
                '공항',
                '기업',
                '현 정부는 우리 학교를 위해 많은 정책을 실시하고 많은 법을 논의할 것입니다.<br><br>참고로 현 대통령은 당신이 위원장 자리에 앉았을 때 최초로 입학했던 학생이였습니다.',
                '세계 정부',
                '복제 실험실',
                '우주정거장',
                '차원 포털',
                '블랙홀',
                '타임머신',
                '평행 세계',
                '또 다른 나'
            ],
            [
                '올해의 유일한 졸업생인 당신은 총장님의 부름에 한걸음 달려갑니다.<br><br>총장님은 당신을 보자 이렇게 말합니다.<br><br><b class="fsItalic fs90">\"학교가 곧 폐교 직전이네. 그래서 대학 구조 위원회를 만들었는데, 네가 위원장을 맡았으면 한다. 거절한다면 졸업장은 주지 않을걸세.\"</b><br><br><br>좋든 싫든 당신은 졸업장을 돌려받기 위한 위원회 활동을 시작합니다.',
                '갑자기 눈앞에는 위원장 자리를 권하는 총장님이 있습니다. 시계를 보니 날짜도 과거로 왔습니다.<br><br>지금까지의 기억이 생생한데 이 상황이 혼란스럽기만 합니다.<br><br>당신의 반응을 살피던 총장님은 조심스럽게 말을 꺼냈습니다.<br><br><b class="fsItalic fs90">\"그렇게 좋은 기분은 아니지? 익숙해질 거야.\"</b>',
                '끝'
            ],
            [
                'The language can be changed in settings.',
                '학교의 이름을 바꿀 수 있습니다!<br><br>학교의 이름을 바꾸는 것은 재미를 위한 것으로, 진행에 영향을 주지 않습니다.<br><br>가급적 부적절한 단어 사용은 삼가시길 바랍니다.',
                '당신이 없는동안 수많은 학생이 입학했습니다!<br><br><b class="fs200"><b id="showOfflineEarnings"></b> 명 입학</b><br><b class="fcDefault fs75">총 <b id="showOfflineTimeDiff" class="textShadow fcWhite fs110"></b> 초 동안 <b id="showOfflineEfficiency" class="textShadow fcWhite fs110"></b>%의 효율 / 최대 <b id="showMaxOfflineTime" class="textShadow fcWhite fs110"></b>시간</b>',
                '<b class="returning">돌아갈 시간</b>'
            ]
        ],
        popupCloseButton: 'Close',
        popupChangeButton: 'Change',
        universityMyName: 'Daelim',
        universityNameSuffix: ' University',
        students: (value) => `${value} people`,
        perSecond: (value) => `Per second: ${value} people`,
        menuSubtitleUpgrade: 'Upgrade',
        menuSubtitleProduct: 'Expansion',
        upgradeMenuButtonExpand: 'Expand',
        upgradeMenuButtonFold: 'Fold',
        arrProductName: ['Student','Student facilities','Transportation facilities','Residential facilities','Bank','Airport','Corporation','Government','World government','Cloning laboratory','Space station','Dimensional portal','Black hole','Time machine','Multiverse','Another me'],
        productTooltipDescription: [
            '학생 한 명 한 명이 소중한 법입니다.',
            '학업, 오락, 휴식 시설 같은 원하는 모든 시설을 갖춥니다. 학생을 위해서 못해줄 건 없는 법입니다.',
            '세계 어디든 우리 학교로 쉽게 올 수 있는 다양한 교통 수단을 만듭니다. 재학생은 무료로 이용할 수 있습니다.',
            '반지하, 주택, 아파트 등 거주가 가능한 시설을 학교 주변에 짓습니다. 우리 학교 학생이라면 재학하는 동안 한 채씩 무료로 거주할 수 있습니다.',
            '우리 학교 재학생이라면 증명 없이 필요한 비용을 반드시 대출할 수 있는 은행을 설립합니다. 이자는 평생 없습니다.',
            '각 국 나라에서 학교로 1시간마다 운행하는 공항을 세웁니다. 물론 재학생은 무료로 이용할 수 있습니다.',
            '기업은 자기 회사로 데려올 재학생을 항상 눈여겨 보고 있습니다.',
            '정부는 우리 학생과 학교를 위한 지원과 정책을 실시합니다.',
            '세계는 앞으로 우리 학교만을 위해 움직입니다.',
            '자원을 받은 학생을 복제해 더 많은 학생을 만듭니다. 학구열 앞에서는 윤리와 혼란 따위는 중요한 것이 아닙니다.',
            '우리 학교에서 가까운 행성까지 우주선을 통해 이동합니다. 재학생이라면 탑승료와 동면 서비스는 무료입니다.',
            '천문학과가 아니라면 마주할 수 없는 거리를 순식간에 이동할 수 있는 포털을 세웁니다. 학생이라고 주장하는 존재에게 우리 학교를 설명할 수 있겠네요.',
            '블랙홀 내부에서 살아있는 학생을 우리 학교로 구조합니다. 때로는 위험을 감수할줄도 알아야 합니다.',
            '과거 혹은 미래로 가 더 많은 학생을 현재 시간대로 데려옵니다. 시대 차이 따위 극복 가능한 법이죠.',
            '평행 세계를 횡단하는 방법을 찾아 다른 세계 학생에게 우리 학교를 홍보합니다. 횡단 비용은 많이 들지만 같은 홍보물을 반복해 쓸 수 있어 경제적이죠.',
            '당신은 혼자가 아닙니다. 그리고 또 다른 당신도 혼자가 아니죠.'
        ],
        productTooltipUpgradeDone: 'Upgrade complete list',
        productTooltipGetCount: (value) => `Have ${value} `,
        productTooltipStats_1: (value) => `<b>${value} people</b> per holding for school admission`,
        productTooltipStats_2: (value) => `<b>${value} people</b> students admitted as per second`,
        productTooltipStats_3: (value) => `<b>${value} people</b> admitted as students so far`

    }
}


// 언어
const languageSelector = document.getElementById('languageSelector');
let lang = 'KO';
changeLanguage();

// languageSelector.addEventListener('change', changeLanguage);
function changeLanguage() {

    document.getElementById('showNewsTitle').innerHTML = translations[lang].newsTitle;
    //document.getElementById('universityNameSuffix').innerHTML = popupInput.value + translations[lang].universityNameSuffix;
    document.getElementById('upgradeSubtitle').innerHTML = translations[lang].menuSubtitleUpgrade;
    document.getElementById('productSubtitle').innerHTML = translations[lang].menuSubtitleProduct;

    updateShowStudent();
    updateUpgradeMenuButton();
}
// 이름 바꾸기
document.getElementById('universityName').addEventListener('click', changeUniversityName);
function changeUniversityName() {
    appearPopup(2, 1);
}

// 학교 로고 클릭 이벤트
let universityLogo = document.getElementById('universityLogo');
universityLogo.addEventListener('click', (e) => {
    // 학생 수 더하기
    student += addClickStudent;
    // 통계
    statsTotalStudent += addClickStudent;
    statsStudent += addClickStudent;
    statsTotalAddClickStudent += addClickStudent;
    statsAddClickStudent += addClickStudent;
    statsClickCount++;
    statsTotalClickCount++;
    // 갱신
    console.log(student);
    updateShowStudent();

    void universityLogo.offsetWidth;
    universityLogo.classList.add('bounce');
    universityLogo.addEventListener('animationend', () => {
        universityLogo.classList.remove('bounce');
    })

    setTimeout(() => {
        console.log(e.pageX + ' / ' + e.pageY);
        const floatingText = document.createElement('div');
        floatingText.classList.add('floatingUp');
        floatingText.innerHTML = '+' + formatNumber(addClickStudent);

        floatingText.style.left = `${e.offsetX}px`;
        floatingText.style.top = `${e.offsetY}px`;
        universityLogo.appendChild(floatingText);

        floatingText.addEventListener('animationend', () => {
            floatingText.remove();
        });
    }, 1);
    
})
universityLogo.addEventListener('mousedown', () => {
    
});
/*
    팝업
*/
const popupArea = document.getElementById('popupArea');
const popupBackground = document.getElementById('popupBackground');
const popupBox = document.getElementById('popupBox');

const popupCloseButton = document.createElement('div');
popupCloseButton.id = 'popupCloseButton';

const popupTitle = document.createElement('div'); // 제목
popupTitle.id = 'popupBoxTitle';
popupTitle.className = 'title';
//const popupPicture = document.createElement('div'); // 사진
//popupPicture.id = 'popupBoxPicture';
//popupPicture.className = 'picture';
const popupInput = document.createElement('input'); // 입력창
popupInput.id = 'popupBoxInput';
popupInput.className = 'input';
popupInput.maxLength = '12';
popupInput.value = translations[lang].universityMyName;
const popupDescription = document.createElement('div'); // 설명
popupDescription.id = 'popupBoxDescription';
popupDescription.className = 'description';
const popupButton = document.createElement('div'); // 버튼
popupButton.id = 'popupBoxButton';
popupButton.className = 'button';

// 팝업 이벤트 생성
function popupAddEvent(type) {

    popupCloseButton.addEventListener('click', () => { removePopup(); });

    if(type == 'common') {
        popupButton.addEventListener('click',  () => { removePopup(); });
    }
    if(type == 'name') {
        popupInput.addEventListener('mouseenter', () => { popupInput.style.outline = '1px solid #b9b9b9'; });
        popupInput.addEventListener('mouseleave', () => { popupInput.style.outline = '1px solid #888888'; });
        popupInput.addEventListener('focus', () => { popupInput.style.outline = '2px solid #3D90F4'; });
        popupButton.addEventListener('click',  () => {
            if(popupInput.value <= 0) {
                popupInput.style.outline = '3px solid #FF0000';
            } else {
                document.getElementById('universityName').innerHTML = popupInput.value + translations[lang].universityNameSuffix;

                removePopup();
            }
        });
    }
    if(type == 'returning') {
        popupButton.addEventListener('click', () => {
            removePopup();
            returningAnimation();
        })
    }
}
function appearPopup(i, j) { // 팝업창 생성
    console.log('popup' + i + ' ' + j);
    // 초기화
    resetPopup();
    // 제목
    popupTitle.innerHTML = translations[lang].popupTitle[i][j];
    popupBox.appendChild(popupTitle);

    if(i == 0) {
        // 닫기 버튼
        popupBox.appendChild(popupCloseButton);
        // 설명
        popupDescription.innerHTML = translations[lang].popupDescription[i][j];
        popupBox.appendChild(popupDescription);
        // 버튼
        popupButton.innerHTML = translations[lang].popupButton_text[0];
        popupBox.appendChild(popupButton);
        // 이벤트 추가
        popupAddEvent('common');
    } else if(i == 1) {
        if(j == 0) { // 처음 시작 시
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations[lang].popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 1) { // 최초 회귀
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations[lang].popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 2) { // 엔딩
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations[lang].popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
    } else if(i == 2) {
        if(j == 0) { // 언어 변경
            popupSelectLanguage();
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
        }
        if(j == 1) { // 이름 바꾸기
            // 닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 입력창
            popupBox.appendChild(popupInput);
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations[lang].popupButton_text[1];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('name');
        }
        if(j == 2) { // 잠수
            // 닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations[lang].popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            popupDescription.querySelector('#showOfflineEarnings').innerHTML = `${formatNumber(offlineEarnings)}`;
            popupDescription.querySelector('#showOfflineTimeDiff').innerHTML = `${offlineTimeDiff}`;
            popupDescription.querySelector('#showOfflineEfficiency').innerHTML = `${Math.floor(offlineEfficiency * 100)}`;
            popupDescription.querySelector('#showMaxOfflineTime').innerHTML = `${Math.floor(maxOfflineTime / 3600)}`;
            // 버튼
            popupButton.innerHTML = translations[lang].popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 3) { // 회귀

        }
        if(j == 4) { // 회귀 후 팝업

        }
    }
}
function popupSelectLanguage() {
    const popupLanguageBundle = document.createElement('div'); // 제목
    popupLanguageBundle.id = 'popupLanguageBundle';
    popupBox.appendChild(popupLanguageBundle);

    // 언어
    const arrLanguage = ['KO', 'EN', 'JA', 'CS', 'CS'];
    for(let i = 0 ; i < arrLanguage.length ; i++) {
        const languageDiv = document.createElement('div');
        languageDiv.id = `popupLanguage${arrLanguage[i]}`;
        languageDiv.classList.add('language');
        languageDiv.style.background = `url('img/language/${arrLanguage[i]}.png')`;

        popupLanguageBundle.appendChild(languageDiv);
    }

    // const popupLanguageText = document.createElement('div');
    // popupLanguageText.id = 'popupLanguageText';
    // popupLanguageText.classList.add('text');
    // popupBox.appendChild(popupLanguageText);

    document.getElementById('popupLanguageKO').addEventListener('mouseover', () => { lang = 'KO'; changeLanguageText(); });
    document.getElementById('popupLanguageKO').addEventListener('click', () => { checkSelectLanguage(); });
    document.getElementById('popupLanguageEN').addEventListener('mouseover', () => { lang = 'EN'; changeLanguageText(); });
    document.getElementById('popupLanguageEN').addEventListener('click', () => { checkSelectLanguage(); });
    document.getElementById('popupLanguageJA').addEventListener('mouseover', () => {
        popupTitle.innerHTML = '日本語選択';
        popupLanguageText.innerHTML = '言語は設定で変えることができます。';
    });
}
function checkSelectLanguage() {

    if(ifSelectLanguage == false) {
        ifSelectLanguage = true;
        appearPopup(1, 0);
    }
    else {
        removePopup();
        if(checkCookies) loadGame();
    }
}
function changeLanguageText() {
    popupTitle.innerHTML = translations[lang].popupTitle[2][0];
    popupDescription.innerHTML = translations[lang].popupDescription[2][0];
}
function resetPopup() {
    popupArea.classList.remove('disabled');
    popupBackground.classList.remove('disabled');
    popupBox.classList.remove('disabled');
    popupBox.innerHTML = '';
}
function removePopup() { // 제거
    popupArea.classList.add('disabled');
    popupBackground.classList.add('disabled');
    popupBox.classList.add('disabled');
    popupBox.innerHTML = '';
}
/*
    뉴스 업데이트
*/
const showNewsContents = document.getElementById('showNewsContents');
let newsIndex = 0;
let newsSetTimeout;
let newsSetInterval;
function updateNews() {
    console.log('Update news');

    showNewsContents.classList.remove('fadeIn');
    showNewsContents.classList.add('fadeOut');

    clearTimeout(newsSetTimeout);
    clearInterval(newsSetInterval);
    
    newsSetTimeout = setTimeout(() => {
        newsIndex = (newsIndex + 1) % translations[lang].newsContents[0].length;
        showNewsContents.innerHTML = translations[lang].newsContents[0][newsIndex];
        showNewsContents.classList.remove('fadeOut');
        showNewsContents.classList.add('fadeIn');
    }, 1000);

    newsSetInterval = setInterval(() => { updateNews(); }, 1000 * 6);
}
showNewsContents.addEventListener('click', () => {
    clearTimeout(newsSetTimeout);
    clearInterval(newsSetInterval);
    updateNews();
})

/*
    열 메뉴
*/
let productBackgroundNumber_2_setTimeout;
let productBackgroundNumber_5_setTimeout;
let productBackgroundNumber_2 = 0;
let productBackgroundNumber_5 = 0;
let productBackgroundNumber_14 = 0;
let productBackgroundNumber_15 = 0;
function settingProductBackground() { // 배경 설정
    for(let i = 0; i < productLength; i++) {
        const productBackground = document.getElementById(`productRow_${i}`);

        if(arrProductGetCount[i] >= 1 && arrProductBackgroundEnable[i] == false) {
            if(i == 2) {
                clearTimeout(productBackgroundNumber_2_setTimeout);
                updateBackgroundVariation(i);
            } else if(i == 5) {
                clearTimeout(productBackgroundNumber_5_setTimeout);
                updateBackgroundVariation(i);
            } else if(i == 10) {
                productBackground.querySelector('.background').style.background = `url('img/background/product/${i}.png') repeat-x`;
                for (let j = 0; j < 4; j++) {
                    const appendBackgroundSub = document.createElement('div');
                    appendBackgroundSub.classList.add('backgroundSub');
                    appendBackgroundSub.style.background = `url('img/background/product/10_sub_${j}.png')`;
                    appendBackgroundSub.style.top = `8px`;
                    appendBackgroundSub.style.left = `${10 + 27.5 * j}%`
                    document.getElementById(`productBackground_${i}`).appendChild(appendBackgroundSub);
                }
            } else if(i == 14) {
                updateBackgroundVariation(i);
            } else if(i == 15) {
                updateBackgroundVariation(i);
            } else {
                productBackground.querySelector('.background').style.background = `url('img/background/product/${i}.png') repeat-x`;
            }
            productBackground.querySelector('.background').classList.remove('disabled');
            productBackground.querySelector('.divisionRow').classList.remove('disabled');
            arrProductBackgroundEnable[i] = true;
        }
    }
}
function updateBackgroundVariation(i) { // 배경 베리에이션
    if(i == 2) {
        for(let j = 0 ; j < 3 ; j++) if(productBackgroundNumber_2 == `${j}`) document.getElementById('productRow_2').style.background = `url('img/background/product/2_${j}.png') repeat-x`;
        productBackgroundNumber_2++;
        if(productBackgroundNumber_2 >= 3) productBackgroundNumber_2 = 0;
        productBackgroundNumber_2_setTimeout = setTimeout(() => { updateBackgroundVariation(i); }, 1000 * 5);
    }
    if(i == 5) {
        for(let j = 0 ; j < 3 ; j++) if(productBackgroundNumber_5 == `${j}`) document.getElementById('productRow_5').style.background = `url('img/background/product/5_${j}.png') repeat-x`;
        productBackgroundNumber_5++;
        if(productBackgroundNumber_5 >= 3) productBackgroundNumber_5 = 0;
        productBackgroundNumber_5_setTimeout = setTimeout(() => { updateBackgroundVariation(i); }, 1000 * 7);
    }
    if(i == 14) for(let j = 0 ; j < 2 ; j++) if(productBackgroundNumber_14 == `${j}`) document.getElementById('productRow_14').style.background = `url('img/background/product/14_${j}.png') repeat-x`;
    if(i == 15) for(let j = 0 ; j < 4 ; j++) if(productBackgroundNumber_15 == `${j}`) document.getElementById('productRow_15').style.background = `url('img/background/product/15_${j}.png') repeat-x`;
}
function settingProductStateImg(i) { // 배경에 아이콘 삽입
    if(arrProductRowIconCount[i] < arrProductGetCount[i]) {
        for(let j = arrProductRowIconCount[i] ; j < arrProductGetCount[i] ; j++) {
            const appendStateImg = document.createElement('div');
            appendStateImg.classList.add('stateImg');
            appendStateImg.style.background = `url('img/state/product_${i}.png') repeat-x`;

            if(i == 0) { // 학생
                appendStateImg.style.top = `${20 * Math.floor(j % 3)}px`;
                appendStateImg.style.left = `${16 * j}px`
            }
            else if(i == 1) { // 학교 시설
                appendStateImg.style.top = `${40}px`;
                appendStateImg.style.left = `${64 * j}px`
            }
            else if(i == 2) { // 교통 시설
                const topRandom = Math.floor(Math.random() * 16);
                appendStateImg.style.top = `${64 - topRandom}px`;
                appendStateImg.style.left = `${8 + 64 * j}px`
            }
            else if(i == 3) { // 주거 시설
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${16 + 80 * j}px`
            }
            else if(i == 4) { // 은행
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${16 + 80 * j}px`
            }
            else if(i == 5) { // 공항
                appendStateImg.style.top = `${32 + Math.floor(Math.random() * 49) - 24}px`;
                appendStateImg.style.left = `${8 + 64 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 4)}px`;
                
            }
            else if(i == 6) { // 기업
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${16 + 80 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 3)}px`;

            }
            else if(i == 7) { // 정부
                appendStateImg.style.top = `${64}px`;
                appendStateImg.style.left = `${16 + 96 * j}px`

            }
            else if(i == 8) { // 세계 정부
                appendStateImg.style.top = `${56}px`;
                appendStateImg.style.left = `${16 + 96 * j}px`

            }
            else if(i == 9) { // 복제 실험실
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${48 * j}px`

            }
            else if(i == 10) { // 우주 정거장
                appendStateImg.style.top = `${48}px`;
                appendStateImg.style.left = `${80 * j}px`

            }
            else if(i == 11) { // 차원포털
                appendStateImg.style.top = `${40 - 16 * Math.floor(j % 2)}px`;
                appendStateImg.style.left = `${8 + 80 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 4)}px`;

            }
            else if(i == 12) { // 블랙홀
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${32 + 128 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 3)}px`;

            }
            else if(i == 13) { // 타임머신
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${48 + 80 * j}px`

            }
            else if(i == 14) { // 평행 세계
                appendStateImg.style.top = `${32 + Math.floor(Math.random() * 49) - 24}px`;
                appendStateImg.style.left = `${16 + 32 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 6)}px`;

            }
            else if(i == 15) { // 또 다른 나
                appendStateImg.style.top = `${32}px`;
                appendStateImg.style.left = `${80 + 40 * j}px`

            }

            document.getElementById(`productBackground_${i}`).appendChild(appendStateImg);
        }
        arrProductRowIconCount[i] = arrProductGetCount[i];
    }
}
/*
    설정 메뉴
*/
function pageSetting() {
    document.getElementById('pageSettingTitle').innerHTML = translations[lang].menuSettingText_title;
    document.getElementById('pageSettingCommon').innerHTML = translations[lang].menuSettingText_subtitleCommon;
    document.getElementById('pageSettingDetail').innerHTML = translations[lang].menuStatsText_subtitleDetail;
    //document.getElementById('buttonChangeLanuage').innerHTML = translations[lang].menuStatsText_;

    const buttonSave = document.getElementById('buttonSave');
    const buttonSaveFileExport = document.getElementById('buttonSaveFileExport');
    const buttonSaveFileImport = document.getElementById('buttonSaveFileImport');
    const InputSaveFileImport = document.getElementById('inputImportSaveFile');
    const buttonChangeLanuage = document.getElementById('buttonChangeLanuage');

    buttonSave.addEventListener('click', () => {
        saveGame();
    });
    buttonSaveFileExport.addEventListener('click', () => {
        exportSaveFile();
    });
    buttonSaveFileImport.addEventListener('click', () => {
        importSaveFile();
    });
    buttonChangeLanuage.addEventListener('click', () => {
        appearPopup(2, 0);
    });
}
function exportSaveFile() {    
    // Blob 객체를 생성(파일의 내용을 포함)
    const blob = new Blob([document.cookie], { type: 'text/plain' });

    // 링크 생성
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'URCSaveFile.txt'; // 텍스트 파일 이름

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(URL.createObjectURL(blob)); // 메모리를 반환
}
function importSaveFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt'; // 파일 형식 수정 가능
    input.onchange = e => { 
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            const content = event.target.result;
            setCookies(JSON.parse(content)); // 쿠키 설정
            alert('전체 쿠키 값이 업데이트되었습니다.');
            location.reload();
        };
        reader.readAsText(file);
        
    };
    input.click(); // 자동으로 파일 선택창 열기
}

/*
    통계 메뉴
*/
function pageStats() {
    document.getElementById('pageStatsTitle').innerHTML = translations[lang].menuStatsText_title;
    document.getElementById('pageStatsCommon').innerHTML = translations[lang].menuStatsText_subtitleCommon;
    document.getElementById('pageStatsUpgrade').innerHTML = translations[lang].menuStatsText_subtitleUpgrade;
    document.getElementById('pageStatsAchievement').innerHTML = translations[lang].menuStatsText_subtitleAchievement;
}
let updatePageStatsSetTimeout;
function updatePageStats() { // 업데이트
    // 기본 항목
    document.getElementById('statsTotalStudent').innerHTML = translations[lang].menuStatsText_statsTotalStudent(formatNumber(statsTotalStudent));
    document.getElementById('statsStudent').innerHTML = translations[lang].menuStatsText_statsStudent(formatNumber(statsStudent), percentageClac(statsTotalStudent, statsStudent));
    document.getElementById('showPerSecondStudent').innerHTML = translations[lang].menuStatsText_showPerSecondStudent(formatNumber(addPerSecondStudent));
    document.getElementById('statsTotalPerSecondStudent').innerHTML = translations[lang].menuStatsText_statsTotalPerSecondStudent(formatNumber(statsTotalAddPerSecondStudent));
    document.getElementById('statsPerSecondStudent').innerHTML = translations[lang].menuStatsText_statsPerSecondStudent(formatNumber(statsAddPerSecondStudent), percentageClac(statsTotalAddPerSecondStudent, statsAddPerSecondStudent));
    document.getElementById('showClickStudent').innerHTML = translations[lang].menuStatsText_showClickStudent(formatNumber(addClickStudent));
    document.getElementById('statsTotalClickStudent').innerHTML = translations[lang].menuStatsText_statsTotalClickStudent(formatNumber(statsTotalAddClickStudent));
    document.getElementById('statsClickStudent').innerHTML = translations[lang].menuStatsText_statsClickStudent(formatNumber(statsAddClickStudent), percentageClac(statsTotalAddClickStudent, statsAddClickStudent));
    document.getElementById('statsTotalClickCount').innerHTML = translations[lang].menuStatsText_statsTotalClickCount(formatNumber(statsTotalClickCount));
    document.getElementById('statsClickCount').innerHTML = translations[lang].menuStatsText_statsClickCount(formatNumber(statsClickCount), percentageClac(statsTotalClickCount, statsClickCount));
    document.getElementById('statsTotalProductCount').innerHTML = translations[lang].menuStatsText_statsTotalProductCount(formatNumber(statsTotalProductCount));
    document.getElementById('statsProductCount').innerHTML = translations[lang].menuStatsText_statsProductCount(formatNumber(statsProductCount), percentageClac(statsTotalProductCount, statsProductCount));
    document.getElementById('statsReturningCount').innerHTML = translations[lang].menuStatsText_statsReturningCount(formatNumber(statsReturningCount));
    
    // 강화 메뉴 갱신
    const statsUpgradeBundle = document.getElementById('statsUpgradeBundle');
    statsUpgradeBundle.innerHTML = '';
    for(let i = 0 ; i < arrProductUpgradePurchaseBool.length ; i++) {
        for(let j = 0 ; j < arrProductUpgradePurchaseBool[i].length ; j++) {

            const value = arrProductUpgradePurchaseBool[i][j];
            const arr1 = Math.floor(value / 100);
            const arr2 = value % 100;

            const statsUpgradeIcon = document.createElement('div');
            statsUpgradeIcon.classList.add('statsUpgradeIcon');
            statsUpgradeIcon.style.background = `url('img/icons_upgrade.png')`;
            statsUpgradeIcon.style.backgroundPositionX = `${-48 * arr2}px`;
            statsUpgradeIcon.style.backgroundPositionY = `${-48 * arr1}px`;

            statsUpgradeBundle.appendChild(statsUpgradeIcon);
        }
    }
    // 도전 과제 갱신
    const statsAchievementBundle = document.getElementById('statsAchievementBundle');
    statsAchievementBundle.innerHTML = '';
    arrAchievementId.forEach(number => {
        // 선언
        const arr1 = Math.floor(number / 100);
        const arr2 = number % 100;

        const createDiv = document.createElement('div');
        createDiv.id = `achievement_${number}`;
        createDiv.className = `statsAchievementIcon ${number}`;
        createDiv.style.background = `url('img/icons_achievement.png')`;
        createDiv.style.backgroundPositionX = `${-48 * arr2}px`;
        createDiv.style.backgroundPositionY = `${-48 * arr1}px`;

        statsAchievementBundle.appendChild(createDiv);

        const achievementIcon = document.getElementById(`achievement_${number}`);
        // 업그레이드 설명창 마우스가 들어왔을 때
        achievementIcon.addEventListener('mouseenter', () => settingAchievementTooltp(arr1, arr2, number));
        // 업그레이드 설명창 마우스가 떠났을 때
        achievementIcon.addEventListener('mouseleave', () => removeAchievementTooltip());
    });

    // 페이지 갱신
    updatePageStatsSetTimeout = setTimeout(() => { updatePageStats(); }, 1000 * 5); // 5초마다 갱신
}
function percentageClac(i, j) { // 퍼센트 계산
    return (i > 0 ? ( j / i) * 100 : 0).toFixed(2);
}
function settingAchievementTooltp(i, j, number) {
    // 선언
    const tooltip = document.getElementById('specialTooltip');
    const achievement = document.getElementById(`achievement_${i}`);

    // 아이콘
    tooltip.querySelector('.icon').style.background = `url('img/icons_achievement.png')`;
    tooltip.querySelector('.icon').style.backgroundPositionX = `${-48 * j}px`;
    tooltip.querySelector('.icon').style.backgroundPositionY = `${-48 * i}px`;
    // 가격
    tooltip.querySelector('.price').innerHTML = '';
    // 이름
    tooltip.querySelector('.name').innerHTML = translations[lang].memoryName[number];
    // 태그
    tooltip.querySelector('.tagList').innerHTML = '';
    if(arrAchievementEnable[i] == true) {
        appendTag('special', 'a_normal');
        appendTag('special', 'a_lock');
    } else {
        appendTag('special', 'a_normal');
        appendTag('special', 'a_unlock');
    }
    // 설명
    tooltip.querySelector('.description').innerHTML = translations[lang].achievementDescription[number];
    // 배경담
    //tooltip.querySelector('.flavorText').innerHTML = translations[lang].achi[number];

    // 설명창 보이기
    tooltip.style.display = 'block';

    // 증축 설명창 위치 조절
    tooltip.style.top = `${achievement.getBoundingClientRect().top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${achievement.getBoundingClientRect().left + (achievement.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;

}
function removeAchievementTooltip() {
    // 선언
    const tooltip = document.getElementById('specialTooltip');
    // 설명창 제거
    tooltip.style.display = 'none';
}
/*
    정보 메뉴
*/
function pageInfo() {
    document.getElementById('pageInfoTitle').innerHTML = translations[lang].menuInfoText_title;
    document.getElementById('pageInfoIntroduce').innerHTML = translations[lang].menuInfoText_subtitleIntroduce;
    document.getElementById('introductText_1').innerHTML = translations[lang].menuInfoText_introduceText_1;
    document.getElementById('introductText_2').innerHTML = translations[lang].menuInfoText_introduceText_2;
    document.getElementById('pageInfoCredit').innerHTML = translations[lang].menuInfoText_subtitleCredit;
    document.getElementById('pageInfoPatchNote').innerHTML = translations[lang].menuInfoText_subtitlePatchNote;
}
/*
    회귀 메뉴
*/
let returningLevelClacSetInterval;
let returningMemorySetInterval;
function pageReturning() {
    document.getElementById('pageReturningTitle').innerHTML = translations[lang].menuReturningText_title;
    document.getElementById('pageReturningPanelLevel').innerHTML = translations[lang].menuReturningText_panelLevel(formatNumber(returningCurrentLevel));
    document.getElementById('pageReturningPanelBonus').innerHTML = `(SpS +${formatNumber(returningCurrentLevel)}%)`;
    document.getElementById('pageReturningLevel').innerHTML = translations[lang].menuReturningText_subtitleLevel;
    document.getElementById('pageReturningAbility').innerHTML = translations[lang].menuReturningText_subtitleAbility;
    
    returningLevelClacSetInterval = setInterval(() => { returningLevelClac(); }, 100); // 1초에 100번 작동

    // 기억 왜곡
    const returningMemoryBundle = document.getElementById('returningMemoryBundle');
    returningMemoryBundle.innerHTML = '';
    arrMemoryId.forEach(number => {

        const createDiv = document.createElement('div');
        createDiv.id = `memory_${number}`;
        createDiv.className = `returningMemoryIcon ${number}`;
        createDiv.style.background = `url('img/icons_memory.png') no-repeat`;
        createDiv.style.backgroundPositionX = `${-48 * number}px`;

        if(arrMemoryEnable[number] == true) {
            createDiv.style.outline = '3px solid #F51A1A';
            createDiv.style.filter = 'drop-shadow(0px 1px 2px #B2B2B2)';
        } else {
            createDiv.style.outline = '3px solid #6E0E0E';
            createDiv.style.filter = 'drop-shadow(0px 3px 2px #000000)';
        }

        returningMemoryBundle.appendChild(createDiv);

        const memoryIcon = document.getElementById(`memory_${number}`);
        // 업그레이드 설명창 마우스가 들어왔을 때
        memoryIcon.addEventListener('mouseenter', () => settingMemoryTooltip(number));
        // 업그레이드 설명창 마우스가 떠났을 때
        memoryIcon.addEventListener('mouseleave', () => removeMemoryTooltip());
    });
}
function returningLevelClac() {

    const expPercent = (returningExp / returningExpMax) * 100;
    if(expPercent < 100) document.getElementById('pageReturningExpFilledBar').style.width = `${expPercent}%`;
    if(expPercent >= 100) document.getElementById('pageReturningExpFilledBar').style.width = `100%`;
    while(returningExp >= returningExpMax) {

        returningExp -= returningExpMax
        returningIncreaseLevel++;
        returningExpMax = ((((returningIncreaseLevel + 1) ** 4) /2 ) * 1e12);

    }
    document.getElementById('pageReturningTimeDate').innerHTML = translations[lang].menuReturningText_timeDate(15000);
    document.getElementById('pageReturningNowReturningText_1').innerHTML = translations[lang].menuReturningText_nowReturningText_1;
    document.getElementById('pageReturningNowReturningIncreaseLevel').innerHTML = translations[lang].menuReturningText_nowReturningIncreaseLevel(formatNumber(returningIncreaseLevel), formatNumber(returningIncreaseLevel));
    document.getElementById('pageReturningNowReturningText_2').innerHTML = translations[lang].menuReturningText_nowReturningText_2;
    document.getElementById('pageReturningExpPercentage').innerHTML = `${(expPercent).toFixed(2)}%`;
    document.getElementById('pageReturningExpEmptyValue').innerHTML = translations[lang].menuReturningText_emptyExp(formatNumber(returningExpMax - returningExp));
}
document.getElementById('buttonReturning').addEventListener('click', () => {
    appearPopup(1, 1);
})
function returningAnimation() { // 회귀 연출
    console.log('Returning');
    popupArea.classList.remove('disabled');

    const createDiv = document.createElement('div');
    createDiv.id = 'returningBackground';
    popupArea.appendChild(createDiv);

    setTimeout(() => {
        document.getElementById('returningBackground').remove();
        popupArea.classList.add('disabled');
        returningFunction();
    }, 1000 * 7.5);
}
function returningFunction() { // 회귀 완료
    // 회귀
    returningCurrentLevel += returningIncreaseLevel; // 등급 증가
    returningIncreaseLevel = 0; // 증가된 등급 초기화
    returningProductionMultiple = 1 + returningCurrentLevel * 0.01; // 회귀 배율값 추가
    returningExp = 0; // 경험치 초기화

    // 학생 수 초기화
    student = 0;
    addClickStudent = 1;
    addPerSecondStudent = 0;

    // 통계
    statsStudent = 0;
    statsAddPerSecondStudent = 0;
    statsAddClickStudent = 0;
    statsClickCount = 0;
    statsProductCount = 0;
    statsReturningCount++;

    // 증축 관련
    productAddPerSecondTotal = 0;

    // 강화
    document.getElementById('upgradeBundle').innerHTML = '';
    arrUpgradeId = [];
    for(let i = 0 ; i < arrUpgradeEnable.length ; i++) {
        for(let j = 0 ; j < arrUpgradeEnable[i].length ; j++) {
            arrUpgradeEnable[i][j] = false;
        }
    }

    // 생산 관련
    
    arrProductUpgradePurchaseBool = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    updateShowStudent();
    gameMenuDefaultSetting();
    settingProduct();
    productDefaultSetting(); // 증축 관련 초기화
    saveGame(); // 저장
}
function settingMemoryTooltip(i) {
    // 선언
    const tooltip = document.getElementById('specialTooltip');
    const memory = document.getElementById(`memory_${i}`);

    // 아이콘
    tooltip.querySelector('.icon').style.background = `url('img/icons_memory.png')`;
    tooltip.querySelector('.icon').style.backgroundPositionX = `${-48 * i}px`;
    // 가격
    tooltip.querySelector('.price').innerHTML = translations[lang].memoryPrice(formatNumber(arrMemoryPrice[i]));
    if(arrMemoryEnable[i] == true) {
        tooltip.querySelector('.price').style.color = '#9933FF';
        tooltip.querySelector('.price').style.opacity = 1;
    } else {
        tooltip.querySelector('.price').style.color = '#FF0000';
        tooltip.querySelector('.price').style.opacity = 0.5;
    }
    // 이름
    tooltip.querySelector('.name').innerHTML = translations[lang].memoryName[i];
    // 태그
    tooltip.querySelector('.tagList').innerHTML = '';
    if(arrMemoryEnable[i] == true) {
        appendTag('special', 'm_normal');
        appendTag('special', 'm_activate');
    } else {
        appendTag('special', 'm_normal');
        appendTag('special', 'm_deactivate');
    }
    // 설명
    tooltip.querySelector('.description').innerHTML = translations[lang].memoryDescription[i];
    // 배경담
    tooltip.querySelector('.flavorText').innerHTML = translations[lang].memoryFlavorText[i];

    // 설명창 보이기
    tooltip.style.display = 'block';

    // 증축 설명창 위치 조절
    tooltip.style.top = `${memory.getBoundingClientRect().top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${memory.getBoundingClientRect().left + (memory.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;
    
}
// function updateMemoryTooltip() {

// }
function removeMemoryTooltip() { // 기억 왜곡 설명창 제거
    // 선언
    const tooltip = document.getElementById('specialTooltip');
    // 설명창 숨기기
    tooltip.style.display = 'none';
}
function activateMemory() {
    console.log('act')
    for(let i = 0 ; i < arrMemoryEnable.length ; i++) {
        if(returningCurrentLevel >= arrMemoryPrice[i]) {
            arrMemoryEnable[i] = true;
            console.log(arrMemoryEnable)
        }
    }
}
/*
    게임 메뉴
*/
const menuPageButton = document.querySelectorAll('.menuPageButton');

menuPageButton.forEach(div => {
    div.addEventListener('click', () => {
        menuPageButton.forEach(otherDiv => {
            if(otherDiv != div) otherDiv.classList.remove('select');
        });

        const isSelected = div.classList.toggle('select');
        clearTimeout(updatePageStatsSetTimeout);
        clearInterval(returningLevelClacSetInterval)
        // 기본 설정
        if(isSelected) {
            document.getElementById('productStateList').style.display = 'none';
            document.getElementById('pageSetting').style.display = div.id == 'menuSetting' ? '' : 'none';
            document.getElementById('pageStats').style.display = div.id == 'menuStats' ? '' : 'none';
            document.getElementById('pageInfo').style.display = div.id == 'menuInfo' ? '' : 'none';
            document.getElementById('pageReturning').style.display = div.id == 'menuReturning' ? '' : 'none';
        } else gameMenuDefaultSetting();
        // 설정 메뉴
        if(document.getElementById('menuSetting').classList.contains('select')) pageSetting();
        // 통계 메뉴
        if(document.getElementById('menuStats').classList.contains('select')) {
            pageStats();
            updatePageStats();
        }
        // 정보 메뉴
        if(document.getElementById('menuInfo').classList.contains('select')) pageInfo();
        // 회귀 메뉴
        if(document.getElementById('menuReturning').classList.contains('select')) pageReturning();
    });

    const closeButton = document.querySelectorAll('.pageCloseButton');
    closeButton.forEach(div => {
        div.addEventListener('click', () => {
            gameMenuDefaultSetting();
        });
    });
});
function gameMenuDefaultSetting() {
    document.getElementById('menuSetting').classList.remove('select');
    document.getElementById('menuStats').classList.remove('select');
    document.getElementById('menuInfo').classList.remove('select');
    document.getElementById('menuReturning').classList.remove('select');

    document.getElementById('productStateList').style.display = '';
    document.getElementById('pageSetting').style.display = 'none';
    document.getElementById('pageStats').style.display = 'none';
    document.getElementById('pageInfo').style.display = 'none';
    document.getElementById('pageReturning').style.display = 'none';
}
/*
    업그레이드
*/
upgradeExpand.addEventListener('click', () => {
    upgradeBundle.classList.toggle('open');
    updateUpgradeMenuButton();
})
function updateUpgradeMenuButton() {
    if(upgradeBundle.classList.contains('open')) upgradeExpand.textContent = translations[lang].upgradeMenuButtonFold;
    else upgradeExpand.textContent = translations[lang].upgradeMenuButtonExpand;
}
/* 
    증축
*/
let intervalsettingProductTooltip;
function settingProduct() {
    console.log('setting product');
    for(let i = 0 ; i < productLength ; i++) {
        // 처음 작동
        const product = document.getElementById(`product_${i}`);
    
        // 마우스가 들어왔을 때 >설명창<
        product.addEventListener('mouseenter', () => settingProductTooltip(i));
        // 마우스가 바깥으로 나갔을 때
        product.addEventListener('mouseleave', () => removeProductTooltip());
        // 클릭 상호작용
        product.addEventListener('click', () => {
            if(student >= arrProductPrice[i]) {
                // 비용 지불
                student -= arrProductPrice[i];
                // 생산품 증가
                arrProductGetCount[i]++;
                // 일정 개수 이상이라면 강화 추가
                const forUpgradeStandardCount = [1, 10, 25, 50, 100, 150, 200, 250, 300, 350];
                const forUpgradeIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                for(let i = 0 ; i < productLength ; i++) {
                    for(let j = 0 ; j < forUpgradeStandardCount.length ; j++) {
                        if(arrProductGetCount[i] >= forUpgradeStandardCount[j] && arrUpgradeEnable[i][forUpgradeIndex[j]] == false) {
                            arrUpgradeEnable[i][forUpgradeIndex[j]] = true;
                            arrUpgradeId.push(i * 100 + forUpgradeIndex[j]);
    
                            reorderUpgradeIcon();
                            upgradeExpandButton();
    
                            if(arrAppearPopupBool[0][i] == false && j == 0) {
                                arrAppearPopupBool[0][i] = true;
                                appearPopup(0, i); // 처음 구매시 팝업 등장
                            }
                        }
                    }
                }
                // 통계
                statsTotalProductCount++;
                statsProductCount++;
                // 초당 추가 값 증가
                settingProductAddPerSecond();
                settingProductBackground();
                settingProductStateImg(i);
                settingProductMenu('count');
                settingProductPrice(i);
                updateShowStudent();
            }
        });
    }
}
const tooltip = document.getElementById('productTooltip');
function settingProductTooltip(i) {
    // 선언
    const product = document.getElementById(`product_${i}`);

    // 증축 설명창 위치 조절
    tooltip.style.top = `${product.getBoundingClientRect().top + 10}px`;
    // 만약 맨 위를 벗어났다면
    if(product.getBoundingClientRect().top <= 0) tooltip.style.top = `5px`;
    // 만약 맨 아래에서 벗어났다면 | setTimeout으로 tooltip의 위치 갱신
    setTimeout(() => { if(tooltip.getBoundingClientRect().bottom > window.innerHeight) tooltip.style.top = `${window.innerHeight - tooltip.getBoundingClientRect().height - 10}px`; }, 1);

    // 아이콘 공통
    tooltip.querySelector('.icon').style.background = `url('img/icons_product.png')`;
    tooltip.querySelector('.icon').style.backgroundPositionY = `${-64 * i}px`;

    if(arrProductUnlock[i] == true) { // 해금되었다면
        // 아이콘
        tooltip.querySelector('.icon').style.backgroundPositionX = `-64px`;
        // 이름
        tooltip.querySelector('.name').innerHTML = translations[lang].arrProductName[i];
        // 설명
        tooltip.querySelector('.description').innerHTML = translations[lang].productTooltipDescription[i];
        tooltip.querySelector('#centerLine').classList.remove('disabled');
        
        // 태그
        tooltip.querySelector('.tagList').innerHTML = ''; // 태그 지우기
        if(arrProductGetCount[i] >= 1) {
            // 증축 기본 태그
            appendTag('product', 'normal');
            // 증축 강화 상태 태그
            if(arrProductUpgradeCount[i] >= 1) appendTag('product', `upgrade_${arrProductUpgradeCount[i]}`);
        }
        
        // 강화 현황 활성화
        if(arrProductUpgradeCount[i] >= 1) { // 강화 최소 1개 이상 했을 시
            tooltip.querySelector('#productTooltipUpgradeEnableBundle').classList.remove('disabled');
            tooltip.querySelector('#productUpgradeDone').innerHTML = translations[lang].productTooltipUpgradeDone;
            tooltip.querySelector('#progressUpgrade').innerHTML = '(' + arrProductUpgradeCount[i] + '/' + arrProductUpgradeCountMax[i] + ')';
            tooltip.querySelector('#upgradePurchaseList').innerHTML = '';
            addProductUpgradeIcon(i);
        } else tooltip.querySelector('#productTooltipUpgradeEnableBundle').classList.add('disabled');
    } else { // 해금 안 됐다면
        tooltip.querySelector('.name').innerHTML = '???';
        tooltip.querySelector('.price').innerHTML = '';
        tooltip.querySelector('.getCount').innerHTML = '';
        tooltip.querySelector('.tagList').innerHTML = '';
        tooltip.querySelector('.description').innerHTML = '???';
        tooltip.querySelector('#productTooltipStatsBundle').classList.add('disabled');
        tooltip.querySelector('#productTooltipUpgradeEnableBundle').classList.add('disabled');
    }
    // 설명창 보이기
    tooltip.style.display = 'block';
    // 갱신 함수 || 최적화를 위해 1초에 100번 작동
    intervalsettingProductTooltip = setInterval(() => { updateProductTooltip(i); }, 10);
}
function updateProductTooltip(i) {
    console.log("Product tooltip " + i);

    // 선언
    const tooltip = document.getElementById('productTooltip');
    tooltip.querySelector('.price').textContent = translations[lang].students(formatNumber(arrProductPrice[i]));

    // 보유
    if(arrProductGetCount[i] >= 1) tooltip.querySelector('.getCount').innerHTML = translations[lang].productTooltipGetCount(arrProductGetCount[i]);
    // 가격색
    if(student >= arrProductPrice[i]) {
        document.getElementById('productTooltipPrice').style.color = '#00FF00';
        document.getElementById('productTooltipPrice').style.opacity = 1;
    } else {
        document.getElementById('productTooltipPrice').style.color = '#FF0000';
        document.getElementById('productTooltipPrice').style.opacity = 0.5;
    }
    // 통계 활성화
    if(arrProductGetCount[i] >= 1) {
        tooltip.querySelector('#productTooltipStatsBundle').classList.remove('disabled');
        tooltip.querySelector('#productTooltipStats_1').innerHTML = translations[lang].productTooltipStats_1(formatNumber(arrProductAddDefaultValue[i] * arrProductAddBonusValue[i]));
        tooltip.querySelector('#productTooltipStats_2').innerHTML = translations[lang].productTooltipStats_2(formatNumber(arrProductAddTotalValue[i]));
        tooltip.querySelector('#productTooltipStats_3').innerHTML = translations[lang].productTooltipStats_3(formatNumber(arrProductStatsProductionTotal[i]));
    } else tooltip.querySelector('#productTooltipStatsBundle').classList.add('disabled');
}
function removeProductTooltip() { // 설명창 제거
    const tooltip = document.getElementById('productTooltip');
    // 설명창 가리기
    tooltip.style.display = 'none';
    // 반복 제거
    clearInterval(intervalsettingProductTooltip);
}
function settingProductMenu(type) {
    for(let i = 0 ; i < productLength ; i++) {
        const product = document.getElementById(`product_${i}`);

        if(type == 'appear') {
            if(arrProductAppear[i] == false) product.classList.add('disabled');
            else if(arrProductAppear[i] == true)  product.classList.remove('disabled');
        }
        if(type == 'icon') {
            const product = document.getElementById(`product_${i}`);
            product.querySelector('.icon').style.background = `url('img/icons_product.png')`;
            product.querySelector('.icon').style.backgroundPositionY = `${-64 * i}px`;
            if(arrProductUnlock[i] == false) product.querySelector('.icon').style.backgroundPositionX = `0px`;
            else product.querySelector('.icon').style.backgroundPositionX = `-64px`;
        }
        if(type == 'name') {
            if(arrProductUnlock[i] == false) product.querySelector('.name').innerHTML = '???';
            else if(arrProductUnlock[i] == true) product.querySelector('.name').innerHTML = translations[lang].arrProductName[i];
        }
        if(type == 'count') {
            if(arrProductGetCount[i] == 0) product.querySelector('.getCount').innerHTML = '';
            if(arrProductGetCount[i] >= 1) product.querySelector('.getCount').innerHTML = arrProductGetCount[i];
        }
        if(type == 'price') {
            product.querySelector('.price').innerHTML = translations[lang].students(formatNumber(arrProductPrice[i]));
        }
    }
}
function settingProductPrice(i, j = 1) {
    for(let k = 0 ; k < j ; k++) {
        arrProductPrice[i] = Math.floor(arrProductPrice[i] * 1.15);
        document.getElementById(`product_${i}_price`).innerHTML = translations[lang].students(formatNumber(arrProductPrice[i]));
    }
}
function settingProductAddPerSecond() { // 갱신 : 증축 초당 추가
    addPerSecondStudent = 0;
    for(let i = 0 ; i < productLength; i++) {
        // 공식: 증축 개수 * 증축 초당 효율 * 증축 강화 효율 * 효율 배수 * 회귀 효율 배수
        arrProductAddTotalValue[i] = parseFloat((arrProductGetCount[i] * arrProductAddDefaultValue[i] * arrProductAddBonusValue[i] * productionMultiple * returningProductionMultiple).toFixed(1));
        addPerSecondStudent += arrProductAddTotalValue[i];
    }
    // 갱신
    updateShowStudent();
}
function updateShowStudent() { // 학생 수 갱신
    // 보유 중인 학생 갱신
    document.getElementById('getStudent').innerHTML = translations[lang].students(formatNumber(student));
    // 초당 학생 갱신
    document.getElementById('perSecondStudent').innerHTML = translations[lang].perSecond(formatNumber(addPerSecondStudent));
}
function productDefaultSetting() { // 증축을 초기 상태로 설정
    for(let i = 0 ; i < productLength; i++) {
        // 변수 및 배열 초기화
        arrProductAppear[i] = false;
        arrProductUnlock[i] = false;
        arrProductGetCount[i] = 0;
        arrProductAddBonusValue[i] = 1;
        arrProductAddTotalValue[i] = 0;
        arrProductStatsProductionTotal[i] = 0;
        arrProductUpgradeCount[i] = 0;

        if(2 >= i && i >= 0) {
            arrProductAppear[i] = true;
        }

        // 선언
        const productMenu = document.getElementById(`product_${i}`);
        const productRow = document.getElementById(`productRow_${i}`);

        // 증축 메뉴
        productMenu.querySelector('.price').innerHTML = translations[lang].students(formatNumber(arrProductPrice[i]));

        // 증축 열
        productRow.querySelector('.background').innerHTML = '';
        productRow.querySelector('.background').classList.add('disabled');
        productRow.querySelector('.divisionRow').classList.add('disabled');
        // 배열 초기화
        arrProductBackgroundEnable[i] = false;
        arrProductRowIconCount[i] = 0;
    }

    settingProductMenu('appear');
    settingProductMenu('icon');
    settingProductMenu('name');
    settingProductMenu('count');
}
function productOffline() {
    
    const currentTime = Date.now();
    offlineTimeDiff = Math.floor((currentTime - lastSaveTime) / 1000);

    if(offlineTimeDiff >= 60) { // 오프라인 시간이 60초 이상일 경우
        const validTime = Math.min(offlineTimeDiff, maxOfflineTime);
        offlineEarnings = Math.floor(addPerSecondStudent * validTime * offlineEfficiency);
        student += offlineEarnings;

        appearPopup(2, 2);
    }
}
/*
    강화 확장 버튼 활성화 여부
*/
function upgradeExpandButton() {
    const upgradeExpand = document.getElementById('upgradeExpand');
    const upgradeBundle = document.getElementById('upgradeBundle');
    const upgradeIconLength = upgradeBundle.getElementsByClassName('upgradeIcon').length;
    
    if(upgradeIconLength >= 6) {
        upgradeExpand.style.pointerEvents = 'auto';
        upgradeExpand.style.opacity = '1';
    } else {
        upgradeExpand.style.pointerEvents = 'none';
        upgradeExpand.style.opacity = '0.5';
    }
}

/* 
    강화 아이콘 재정렬
*/
let intervalUpdateUpgradeTooltip;
function reorderUpgradeIcon() {
    // 선언
    const upgradeBundle = document.getElementById('upgradeBundle');
    // 초기화
    upgradeBundle.innerHTML = '';
    // 정렬
    const arrReorder = arrUpgradeId.slice().sort((a, b) => a - b);

    arrReorder.forEach(number => {

        const arr1 = Math.floor(number / 100);
        const arr2 = number % 100;

        const addUpgradeDiv = document.createElement('div');
        addUpgradeDiv.id = `upgrade_${number}`;
        addUpgradeDiv.className = `upgradeIcon ${number}`;
        addUpgradeDiv.style.background = `url('img/icons_upgrade.png') no-repeat`;
        addUpgradeDiv.style.backgroundPositionX = `${-48 * arr2}px`;
        addUpgradeDiv.style.backgroundPositionY = `${-48 * arr1}px`;

        upgradeBundle.appendChild(addUpgradeDiv);


        const upgradeTooltip = document.getElementById('upgradeTooltip');
        const upgradeIcon = document.getElementById(`upgrade_${number}`);
        // 업그레이드 설명창 마우스가 들어왔을 때
        upgradeIcon.addEventListener('mouseenter', () => settingUpgradeTooltip(arr1, arr2, number));
        // 업그레이드 설명창 마우스가 떠났을 때
        upgradeIcon.addEventListener('mouseleave', () => removeUpgradeTooltip());

        // 클릭
        upgradeIcon.addEventListener('click', () => {
            if(student >= arrUpgradePrice[arr1][arr2]) {
                // 비용 지불
                student -= arrUpgradePrice[arr1][arr2];
                // 배열 갱신
                arrProductAddBonusValue[arr1] *= 2; // 보너스 적용
                arrProductUpgradeCount[arr1]++; // 카운트 증가
                arrProductUpgradePurchaseBool[arr1].push(number); // 카운트 증가
                // 배열 제거
                arrUpgradeId = arrUpgradeId.filter(n => n !== number);
                // 반복 제거
                clearInterval(intervalUpdateUpgradeTooltip);
                // 설명창 가리기
                upgradeTooltip.style.display = 'none';
                settingProductAddPerSecond();
                updateShowStudent(); // 학생 수 갱신
                reorderUpgradeIcon(); // 아이콘 재정렬
            }
        });
    });
    upgradeExpandButton();
}
/* 
    강화 아이콘 생성
*/
function addProductUpgradeIcon(i) {
    const upgradePurchaseList = document.getElementById('upgradePurchaseList');

    const arrReorder = arrProductUpgradePurchaseBool[i].slice().sort((a, b) => a - b);

    arrReorder.forEach(number => {
        const addUpgradeIcon = document.createElement('div');
        const j = number % 100;
        addUpgradeIcon.id = `upgrade_${number}`;
        addUpgradeIcon.className = `upgradeIcon ${number}`;
        addUpgradeIcon.style.background = `url('img/icons_upgrade.png') no-repeat`;
        addUpgradeIcon.style.backgroundPositionY = `${-48 * i}px`;
        addUpgradeIcon.style.backgroundPositionX = `${-48 * j}px`

        upgradePurchaseList.appendChild(addUpgradeIcon);
    });
}
/*
    강화 설명창 갱신
*/
function settingUpgradeTooltip(i, j, k) { // 강화 설명창 설정

    const tooltip = document.getElementById('upgradeTooltip');
    const upgradeIcon = document.getElementById(`upgrade_${k}`);

    tooltip.style.display = 'block';

    // 설명창 위치 조절
    tooltip.style.top = `${upgradeIcon.getBoundingClientRect().top + 10}px`;
    if(upgradeIcon.getBoundingClientRect().top <= 0) tooltip.style.top = `5px`;
    
    // 아이콘 이미지
    tooltip.querySelector('.icon').style.background = `url('img/icons_upgrade.png') no-repeat`;
    tooltip.querySelector('.icon').style.backgroundPositionX = `${-48 * j}px`;
    tooltip.querySelector('.icon').style.backgroundPositionY = `${-48 * i}px`;
    // 가격
    tooltip.querySelector('.price').innerHTML = translations[lang].students(formatNumber(arrUpgradePrice[i][j]));
    // 이름
    document.getElementById('upgradeTooltipName').innerHTML = translations[lang].upgradeName[i][j];
    // 설명
    document.getElementById('upgradeTooltipDescription').innerHTML = translations[lang].upgradeDescription[i];

    // 반복
    intervalUpdateUpgradeTooltip = setInterval(() => { updateUpgradeTooltip(i, j); }, 10);

}
function updateUpgradeTooltip(i, j) { // 강화 설명창 갱신
    console.log("Upgrade tooltip");

    const tooltip = document.getElementById('upgradeTooltip');
    
    // 구매 가능 여부
    if(student >= arrUpgradePrice[i][j]) {
        tooltip.querySelector('.price').style.color = '#00FF00';
        tooltip.querySelector('.price').style.opacity = 1;
    } else {
        tooltip.querySelector('.price').style.color = '#FF0000';
        tooltip.querySelector('.price').style.opacity = 0.5;
    }
}
function removeUpgradeTooltip() { // 강화 설명창 제거

    const tooltip = document.getElementById('upgradeTooltip');
    // 숨기기
    tooltip.style.display = 'none';
    // 반복 제거
    clearInterval(intervalUpdateUpgradeTooltip);
}
/*
    태그 추가
*/
function appendTag(elementById, type) {
    const appendTag = document.createElement('div');
    appendTag.className = 'tag';

    if(elementById == 'product') { // product
        if(type == 'normal') {
            appendTag.innerHTML = translations[lang].tooltipTagName[0][0];
            appendTag.style.background = 'linear-gradient(to right, #ABBAAB, #FFFFFF)';
        }

        const upgradeIndex = type.split('_')[1] - 1;
        if(upgradeIndex >= 0) {
            appendTag.innerHTML = translations[lang].tooltipTagName[1][upgradeIndex];
            appendTag.style.background = `linear-gradient(to right,${arrTooltipTagColor[1][upgradeIndex]})`;
        }
        appendTag.style.color = '#000000';
    }
    if(elementById == 'upgrade') { // upgrade
        if(type == 'normal') {
            appendTag.innerHTML = translations[lang].tooltipTagName[0][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
    }
    if(elementById == 'special') {
        if(type == 'm_normal') {
            appendTag.innerHTML = translations[lang].tooltipTagName[0][2];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'm_deactivate') {
            appendTag.innerHTML = translations[lang].tooltipTagName[3][0];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'm_activate') {
            appendTag.innerHTML = translations[lang].tooltipTagName[3][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_normal') {
            appendTag.innerHTML = translations[lang].tooltipTagName[0][3];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_unlock') {
            appendTag.innerHTML = translations[lang].tooltipTagName[4][0];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_lock') {
            appendTag.innerHTML = translations[lang].tooltipTagName[4][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
    }
    document.getElementById(`${elementById}TooltipTagList`).appendChild(appendTag);
}

/*
    자릿수 계산
*/
function formatNumber(value) {
    // value의 값이 0일 경우
    if(value == 0) return value;
    // 아닐 경우
    else {
        for(let i = arrFormatNumberKr.length - 1 ; i > -1 ; i--) {
            if(value >= arrFormatStandardKr[i]) {
                // 1e72 이상 | 무한
                if(i == arrFormatNumberKr.length - 1) return arrFormatNumberKr[i] 
                // 1e4 이하
                else if(i == 0) return value + arrFormatNumberKr[0];
                // 그 외
                else return (value / arrFormatStandardKr[i]).toFixed(2) + arrFormatNumberKr[i];
            }
        }
    }
}

/*
    Interval
    매 틱 반복
*/
setInterval(() => {  
    for(let i = 0 ; i < productLength ; i++) {

        const product = document.getElementById(`product_${i}`);
        // 한 단계 전 증축을 최소 1개 이상 구매시 등장
        if(arrProductAppear[i] == false && arrProductGetCount[i-1] >= 1) {
            arrProductAppear[i] = true;
            settingProductMenu('appear');
        }
        // 이름 변경 & 해금
        if(arrProductAppear[i] == true && arrProductUnlock[i] == false && student >= arrProductPrice[i] * 0.8) {
            arrProductUnlock[i] = true;
            settingProductMenu('icon');
            settingProductMenu('name');
        }

        // 학생이 충분, 불충분할 때 색 변환
        let productPrice = document.getElementById(`product_${i}_price`);

        if(student >= arrProductPrice[i]) {
            productPrice.style.color = "#00ff00";
            product.style.opacity = 1;
        } else {
            productPrice.style.color = "#ff0000";
            product.style.opacity = 0.5;
        }
    }

    // Debug text
    document.getElementById('debugDiv').textContent = arrProductGetCount;
});
/*
    Interval
    1초 반복
*/
setInterval(perSecond, 1000);
function perSecond() {
    student += addPerSecondStudent;
    statsTotalStudent += addPerSecondStudent;
    statsStudent += addPerSecondStudent;
    statsTotalAddPerSecondStudent += addPerSecondStudent;
    statsAddPerSecondStudent += addPerSecondStudent;
    returningExp += addPerSecondStudent;
    updateShowStudent();

    for(let i = 0 ; i < productLength ; i++) {
        arrProductStatsProductionTotal[i] += arrProductAddTotalValue[i]
    }
}
/*
    Interval
    2초 반복 | 최적화를 위함
*/
setInterval(() => {
    // 웹 HTML 제목 갱신
    document.title = translations[lang].windowTitle(formatNumber(student));
}, 1000 * 2);
/*
    Interval
    30초 반복
*/
setInterval(() => {
    // 진행상황은 쿠키에 저장
    saveGame();
}, 1000*30);
// 게임 저장
function saveGame() {
    console.log('Save Game');
    // 학생
    setCookie('student', student);
    setCookie('addClickStudent', addClickStudent);
    setCookie('addPerSecondStudent', addPerSecondStudent);
    // 팝업 등장 여부 | 배열
    setCookie('arrAppearPopupBool', arrAppearPopupBool);
    
    // 증축
    setCookie('arrProductAppear', arrProductAppear);
    setCookie('arrProductUnlock', arrProductUnlock);
    setCookie('arrProductGetCount', arrProductGetCount);
    setCookie('arrProductAddBonusValue', arrProductAddBonusValue);
    setCookie('arrProductAddTotalValue', arrProductAddTotalValue);
    setCookie('arrProductStatsProductionTotal', arrProductStatsProductionTotal);
    setCookie('productAddPerSecondTotal', productAddPerSecondTotal);
    setCookie('arrProductUpgradeCount', arrProductUpgradeCount);
    // 강화
    setCookie('arrUpgradeId', arrUpgradeId);
    setCookie('arrUpgradeEnable', arrUpgradeEnable);
    setCookie('arrProductUpgradePurchaseBool', arrProductUpgradePurchaseBool);
    // 설정
    /*
        설정 관련 변수
    */
    // 통계
    setCookie('statsTotalStudent', statsTotalStudent);
    setCookie('statsStudent', statsStudent);
    setCookie('statsTotalAddPerSecondStudent', statsTotalAddPerSecondStudent);
    setCookie('statsAddPerSecondStudent', statsAddPerSecondStudent);
    setCookie('statsTotalAddClickStudent', statsTotalAddClickStudent);
    setCookie('statsAddClickStudent', statsAddClickStudent);
    setCookie('statsTotalClickCount', statsTotalClickCount);
    setCookie('statsClickCount', statsClickCount);
    setCookie('statsTotalProductCount', statsTotalProductCount);
    setCookie('statsProductCount', statsProductCount);
    setCookie('statsReturningCount', statsReturningCount);
    // 회귀
    setCookie('returningCurrentLevel', returningCurrentLevel);
    setCookie('returningIncreaseLevel', returningIncreaseLevel);
    setCookie('returningExp', returningExp);
    setCookie('returningExpMax', returningExpMax);
    setCookie('returningProductionMultiple', returningProductionMultiple);
    // 기억 왜곡
    setCookie('arrMemoryEnable', arrMemoryEnable);
    // 도전 과제
    setCookie('arrAchievementEnable', arrAchievementEnable);
    // 언어
    setCookie('ifSelectLanguage', ifSelectLanguage);
    setCookie('lang', lang);
    // 저장된 날짜
    setCookie('lastSaveTime', Date.now());
}
function loadGame() { // 게임 로드
    console.log('Load cookie');
    // 학생
    student = getCookie('student');
    addClickStudent = getCookie('addClickStudent');
    addPerSecondStudent = getCookie('addPerSecondStudent');
    // 팝업 등장 여부 | 배열
    arrAppearPopupBool = getCookie('arrAppearPopupBool');
    
    // 증축
    arrProductAppear = getCookie('arrProductAppear');
    arrProductUnlock = getCookie('arrProductUnlock');
    arrProductGetCount = getCookie('arrProductGetCount');
    arrProductAddBonusValue = getCookie('arrProductAddBonusValue');
    arrProductAddTotalValue = getCookie('arrProductAddTotalValue');
    arrProductStatsProductionTotal = getCookie('arrProductStatsProductionTotal');
    productAddPerSecondTotal = getCookie('productAddPerSecondTotal');
    arrProductUpgradeCount = getCookie('arrProductUpgradeCount');
    // 강화
    arrUpgradeId = getCookie('arrUpgradeId');
    reorderUpgradeIcon();
    arrUpgradeEnable = getCookie('arrUpgradeEnable');
    arrProductUpgradePurchaseBool = getCookie('arrProductUpgradePurchaseBool');
    // 설정
    /*
        설정 관련 변수
    */
    // 통계
    statsTotalStudent = getCookie('statsTotalStudent');
    statsStudent = getCookie('statsStudent');
    statsTotalAddPerSecondStudent = getCookie('statsTotalAddPerSecondStudent');
    statsAddPerSecondStudent = getCookie('statsAddPerSecondStudent');
    statsTotalAddClickStudent = getCookie('statsTotalAddClickStudent');
    statsAddClickStudent = getCookie('statsAddClickStudent');
    statsTotalClickCount = getCookie('statsTotalClickCount');
    statsClickCount = getCookie('statsClickCount');
    statsTotalProductCount = getCookie('statsTotalProductCount');
    statsProductCount = getCookie('statsProductCount');
    statsReturningCount = getCookie('statsReturningCount');
    // 회귀
    returningCurrentLevel = getCookie('returningCurrentLevel');
    returningIncreaseLevel = getCookie('returningIncreaseLevel');
    returningExp = getCookie('returningExp');
    returningExpMax = getCookie('returningExpMax');
    returningProductionMultiple = getCookie('returningProductionMultiple');
    // 기억 왜곡
    arrMemoryEnable = getCookie('arrMemoryEnable');
    // 도전 과제
    arrAchievementEnable = getCookie('arrAchievementEnable');

    // 함수 실행
    settingProductMenu('appear');
    settingProductMenu('icon');
    settingProductMenu('name');
    settingProductMenu('count');
    settingProductMenu('price');
    settingProductBackground();
    for(let i = 0 ; i < productLength ; i++) {
        settingProductPrice(i, arrProductGetCount[i])
        settingProductStateImg(i)
    }
    // 언어
    ifSelectLanguage = getCookie('ifSelectLanguage');
    lang = getCookie('lang');
    // 저장된 시간
    lastSaveTime = parseInt(getCookie('lastSaveTime'), 10);
    productOffline();
}


function debugMode() {
    student = 1e58;
    for(let i = 0 ; i < productLength ; i++) {
        arrProductGetCount[i]++
    }
}
/*
    쿠키 설정
*/
function setCookie(name, value) { // 쿠키 저장하기
    // JSON 문자열로 변환 | 받은 값이 배열일 경우 불러오기 편하게 하기 위함
    value = JSON.stringify(value);
    // 쿠키에 저장
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${3.156e+8}; path=/`;
}
function setCookies(cookies) {
    for (const [name, value] of Object.entries(cookies)) {
        const cookieValue = JSON.stringify(value);
        document.cookie = `${name}=${encodeURIComponent(cookieValue)}; max-age=${3.156e+8}; path=/`;
    }
}
function getCookie(name) { // 쿠키 가져오기
    const cookieData = document.cookie.split('; ');
    let cookieValue;

    for(let i = 0 ; i < cookieData.length ; i++) {
        if(cookieData[i].split('=')[0] == name) {
            cookieValue = cookieData[i].split('=')[1];
        }
    }

    return JSON.parse(decodeURIComponent(cookieValue));
}

// 페이지 로드 시 쿠키 확인 및 메시지 표시
window.onload = function() {
    settingProduct();

    // 쿠키

    checkCookies = document.cookie;
    if(checkCookies) {
        ifSelectLanguage = getCookie('ifSelectLanguage'); // 언어 관련 저장된 쿠키가 있는지 확인
        if(ifSelectLanguage == false) { // 언어 선택을 하지 않고 쿠키가 저장되었을 경우
            appearPopup(2, 0);
            productDefaultSetting();
        }
        else loadGame();
    } else {
        appearPopup(2, 0);
        productDefaultSetting();
    }

    updateNews();
    gameMenuDefaultSetting();
};


/*
else
                  {
                     ctx.globalAlpha=1;
                     let s=256*Game.BigCookieSize;
                     let x=Game.cookieOriginX;
                     let y=Game.cookieOriginY;
                     ctx.save();
                     ctx.translate(x,y);
                     if (Game.season=='easter')
                     {
                        let nestW=304*0.98*Game.BigCookieSize;
                        let nestH=161*0.98*Game.BigCookieSize;
                        ctx.drawImage(Pic('nest.png'),-nestW/2,-nestH/2+130,nestW,nestH);
                     }
                     //ctx.rotate(((Game.startDate%360)/360)*Math.PI*2);
                     ctx.drawImage(Pic('perfectCookie.png'),-s/2,-s/2,s,s);
                     
                     if (goodBuff && Game.prefs.particles)//sparkle
                     {
                        ctx.globalCompositeOperation='lighter';
                        for (let i=0;i<1;i++)
                        {
                           ctx.globalAlpha=Math.random()*0.65+0.1;
                           let size=Math.random()*30+5;
                           let a=Math.random()*Math.PI*2;
                           let d=s*0.9*Math.random()/2;
                           ctx.drawImage(Pic('glint.jpg'),-size/2+Math.sin(a)*d,-size/2+Math.cos(a)*d,size,size);
                        }
                     }
                     
                     ctx.restore();
                     Timer.track('big cookie');
                  }
                     */