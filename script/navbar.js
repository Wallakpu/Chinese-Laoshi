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