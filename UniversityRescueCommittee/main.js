
var people = 0;

var addClickPeople = 1000;
var addPerSecondPeople = 1;

// FormatNumber list
var arrFormatNumberKr = ['','만','억','조','경','해','자','양','구','간','정','재','극','항아사','아승기','나유타','불가사의','무량대수','무한']
var arrFormatStandardKr = [1,1e4,1e8,1e12,1e16,1e20,1e24,1e28,1e32,1e36,1e40,1e44,1e48,1e52,1e56,1e60,1e64,1e68,1e72]

var $getPeople = document.getElementById('getPeople');
var $perSecondPeople = document.getElementById('perSecondPeople');

var clickUniversityLogo = document.getElementById('universityLogo');


// 학교 로고 클릭 이벤트
clickUniversityLogo.addEventListener('click', (e) => {
    people += addClickPeople;
    console.log(people);
    updatePeople();
});

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
    people += addPerSecondPeople;
    updatePeople();
    
}

function updatePeople() {
    // 보유 중인 학생 갱신
    $getPeople.textContent = formatNumber(people) + ' 명';
    // 초당 학생 갱신
    $perSecondPeople.textContent = '초당 ' + formatNumber(addPerSecondPeople) + ' 명';

}

// 2초마다 작동 | 최적화를 위함
setInterval(twoSecond, 1000*2);
function twoSecond() {
    // 웹 HTML 제목 갱신
    document.title = formatNumber(people) + " 명 - 대학교 구조 위원회";
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