let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let about = document.getElementById('js-about');
let resume = document.getElementById('js-resume');
let contact = document.getElementById('js-contact');
let name = document.getElementById('name');

function close() {
    if (mainNav.classList.contains('active')) {
        mainNav.classList.toggle('active');
    }
}

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

about.addEventListener('click', close);
resume.addEventListener('click', close);
contact.addEventListener('click', close);
name.addEventListener('click', close);