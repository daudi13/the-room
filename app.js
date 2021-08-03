const hambuger = document.querySelector(".humberger");
const close = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const narration = document.querySelectorAll(".narration");
const hero = document.querySelector(".hero");

let currentNarration = 0;

hambuger.addEventListener("click", function () {
    mobileNav.classList.add("drop-nav");
    mobileNav.classList.remove("close-nav");
});

close.addEventListener("click", function () {
    mobileNav.classList.remove("drop-nav");
    mobileNav.classList.add("close-nav");
});


showNarration(currentNarration);

function showNarration(x) {
    narration[x].style.display = "block";

}

function prevNext(x) {

    narration[currentNarration].style.display = "none";

    currentNarration = currentNarration + x;

    if (currentNarration >= narration.length) {
        currentNarration = 0;
    }
    else if (currentNarration < 0) {
        currentNarration = narration.length - 1;
    }

    if (window.screen.availWidth <= 540) {
        hero.style.backgroundImage = `url("images/mobile-image-hero-${currentNarration + 1}.jpg")`;
    }
    else if(window.screen.availWidth > 540){
        hero.style.backgroundImage = `url("images/desktop-image-hero-${currentNarration + 1}.jpg")`;
    }

    narration[currentNarration].style.display = "block";

    showNarration(currentNarration);
}
