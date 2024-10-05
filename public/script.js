function changeVideo(videoSrc) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}

function toggleFullscreen() {
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) { 
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var profilePicture = document.getElementById("profile-picture");
    var userMenu = document.querySelector(".user-menu");

    profilePicture.addEventListener("click", function(event) {
        event.stopPropagation();
        userMenu.classList.toggle("show");
    });

document.body.addEventListener("click", function() {
    if (userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
    }
});
});
