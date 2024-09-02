// Navbar Toggle Function
function toggleMenu() {
    var menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
}

// Countdown Timer Function
const countdown = () => {
    const countDate = new Date("December 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

// Call the countdown function every second
setInterval(countdown, 1000);

// Popup Form Open/Close Functions
function openForm() {
    document.getElementById('popupForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}