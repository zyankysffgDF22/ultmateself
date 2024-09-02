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
};

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyYJG-oknZ6TKsUEd8LZnFHIbmK2GRJ4F0JLzC-wzufxDLG45xB5Yw3d2niGJaKjcoJ/exec'

const form = document.forms['contact-form']

 // Convert images to base64
 Promise.all([getBase64(image1), getBase64(image2), getBase64(image3)])
 .then((images) => {
     data.image1 = images[0];

     form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
      });

 })

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};
