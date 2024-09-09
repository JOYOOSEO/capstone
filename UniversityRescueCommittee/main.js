// 보유 학생
var student = 0;

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
var arrProductPrice = [10,100,1100,2000,0,0,0,0,0,0];
var arrProductGetCount = [0,0,0,0,0,0,0,0,0,0];

var arrProductAddPerSecond = [0,0,0,0,0,0,0,0,0,0];
var arrProductAddPerSecondBonus = [1,1,1,1,1,1,1,1,1,1];
var arrProductAddPerSecondTotal = [0,0,0,0,0,0,0,0,0,0];
var productAddPerSecondTotal;

var product_0 = document.getElementById('product_0');

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


// 구매
for(let i = 0 ; i < 10 ; i++) {
    document.getElementById(`product_${i}`).addEventListener('click', () => {
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
    }
)}
// 설명창 보이기
for(let i = 0 ; i < 10 ; i++) {
    const product = document.getElementById(`product_${i}`);
    const tooltip = document.getElementById('tooltip');

    product.addEventListener('mouseenter', (e) => {

        tooltip.style.top = `${product.getBoundingClientRect().top + 10}px`;
        tooltip.querySelector('.name').textContent = arrProductNameKr[i];
        tooltip.querySelector('.description').textContent = arrProductDescriptionKr[i];
        tooltip.style.display = 'block';
    });
    product.addEventListener('mouseleave', (e) => {
        tooltip.style.display = 'none';
    });
}

/*

for(let i = 0 ; i < 10 ; i++) {
    const tooltip = document.getElementById('tooltip');
    document.getElementById(`product_${i}`).addEventListener('mouseenter', () => {
        const rect = product.getBoundingClientRect();

        tooltip.style.top = `${rect.top}px`;
        tooltip.textContent = '이곳에 설명!';
    })
    document.getElementById(`product_${i}`).addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    })
    console.log("aaaa");
}


const tooltip = document.getElementById('tooltip');
document.getElementById('product_0').addEventListener('mouseenter', () => {

    tooltip.style.top = `${rect.top}px`;
    tooltip.textContent = '이곳에 설명!';
    tooltip.style.display = 'block';
});
document.getElementById('product_1').addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});


*/



/*
document.querySelectorAll('.product').forEach(product => {
    const tooltip = document.getElementById('tooltip');
    
    product.addEventListener('mouseenter', (event) => {
        const rect = product.getBoundingClientRect();

        tooltip.style.display = 'block';
        tooltip.textContent = '이곳에 설명!'; // 툴팁에 들어갈 내용 설정

        // 툴팁 위치 조정
        tooltip.style.top = `${rect.top}px`;
    });

    product.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
*/
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

// 매 틱 반복
setInterval(() => {
    // 이름 및 아이콘 해제
    if(student >= arrProductPrice[0] * 0.9) document.getElementById('product_0_name').textContent = arrProductNameKr[0];
    if(student >= arrProductPrice[1] * 0.9) document.getElementById('product_1_name').textContent = arrProductNameKr[1];

    // 가격이 충분하거나 불충분할 때 색 변환
    for(let i = 0 ; i < arrProductPrice.length ; i++) {
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

// 페이지가 로드되면
window.addEventListener('DOMContentLoaded', windowLoad)
function windowLoad() {
    
    // 이름 초기화
    for(let i = 0 ; i <= arrProductNameKr.length ; i++) {
        const productName = `product_${i}_name`;

        document.getElementById(productName).textContent = '???';
    }
    // 이벤트 리스너 추가
    
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