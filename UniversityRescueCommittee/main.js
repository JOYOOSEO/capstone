// 보유 학생
var student = 0;
// 보유 학생
var student = 0;

var addClickStudent = 1000;
var addPerSecondStudent = 0;
var addClickStudent = 1000;
var addPerSecondStudent = 0;

// FormatNumber list
var arrFormatNumberKr = ['','만','억','조','경','해','자','양','구','간','정','재','극','항아사','아승기','나유타','불가사의','무량대수','무한']
var arrFormatStandardKr = [1,1e4,1e8,1e12,1e16,1e20,1e24,1e28,1e32,1e36,1e40,1e44,1e48,1e52,1e56,1e60,1e64,1e68,1e72]

// Product list
var arrProductNameKr = ['1번 생산','2번 생산','3번 생산','4번 생산','5번 생산','6번 생산','7번 생산','8번 생산','9번 생산','10번 생산'];
var arrProductDescriptionKr = [
    '1번 생산 설명 -----',
    '2번 생산 설명 -----',
    '3번 생산 설명 -----',
    '4번 생산 설명 -----',
    '5번 생산 설명 -----',
    '6번 생산 설명 -----',
    '7번 생산 설명 -----',
    '8번 생산 설명 -----',
    '9번 생산 설명 -----',
    '10번 생산 설명 -----'
];
var arrProductPrice = [10,100,1100,12000,150000,500000,17000000,9800000000,115200000000,9256100000000000];
var arrProductGetCount = [0,0,0,0,0,0,0,0,0,0];

var arrProductAddPerSecond = [0,0,0,0,0,0,0,0,0,0];
var arrProductAddPerSecondBonus = [1,1,1,1,1,1,1,1,1,1];
var arrProductAddPerSecondTotal = [0,0,0,0,0,0,0,0,0,0];
var productAddPerSecondTotal;

var arrProductUnlock = [false,false,false,false,false,false,false,false,false,false]

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


for(let i = 0 ; i < 10 ; i++) {

    // 처음 작동
    const product = document.getElementById(`product_${i}`);
    const tooltip = document.getElementById('tooltip');

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
            // 초당 추가 값 증가
            if(i == 0) arrProductAddPerSecond[i] += 1;
            if(i == 1) arrProductAddPerSecond[i] += 2;
            if(i == 2) arrProductAddPerSecond[i] += 4;
            if(i == 3) arrProductAddPerSecond[i] += 8;
            if(i == 4) arrProductAddPerSecond[i] += 16;
            if(i == 5) arrProductAddPerSecond[i] += 32;
            if(i == 6) arrProductAddPerSecond[i] += 64;
            if(i == 7) arrProductAddPerSecond[i] += 128;
            if(i == 8) arrProductAddPerSecond[i] += 256;
            if(i == 9) arrProductAddPerSecond[i] += 512;
            updateAddPerSecond();
        }
    });

    // 마우스가 들어왔을 때
    product.addEventListener('mouseenter', (e) => {
        tooltip.style.top = `${product.getBoundingClientRect().top + 10}px`;

        if(arrProductUnlock[i] == true) {
            tooltip.querySelector('.name').textContent = arrProductNameKr[i];
            tooltip.querySelector('.description').textContent = arrProductDescriptionKr[i];
            tooltip.querySelector('#bottomLine').classList.remove('disabled');
            tooltip.querySelector('#info_1').classList.remove('disabled');
            tooltip.querySelector('#info_2').classList.remove('disabled');
            tooltip.querySelector('#info_3').classList.remove('disabled');
        }
        else {
            //tooltip.querySelector
            tooltip.querySelector('.name').textContent = '???';
            tooltip.querySelector('.description').textContent = '"???"';
            tooltip.querySelector('#bottomLine').classList.add('disabled');
            tooltip.querySelector('#info_1').classList.add('disabled');
            tooltip.querySelector('#info_2').classList.add('disabled');
            tooltip.querySelector('#info_3').classList.add('disabled');
        }
        // 설명창 보이기
        tooltip.style.display = 'block';
    });
    // 마우스가 바깥으로 나갔을 때
    product.addEventListener('mouseleave', (e) => {
        // 설명창 가리기
        tooltip.style.display = 'none';
    });
}

// 매 틱 반복
setInterval(() => {  
    for(let i = 0 ; i < arrProductPrice.length ; i++) {

        // 해금
        const product = document.getElementById(`product_${i}`);
        if(arrProductUnlock[i] == false && arrProductGetCount[i-1] >= 1) {
            product.classList.remove('disabled');
        }
        if(arrProductUnlock[i] == false && student >= arrProductPrice[i] * 0.8) {
            product.querySelector('.name').textContent = arrProductNameKr[i];
            arrProductUnlock[i] = true;
        }

        // 학생이 충분, 불충분할 때 색 변환
        var priceElementId = `product_${i}_price`;
        var productElementId = `product_${i}`;
        var priceElement = document.getElementById(priceElementId);
        var productElement = document.getElementById(productElementId);

        if(priceElement) {
            if(student >= arrProductPrice[i]) {
                priceElement.style.color = "#00ff00";
                productElement.style.opacity = 1;
            }
            else {
                priceElement.style.color = "#ff0000";
                productElement.style.opacity = 0.4;
            }
        }
    }

    // Debug text
    document.getElementById('debugDiv').textContent = arrProductGetCount + ' / ' + arrProductAddPerSecond + '(' + addPerSecondStudent + ')';
});

// 1초마다 작동
setInterval(perSecond, 1000);
function perSecond() {
    student += addPerSecondStudent;
    updateStudent();
    
}
// 초당 추가 업데이트
function updateAddPerSecond() {
    addPerSecondStudent = 0;
    for(let i = 0 ; i < arrProductAddPerSecond.length; i++) {
        arrProductAddPerSecondTotal[i] = arrProductAddPerSecond[i] * arrProductAddPerSecondBonus[i]
        addPerSecondStudent += arrProductAddPerSecondTotal[i];
    }
    updateStudent();
}

function updateStudent() {
    // 보유 중인 학생 갱신
    document.getElementById('getStudent').textContent = formatNumber(student) + ' 명';
    // 초당 학생 갱신
    document.getElementById('perSecondStudent').textContent = '초당 ' + formatNumber(addPerSecondStudent) + ' 명';
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
const product = document.querySelectorAll('.product');
const tooltip = document.querySelector('.tooltip');
    
product.addEventListener('mouseenter', () => {
    test(product.offsetTop); // .product의 왼쪽으로 이동
    console.log('enter');
    console.log(product.offsetTop);
    console.log(tooltip.style.top);
});

product.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
    console.log('leave');
});
function test(aaaa) {
    tooltip.style.display = 'block';
    tooltip.style.top = aaaa; // .product의 왼쪽으로 이동
}
console.log(tooltip.style.top);


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