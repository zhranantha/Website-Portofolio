document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for section visibility
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
            }
        });
    });

    sections.forEach((section) => observer.observe(section));

});


document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });

    // Skill cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Add animation when cards come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

class TypeWriter {
    constructor(textElement, words, wait = 3000) {
        this.textElement = textElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.textElement.innerHTML = this.txt;

        // Initial Type Speed
        let typeSpeed = 150;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const textElement = document.querySelector('.typing-text');
    const words = ['I am a UI/UX Designer', 'I am a Web Developer'];
    new TypeWriter(textElement, words);
}

// about

// Pilih container bintang
const starsContainer = document.querySelector('.stars');

// Fungsi untuk membuat bintang
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    console.log("Star created!"); 

    const size = Math.random() * 5 + 5; // Nilai antara 5 dan 10
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Atur posisi awal secara acak
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durasi jatuh 2-5 detik
    star.style.animationDelay = `${Math.random() * 5}s`; // Delay animasi

    // Tambahkan bintang ke dalam container
    starsContainer.appendChild(star);

    // Hapus bintang setelah animasi selesai
    setTimeout(() => {
        star.remove();
    }, 7000);
}

// Interval untuk menambahkan bintang baru
setInterval(createStar, 200);

document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });

 
    // Skill cards animation
    const allSkillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    allSkillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
    

    // Random glow effect for skill cards
    function addGlowEffect() {
        const visibleGrid = document.querySelector('.skills-grid[style="display: grid;"]');
        if (visibleGrid) {
            const visibleCards = visibleGrid.querySelectorAll('.skill-card');
            const randomCard = visibleCards[Math.floor(Math.random() * visibleCards.length)];
            randomCard.style.boxShadow = '0 0 20px rgba(0, 0, 255, 0.2) !important';
            
            setTimeout(() => {
                randomCard.style.boxShadow = 'none';
            }, 1000);
        }
    }

    setInterval(addGlowEffect, 2000);
});
// project
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Random glow effect for project cards
    function addGlowEffect() {
        const randomCard = projectCards[Math.floor(Math.random() * projectCards.length)];
        randomCard.style.boxShadow = '0 0 20px rgba(0, 0, 255, 0.2)';
        
        setTimeout(() => {
            randomCard.style.boxShadow = 'none';
        }, 1000);
    }

    setInterval(addGlowEffect, 2000);
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah reload halaman
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent!',
                showConfirmButton: false,
                timer: 2000
            });
            form.reset(); // Reset form setelah sukses
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, please try again!',
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unable to connect to the server.',
        });
    }
});

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const animateElements = () => {
          const elements = document.querySelectorAll('.animate-element');
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.1
          });
      
          elements.forEach(element => {
            observer.observe(element);
          });
        };
      
        animateElements();
      });

      document.addEventListener('DOMContentLoaded', () => {
        if (typeof animateElements === 'function') {
          animateElements();
        }
      });