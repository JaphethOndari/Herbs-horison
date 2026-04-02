// Toggle Mobile Navigation Menu
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
}


// Close mobile menu when clicking on a nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.getElementById("nav");
    const menuBtn = document.querySelector('.menu-btn');

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if(nav.classList.contains("show")) {
                nav.classList.remove("show");
            }
        });
    });

    // Close menu if clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuBtn = menuBtn.contains(event.target);

        if(!isClickInsideNav && !isClickOnMenuBtn) {
            nav.classList.remove("show");
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}