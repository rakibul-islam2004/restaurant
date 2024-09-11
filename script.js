document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile menu toggle
    let icon = document.querySelector('.icon');
    let ul = document.querySelector('nav ul');
    let main = document.querySelector('main');
    let logo = document.querySelector('.logo');
    let nav_right = document.querySelector('.nav-right');

    icon.addEventListener("click", ()=>{
        ul.classList.toggle("showData");

        if(ul.className == "nav-center showData"){
            document.getElementById("bar").className= "fa-solid fa-xmark";
        }
        else{
            document.getElementById("bar").className= "fa-solid fa-bars";
        }
    });

    [ main, logo , nav_right ].forEach(function(element) {
        element.addEventListener("click",()=>{
        ul.classList.remove("showData");
        document.getElementById("bar").className= "fa-solid fa-bars";
        });
    });
    


    // Add to cart functionality (placeholder)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
            // Implement actual cart functionality here
        });
    });

    // Simple form validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form validation logic here
            alert('Form submitted successfully!');
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '50px 0px',
        threshold: 0.01
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});