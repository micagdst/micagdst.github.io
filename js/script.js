/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};



/*========== scroll section active link ==========*/
let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar Link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== dark light mode ==========*/
document.addEventListener("DOMContentLoaded", function () {
    const darkModeIcon = document.querySelector("#darkMode-icon");

    // Toggle dark mode on icon click
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle("bx-sun");
        document.body.classList.toggle("dark-mode");

        // Save the user's preference
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
        localStorage.setItem("dark-mode-icon", darkModeIcon.classList.contains("bx-sun"));
    };

    // Check for user's dark mode preference and apply it
    const savedDarkMode = localStorage.getItem("dark-mode");
    const savedDarkModeIcon = localStorage.getItem("dark-mode-icon");

    if (savedDarkMode) {
        document.body.classList[savedDarkMode === "true" ? "add" : "remove"]("dark-mode");
    }

    if (savedDarkModeIcon) {
        darkModeIcon.classList[savedDarkModeIcon === "true" ? "add" : "remove"]("bx-sun");
    }
});

/*=========== JS Scroll =================*/
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

/*===== Home =====*/
ScrollReveal().reveal('.home-content h3', {delay:300, origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', {delay:500, origin: 'left' });
ScrollReveal().reveal('.home-content p', {delay:500, origin: 'top' });
ScrollReveal().reveal('.social-media', {delay:200, origin: 'left',});
ScrollReveal().reveal('.social-media a', {delay:400, origin: 'left', interval: 400});

ScrollReveal().reveal('.hobbies-box', {delay:100, origin: 'top'});

/*===== About =====*/
ScrollReveal().reveal('.about-img', {delay:500, origin: 'top'});
ScrollReveal().reveal('.heading', {delay:500, origin: 'top'});
ScrollReveal().reveal('.about-inside', {delay:500, origin: 'bottom'});
ScrollReveal().reveal('.sub-heading', {delay:500, origin: 'left'});
ScrollReveal().reveal('.about-content .about-inside p', {delay:500, origin: 'right'});
ScrollReveal().reveal('.about-content .about-inside p', {delay:500, origin: 'bottom'});

ScrollReveal().reveal('.resume-row', {delay:500, origin: 'top'});
ScrollReveal().reveal('.resume-column', {delay:500, origin: 'top'});
ScrollReveal().reveal('.resume-column .title h3', {delay:500, origin: 'left'});
ScrollReveal().reveal('.resume-column .resume-box .resume-content', {delay:500, origin: 'top', interval:200});

/*===== Profile =====*/
ScrollReveal().reveal('.container .get-in-touch', {delay:500, origin: 'top'});
ScrollReveal().reveal('.container h2', {delay:500, origin: 'left'});
ScrollReveal().reveal('.container .contact-btn', {delay:500, origin: 'top'});

ScrollReveal().reveal('.container .skills-info .education h4', {delay:500, origin: 'left'});
ScrollReveal().reveal('.container .skills-info .education', {delay:700, origin: 'top', interval:200});
ScrollReveal().reveal('.skills-description', {delay:500, origin: 'left'});

/*===== Project =====*/
ScrollReveal().reveal('.main i', {delay:500, origin: 'bottom'});
ScrollReveal().reveal('.main h1', {delay:1000, origin: 'left'});
ScrollReveal().reveal('.main p', {delay:1500, origin: 'right'});

/*===== Contact =====*/
ScrollReveal().reveal('.contact-container', {delay:500, origin: 'bottom',});
ScrollReveal().reveal('.contact-container .contact-box', {delay:500, origin: 'bottom', interval:200});
ScrollReveal().reveal('.contact i', {delay:800, origin: 'top'});
ScrollReveal().reveal('.contact p', {delay:800, origin: 'right'});
