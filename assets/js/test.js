window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("logoLoader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("logoLoader").style.display = "none";
        }, 1000); // Wait for fade-out transition
    }, 2500); // Display for 2.5 seconds
});


// and in your HTML file
window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("logoLoader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("logoLoader").style.display = "none";
        }, 1000); // Fade-out transition
    }, 3000); // Display for 3 seconds
});



// Sponsors Section:

document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".sponsor-track");
    const images = track.children;

    // Clone images for infinite effect
    for (let i = 0; i < images.length; i++) {
        let clone = images[i].cloneNode(true);
        track.appendChild(clone);
    }
});


// commit.js
document.addEventListener("DOMContentLoaded", function() {
    const members = document.querySelectorAll(".committee-member");

    function fadeInOnScroll() {
        members.forEach((member) => {
            const rect = member.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                member.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});


// achievements

// document.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll('.counter');
//     counters.forEach(counter => {
//         let count = 0;
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-count');
//             const increment = target / 50;
//             if (count < target) {
//                 count += increment;
//                 counter.innerText = Math.floor(count);
//                 setTimeout(updateCount, 30);
//             } else {
//                 counter.innerText = target;
//             }
//         };
//         updateCount();
//     });

//     // GSAP Animation for Fade-in Effect
//     gsap.from(".achievement-card", {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.2
//     });
// });




// option 2
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("[data-aos]");

    function animateOnScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                el.classList.add("aos-animate");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});


// Performances & Events Sectio

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("[data-aos]");

    function animateOnScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                el.classList.add("aos-animate");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});


//gghghfghjghhg   
const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

// Open Lightbox
function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = [...images].indexOf(img);
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Change Image (Next/Prev)
function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox on Outside Click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});



// video gallery madam

// Open Video Modal with Selected Video
function openVideo(videoSrc) {
    document.getElementById("videoSource").src = videoSrc;
    let videoElement = document.getElementById("popupVideo");
    videoElement.load();
    document.getElementById("videoModal").style.display = "flex";
    videoElement.play();
}

// Close Video Modal
function closeVideo() {
    let videoElement = document.getElementById("popupVideo");
    videoElement.pause();
    videoElement.currentTime = 0;
    document.getElementById("videoModal").style.display = "none";
}


// for nav

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Dropdown menu for mobile view
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        dropdown.classList.remove("active");
    });
});


// /light nox model index
document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Open Lightbox
    document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    // Close Lightbox on outside click
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});


// video

function openPopup(eventName) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-title").innerText = eventName;
    document.getElementById("popup-img").src = eventName.toLowerCase().replace(" ", "") + ".jpg";
    document.getElementById("popup-details").innerText = `Details about ${eventName}`;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// award card 


function openPopup(eventName, imgSrc) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-title").innerText = eventName;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup-details").innerText = `Winner: [Name]`;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// test wala gallry
function showEvent(index) {
    let images = document.querySelectorAll(".event-images");
    let buttons = document.querySelectorAll(".tab-btn");

    images.forEach((img, i) => {
        img.classList.remove("active");
        buttons[i].classList.remove("active");
    });

    images[index].classList.add("active");
    buttons[index].classList.add("active");
}


// Hide loader and show content after animation completes
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('fade-out');
        document.getElementById('mainContent').classList.add('show');

        // Remove loader from DOM after fade out completes
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2500); // Total animation duration (2.5s)
});


// video main section
// Open the modal with selected video
document.querySelectorAll('.video-thumb').forEach(item => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video');
        const modal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('modalVideo');

        videoPlayer.src = videoSrc;
        modal.classList.add('active');
        videoPlayer.play();
    });
});

// Close modal
function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideo');

    modal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}



// top up for award

function showPopup(title, text) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-text").textContent = text;
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}





// video model for celibrity
// Open the modal with selected video



document.querySelectorAll('.btn[data-video]').forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video') + '?autoplay=1';
        document.getElementById('videoFrame').src = videoUrl;
        document.getElementById('videoModal').classList.add('active');
    });
});

document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = ''; // Stop video
    modal.classList.remove('active');
});



// about wala js hai scrool keliye

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#aboutRekha");
    const image = section.querySelector(".about-image img");
    const text = section.querySelector(".about-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    image.classList.add("visible");
                    text.classList.add("visible");
                    observer.unobserve(entry.target); // only animate once
                }
            });
        }, { threshold: 0.4 }
    );

    observer.observe(section);
});