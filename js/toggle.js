const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

const elements = document.querySelectorAll('.close-navbar');

function close() {
    mainNav.classList.remove('active');
}

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', close);
}