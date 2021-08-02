const hamberger = document.querySelector(".humberger");
const close = document.querySelector(".close");
const navMobile = document.querySelector(".mobile-nav");
const narration = document.querySelector(".narration");
const hero = document.querySelector(".hero");

let currentNarration = 0;

hamburger.addEventListener("click", function () {
    navMobile.classList.add("drop-nav");
    navMobile.classList.remove("drop-nav");
});

close.addEventListener("click", function () {
    navMobile.classlisy.remove("drop-nav");
    navMobile.classlisy.add("drop-nav");
});

