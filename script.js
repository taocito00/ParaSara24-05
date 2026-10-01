

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {
        music.pause();
        musicBtn.innerHTML = "▶ Música";
        musicBtn.classList.remove("playing");
    }

    else {
        music.play();
        musicBtn.innerHTML = "⏸ Música";
        musicBtn.classList.add("playing");
    }

    playing = !playing;
});



const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}
setInterval(createHeart, 500);



const secretMessage =
    document.querySelector(".secret-message");

setTimeout(() => {

    secretMessage.classList.add("show");

}, 6000);

