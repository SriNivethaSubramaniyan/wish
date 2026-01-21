
const confettiContainer = document.getElementById("confetti");

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.transform = `rotate(${Math.random()*360}deg)`;
    confettiContainer.appendChild(confetti);

    let fall = setInterval(() => {
        confetti.style.top = confetti.offsetTop + 3 + "px";
        if (confetti.offsetTop > window.innerHeight) {
            confetti.remove();
            clearInterval(fall);
        }
    }, 20);
}

setInterval(createConfetti, 200);

const clickText = document.getElementById("clickText");
clickText.addEventListener("click", () => {
    clickText.textContent = "🎉 Happy Birthday sir! 🎉";
});

const message = document.getElementById("messageSection");

window.addEventListener("scroll", () => {
    const position = message.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        message.classList.add("show");
    }
});