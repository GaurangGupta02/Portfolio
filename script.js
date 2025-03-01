var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Engineer', 'Developer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});
function changeColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}
const colorPaletteIcon = document.querySelector('.color-palette-icon');
const colorOptions = document.querySelector('.color-options');
colorPaletteIcon.addEventListener('click', () => {
    colorOptions.classList.toggle('show');
});
function toggleTheme() {
    const body = document.body;
    const themeToggleIcon = document.querySelector('.theme-toggle');
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    }
}
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    const mailtoLink = `mailto:gauranggupta02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert('Email sent successfully!');
    window.location.href = mailtoLink;
}