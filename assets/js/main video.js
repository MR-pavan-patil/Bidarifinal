function showVideos(index) {
    let videos = document.querySelectorAll(".video-tab");
    let buttons = document.querySelectorAll(".tab-btn");

    videos.forEach((vid, i) => {
        vid.classList.remove("active");
        buttons[i].classList.remove("active");

        // Hide previous tab with delay
        setTimeout(() => vid.style.display = "none", 500);
    });

    videos[index].style.display = "block";
    setTimeout(() => videos[index].classList.add("active"), 50);
    buttons[index].classList.add("active");
}

// Lightbox functionality
function openVideo(videoUrl) {
    document.getElementById("lightbox-video").src = videoUrl + "?autoplay=1";
    document.getElementById("video-lightbox").style.display = "flex";
}

function closeVideo() {
    document.getElementById("lightbox-video").src = "";
    document.getElementById("video-lightbox").style.display = "none";
}