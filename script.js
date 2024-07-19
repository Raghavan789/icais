function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelector('.dropbtn').addEventListener('click', function(event) {
    if (window.innerWidth <= 753) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//sechome <--------------------------slider-------------------------->

// Simple image slider
let slideIndex = 0;

const slides = document.querySelector('.slide-slides');
const totalSlides = slides.children.length;

function showSlides(n) {
    slideIndex += n;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector('.slide-prev').addEventListener('click', () => showSlides(-1));
document.querySelector('.slide-next').addEventListener('click', () => showSlides(1));

showSlides(0);


//removed