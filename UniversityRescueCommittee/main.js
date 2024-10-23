/*
    언어
*/
let ifSelectLanguage = false;
/*
    학생 수치
*/
let student = 0; // 현재 보유 학생

let addClickDefaultValue = 1;
let addClickBonusValue = 0;
let addClickTotalValue = 1; // 클릭당 추가 학생

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
let returningLastTime = 0;
/*
    업그레이드
*/
let arrUpgradeId = []; // 남아있는 숫자가 강화 메뉴에 등장, 구매하면 해당 강화의 숫자는 제거됨
let arrUpgradeEnable;
let_arrUpgradeEnable();
function let_arrUpgradeEnable() { // 강화가 재반복 등장하는 것을 막기 위한 배열
    arrUpgradeEnable = [
        [false, false, false, false, false, false, false, false, false, false], // 0 학생 강화
        [false, false, false, false, false, false, false, false, false, false], // 1 학교 시설 강화
        [false, false, false, false, false, false, false, false, false, false], // 2 교통 시설 강화
        [false, false, false, false, false, false, false, false, false, false], // 3 주거지 강화
        [false, false, false, false, false, false, false, false, false, false], // 4 은행 강화
        [false, false, false, false, false, false, false, false, false, false], // 5 공항 강화
        [false, false, false, false, false, false, false, false, false, false], // 6 기업 강화
        [false, false, false, false, false, false, false, false, false, false], // 7 정부 강화
        [false, false, false, false, false, false, false, false, false, false], // 8 세계 정부 강화
        [false, false, false, false, false, false, false, false, false, false], // 9 복제 실험실 강화
        [false, false, false, false, false, false, false, false, false, false], // 10 우주정거장 강화
        [false, false, false, false, false, false, false, false, false, false], // 11 포털
        [false, false, false, false, false, false, false, false, false, false], // 12 블랙홀
        [false, false, false, false, false, false, false, false, false, false], // 13 타임머신
        [false, false, false, false, false, false, false, false, false, false], // 14 평행 세계
        [false, false, false, false, false, false, false, false, false, false], // 15 또 다른 나
        [false, false, false, false, false, false, false, false, false, false] // 16 클릭
    ];
}
let arrUpgradePrice = [ // 강화 가격 | 고정
    [50*10, 50*100, 50*5000, 50*25e4, 50*2500e4, 50*25e8, 50*1.25e12, 50*625e12, 50*62.5e16, 50*6.25e20], // 0 학생 강화
    [160*10, 160*100, 160*5000, 160*25e4, 160*2500e4, 160*25e8, 160*1.25e12, 160*625e12, 160*62.5e16, 160*6.25e20], // 1 학교 시설 강화
    [2700*10, 2700*100, 2700*5000, 2700*25e4, 2700*2500e4, 2700*25e8, 2700*1.25e12, 2700*625e12, 2700*62.5e16, 2700*6.25e20], // 2 교통 시설 강화
    [3.9e4*10, 3.9e4*100, 3.9e4*5000, 3.9e4*25e4, 3.9e4*2500e4, 3.9e4*25e8, 3.9e4*1.25e12, 3.9e4*625e12, 3.9e4*62.5e16, 3.9e4*6.25e20], // 3 주거지 강화
    [52e4*10, 52e4*100, 52e4*5000, 52e4*25e4, 52e4*2500e4, 52e4*25e8, 52e4*1.25e12, 52e4*625e12, 52e4*62.5e16, 52e4*6.25e20], // 4 은행 강화
    [670e4*10, 670e4*100, 670e4*5000, 670e4*25e4, 670e4*2500e4, 670e4*25e8, 670e4*1.25e12, 670e4*625e12, 670e4*62.5e16, 670e4*6.25e20], // 5 공항 강화
    [8500e4*10, 8500e4*100, 8500e4*5000, 8500e4*25e4, 8500e4*2500e4, 8500e4*25e8, 8500e4*1.25e12, 8500e4*625e12, 8500e4*62.5e16, 8500e4*6.25e20], // 6 기업 강화
    [10.8e8*10, 10.8e8*100, 10.8e8*5000, 10.8e8*25e4, 10.8e8*2500e4, 10.8e8*25e8, 10.8e8*1.25e12, 10.8e8*625e12, 10.8e8*62.5e16, 10.8e8*6.25e20], // 7 정부 강화
    [229e8*10, 229e8*100, 229e8*5000, 229e8*25e4, 229e8*2500e4, 229e8*25e8, 229e8*1.25e12, 229e8*625e12, 229e8*62.5e16, 229e8*6.25e20], // 8 세계 정부 강화
    [3630e8*10, 3630e8*100, 3630e8*5000, 3630e8*25e4, 3630e8*2500e4, 3630e8*25e8, 3630e8*1.25e12, 3630e8*625e12, 3630e8*62.5e16, 3630e8*6.25e20], // 9 복제 실험실 강화
    [5.18e12*10, 5.18e12*100, 5.18e12*5000, 5.18e12*25e4, 5.18e12*2500e4, 5.18e12*25e8, 5.18e12*1.25e12, 5.18e12*625e12, 5.18e12*62.5e16, 5.18e12*6.25e20], // 10 우주정거장 강화
    [70.7e12*10, 70.7e12*100, 70.7e12*5000, 70.7e12*25e4, 70.7e12*2500e4, 70.7e12*25e8, 70.7e12*1.25e12, 70.7e12*625e12, 70.7e12*62.5e16, 70.7e12*6.25e20], // 11 포털
    [951e12*10, 951e12*100, 951e12*5000, 951e12*25e4, 951e12*2500e4, 951e12*25e8, 951e12*1.25e12, 951e12*625e12, 951e12*62.5e16, 951e12*6.25e20], // 12 블랙홀
    [1.29e16*10, 1.29e16*100, 1.29e16*5000, 1.29e16*25e4, 1.29e16*2500e4, 1.29e16*25e8, 1.29e16*1.25e12, 1.29e16*625e12, 1.29e16*62.5e16, 1.29e16*6.25e20], // 13 타임머신
    [26.7e16*10, 26.7e16*100, 26.7e16*5000, 26.7e16*25e4, 26.7e16*2500e4, 26.7e16*25e8, 26.7e16*1.25e12, 26.7e16*625e12, 26.7e16*62.5e16, 26.7e16*6.25e20], // 14 평행 세계
    [428e16*10, 428e16*100, 428e16*5000, 428e16*25e4, 428e16*2500e4, 428e16*25e8, 428e16*1.25e12, 428e16*625e12, 428e16*62.5e16, 428e16*6.25e20], // 15 또 다른 나
    [1e2*50, 1e3*50, 1e4*50, 1e6*50, 1e8*50, 1e10*50, 1e13*50, 1e16*50, 1e19*50, 1e23*50] // 16 클릭
];
let arrProductUpgradePurchaseBool;
let_arrProductUpgradePurchaseBool();
function let_arrProductUpgradePurchaseBool() { // 구매가 완료된 강화 ID 번호
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
}
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

let arrProductPrice; // 증축 가격 | 고정
let_arrProductPrice();
function let_arrProductPrice() {
    arrProductPrice = [
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
}

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
let arrProductAddFinalValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 배율 적용된 초당 증가량 * 개수

let arrProductStatsProductionTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 증축 정보: 지금까지 입학한 학생 수
let productAddPerSecondTotal = 0; // 모든 증축의 초당 증가량을 합한 값

let arrProductUpgradeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 증축 업그레이드 완료된 개수
let arrProductUpgradeCountMax = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // 증축 업그레이드 최대 개수

let arrProductBackgroundEnable = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] // 고정
let arrProductRowIconCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 오프라인 생산
let lastSaveTime;
let offlineTimeDiff;
let offlineEfficiency = 0.5;
let maxOfflineTime = 3600 * 24;
let offlineEarnings;
// 기억 왜곡
let arrMemoryId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 고정
let arrMemoryEnable = [false, false, false, false, false, false, false, false, false, false];
let arrMemoryPrice = [1, 5, 100, 500, 1000, 2500, 10000, 25000, 100000, 250000]; // 고정
// 도전 과제
let arrAchievementId = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
    200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
    300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424,
    1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009,
    1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109,
    1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209,
    1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309,
    1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409,
    1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509,
    1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609,
    1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709,
    1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809,
    1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109,
    2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209,
    2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309,
    2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409,
    2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509,
    3000, 3001, 3002, 3003, 3004, 3100, 3101, 3102, 3103, 3104,
    3200, 3201, 3202, 3203, 3204, 3300, 3301, 3302, 3303, 3304,
    3400, 3401, 3402, 3403, 3404, 3500, 3501, 3502, 3503, 3504,
    3600, 3601, 3602, 3603, 3604, 3700, 3701, 3702, 3703, 3704,
    3800, 3801, 3802, 3803, 3804, 3900, 3901, 3902, 3903, 3904,
    4000, 4001, 4002, 4003, 4004, 4100, 4101, 4102, 4103, 4104,
    4200, 4201, 4202, 4203, 4204, 4300, 4301, 4302, 4303, 4304,
    4400, 4401, 4402, 4403, 4404, 4500, 4501, 4502, 4503, 4504,
    5000, 5001, 5002, 5100, 5101, 5102, 5200, 5201, 5202, 5300, 5301, 5302,
    5400, 5401, 5402, 5500, 5501, 5502, 5600, 5601, 5602, 5700, 5701, 5702,
    5800, 5801, 5802, 5900, 5901, 5902, 6000, 6001, 6002, 6100, 6101, 6102,
    6200, 6201, 6202, 6300, 6301, 6302, 6400, 6401, 6402, 6500, 6501, 6502,
    7000, 7001, 7002, 7003, 7004, 7005, 7006, 7007, 7008, 7009, 7010, 7011, 7012, 7013, 7014, 7015,
    7100, 7101, 7102, 7103, 7104, 7105, 7106, 7107,
    7200, 7201, 7202, 7203, 7204, 7205, 7206, 7207,
    7300, 7301, 7302, 7303, 7304,
    7400
]
let arrAchievementEnable = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 0 ~ 15
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 100 ~ 124
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 200 ~ 224
    [false, false, false, false, false, false, false, false, false, false], // 300 ~ 309
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 400 ~ 204
    [], [], [], [], [], // 500 ~ 999
    [false, false, false, false, false, false, false, false, false, false], // 1000 ~ 1009
    [false, false, false, false, false, false, false, false, false, false], // 1100 ~ 1109
    [false, false, false, false, false, false, false, false, false, false], // 1200 ~ 1209
    [false, false, false, false, false, false, false, false, false, false], // 1300 ~ 1309
    [false, false, false, false, false, false, false, false, false, false], // 1400 ~ 1409
    [false, false, false, false, false, false, false, false, false, false], // 1500 ~ 1509
    [false, false, false, false, false, false, false, false, false, false], // 1600 ~ 1609
    [false, false, false, false, false, false, false, false, false, false], // 1700 ~ 1709
    [false, false, false, false, false, false, false, false, false, false], // 1800 ~ 1809
    [false, false, false, false, false, false, false, false, false, false], // 1900 ~ 1909
    [false, false, false, false, false, false, false, false, false, false], // 2000 ~ 2009
    [false, false, false, false, false, false, false, false, false, false], // 2100 ~ 2109
    [false, false, false, false, false, false, false, false, false, false], // 2200 ~ 2209
    [false, false, false, false, false, false, false, false, false, false], // 2300 ~ 2309
    [false, false, false, false, false, false, false, false, false, false], // 2400 ~ 2409
    [false, false, false, false, false, false, false, false, false, false], // 2500 ~ 2509
    [], [], [], [], // 2600 ~ 2999
    [false, false, false, false, false], // 3000 ~ 3004
    [false, false, false, false, false], // 3100 ~ 3104
    [false, false, false, false, false], // 3200 ~ 3204
    [false, false, false, false, false], // 3300 ~ 3304
    [false, false, false, false, false], // 3400 ~ 3404
    [false, false, false, false, false], // 3500 ~ 3504
    [false, false, false, false, false], // 3600 ~ 3604
    [false, false, false, false, false], // 3700 ~ 3704
    [false, false, false, false, false], // 3800 ~ 3804
    [false, false, false, false, false], // 3900 ~ 3904
    [false, false, false, false, false], // 4000 ~ 4004
    [false, false, false, false, false], // 4100 ~ 4104
    [false, false, false, false, false], // 4200 ~ 4204
    [false, false, false, false, false], // 4300 ~ 4304
    [false, false, false, false, false], // 4400 ~ 4404
    [false, false, false, false, false], // 4500 ~ 4504
    [], [], [], [], // 4600 ~ 4999
    [false, false, false], // 5000 ~ 5002
    [false, false, false], // 5100 ~ 5102
    [false, false, false], // 5200 ~ 5202
    [false, false, false], // 5300 ~ 5302
    [false, false, false], // 5400 ~ 5402
    [false, false, false], // 5500 ~ 5502
    [false, false, false], // 5600 ~ 5602
    [false, false, false], // 5700 ~ 5702
    [false, false, false], // 5800 ~ 5802
    [false, false, false], // 5900 ~ 5902
    [false, false, false], // 6000 ~ 6002
    [false, false, false], // 6100 ~ 6102
    [false, false, false], // 6200 ~ 6202
    [false, false, false], // 6300 ~ 6302
    [false, false, false], // 6400 ~ 6402
    [false, false, false], // 6500 ~ 6502
    [], [], [], [], // 6600 ~ 6999
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 7000 ~ 7015
    [false, false, false, false, false, false, false, false], // 7100 ~ 7107
    [false, false, false, false, false, false, false, false], // 7200 ~ 7207
    [false, false, false, false, false], // 7300 ~ 7304
    [false], // 7400
    // [false] // 7500
];

/*
    언어
*/
let lang = 'KO';
loadLanguage(lang);
function loadLanguage(lang) { // 언어에 따른 텍스트 불러오기
    console.log('load language ' + lang)
    const script = document.createElement('script');
    script.src = './lang/' + lang + '.js';
    script.onload = function() {
        if(lang == 'KO') translations = window.translationsKO;
        if(lang == 'EN') translations = window.translationsEN;
        if(lang == 'JA') translations = window.translationsJA;

        changeLanguage();
    }
    document.body.appendChild(script);
}

// 언어
let formatNumberSetting = 1;

function changeLanguage() {

    document.getElementById('showNewsTitle').innerHTML = translations.newsTitle;
    document.getElementById('rightMenu').innerHTML = translations.menuRightTitle;
    document.getElementById('upgradeSubtitle').innerHTML = translations.menuSubtitleUpgrade;
    document.getElementById('productSubtitle').innerHTML = translations.menuSubtitleProduct;

    updateShowStudent();
    
    upgradeExpand.textContent = translations.upgradeMenuButtonFold;
}
// 이름 바꾸기
document.getElementById('universityName').addEventListener('click', changeUniversityName);
function changeUniversityName() {
    appearPopup(2, 1);
}

// 학교 로고 클릭 이벤트
let universityLogo = document.getElementById('universityLogo');
let logoBundle = document.getElementById('logoBundle');
universityLogo.addEventListener('click', (event) => {
    // 학생 수 더하기
    addClickTotalValue = addClickDefaultValue + (addPerSecondStudent * addClickBonusValue) * returningProductionMultiple;
    student += addClickTotalValue;
    // 통계
    statsTotalStudent += addClickTotalValue;
    statsStudent += addClickTotalValue;
    statsTotalAddClickStudent += addClickTotalValue;
    statsAddClickStudent += addClickTotalValue;
    statsTotalClickCount++;
    statsClickCount++;
    // 갱신
    updateShowStudent();
    // 도전 과제
    achievementClickCount(statsTotalClickCount);
    achievementClickStudent(statsAddClickStudent);

    void universityLogo.offsetWidth;
    universityLogo.classList.add('bounce');
    universityLogo.addEventListener('animationend', () => {
        universityLogo.classList.remove('bounce');
    });
    
    const floatingText = document.createElement('div');
    floatingText.classList.add('floatingUp');
    floatingText.innerHTML = '+' + formatNumber(addClickTotalValue);

    const rect = logoBundle.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y - 48}px`;

    logoBundle.appendChild(floatingText);

    setTimeout(() => {
        floatingText.remove();
    }, 2000);
    
    const soundClick = new Audio(`sound/StudentClick${Math.floor(Math.random() * 3) + 1}.mp3`);

    soundClick.volume = soundEffectVolume.value;
    soundClick.play();
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
// popupInput.value = translations.universityMyName;
const popupDescription = document.createElement('div'); // 설명
popupDescription.id = 'popupBoxDescription';
popupDescription.className = 'description';
const popupButton = document.createElement('div'); // 버튼
popupButton.id = 'popupBoxButton';
popupButton.className = 'button';

// 팝업 이벤트 생성
function popupAddEvent(type) {

    const soundAppear = new Audio('sound/AppearPopup.mp3');
    soundAppear.volume = soundEffectVolume.value;
    soundAppear.play();

    if(type == 'common') {
        popupButton.addEventListener('click', popupEventCommon);
    }
    if(type == 'name') {
        popupInput.addEventListener('mouseenter', () => { popupInput.style.outline = '1px solid #b9b9b9'; });
        popupInput.addEventListener('mouseleave', () => { popupInput.style.outline = '1px solid #888888'; });
        popupInput.addEventListener('focus', () => { popupInput.style.outline = '2px solid #3D90F4'; });
        popupButton.addEventListener('click', popupEventName);
    }
    if(type == 'returning') {
        popupButton.addEventListener('click', popupEventReturning);
    }
}
// addEventListener 팝업창 우측 상단 닫기 버튼
popupCloseButton.addEventListener('click', () => {
    const soundClose = new Audio('sound/ButtonClose.mp3');
    soundClose.volume = soundEffectVolume.value;
    soundClose.play();

    removePopup();
});
function popupEventCommon() {
    removePopup();
    popupButton.removeEventListener('click', popupEventCommon);
}
function popupEventName() {
    if(popupInput.value <= 0) {
        popupInput.style.outline = '3px solid #FF0000';
    } else {
        document.getElementById('universityName').innerHTML = popupInput.value + translations.universityNameSuffix;

        removePopup();
        popupButton.removeEventListener('click', popupEventName);
    }
}
function popupEventReturning() {
    removePopup();
    returningAnimation();
    popupButton.removeEventListener('click', popupEventReturning);
}
function appearPopup(i, j) { // 팝업창 생성
    console.log('popup' + i + ' ' + j);
    // 초기화
    resetPopup();
    // 제목
    popupTitle.innerHTML = translations.popupTitle[i][j];
    popupBox.appendChild(popupTitle);

    if(i == 0) { // 일회용 증축 팝업
        // 닫기 버튼
        popupBox.appendChild(popupCloseButton);
        // 설명
        popupDescription.innerHTML = translations.popupDescription[i][j];
        popupBox.appendChild(popupDescription);
        // 버튼
        popupButton.innerHTML = translations.popupButton_text[0];
        popupBox.appendChild(popupButton);
        // 이벤트 추가
        popupAddEvent('common');
    } else if(i == 1) { // 일회용 팝업
        if(j == 0) { // 처음 시작 시
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 1) { // 최초 회귀
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 2) { // 엔딩
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
    } else if(i == 2) { // 재사용 팝업
        if(j == 0) { // 언어 변경
            popupSelectLanguage();
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
        }
        if(j == 1) { // 이름 바꾸기
            // 닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 입력창
            popupBox.appendChild(popupInput);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[1];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('name');
        }
        if(j == 2) { // 잠수
            // 닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            popupDescription.querySelector('#showOfflineEarnings').innerHTML = `${formatNumber(offlineEarnings)}`;
            popupDescription.querySelector('#showOfflineTimeDiff').innerHTML = `${offlineTimeDiff}`;
            popupDescription.querySelector('#showOfflineEfficiency').innerHTML = `${Math.floor(offlineEfficiency * 100)}`;
            popupDescription.querySelector('#showMaxOfflineTime').innerHTML = `${Math.floor(maxOfflineTime / 3600)}`;
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[0];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('common');
        }
        if(j == 3) { // 회귀
            //닫기 버튼
            popupBox.appendChild(popupCloseButton);
            // 설명
            popupDescription.innerHTML = translations.popupDescription[i][j];
            popupBox.appendChild(popupDescription);
            // 버튼
            popupButton.innerHTML = translations.popupButton_text[2];
            popupBox.appendChild(popupButton);
            // 이벤트 추가
            popupAddEvent('returning');
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

    document.getElementById('popupLanguageKO').addEventListener('mouseover', () => { lang = 'KO'; loadLanguage(lang); changeLanguageText(); });
    document.getElementById('popupLanguageKO').addEventListener('click', () => { checkSelectLanguage(); });
    document.getElementById('popupLanguageEN').addEventListener('mouseover', () => { lang = 'EN'; loadLanguage(lang); changeLanguageText(); });
    document.getElementById('popupLanguageEN').addEventListener('click', () => { checkSelectLanguage(); });
    document.getElementById('popupLanguageJA').addEventListener('mouseover', () => { lang = 'JA'; loadLanguage(lang); changeLanguageText(); });
    document.getElementById('popupLanguageJA').addEventListener('click', () => { checkSelectLanguage(); });
}
function checkSelectLanguage() {

    if(ifSelectLanguage == false) {
        ifSelectLanguage = true;
        appearPopup(1, 0);
    }
    else {
        removePopup();
        if(localStorage.length > 0) loadGame();
    }
}
function changeLanguageText() {
    popupTitle.innerHTML = translations.popupTitle[2][0];
    popupDescription.innerHTML = translations.popupDescription[2][0];
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
let newsType = 0;
let newsSetTimeout;
let newsSetInterval;
function updateNews() {
    showNewsContents.classList.remove('fadeIn');
    showNewsContents.classList.add('fadeOut');

    clearTimeout(newsSetTimeout);
    clearInterval(newsSetInterval);
    
    newsSetTimeout = setTimeout(() => {
        let newsContentsList = [];
        let index = 0;

        
        if(statsStudent < 1e4) index = 0;
        else if(statsStudent < 1e12) index = 1;
        else if(statsStudent < 1e24) index = 2;
        else index = 3;
        
        translations.newsContents[0][index].forEach(content => { newsContentsList.push(content); });

        for(let i = 0 ; i < arrProductGetCount.length - 1 ; i++){ if(arrProductGetCount[i + 1] >= 1) translations.newsContents[1][i].forEach(content => { newsContentsList.push(content); }); }

        showNewsContents.innerHTML = newsContentsList[Math.floor(Math.random() * newsContentsList.length)];

        newsType++;
        if(newsType >= 2) newsType = 0;

        showNewsContents.classList.remove('fadeOut');
        showNewsContents.classList.add('fadeIn');
    }, 1000);

    newsSetInterval = setInterval(() => { updateNews(); }, 1000 * 6);
}
showNewsContents.addEventListener('click', () => {
    const soundNewsFlipping = new Audio(`sound/NewsFlipping${Math.floor(Math.random() * 4) + 1}.mp3`);
    soundNewsFlipping.volume = soundEffectVolume.value;
    soundNewsFlipping.play();

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
        productBackgroundNumber_2_setTimeout = setTimeout(() => { updateBackgroundVariation(i); }, 1000 * 60 * 5);
    }
    if(i == 5) {
        for(let j = 0 ; j < 3 ; j++) if(productBackgroundNumber_5 == `${j}`) document.getElementById('productRow_5').style.background = `url('img/background/product/5_${j}.png') repeat-x`;
        productBackgroundNumber_5++;
        if(productBackgroundNumber_5 >= 3) productBackgroundNumber_5 = 0;
        productBackgroundNumber_5_setTimeout = setTimeout(() => { updateBackgroundVariation(i); }, 1000 * 60 * 5);
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
                appendStateImg.style.top = `${32 * Math.floor(j % 3)}px`;
                appendStateImg.style.left = `${-16 + 8 * j}px`
                appendStateImg.style.backgroundPositionX = `${-64 * Math.floor(Math.random() * 7)}px`;
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
                appendStateImg.style.left = `${32 * j}px`

            }

            document.getElementById(`productBackground_${i}`).appendChild(appendStateImg);
        }
        arrProductRowIconCount[i] = arrProductGetCount[i];
    }
}
/*
    설정 메뉴
*/
const soundEffectVolume = document.getElementById('soundEffectVolume');
const soundBgmVolume = document.getElementById('soundBgmVolume');
const buttonSave = document.getElementById('buttonSave');
const buttonSaveFileExport = document.getElementById('buttonSaveFileExport');
const buttonSaveFileImport = document.getElementById('buttonSaveFileImport');
const buttonChangeLanguage = document.getElementById('buttonChangeLanguage');
const buttonFormatNumberKr = document.getElementById('formatNumberSettingKr');
const buttonFormatNumberLongEn = document.getElementById('formatNumberSettingLongEn');
const buttonFormatNumberShortEn = document.getElementById('formatNumberSettingShortEn');

function pageSetting() {
    // 기본
    document.getElementById('pageSettingTitle').innerHTML = translations.menuSettingText_title;
    document.getElementById('pageSettingCommon').innerHTML = translations.menuSettingText_subtitleCommon;
    document.getElementById('pageSettingNameSave').innerHTML = translations.menuStatsText_save;
    buttonSave.innerHTML = translations.menuStatsText_buttonSave;
    buttonSaveFileExport.innerHTML = translations.menuStatsText_buttonExport;
    buttonSaveFileImport.innerHTML = translations.menuStatsText_buttonImport;
    document.getElementById('pageSettingNameLanguage').innerHTML = translations.menuStatsText_Language;
    buttonChangeLanguage.innerHTML = translations.menuStatsText_buttonChangeLanguage;
    
    // * 세부 *
    // 소리
    document.getElementById('soundVolumeName').innerHTML = '소리';
    document.getElementById('pageSettingDetail').innerHTML = translations.menuStatsText_subtitleDetail;
    document.getElementById('soundEffectVolumeText').innerHTML = translations.menuStatsText_soundEffectName;
    document.getElementById('soundBgmVolumeText').innerHTML = translations.menuStatsText_soundBgmName;
    changeSoundEffectVolume();
    changeSoundBgmVolume();
    document.getElementById('soundNotice').innerHTML = translations.menuStatsText_soundNotice;

    // 표기 단위
    document.getElementById('formatNumberName').innerHTML = '표기 단위';
    document.getElementById('formatNumberSettingKr').innerHTML = '한글';
    document.getElementById('formatNumberSettingLongEn').innerHTML = '영어(길게)';
    document.getElementById('formatNumberSettingShortEn').innerHTML = '영어(짧게)';
    document.getElementById('formatNumberNotice').innerHTML = '숫자의 단위를 선택할 수 있습니다.';
    buttonFormatNumber();
    
}
buttonSave.addEventListener('click', () => {
    const soundSave = new Audio('sound/GameSave.mp3');
    soundSave.volume = soundEffectVolume.value;
    soundSave.play();
    saveGame();
});
buttonSaveFileExport.addEventListener('click', () => {
    exportSaveFile();
});
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
buttonSaveFileImport.addEventListener('click', () => {
    importSaveFile();
});
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
buttonChangeLanguage.addEventListener('click', () => {
    appearPopup(2, 0);
});

soundEffectVolume.addEventListener('input', () => changeSoundEffectVolume());
function changeSoundEffectVolume() {
    const textVolume = document.getElementById('soundEffectVolumeValue');
    if(Math.floor(soundEffectVolume.value * 100) == 0) textVolume.innerHTML = `<b class="fcDefault">꺼짐</b>`;
    if(Math.floor(soundEffectVolume.value * 100) > 0) textVolume.innerHTML = `${(soundEffectVolume.value * 100).toFixed(0)}%`;
}
soundBgmVolume.addEventListener('input', () => changeSoundBgmVolume());
function changeSoundBgmVolume() {
    const textVolume = document.getElementById('soundBgmVolumeValue');
    if(Math.floor(soundBgmVolume.value * 100) == 0) textVolume.innerHTML = `<b class="fcDefault">꺼짐</b>`;
    if(Math.floor(soundBgmVolume.value * 100) > 0) textVolume.innerHTML = `${(soundBgmVolume.value * 100).toFixed(0)}%`;
}
buttonFormatNumberKr.addEventListener('click', () => {
    formatNumberSetting = 1;
    buttonFormatNumber();
});
buttonFormatNumberLongEn.addEventListener('click', () => {
    formatNumberSetting = 2;
    buttonFormatNumber();
});
buttonFormatNumberShortEn.addEventListener('click', () => {
    formatNumberSetting = 3;
    buttonFormatNumber();
});
function buttonFormatNumber() {
    settingProductMenu('price');

    buttonFormatNumberKr.classList.remove('select');
    buttonFormatNumberLongEn.classList.remove('select');
    buttonFormatNumberShortEn.classList.remove('select');

    if(formatNumberSetting == 1) buttonFormatNumberKr.classList.add('select');
    if(formatNumberSetting == 2) buttonFormatNumberLongEn.classList.add('select');
    if(formatNumberSetting == 3) buttonFormatNumberShortEn.classList.add('select');
}
/*
    통계 메뉴
*/
function pageStats() {
    document.getElementById('pageStatsTitle').innerHTML = translations.menuStatsText_title;
    document.getElementById('pageStatsCommon').innerHTML = translations.menuStatsText_subtitleCommon;
    document.getElementById('pageStatsUpgrade').innerHTML = translations.menuStatsText_subtitleUpgrade;
    document.getElementById('pageStatsAchievement').innerHTML = translations.menuStatsText_subtitleAchievement;
}
let updatePageStatsSetTimeout;
function updatePageStats() { // 업데이트
    // 기본 항목
    document.getElementById('statsTotalStudent').innerHTML = translations.menuStatsText_statsList[0](formatNumber(statsTotalStudent));
    document.getElementById('statsStudent').innerHTML = translations.menuStatsText_statsList[1](formatNumber(statsStudent), percentageClac(statsTotalStudent, statsStudent));
    document.getElementById('showPerSecondStudent').innerHTML = translations.menuStatsText_statsList[2](formatNumber(addPerSecondStudent));
    document.getElementById('statsTotalPerSecondStudent').innerHTML = translations.menuStatsText_statsList[3](formatNumber(statsTotalAddPerSecondStudent));
    document.getElementById('statsPerSecondStudent').innerHTML = translations.menuStatsText_statsList[4](formatNumber(statsAddPerSecondStudent), percentageClac(statsTotalAddPerSecondStudent, statsAddPerSecondStudent));
    document.getElementById('showClickStudent').innerHTML = translations.menuStatsText_statsList[5](formatNumber(addClickTotalValue));
    document.getElementById('statsTotalClickStudent').innerHTML = translations.menuStatsText_statsList[6](formatNumber(statsTotalAddClickStudent));
    document.getElementById('statsClickStudent').innerHTML = translations.menuStatsText_statsList[7](formatNumber(statsAddClickStudent), percentageClac(statsTotalAddClickStudent, statsAddClickStudent));
    document.getElementById('statsTotalClickCount').innerHTML = translations.menuStatsText_statsList[8](formatNumber(statsTotalClickCount, true));
    document.getElementById('statsClickCount').innerHTML = translations.menuStatsText_statsList[9](formatNumber(statsClickCount, true), percentageClac(statsTotalClickCount, statsClickCount));
    document.getElementById('statsTotalProductCount').innerHTML = translations.menuStatsText_statsList[10](formatNumber(statsTotalProductCount, true));
    document.getElementById('statsProductCount').innerHTML = translations.menuStatsText_statsList[11](formatNumber(statsProductCount, true), percentageClac(statsTotalProductCount, statsProductCount));
    document.getElementById('statsReturningCount').innerHTML = translations.menuStatsText_statsList[12](formatNumber(statsReturningCount, true));
    
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
        if(arrAchievementEnable[arr1][arr2] == true) {
            if(10 > arr1 && arr1 >= 0) {
                createDiv.style.background = `url('img/icons_achievement_1.png')`;
                createDiv.style.backgroundPositionX = `${-48 * arr2}px`;
                createDiv.style.backgroundPositionY = `${-48 * arr1}px`;
            }
            else if(70 > arr1 && arr1 >= 10) {
                createDiv.style.background = `url('img/icons_achievement_2.png')`;
                createDiv.style.backgroundPositionX = `${-48 * arr2}px`;
                createDiv.style.backgroundPositionY = `${-48 * (arr1 - 10)}px`;
            }
        } else {
            createDiv.style.background = `url('img/icon_lock.png')`;
        }

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
// 도전 과제 세팅
function settingAchievementTooltp(i, j, number) {
    // 선언
    const tooltip = document.getElementById('specialTooltip');
    const achievement = document.getElementById(`achievement_${number}`);

    // 가격
    tooltip.querySelector('.price').innerHTML = '';

    // 태그
    tooltip.querySelector('.tagList').innerHTML = '';

    // 해금 여부
    if(arrAchievementEnable[i][j] == true) {
        // 아이콘
        if(10 > i && i >= 0) {
            tooltip.querySelector('.icon').style.background = `url('img/icons_achievement_1.png')`;
            tooltip.querySelector('.icon').style.backgroundPositionX = `${-48 * j}px`;
            tooltip.querySelector('.icon').style.backgroundPositionY = `${-48 * i}px`;
        }
        else if(70 > i && i >= 10) {
            tooltip.querySelector('.icon').style.background = `url('img/icons_achievement_2.png')`;
            tooltip.querySelector('.icon').style.backgroundPositionX = `${-48 * j}px`;
            tooltip.querySelector('.icon').style.backgroundPositionY = `${-48 * (i - 10)}px`;
        }
        // 이름
        tooltip.querySelector('.name').innerHTML = translations.achievementName[i][j];
        // 태그
        appendTag('special', 'a_normal');
        appendTag('special', 'a_lock');
        // 설명
        const TD = tooltip.querySelector('.description');
        if(i == 0) { TD.innerHTML = translations.achievementDescription[0](formatNumber(10 ** (6 + (6 * j)), true)); }
        if(i == 1) { TD.innerHTML = translations.achievementDescription[1](formatNumber(10 ** (4 + (4 * j)), true)); }
        if(i == 2) { TD.innerHTML = translations.achievementDescription[2](formatNumber(10 ** (2 + (2 * j)), true)); }
        if(i == 3) { TD.innerHTML = translations.achievementDescription[3](formatNumber(((j % 2 == 0 ? 1 : 5)) * (10 ** (2 + Math.floor(j / 2))), true)); }
        if(i == 4) { TD.innerHTML = translations.achievementDescription[4](formatNumber(10 ** (3 + (3 * j)), true)); }
        if(29 >= i && i >= 10) { TD.innerHTML = translations.achievementDescription[10]((i - 10), formatNumber(j == 0 ? 10 : 50 * j, true)); }
        if(49 >= i && i >= 30) { TD.innerHTML = translations.achievementDescription[11]((i - 30), formatNumber(10 ** (6 + (1 * j) + (2 * (i - 30))), true)); }
        if(69 >= i && i >= 50) { TD.innerHTML = translations.achievementDescription[12]((i - 50), formatNumber(3 * (1 + j), true)); }
        if(i == 70) { TD.innerHTML = translations.achievementDescription[13](j); }
        if(i == 71) { TD.innerHTML = translations.achievementDescription[14](formatNumber(j == 0 ? 50 : 100 * j, true)); }
        if(i == 72) { TD.innerHTML = translations.achievementDescription[15](formatNumber(j == 0 ? 10 : 50 * j, true)); }
        if(i == 73) { TD.innerHTML = translations.achievementDescription[16](formatNumber(j == 0 ? 1 : 2 * j, true)); }
        if(i == 74) { TD.innerHTML = translations.achievementDescription[17]; }
        if(i == 75) { 
            if(j == 0) TD.innerHTML = translations.achievementDescription[18](12, 9);
        }
        // 구분선
        tooltip.querySelector('.bottomLine').style.display = 'block';
        // 배경담
        tooltip.querySelector('.flavorText').innerHTML = '';
    } else {
        // 아이콘
        tooltip.querySelector('.icon').style.background = `url('img/icon_lock.png')`;
        // 이름
        tooltip.querySelector('.name').innerHTML = `???`;
        // 태그
        appendTag('special', 'a_normal');
        appendTag('special', 'a_unlock');
        // 설명
        tooltip.querySelector('.description').innerHTML = `???`;
        // 구분선
        tooltip.querySelector('.bottomLine').style.display = 'none';
        // 배경담
        tooltip.querySelector('.flavorText').innerHTML = '';
    }

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
    document.getElementById('pageInfoTitle').innerHTML = translations.menuInfoText_title;
    document.getElementById('pageInfoIntroduce').innerHTML = translations.menuInfoText_subtitleIntroduce;
    document.getElementById('introductText_1').innerHTML = translations.menuInfoText_introduceText_1;
    document.getElementById('introductText_2').innerHTML = translations.menuInfoText_introduceText_2;
    document.getElementById('pageInfoCredit').innerHTML = translations.menuInfoText_subtitleCredit;
    document.getElementById('pageInfoPatchNote').innerHTML = translations.menuInfoText_subtitlePatchNote;
}
/*
    회귀 메뉴
*/
const buttonReturning = document.getElementById('buttonReturning');
let updatePageStatsInterval;
let returningMemorySetInterval;
function pageReturning() {
    document.getElementById('pageReturningTitle').innerHTML = translations.menuReturningText_title;
    document.getElementById('pageReturningPanelLevel').innerHTML = translations.menuReturningText_panelLevel(formatNumber(returningCurrentLevel));
    document.getElementById('pageReturningPanelBonus').innerHTML = `(SpS +${formatNumber(returningCurrentLevel)}%)`;
    document.getElementById('pageReturningLevel').innerHTML = translations.menuReturningText_subtitleLevel;
    document.getElementById('pageReturningAbility').innerHTML = translations.menuReturningText_subtitleAbility;
    
    updatePageStatsInterval = setInterval(() => { updatePageReturning(); }, 200); // 1초에 5번 작동

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
function updatePageReturning() { // 갱신

    const expPercent = (returningExp / returningExpMax) * 100;
    if(expPercent < 100) document.getElementById('pageReturningExpFilledBar').style.width = `${expPercent}%`;
    if(expPercent >= 100) document.getElementById('pageReturningExpFilledBar').style.width = `100%`;
    while(returningExp >= returningExpMax) {
        returningExp -= returningExpMax
        returningIncreaseLevel++;
        returningExpMax = ((((returningIncreaseLevel + 1) ** 4) /2 ) * 1e12);
    }

    const currentTime = Date.now();
    const returningDiffTime = Math.floor((currentTime - returningLastTime) / 60000);

    const pageReturningTimeDate = document.getElementById('pageReturningTimeDate');
    if(returningDiffTime < 60) pageReturningTimeDate.innerHTML = translations.menuReturningText_timeDateMinute(returningDiffTime);
    else if(returningDiffTime < 60 * 24) pageReturningTimeDate.innerHTML = translations.menuReturningText_timeDateHour(Math.floor(returningDiffTime / 60), (returningDiffTime % 60));
    else if(returningDiffTime) pageReturningTimeDate.innerHTML = translations.menuReturningText_timeDateDay(Math.floor(returningDiffTime / (60 * 24)), (returningDiffTime % (60 * 24)), (returningDiffTime % 60));
    document.getElementById('pageReturningNowReturningText_1').innerHTML = translations.menuReturningText_nowReturningText_1;
    document.getElementById('pageReturningNowReturningIncreaseLevel').innerHTML = translations.menuReturningText_nowReturningIncreaseLevel(formatNumber(returningIncreaseLevel), formatNumber(returningIncreaseLevel));
    document.getElementById('pageReturningNowReturningText_2').innerHTML = translations.menuReturningText_nowReturningText_2;
    document.getElementById('pageReturningExpPercentage').innerHTML = `${(expPercent).toFixed(2)}%`;
    document.getElementById('pageReturningExpEmptyValue').innerHTML = translations.menuReturningText_emptyExp(formatNumber(returningExpMax - returningExp));
    buttonReturning.innerHTML = translations.menuReturningText_buttonReturning;

    if(returningIncreaseLevel >= 1) {
        buttonReturning.style.pointerEvents = 'auto';
        buttonReturning.style.opacity = '1';
    } else {
        buttonReturning.style.pointerEvents = 'none';
        buttonReturning.style.opacity = '0.5';
    }
}
buttonReturning.addEventListener('click', () => {
    appearPopup(2, 3);
})
function returningAnimation() { // 회귀 연출
    console.log('Returning');
    popupArea.classList.remove('disabled');

    const createDiv = document.createElement('div');
    createDiv.id = 'returningBackground';
    popupArea.appendChild(createDiv);

    setTimeout(() => {
        const soundReturningBell = new Audio(`sound/ReturningBell${Math.floor(Math.random() * 3) + 1}.mp3`);
        soundReturningBell.volume = soundEffectVolume.value;
        soundReturningBell.play();

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
    returningLastTime = Date.now();

    // 학생 초기화
    student = 0;
    addClickDefaultValue = 1;
    addClickBonusValue = 0;
    addClickTotalValue = 1;
    addPerSecondStudent = 0;
    
    // 통계
    statsStudent = 0;
    statsAddPerSecondStudent = 0;
    statsAddClickStudent = 0;
    statsClickCount = 0;
    statsProductCount = 0;
    statsReturningCount++;

    // 증축 관련
    let_arrProductPrice();
    productAddPerSecondTotal = 0;

    // 강화
    document.getElementById('upgradeBundle').innerHTML = '';
    arrUpgradeId = [];
    let_arrUpgradeEnable();
    let_arrProductUpgradePurchaseBool();
    
    updateShowStudent();
    gameMenuDefaultSetting();
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
    tooltip.querySelector('.price').innerHTML = translations.memoryPrice(formatNumber(arrMemoryPrice[i]));
    if(arrMemoryEnable[i] == true) {
        tooltip.querySelector('.price').style.color = '#9933FF';
        tooltip.querySelector('.price').style.opacity = 1;
    } else {
        tooltip.querySelector('.price').style.color = '#FF0000';
        tooltip.querySelector('.price').style.opacity = 0.5;
    }
    // 이름
    tooltip.querySelector('.name').innerHTML = translations.memoryName[i];
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
    tooltip.querySelector('.description').innerHTML = translations.memoryDescription[i];
    // 배경담
    tooltip.querySelector('.flavorText').innerHTML = translations.memoryFlavorText[i];

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
    for(let i = 0 ; i < arrMemoryEnable.length ; i++) {
        if(returningCurrentLevel >= arrMemoryPrice[i]) {
            arrMemoryEnable[i] = true;
            console.log(arrMemoryEnable)
        }
    }
}
/*
    알림창
*/
function addNotificationList(type, i = null, j = null) {
    const notification = document.getElementById('notification');
    const notiList = notification.querySelectorAll('.notiList')

    if(type == 'save') {
        const divSave = document.createElement('div');

        divSave.className = 'notiList save';
        divSave.innerHTML = translations.notiText_save;

        notification.appendChild(divSave);

        setTimeout(() => { divSave.remove(); }, 3000);
    }
    if(type == 'achievement') {
        const divAchievement = document.createElement('div')
        divAchievement.className = 'notiList achievement';

        const divImg = document.createElement('div');
        divImg.className = 'img';
        if(10 > i && i >= 0) {
            divImg.style.background = `url('img/icons_achievement_1.png')`;
            divImg.style.backgroundPositionX = `${-48 * j}px`;
            divImg.style.backgroundPositionY = `${-48 * i}px`;
        }
        else if(70 > i && i >= 10) {
            divImg.style.background = `url('img/icons_achievement_2.png')`;
            divImg.style.backgroundPositionX = `${-48 * j}px`;
            divImg.style.backgroundPositionY = `${-48 * (i - 10)}px`;
        }

        const divTextBundle = document.createElement('div');
        divTextBundle.className = 'textBundle';

        const divTitle = document.createElement('div');
        divTitle.className = 'title';
        divTitle.innerHTML = translations.notiText_achievement;

        const divLine = document.createElement('div');
        divLine.className = 'achievementLine';

        const divName = document.createElement('div');
        divName.className = 'achievementName fcBlack fs125';
        divName.innerHTML = translations.achievementName[i][j];

        divTextBundle.append(divTitle);
        divTextBundle.append(divLine);
        divTextBundle.append(divName);
        divAchievement.appendChild(divImg);
        divAchievement.appendChild(divTextBundle);
        
        notification.appendChild(divAchievement);

        setTimeout(() => { divAchievement.remove(); }, 7500);
    }

    // 알림창 리스트를 5개까지만 보이도록
    notiList.forEach((list, index) => { if(index >= 4) { list.style.display = 'none'; } });
}
/*
    게임 메뉴
*/
document.getElementById('menuSetting').style.backgroundImage = `url('img/icons_game_menu.png')`;
document.getElementById('menuSetting').style.backgroundPositionX = `0px`;
document.getElementById('menuStats').style.backgroundImage = `url('img/icons_game_menu.png')`;
document.getElementById('menuStats').style.backgroundPositionX = `-64px`;
document.getElementById('menuInfo').style.backgroundImage = `url('img/icons_game_menu.png')`;
document.getElementById('menuInfo').style.backgroundPositionX = `-128px`;
document.getElementById('menuReturning').style.backgroundImage = `url('img/icons_game_menu.png')`;
document.getElementById('menuReturning').style.backgroundPositionX = `-192px`;

const menuPageButton = document.querySelectorAll('.menuPageButton');
menuPageButton.forEach(div => {
    div.addEventListener('click', () => {
        menuPageButton.forEach(otherDiv => {
            if(otherDiv != div) otherDiv.classList.remove('select');
        });

        const isSelected = div.classList.toggle('select');
        clearTimeout(updatePageStatsSetTimeout);
        clearInterval(updatePageStatsInterval)

        const soundSelect = new Audio(`sound/MenuSelect${Math.floor(Math.random() * 3) + 1}.mp3`);
        const soundClose = new Audio('sound/MenuClose.mp3');
        // 기본 설정
        if(isSelected) {
            document.getElementById('productStateList').style.display = 'none';
            document.getElementById('pageSetting').style.display = div.id == 'menuSetting' ? '' : 'none';
            document.getElementById('pageStats').style.display = div.id == 'menuStats' ? '' : 'none';
            document.getElementById('pageInfo').style.display = div.id == 'menuInfo' ? '' : 'none';
            document.getElementById('pageReturning').style.display = div.id == 'menuReturning' ? '' : 'none';

            soundSelect.volume = soundEffectVolume.value;
            soundSelect.play();
        } else {
            gameMenuDefaultSetting();

            soundClose.volume = soundEffectVolume.value;
            soundClose.play();
        }
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
    강화
*/
upgradeExpand.addEventListener('click', () => {
    upgradeBundle.classList.toggle('open');
    updateUpgradeMenuButton();
})
function updateUpgradeMenuButton() {
    if(upgradeBundle.classList.contains('open')) {
        upgradeExpand.textContent = translations.upgradeMenuButtonFold;

        const soundExpand = new Audio('sound/ButtonExpand.mp3');
        soundExpand.volume = soundEffectVolume.value;
        soundExpand.play();
    } else {
        upgradeExpand.textContent = translations.upgradeMenuButtonExpand;
        
        const soundFold = new Audio('sound/ButtonFold.mp3');
        soundFold.volume = soundEffectVolume.value;
        soundFold.play();
    }
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
            if(student >= arrProductPrice[i]) { // 층분한 학생이 있을 경우
                // 효과음
                const soundBuy = new Audio(`sound/Buy${Math.floor(Math.random() * 6) + 1}.mp3`);
                soundBuy.volume = soundEffectVolume.value;
                soundBuy.play();

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
                // 도전과제
                achievementProductGetCount(i, arrProductGetCount[i]);
                achievementProductPurchaseCount(statsProductCount);
                achievementProductMinimumGetCount();
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
        tooltip.querySelector('.name').innerHTML = translations.arrProductName[i];
        // 설명
        tooltip.querySelector('.description').innerHTML = translations.productTooltipDescription[i];
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
            tooltip.querySelector('#productUpgradeDone').innerHTML = translations.productTooltipUpgradeDone;
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
    intervalsettingProductTooltip = setInterval(() => { updateProductTooltip(i); }, 20);
}
function updateProductTooltip(i) {
    console.log("Product tooltip " + i);

    // 선언
    const tooltip = document.getElementById('productTooltip');
    // 가격
    tooltip.querySelector('.price').textContent = translations.students(formatNumber(arrProductPrice[i]));
    // 보유
    if(arrProductGetCount[i] >= 1) tooltip.querySelector('.getCount').innerHTML = translations.productTooltipGetCount(arrProductGetCount[i]);
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
        tooltip.querySelector('#productTooltipStats_1').innerHTML = translations.productTooltipStats[0](formatNumber(arrProductAddTotalValue[i]));
        tooltip.querySelector('#productTooltipStats_2').innerHTML = translations.productTooltipStats[1](formatNumber(arrProductAddFinalValue[i]));
        tooltip.querySelector('#productTooltipStats_3').innerHTML = translations.productTooltipStats[2](formatNumber(arrProductStatsProductionTotal[i]));
    } else tooltip.querySelector('#productTooltipStatsBundle').classList.add('disabled');
}
function removeProductTooltip() { // 설명창 제거
    const tooltip = document.getElementById('productTooltip');
    // 설명창 가리기
    tooltip.style.display = 'none';
    // 반복 제거
    clearInterval(intervalsettingProductTooltip);
}
function settingProductMenu(type) { // 초기화 증축 메뉴
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
            else if(arrProductUnlock[i] == true) product.querySelector('.name').innerHTML = translations.arrProductName[i];
        }
        if(type == 'count') {
            if(arrProductGetCount[i] == 0) product.querySelector('.getCount').innerHTML = '';
            if(arrProductGetCount[i] >= 1) product.querySelector('.getCount').innerHTML = arrProductGetCount[i];
        }
        if(type == 'price') product.querySelector('.price').innerHTML = translations.students(formatNumber(arrProductPrice[i]));
    }
}
function settingProductPrice(i, j = 1) { // 증축 가격 계산
    for(let k = 0 ; k < j ; k++)  arrProductPrice[i] = Math.floor(arrProductPrice[i] * 1.15);
    settingProductMenu('price');
}
function settingProductAddPerSecond() { // 갱신 : 증축 초당 추가
    addPerSecondStudent = 0;
    for(let i = 0 ; i < productLength; i++) {
        // 공식: 증축 개수 * 증축 초당 효율 * 증축 강화 효율 * 효율 배수 * 회귀 효율 배수
        arrProductAddTotalValue[i] = arrProductAddDefaultValue[i] * arrProductAddBonusValue[i] * productionMultiple * returningProductionMultiple;
        arrProductAddFinalValue[i] = arrProductAddTotalValue[i] * arrProductGetCount[i];
        addPerSecondStudent += arrProductAddFinalValue[i];
    }
    // 갱신
    updateShowStudent();
}
function updateShowStudent() { // 학생 수 갱신
    // 보유 중인 학생 갱신
    document.getElementById('getStudent').innerHTML = translations.students(formatNumber(student));
    // 초당 학생 갱신
    document.getElementById('perSecondStudent').innerHTML = translations.perSecond(formatNumber(addPerSecondStudent));

    achievementTotalGetStudent(statsTotalStudent);
    achievementReturningGetStudent(statsStudent);
    achievementPerSecondStudent(addPerSecondStudent);
}
/*
    증축
*/
function productDefaultSetting() { // 증축을 초기 상태로 설정
    for(let i = 0 ; i < productLength; i++) {
        // 변수 및 배열 초기화
        arrProductAppear[i] = false;
        arrProductUnlock[i] = false;
        arrProductGetCount[i] = 0;
        arrProductAddBonusValue[i] = 1;
        arrProductAddTotalValue[i] = 0;
        arrProductAddFinalValue[i] = 0;
        arrProductStatsProductionTotal[i] = 0;
        arrProductUpgradeCount[i] = 0;

        if(2 >= i && i >= 0) {
            arrProductAppear[i] = true;
        }

        // 선언
        const productMenu = document.getElementById(`product_${i}`);
        const productRow = document.getElementById(`productRow_${i}`);

        // 증축 메뉴
        productMenu.querySelector('.price').innerHTML = translations.students(formatNumber(arrProductPrice[i]));

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
function productOffline() { // 증축 오프라인
    
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
    강화
*/
function upgradeExpandButton() { // 강화 확장 버튼 활성화
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
let intervalUpdateUpgradeTooltip;
function reorderUpgradeIcon() { // 강화 아이콘 재정렬
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
            if(student >= arrUpgradePrice[arr1][arr2]) { // 충분한 학생이 있을 경우
                // 효과음
                const soundBuy = new Audio('sound/BuyUpgrade.mp3');
                soundBuy.volume = soundEffectVolume.value;
                soundBuy.play();
                // 비용 지불
                student -= arrUpgradePrice[arr1][arr2];
                // 배열 갱신
                if(1599 >= number && number >= 0) { // 건물 강화일 경우
                    arrProductAddBonusValue[arr1] *= 2; // 보너스 적용
                    arrProductUpgradeCount[arr1]++; // 카운트 증가
                    achievementProductUpgradeGetCount(arr1, arrProductUpgradeCount[arr1]); // 도전 과제
                    if(arrProductUpgradeCount[arr1] == arrProductUpgradeCountMax[arr1]) achievementProductUpgradeAllGetEach(arr1)
                }
                if(1699 >= number && number >= 1600) {
                    addClickBonusValue += 0.02;
                }
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
                // 도전과제
                achievementProductUpgradeAllGet();
            }
        });
    });
    upgradeExpandButton();
}
function addProductUpgradeIcon(i) { // 강화 아이콘 생성
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
    tooltip.querySelector('.price').innerHTML = translations.students(formatNumber(arrUpgradePrice[i][j]));
    // 이름
    document.getElementById('upgradeTooltipName').innerHTML = translations.upgradeTooltipName[i][j];
    // 설명
    document.getElementById('upgradeTooltipDescription').innerHTML = translations.upgradeToolipDescription[i];

    // 반복
    intervalUpdateUpgradeTooltip = setInterval(() => { updateUpgradeTooltip(i, j); }, 20);

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
            appendTag.innerHTML = translations.tooltipTagName[0][0];
            appendTag.style.background = 'linear-gradient(to right, #ABBAAB, #FFFFFF)';
        }

        const upgradeIndex = type.split('_')[1] - 1;
        if(upgradeIndex >= 0) {
            appendTag.innerHTML = translations.tooltipTagName[1][upgradeIndex];
            appendTag.style.background = `linear-gradient(to right,${arrTooltipTagColor[1][upgradeIndex]})`;
        }
        appendTag.style.color = '#000000';
    }
    if(elementById == 'upgrade') { // upgrade
        if(type == 'normal') {
            appendTag.innerHTML = translations.tooltipTagName[0][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
    }
    if(elementById == 'special') {
        if(type == 'm_normal') {
            appendTag.innerHTML = translations.tooltipTagName[0][2];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'm_deactivate') {
            appendTag.innerHTML = translations.tooltipTagName[3][0];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'm_activate') {
            appendTag.innerHTML = translations.tooltipTagName[3][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_normal') {
            appendTag.innerHTML = translations.tooltipTagName[0][3];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_unlock') {
            appendTag.innerHTML = translations.tooltipTagName[4][0];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
        if(type == 'a_lock') {
            appendTag.innerHTML = translations.tooltipTagName[4][1];
            appendTag.style.background = 'linear-gradient(to right,#ABBAAB,#FFFFFF)';
            appendTag.style.color = '#000000';
        }
    }
    document.getElementById(`${elementById}TooltipTagList`).appendChild(appendTag);
}
/*
    도전과제
*/
function achievementTotalGetStudent(value) { // 총 입학한 학생 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[0].length ; i++) {
        if(arrAchievementEnable[0][i] == false && value >= (10 ** (6 + (6 * i)))) {
            arrAchievementEnable[0][i] = true;
        }
    }
}
function achievementReturningGetStudent(value) { // 한 번 회귀에서 입학한 학생 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[1].length ; i++) {
        if(arrAchievementEnable[1][i] == false && value >= (10 ** (4 + (4 * i)))) {
            arrAchievementEnable[1][i] = true;
            addNotificationList('achievement', 1, i);
        }
    }
}
function achievementPerSecondStudent(value) { // 초당 입학한 학생 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[2].length ; i++) {
        if(arrAchievementEnable[2][i] == false && value >= (10 ** (2 + (2 * i)))) {
            arrAchievementEnable[2][i] = true;
            addNotificationList('achievement', 2, i);
        }
    }
}
function achievementClickCount(value) { // 학사모 클릭 횟수 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[3].length ; i++) {
        if(arrAchievementEnable[3][i] == false && value >= (((i % 2 == 0 ? 1 : 5)) * (10 ** (2 + Math.floor(i / 2))))) {
            arrAchievementEnable[3][i] = true;
            addNotificationList('achievement', 3, i);
        }
    }
}
function achievementClickStudent(value) { // 클릭으로 한 번의 회귀에서 입학한 학생 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[4].length ; i++) {
        if(arrAchievementEnable[4][i] == false && value >= (10 ** (3 + (3 * i)))) {
            arrAchievementEnable[4][i] = true;
            addNotificationList('achievement', 4, i);
        }
    }
}
function achievementProductGetCount(value1, value2) { // 시설 구매 횟수 도전 과제
    const value = value1 + 10;
    for(let i = 0 ; i < arrAchievementEnable[value].length ; i++) {
        if(arrAchievementEnable[value][i] == false && value2 >= (i == 0 ? 10 : 50 * i)) {
            arrAchievementEnable[value][i] = true;
            addNotificationList('achievement', value, i);
        }
    }
}
function achievementProductStatsStudent(value1, value2) { // 시설에서 입학 시킨 학생 도전 과제
    const value = value1 + 30;
    for(let i = 0 ; i < arrAchievementEnable[value].length ; i++) {
        if(arrAchievementEnable[value][i] == false && value2 >= (10 ** (6 + (1 * i) + (2 * value)))) {
            arrAchievementEnable[value][i] = true;
            addNotificationList('achievement', value, i);
        }
    }
}
function achievementProductUpgradeGetCount(value1, value2) { // 시설 전용 강화 구매 횟수 도전 과제
    const value = value1 + 50;
    for(let i = 0 ; i < arrAchievementEnable[value].length ; i++) {
        if(arrAchievementEnable[value][i] == false && value2 >= (3 * (1 + i))) {
            arrAchievementEnable[value][i] = true;
            addNotificationList('achievement', value, i);
            
        }
    }
}
function achievementProductUpgradeAllGetEach(value) { // 시설 전용 강화를 모두 구매 도전 과제
    if(arrAchievementEnable[70][value] == false) {
        arrAchievementEnable[70][value] = true;
        addNotificationList('achievement', 70, value);
    }
}
function achievementProductPurchaseCount(value) { // 종류와 상관없이 시설 구매 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[71].length ; i++) {
        if(arrAchievementEnable[71][i] == false && value >= (10 ** (3 + (3 * i)))) {
            arrAchievementEnable[71][i] = true;
            addNotificationList('achievement', 71, i);
        }
    }
}
function achievementProductMinimumGetCount() { // 모든 시설을 최소 구매 도전 과제
    for(let i = 0 ; i < arrAchievementEnable[71].length ; i++) {
        if(arrProductGetCount.every(count => count >= (i == 0 ? 50 : 100 * i))) {
            arrAchievementEnable[72][i] = true;
            addNotificationList('achievement', 72, i);
        }
    }
}
function achievementProductUpgradeAllGet() { // 모든 시설 전용 강화 모두 구매 도전 과제
    if(arrProductGetCount.every(count => count >= arrProductUpgradeCountMax)) {
        arrAchievementEnable[73][i] = true;
        addNotificationList('achievement', value, i);
    }
}
// 특정 시설이 특정 전용 강화 구매 도전 과제

/*
    자릿수 계산
*/
const arrFormatNumberKr = ['','만','억','조','경','해','자','양','구','간','정','재','극','항하사','아승기','나유타','불가사의','무량대수']
let arrFormatNumberLongEn = ['',' thousand',' million',' billion',' trillion',' quadrillion',' quintillion',' sextillion',' septillion',' octillion',' nonillion'];
const arrFormatNumberPrefixLongEn = ['','un','duo','tre','quattuor','quin','sex','septen','octo','novem'];
const arrFormatNumberSuffixLongEn = ['decillion','vigintillion','trigintillion','quadragintillion','quinquagintillion','sexagintillion','septuagintillion','octogintillion','nonagintillion'];
let arrFormatNumberShortEn = ['',' K',' M',' B',' T',' Qa',' Qi',' Sx',' Sp',' Oc',' No'];
const arrFormatNumberPrefixShortEn = ['','Un','Do','Tr','Qa','Qi','Sx','Sp','Oc','No'];
const arrFormatNumberSuffixShortEn = ['D','V','T','Qa','Qi','Sx','Sp','O','N'];
const arrFormatNumberInfinityKr = '무한'; const arrFormatNumberInfinityEn = 'infinity';
for(let i = 0 ; i < arrFormatNumberPrefixLongEn.length ; i++) {
    for(let j = 0 ; j < arrFormatNumberSuffixLongEn.length ; j++) {
        arrFormatNumberLongEn.push(' ' + arrFormatNumberPrefixLongEn[i] + arrFormatNumberSuffixLongEn[j]);
        arrFormatNumberShortEn.push(' ' + arrFormatNumberPrefixShortEn[i] + arrFormatNumberSuffixShortEn[j]);
    }
}

function formatNumber(value, mathRound = false) {
    // 변수 창출
    let index = 0;

    if(value == 0) return 0; // value의 값이 0일 경우
    else { // 아닐경우
        if(formatNumberSetting == 1) {
            while(value >= 1e4) {
                value /= 1e4;
                index++;
            }

            if(index == 0) {
                if(mathRound == true) return Math.round(value) + arrFormatNumberKr[0];
                else return value.toFixed(1) + arrFormatNumberKr[0];
            }
            if(17 >= index) {
                if(mathRound == true) return Math.round(value) + arrFormatNumberKr[index];
                else return value.toFixed(2) + arrFormatNumberKr[index];
            }
            else return arrFormatNumberInfinityKr;
        }
        if(3 >= formatNumberSetting && formatNumberSetting >= 2) {
            while(value >= 1000) {
                value /= 1000;
                index++;
            }

            if(index == 0) {
                if(formatNumberSetting == 2) {
                    if(mathRound == true) return Math.round(value.toFixed(1)) + arrFormatNumberLongEn[0];
                    else return value.toFixed(1) + arrFormatNumberLongEn[0];
                }
                if(formatNumberSetting == 3) {
                    if(mathRound == true) return Math.round(value.toFixed(1)) + arrFormatNumberShortEn[0];
                    else return value.toFixed(1) + arrFormatNumberShortEn[0];
                }
            }
            else if(100 >= index && index >= 1) {
                if(formatNumberSetting == 2) {
                    if(mathRound == true) return Math.round(value.toFixed(2)) + arrFormatNumberLongEn[index];
                    else return value.toFixed(2) + arrFormatNumberLongEn[index];
                }
                if(formatNumberSetting == 3) {
                    if(mathRound == true) return Math.round(value.toFixed(2)) + arrFormatNumberShortEn[index];
                    else return value.toFixed(2) + arrFormatNumberShortEn[index];
                }
            }
            else return arrFormatNumberInfinityEn;
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

    // 클릭 강화 조건
    if(statsAddClickStudent >= 1e2 && arrUpgradeEnable[16][0] == false) { arrUpgradeEnable[16][0] = true; arrUpgradeId.push(1600); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e3 && arrUpgradeEnable[16][1] == false) { arrUpgradeEnable[16][1] = true; arrUpgradeId.push(1601); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e4 && arrUpgradeEnable[16][2] == false) { arrUpgradeEnable[16][2] = true; arrUpgradeId.push(1602); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e6 && arrUpgradeEnable[16][3] == false) { arrUpgradeEnable[16][3] = true; arrUpgradeId.push(1603); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e8 && arrUpgradeEnable[16][4] == false) { arrUpgradeEnable[16][4] = true; arrUpgradeId.push(1604); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e10 && arrUpgradeEnable[16][5] == false) { arrUpgradeEnable[16][5] = true; arrUpgradeId.push(1605); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e13 && arrUpgradeEnable[16][6] == false) { arrUpgradeEnable[16][6] = true; arrUpgradeId.push(1606); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e16 && arrUpgradeEnable[16][7] == false) { arrUpgradeEnable[16][7] = true; arrUpgradeId.push(1607); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e19 && arrUpgradeEnable[16][8] == false) { arrUpgradeEnable[16][8] = true; arrUpgradeId.push(1608); reorderUpgradeIcon(); upgradeExpandButton(); }
    if(statsAddClickStudent >= 1e23 && arrUpgradeEnable[16][9] == false) { arrUpgradeEnable[16][9] = true; arrUpgradeId.push(1609); reorderUpgradeIcon(); upgradeExpandButton(); }
});
/*
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
        arrProductStatsProductionTotal[i] += arrProductAddFinalValue[i];
        achievementProductStatsStudent(i, arrProductStatsProductionTotal[i]);
    }
}
// 2초 반복 | 최적화를 위함 | 웹 HTML 제목 갱신
setInterval(() => { document.title = translations.windowTitle(formatNumber(student)); }, 1000 * 2);
// 60초마다 자동 저장
setInterval(() => { saveGame(); }, 1000 * 60);

function saveGame() { // 게임 저장
    console.log('Save Game');
    // 학생
    localStorage.setItem('student', JSON.stringify(student));
    // 클릭 추가 학생
    localStorage.setItem('addClickDefaultValue', JSON.stringify(addClickDefaultValue));
    localStorage.setItem('addClickBonusValue', JSON.stringify(addClickBonusValue));
    localStorage.setItem('addClickTotalValue', JSON.stringify(addClickTotalValue));
    // 초당 추가 학생
    localStorage.setItem('addPerSecondStudent', JSON.stringify(addPerSecondStudent));
    // 팝업 등장 여부 | 배열
    localStorage.setItem('arrAppearPopupBool', JSON.stringify(arrAppearPopupBool));
    // 설정
    localStorage.setItem('soundEffectVolume', JSON.stringify(soundEffectVolume.value));
    localStorage.setItem('soundBgmVolume', JSON.stringify(soundBgmVolume.value));
    localStorage.setItem('formatNumberSetting', JSON.stringify(formatNumberSetting));
    // 언어
    localStorage.setItem('ifSelectLanguage', JSON.stringify(ifSelectLanguage));
    localStorage.setItem('lang', JSON.stringify(lang));
    // 통계
    localStorage.setItem('statsTotalStudent', JSON.stringify(statsTotalStudent));
    localStorage.setItem('statsStudent', JSON.stringify(statsStudent));
    localStorage.setItem('statsTotalAddPerSecondStudent', JSON.stringify(statsTotalAddPerSecondStudent));
    localStorage.setItem('statsAddPerSecondStudent', JSON.stringify(statsAddPerSecondStudent));
    localStorage.setItem('statsTotalAddClickStudent', JSON.stringify(statsTotalAddClickStudent));
    localStorage.setItem('statsAddClickStudent', JSON.stringify(statsAddClickStudent));
    localStorage.setItem('statsTotalClickCount', JSON.stringify(statsTotalClickCount));
    localStorage.setItem('statsClickCount', JSON.stringify(statsClickCount));
    localStorage.setItem('statsTotalProductCount', JSON.stringify(statsTotalProductCount));
    localStorage.setItem('statsProductCount', JSON.stringify(statsProductCount));
    localStorage.setItem('statsReturningCount', JSON.stringify(statsReturningCount));
    // 도전 과제
    localStorage.setItem('arrAchievementEnable', JSON.stringify(arrAchievementEnable));
    // 정보
    // <-- BLANK -->
    // 회귀
    localStorage.setItem('returningCurrentLevel', JSON.stringify(returningCurrentLevel));
    localStorage.setItem('returningIncreaseLevel', JSON.stringify(returningIncreaseLevel));
    localStorage.setItem('returningExp', JSON.stringify(returningExp));
    localStorage.setItem('returningExpMax', JSON.stringify(returningExpMax));
    localStorage.setItem('returningProductionMultiple', JSON.stringify(returningProductionMultiple));
    localStorage.setItem('returningLastTime', JSON.stringify(returningLastTime));
    // 기억 왜곡
    localStorage.setItem('arrMemoryEnable', JSON.stringify(arrMemoryEnable));
    // 강화
    localStorage.setItem('arrUpgradeId', JSON.stringify(arrUpgradeId));
    localStorage.setItem('arrUpgradeEnable', JSON.stringify(arrUpgradeEnable));
    localStorage.setItem('arrProductUpgradePurchaseBool', JSON.stringify(arrProductUpgradePurchaseBool));
    // 증축
    localStorage.setItem('arrProductAppear', JSON.stringify(arrProductAppear));
    localStorage.setItem('arrProductUnlock', JSON.stringify(arrProductUnlock));
    localStorage.setItem('arrProductGetCount', JSON.stringify(arrProductGetCount));
    localStorage.setItem('arrProductAddBonusValue', JSON.stringify(arrProductAddBonusValue));
    localStorage.setItem('arrProductAddTotalValue', JSON.stringify(arrProductAddTotalValue));
    localStorage.setItem('arrProductAddFinalValue', JSON.stringify(arrProductAddFinalValue));
    localStorage.setItem('arrProductStatsProductionTotal', JSON.stringify(arrProductStatsProductionTotal));
    localStorage.setItem('productAddPerSecondTotal', JSON.stringify(productAddPerSecondTotal));
    localStorage.setItem('arrProductUpgradeCount', JSON.stringify(arrProductUpgradeCount));
    // 저장된 날짜
    localStorage.setItem('lastSaveTime', Date.now());
    // 알림창
    addNotificationList('save');
}
function loadGame() { // 게임 로드
    console.log('Load cookie');
    // 학생
    student = updateLocalStorage('student', student);
    // 클릭 추가 학생
    addClickDefaultValue = updateLocalStorage('addClickDefaultValue', addClickDefaultValue);
    addClickBonusValue = updateLocalStorage('addClickBonusValue', addClickBonusValue);
    addClickTotalValue = updateLocalStorage('addClickTotalValue', addClickTotalValue);
    // 초당 추가 학생
    addPerSecondStudent = updateLocalStorage('addPerSecondStudent', addPerSecondStudent);
    // 팝업 등장 여부 | 배열
    arrAppearPopupBool = updateLocalStorage('arrAppearPopupBool', arrAppearPopupBool);
    // 설정
    soundEffectVolume.value = updateLocalStorage('soundEffectVolume', soundEffectVolume);
    soundBgmVolume.value = updateLocalStorage('soundBgmVolume', soundBgmVolume);
    formatNumberSetting = updateLocalStorage('formatNumberSetting', formatNumberSetting);
    // 언어
    ifSelectLanguage = updateLocalStorage('ifSelectLanguage', ifSelectLanguage);
    lang = updateLocalStorage('lang', lang);
    // 통계
    statsTotalStudent = updateLocalStorage('statsTotalStudent', statsTotalStudent);
    statsStudent = updateLocalStorage('statsStudent', statsStudent);
    statsTotalAddPerSecondStudent = updateLocalStorage('statsTotalAddPerSecondStudent', statsTotalAddPerSecondStudent);
    statsAddPerSecondStudent = updateLocalStorage('statsAddPerSecondStudent', statsAddPerSecondStudent);
    statsTotalAddClickStudent = updateLocalStorage('statsTotalAddClickStudent', statsTotalAddClickStudent);
    statsAddClickStudent = updateLocalStorage('statsAddClickStudent', statsAddClickStudent);
    statsTotalClickCount = updateLocalStorage('statsTotalClickCount', statsTotalClickCount);
    statsClickCount = updateLocalStorage('statsClickCount', statsClickCount);
    statsTotalProductCount = updateLocalStorage('statsTotalProductCount', statsTotalProductCount);
    statsProductCount = updateLocalStorage('statsProductCount', statsProductCount);
    statsReturningCount = updateLocalStorage('statsReturningCount', statsReturningCount);
    // 도전 과제
    arrAchievementEnable = updateLocalStorage('arrAchievementEnable', arrAchievementEnable);
    // 정보
    // <-- BLANK -->
    // 회귀
    returningCurrentLevel = updateLocalStorage('returningCurrentLevel', returningCurrentLevel);
    returningIncreaseLevel = updateLocalStorage('returningIncreaseLevel', returningIncreaseLevel);
    returningExp = updateLocalStorage('returningExp', returningExp);
    returningExpMax = updateLocalStorage('returningExpMax', returningExpMax);
    returningProductionMultiple = updateLocalStorage('returningProductionMultiple', returningProductionMultiple);
    returningLastTime = updateLocalStorage('returningLastTime', returningLastTime);
    // 기억 왜곡
    arrMemoryEnable = updateLocalStorage('arrMemoryEnable', arrMemoryEnable);
    // 강화
    arrUpgradeId = JSON.parse(localStorage.getItem('arrUpgradeId'));
    arrUpgradeEnable = updateLocalStorage('arrUpgradeEnable', arrUpgradeEnable);
    arrProductUpgradePurchaseBool = JSON.parse(localStorage.getItem('arrProductUpgradePurchaseBool'));
    // 증축
    arrProductAppear = updateLocalStorage('arrProductAppear', arrProductAppear);
    arrProductUnlock = updateLocalStorage('arrProductUnlock', arrProductUnlock);
    arrProductGetCount = updateLocalStorage('arrProductGetCount', arrProductGetCount);
    arrProductAddBonusValue = updateLocalStorage('arrProductAddBonusValue', arrProductAddBonusValue);
    arrProductAddTotalValue = updateLocalStorage('arrProductAddTotalValue', arrProductAddTotalValue);
    arrProductAddFinalValue = updateLocalStorage('arrProductAddFinalValue', arrProductAddFinalValue);
    arrProductStatsProductionTotal = updateLocalStorage('arrProductStatsProductionTotal', arrProductStatsProductionTotal);
    productAddPerSecondTotal = updateLocalStorage('productAddPerSecondTotal', productAddPerSecondTotal);
    arrProductUpgradeCount = updateLocalStorage('arrProductUpgradeCount', arrProductUpgradeCount);

    // 함수 실행
    settingProductBackground();
    reorderUpgradeIcon();
    settingProductMenu('appear');
    settingProductMenu('icon');
    settingProductMenu('name');
    settingProductMenu('count');
    settingProductMenu('price');
    for(let i = 0 ; i < productLength ; i++) {
        settingProductPrice(i, arrProductGetCount[i])
        settingProductStateImg(i)
    }

    // 저장된 시간
    lastSaveTime = updateLocalStorage('lastSaveTime', lastSaveTime);
    productOffline();
}
function updateLocalStorage(key, defaultValue) {
    const savedValue = JSON.parse(localStorage.getItem(key)); // 저장 값 불러오기
    if(!savedValue) return defaultValue; // 저장 값이 없으면 기존 값 리턴

    if(Array.isArray(defaultValue)) { // 배열 변수일 경우
        for(let i = 0 ; i < savedValue.length ; i++) {
            if(Array.isArray(savedValue[i])) { // 이중 배열 변수일 경우
                for(let j = 0 ; j < savedValue[i].length ; j++) {
                    if(j < defaultValue[i].length) defaultValue[i][j] = savedValue[i][j];
                }
            } else { // 이중 배열 변수가 아닐 경우
                if(i < defaultValue.length) defaultValue[i] = savedValue[i];
            }
        }
    } else { //아닐 경우
        defaultValue = savedValue; // 저장된 값 리턴
    }
    return defaultValue;
}
function debugMode() {
    student = 1e58;
    for(let i = 0 ; i < productLength ; i++) {
        arrProductGetCount[i]++
    }
}
function x2() {
    student *= 2;
    updateShowStudent();
}

// 페이지 로드 시 쿠키 확인 및 메시지 표시
window.onload = function() {
    settingProduct();

    if(localStorage.length > 0) {
        ifSelectLanguage = updateLocalStorage('ifSelectLanguage', ifSelectLanguage); // 언어 관련 저장된 쿠키가 있는지 확인
        if(ifSelectLanguage == false) { // 언어 선택을 하지 않고 쿠키가 저장되었을 경우
            appearPopup(2, 0);
            productDefaultSetting();
        }
        else loadGame();
    } else {
        appearPopup(2, 0);
        productDefaultSetting();
        returningLastTime = Date.now();
    }

    updateNews();
    gameMenuDefaultSetting();
};