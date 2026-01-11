const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    // current slide remove
    slides[currentIndex].classList.remove('active');
    
    // next slide
    currentIndex = (currentIndex + 1) % slides.length;
    
    // new slide active
    slides[currentIndex].classList.add('active');
}

// Every 5 seconds slide eka change wenawa
setInterval(nextSlide, 2000);