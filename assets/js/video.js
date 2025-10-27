// Function to load video dynamically
function loadVideo(videoId, videoUrl) {
    const iframe = document.getElementById(videoId);
    iframe.src = videoUrl; // Set the video URL
}

// Reset video when modal is closed
document.addEventListener('hidden.bs.modal', function(event) {
    const iframes = document.querySelectorAll('.modal iframe');
    iframes.forEach(iframe => {
        iframe.src = ''; // Clear the video source
    });
});