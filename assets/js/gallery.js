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

// Lightbox Functionality
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


// asdfgh