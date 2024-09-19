// 보유 학생
var student = 1;

var addClickStudent = 100;
var addPerSecondStudent = 0;

// FormatNumber list
const arrFormatNumberKr = ['','만','억','조','경','해','자','양','구','간','정','재','극','항아사','아승기','나유타','불가사의','무량대수','무한']
var arrFormatStandardKr = [1,1e4,1e8,1e12,1e16,1e20,1e24,1e28,1e32,1e36,1e40,1e44,1e48,1e52,1e56,1e60,1e64,1e68,1e72]

// Product list
const productLength = 16;
const arrProductName = ['학생','학교 시설','교통 시설','주거 시설','은행','공항','기업','정부','세계 정부','복제 실험실','우주정거장','차원 포탈','블랙홀','타임머신','평행 세계','또 다른 나'];
const arrProductDescription = [
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
    '천문학과가 아니라면 마주할 수 없는 거리를 순식간에 이동할 수 있는 포탈을 세웁니다. 학생이라고 주장하는 존재에게 우리 학교를 설명할 수 있겠네요.',
    '블랙홀 내부에서 살아있는 학생을 우리 학교로 구조합니다. 때로는 위험을 감수할줄도 알아야 합니다.',
    '과거 혹은 미래로 가 더 많은 학생을 현재 시간대로 데려옵니다. 시대 차이 따위 극복 가능한 법이죠.',
    '평행 세계를 횡단하는 방법을 찾아 다른 세계 학생에게 우리 학교를 홍보합니다. 횡단 비용은 많이 들지만 같은 홍보물을 반복해 쓸 수 있어 경제적이죠.',
    '당신은 혼자가 아닙니다. 그리고 또 다른 당신도 혼자가 아니죠.'
];
var arrProductPrice = [10,100,1100,12000,150000,500000,17000000,9800000000,115200000000,9256100000000000,1e25,1e30,1e35,1e40,1e45,1e50];
var arrProductGetCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var arrProductAddPerSecond = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768];
var arrProductAddPerSecondBonus = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var arrProductAddPerSecondTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var arrProductProducedTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var productAddPerSecondTotal;

var arrProductUnlock = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

var arrProductUpgradeId = [];
var arrProductUpgradeEnable = [
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false]
]
var arrProductUpgradeCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var arrProductUpgradeCountMax = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
//
//
//

var universityLogo = document.getElementById('universityLogo');
// 학교 로고 클릭 이벤트
universityLogo.addEventListener('click', (e) => {
    student += addClickStudent;
    console.log(student);
    updateStudent();

    
});
universityLogo.addEventListener('mousedown', (e) => {
    
})


for(let i = 0 ; i < productLength ; i++) {

    // 처음 작동
    const product = document.getElementById(`product_${i}`);
    const tooltip = document.getElementById('productTooltip');

    product.querySelector('.name').textContent = '???';
    product.querySelector('.price').textContent = formatNumber(arrProductPrice[i]) + ' 명';
    
    
    // 구매
    product.addEventListener('click', () => {
        if(student >= arrProductPrice[i]) {
            // 비용 지불
            student -= arrProductPrice[i];
            updateStudent();
            // 비용 증가
            arrProductPrice[i] = Math.floor(arrProductPrice[i] * 1.15);
            document.getElementById(`product_${i}_price`).textContent = formatNumber(arrProductPrice[i]) + ' 명';
            // 생산품 증가
            arrProductGetCount[i]++;
            document.getElementById(`product_${i}_getCount`).textContent = arrProductGetCount[i];
            // 일정 개수 이상이라면 강화 아이콘 추가
            if(arrProductGetCount[i] >= 1 && arrProductUpgradeEnable[i][0] === false) { // 1개 이상
                arrProductUpgradeEnable[i][0] = true;
                arrProductUpgradeId.push(i * 100 + 1);

                reorderUpgradeIcon();
                upgradeMenu();
            }
            if(arrProductGetCount[i] >= 10 && arrProductUpgradeEnable[i][1] === false) { // 10개 이상
                arrProductUpgradeEnable[i][1] = true;
                arrProductUpgradeId.push(i * 100 + 2);

                reorderUpgradeIcon();
                upgradeMenu();
            }
            /*
                이곳에 개수에 따라 강화 추가 코드 놓을 자리
            */

            // 초당 추가 값 증가
            updateAddPerSecond();
        }
    });

    
    // >설명창< 마우스가 들어왔을 때
    product.addEventListener('mouseenter', (e) => {
        // 선 위치 조절
        tooltip.style.top = `${product.getBoundingClientRect().top + 10}px`;

        // 만약 맨 위를 벗어났다면
        if(product.getBoundingClientRect().top <= 0) {
            tooltip.style.top = `5px`;
            console.log("out top");
        }

        // 만약 맨 아래를 벗어났다면 |||| 작동 안 됨 다시 확인할 것
        if(Math.floor(tooltip.getBoundingClientRect().bottom) > window.innerHeight) {
            console.log(tooltip.getBoundingClientRect().bottom + ' / ' + window.innerHeight + "out bottom");
            tooltip.style.top = `${window.innerHeight - tooltip.getBoundingClientRect().height - 10}px`;
        }
        
        /*
        else {
            tooltip.style.top = `${product.getBoundingClientRect().top + 10}px`;
        }
        
        if(tooltip.getBoundingClientRect().bottom > window.innerHeight) {
            console.log("test")
            tooltip.style.top = `${tooltip.getBoundingClientRect().bottom - tooltip.offsetHeight}px`;
        }
        console.log(tooltip.getBoundingClientRect().bottom + ' / ' + window.innerHeight);
        */


        if(arrProductUnlock[i] == true) { // 해금되었다면
            // 이름 재설정
            tooltip.querySelector('.name').textContent = arrProductName[i];
            // 설명 재설정
            tooltip.querySelector('.description').textContent = arrProductDescription[i];
            
            // 강화 현황 활성화
            if(arrProductUpgradeCount[i] >= 1) { // 강화 최소 1개 이상 했을 시
                tooltip.querySelector('#bottomLine').classList.remove('disabled');
                tooltip.querySelector('#productUpgradeDone').classList.remove('disabled');
                tooltip.querySelector('#progressUpgrade').textContent = '(' + arrProductUpgradeCount[i] + '/' + arrProductUpgradeCountMax[i] + ')';
            } else { // 아니라면
                tooltip.querySelector('#productUpgradeDone').classList.add('disabled');
                tooltip.querySelector('#progressUpgrade').classList.add('disabled');
            }
        } else { // 해금 안 됐다면
            tooltip.src = "/img/icon_lock.png";
            tooltip.querySelector('.name').textContent = '???';
            tooltip.querySelector('.price').textContent = '';
            tooltip.querySelector('.getCount').textContent = '';
            tooltip.querySelector('.tagList').textContent = '';
            tooltip.querySelector('.description').textContent = '???';
            tooltip.querySelector('#centerLine').classList.add('disabled');
            tooltip.querySelector('#info_1').classList.add('disabled');
            tooltip.querySelector('#info_2').classList.add('disabled');
            tooltip.querySelector('#info_3').classList.add('disabled');
            tooltip.querySelector('#bottomLine').classList.add('disabled');
            tooltip.querySelector('#productUpgradeDone').classList.add('disabled');
            tooltip.querySelector('#progressUpgrade').classList.add('disabled');
        }
        // 설명창 보이기
        tooltip.style.display = 'block';
        // 갱신 함수 || 최적화를 위해 1초에 100번 작동
        const intervalUpdateTooltip = setInterval(() => { updateTooltip(i); }, 10);


        // 마우스가 바깥으로 나갔을 때
        product.addEventListener('mouseleave', (e) => {
            // 설명창 가리기
            tooltip.style.display = 'none';
            // 반복 제거
            clearInterval(intervalUpdateTooltip);
        });
    }); 
}

// 업그레이드 확장 버튼
upgradeExpand.addEventListener('click', () => {
    upgradeBundle.classList.toggle('open');

    if(upgradeBundle.classList.contains('open')) upgradeExpand.textContent = '접기';
    else upgradeExpand.textContent = '펼치기';
})

// 매 틱 반복
setInterval(() => {  
    for(let i = 0 ; i < productLength ; i++) {

        // 해금
        const product = document.getElementById(`product_${i}`);
        if(arrProductGetCount[i-1] >= 1) {
            product.classList.remove('disabled');
        }
        if(arrProductUnlock[i] == false && student >= arrProductPrice[i] * 0.8) {
            product.querySelector('.name').textContent = arrProductName[i];
            arrProductUnlock[i] = true;
        }

        // 학생이 충분, 불충분할 때 색 변환
        var priceElement = document.getElementById(`product_${i}_price`);
        var productElement = document.getElementById(`product_${i}`);

        if(priceElement) {
            if(student >= arrProductPrice[i]) {
                priceElement.style.color = "#00ff00";
                productElement.style.opacity = 1;
            }
            else {
                priceElement.style.color = "#ff0000";
                productElement.style.opacity = 0.5;
            }
        }
    }

    // Debug text
    document.getElementById('debugDiv').textContent = arrProductGetCount + ' / ' + arrProductAddPerSecond + '(' + addPerSecondStudent + ')';
});

/*
    1초마다 작동
*/
setInterval(perSecond, 1000);
function perSecond() {
    student += addPerSecondStudent;
    updateStudent();

    for(let i = 0 ; i < productLength ; i++) {
        arrProductProducedTotal[i] += arrProductAddPerSecondTotal[i]
    }
    
}

/* 
    FUNCTION
    초당 추가 업데이트
*/
function updateAddPerSecond() {
    addPerSecondStudent = 0;
    for(let i = 0 ; i < productLength; i++) {
        arrProductAddPerSecondTotal[i] = arrProductGetCount[i] * arrProductAddPerSecond[i] * arrProductAddPerSecondBonus[i];
        addPerSecondStudent += arrProductAddPerSecondTotal[i];
    }
    updateStudent();
}

/*
    FUNCTION
    설명창 갱신
*/
function updateTooltip(i) {
    console.log("test");

    const tooltip = document.getElementById('productTooltip');
    tooltip.querySelector('.price').textContent = formatNumber(arrProductPrice[i]) + ' 명';

    // 보유
    if(arrProductGetCount[i] >= 1) {
        tooltip.querySelector('.getCount').textContent = arrProductGetCount[i] + ' 보유';
    }
    
    if(student >= arrProductPrice[i]) {
        document.getElementById('productTooltipPrice').style.color = '#00FF00';
        document.getElementById('productTooltipPrice').style.opacity = 1;
    }
    else {
        document.getElementById('productTooltipPrice').style.color = '#FF0000';
        document.getElementById('productTooltipPrice').style.opacity = 0.5;
    }
    // 태그
    document.getElementById('tagList').innerHTML = ''; // 태그 지우기
    if(arrProductGetCount[i] >= 1) {
        appendTag('테스트', 'red');
        appendTag('태그 테스트', 'black');
    }
    // 통계 활성화
    if(arrProductGetCount[i] >= 1) {
        tooltip.querySelector('#centerLine').classList.remove('disabled');
        tooltip.querySelector('#info_1').classList.remove('disabled');
        tooltip.querySelector('#info_1').textContent = '개당 ' + formatNumber(arrProductAddPerSecond[i]) + ' 명 입학';
        tooltip.querySelector('#info_2').classList.remove('disabled');
        tooltip.querySelector('#info_2').textContent = '초당 ' + formatNumber(arrProductAddPerSecondTotal[i]) + ' 명 입학';
        tooltip.querySelector('#info_3').classList.remove('disabled');
        tooltip.querySelector('#info_3').textContent = '총 ' + formatNumber(arrProductProducedTotal[i]) + ' 명 입학';
    }
    else { // 비활성화
        tooltip.querySelector('#centerLine').classList.add('disabled');
        tooltip.querySelector('#info_1').classList.add('disabled');
        tooltip.querySelector('#info_2').classList.add('disabled');
        tooltip.querySelector('#info_3').classList.add('disabled');
    }
}

/*
    FUNCTION
    학생 수 갱신
*/
function updateStudent() {
    // 보유 중인 학생 갱신
    document.getElementById('getStudent').textContent = formatNumber(student) + ' 명';
    // 초당 학생 갱신
    document.getElementById('perSecondStudent').textContent = '초당 ' + formatNumber(addPerSecondStudent) + ' 명';
}

/*
    FUNCTION
    태그 추가
*/
function appendTag(tagText, color) {
    const appendTag = document.createElement('div');
    appendTag.className = 'tag';
    appendTag.innerHTML = tagText;
    if(color == 'black') appendTag.style.background = '#000000';
    if(color == 'red') appendTag.style.background = '#FF0000';
    if(color == 'blue') appendTag.style.background = '#0000FF';
    if(color == 'green') appendTag.style.background = '#008000';
    document.getElementById('tagList').appendChild(appendTag);
}

/*
    FUNCTION
    업그레이드 확장 버튼 활성화 여부
*/
function upgradeMenu() {
    const upgradeExpand = document.getElementById('upgradeExpand');
    const upgradeBundle = document.getElementById('upgradeBundle');
    const upgradeIconCount = upgradeBundle.getElementsByClassName('upgradeIcon').length;
    
    if(upgradeIconCount >= 6) {
        upgradeExpand.style.pointerEvents = 'auto';
        upgradeExpand.style.opacity = '1';
    } else {
        upgradeExpand.style.pointerEvents = 'none';
        upgradeExpand.style.opacity = '0.5';
    }
}

/* 
    FUNCTION
    업그레이드 아이콘 재정렬
*/
function reorderUpgradeIcon() {
    const upgradeBundle = document.getElementById('upgradeBundle');
    upgradeBundle.innerHTML = '';

    const arrReorder = arrProductUpgradeId.slice().sort((a, b) => a - b);

    arrReorder.forEach(number => {
        const addUpgradeDiv = document.createElement('div');
        addUpgradeDiv.id = `upgrade_${number}`;
        addUpgradeDiv.className = `upgradeIcon ${number}`;
        addUpgradeDiv.textContent = `${number}`;

        upgradeBundle.appendChild(addUpgradeDiv);

        
        const upgradeTooltip = document.getElementById('upgradeTooltip');
        const upgradeIcon = document.getElementById(`upgrade_${number}`);
        // 이벤트 리스너 추가
        upgradeIcon.addEventListener('mouseenter', () => {
            upgradeTooltip.style.display = 'block';
            // 선 위치 조절
            upgradeTooltip.style.top = `${upgradeIcon.getBoundingClientRect().top + 10}px`;
            // 만약 맨 위를 벗어났다면
            if(upgradeIcon.getBoundingClientRect().top <= 0) {
                upgradeTooltip.style.top = `5px`;
            }
        });
        upgradeIcon.addEventListener('mouseleave', () => {
            upgradeTooltip.style.display = 'none';
        });
    });
}

// 2초마다 작동 | 최적화를 위함
setInterval(twoSecond, 1000*2);
function twoSecond() {
    // 웹 HTML 제목 갱신
    document.title = formatNumber(student) + " 명 - 대학교 구조 위원회";
}
// 자릿수 계산
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
    텍스트 파일 추출
*/
document.getElementById('downloadButton').addEventListener('click', function() {
    const textContent = arrProductGetCount[0] + '/' + arrProductGetCount[1] + '저장된 내용을 저장하고 추출\n두번째 줄 테스트 \n 세번 째 줄 테스트\n1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Blob 객체를 생성(파일의 내용을 포함)
    const blob = new Blob([textContent], { type: 'text/plain' });

    // 링크 생성
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    // 다운로드할 파일의 이름
    a.download = 'example.txt';

    // 클릭하여 다운로드를시작
    document.body.appendChild(a);
    a.click();

    // 다운로드 링크를 제거
    document.body.removeChild(a);
    // 메모리를 반환
    URL.revokeObjectURL(URL.createObjectURL(blob));
});

function debugMode() {
    student = 1e58;
    for(let i = 0 ; i < productLength ; i++) {
        arrProductGetCount[i]++
    }
}
/*
else
                  {
                     ctx.globalAlpha=1;
                     var s=256*Game.BigCookieSize;
                     var x=Game.cookieOriginX;
                     var y=Game.cookieOriginY;
                     ctx.save();
                     ctx.translate(x,y);
                     if (Game.season=='easter')
                     {
                        var nestW=304*0.98*Game.BigCookieSize;
                        var nestH=161*0.98*Game.BigCookieSize;
                        ctx.drawImage(Pic('nest.png'),-nestW/2,-nestH/2+130,nestW,nestH);
                     }
                     //ctx.rotate(((Game.startDate%360)/360)*Math.PI*2);
                     ctx.drawImage(Pic('perfectCookie.png'),-s/2,-s/2,s,s);
                     
                     if (goodBuff && Game.prefs.particles)//sparkle
                     {
                        ctx.globalCompositeOperation='lighter';
                        for (var i=0;i<1;i++)
                        {
                           ctx.globalAlpha=Math.random()*0.65+0.1;
                           var size=Math.random()*30+5;
                           var a=Math.random()*Math.PI*2;
                           var d=s*0.9*Math.random()/2;
                           ctx.drawImage(Pic('glint.jpg'),-size/2+Math.sin(a)*d,-size/2+Math.cos(a)*d,size,size);
                        }
                     }
                     
                     ctx.restore();
                     Timer.track('big cookie');
                  }
                     */