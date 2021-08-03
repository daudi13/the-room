const hamberger = document.querySelector(".humberger");
const close = document.querySelector(".close");
const navMobile = document.querySelector(".mobile-nav");
const narration = document.querySelector(".narration");
const hero = document.querySelector(".hero");

let currentNarration = 0;

hamberger.addEventListener("click", function () {
    navMobile.classList.add("drop-nav");
    navMobile.classList.remove("drop-nav");
});

close.addEventListener("click", function () {
    navMobile.classList.remove("drop-nav");
    navMobile.classList.add("drop-nav");
});

showNarration(currentNarration);

function showNarration(x) {
    narration[x].style.display = "block"
};

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
        hero.style.backgroundImage = `url("/images/moblie-image-hero-${currentNarration + 1}.jpg")`;
    }

    else if (window.screen.availWidth > 540) {
        hero.style.backgroundImage = `url("/images/desktop-image-hero-${currentNarration + 1}.jpg")`;
    }

    narration[currentNarration].style.display = "block";

    showNarration(currentNarration);


}
