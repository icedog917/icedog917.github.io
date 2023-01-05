window.onload = () => {
    setInterval(countdown, 1000);
};
const countdown = () => {
    const countDownDate = new Date("Feb 25, 2023 21:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const header = document.getElementById("countdown");
    header.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
};