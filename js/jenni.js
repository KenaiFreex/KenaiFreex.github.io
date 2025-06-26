const startstop = document.getElementById("startstop");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");

// Obtener la fecha actual
const today = new Date();

// Definir la fecha objetivo (11 de agosto a medianoche)
let targetDate = new Date(today.getFullYear(), 7, 11); // Mes 7 = agosto (meses van de 0 a 11)
targetDate.setHours(0, 0, 0, 0);

// Si ya pasó el 11 de agosto de este año, usar el del próximo año
if (today > targetDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
}

// Calcular los segundos totales entre hoy y la fecha objetivo
let totalSeconds = Math.floor((targetDate - today) / 1000);

const setDisplay = (sec) => {
    days.innerText = String(Math.floor(sec / (24 * 60 * 60))).padStart(2, "0");
    sec = sec % (24 * 60 * 60);
    hours.innerText = String(Math.floor(sec / (60 * 60))).padStart(2, "0");
    sec = sec % (60 * 60);
    minutes.innerText = String(Math.floor(sec / 60)).padStart(2, "0");
    sec = sec % 60;
    seconds.innerText = String(Math.floor(sec)).padStart(2, "0");
};

const timer = setInterval(() => {
    if (totalSeconds <= 0) {
        totalSeconds = 0;
        clearInterval(timer);
        // Redireccionar a otra página
        window.location.href = "index2.html";
        return;
    }
    totalSeconds -= 1;
    setDisplay(totalSeconds);
}, 1000);

// Mostrar desde el inicio
setDisplay(totalSeconds);
