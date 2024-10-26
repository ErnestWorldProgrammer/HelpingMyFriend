document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('myVideo');

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
