const searchEl = document.querySelector(".search");
const searchIputEl = searchEl.querySelector("input");


searchEl.addEventListener("click" , function(){
    searchIputEl.focus();
});


searchIputEl.addEventListener("focus" , function() {
    searchEl.classList.add("focused");
    searchIputEl.setAttribute("placeholder" , "통합검색");
});

searchIputEl.addEventListener("blur" , function() {
    searchEl.classList.remove("focused");
    searchIputEl.setAttribute("placeholder" , "");
});

const badgeEl = document.querySelector(".badges");

window.addEventListener("scroll" , _.throttle(function() {
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //뱃지 숨기기
        // badgeEl.style.display = "none"
        // gsap.to(요소 , 지속시간 , 옵션);
        gsap.to(badgeEl, 0.6 , {
           opacity : 0,
           display : "none"
        });
    }else {
        //뱃지 보이기
        // badgeEl.style.display = "block"
        gsap.to(badgeEl, 0.6 , {
            opacity : 1 , 
            display : "block"
        });
    }
}, 300));

// _.throttle(함수 , 시간);


const fadeEls = document.querySelectorAll(".fade-in");
fadeEls.forEach(function(fadeEl , index){
    // gsap.to(요소 , 지속시간 , 옵션);
    gsap.to(fadeEl , 1 , {
        delay : (index +1 ) * 0.7 ,
        opacity : 1
    });
});
