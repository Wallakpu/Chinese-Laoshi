function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('show');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });


$(document).ready(function() {
    let currentSlide = 0;
    const totalSlides = 4; // Changed to 4 slides
    
    function showSlide(index) {
        const translateX = -index * 25; // 25% per slide (100% / 4)
        $('.slider-wrapper').css('transform', `translateX(${translateX}%)`);
        
        $('.dot').removeClass('active');
        $(`.dot[data-slide="${index}"]`).addClass('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);
    
    // Optional: Click dots to change slides
    $('.dot').click(function() {
        const slideIndex = parseInt($(this).data('slide'));
        showSlide(slideIndex);
    });
});