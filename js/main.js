// Main initialization and utilities

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
});

async function loadComponents() {
    try {
        const navbarResponse = await fetch('components/navbar.html');
        const navbarHTML = await navbarResponse.text();
        document.getElementById('navbar-container').innerHTML = navbarHTML;
        
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerHTML;
        
        initNavigation();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'spinner';
    loader.id = 'global-loader';
    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.remove();
    }
}

export { showLoader, hideLoader, initScrollAnimations };
 const texts = [
      
      "Full Stack Developer.",
      "Devops Engineer.",
      "IT Enthusiast."
    ];

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let isDeleting = false;

    function type() {
      const current = count % texts.length;
      const fullText = texts[current];

      if (isDeleting) {
        letter = fullText.substring(0, index--);
      } else {
        letter = fullText.substring(0, index++);
      }

      document.getElementById('text').textContent = letter;

      let typeSpeed = 120;

      if (isDeleting) { typeSpeed /= 2; }

      if (!isDeleting && letter === fullText) {
        typeSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && letter === '') {
        isDeleting = false;
        count++;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();


// Get the div
const scrollDiv = document.getElementById("goup");

// Show div when scrolled down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollDiv.style.display = "flex";
  } else {
    scrollDiv.style.display = "none";
  }
};

// Scroll to top on click
scrollDiv.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // smooth scroll
  });
});
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button icon
    if(body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
