// script.js

const joints = document.querySelectorAll('.joint');
const videoPlayer = document.getElementById('video-player');
const videoContainer = document.querySelector('.video-container');


joints.forEach((joint) => {
    joint.addEventListener('click', (e) => {
        const videoSrc = joint.getAttribute('data-video');
        videoPlayer.src = `video/${videoSrc}`;
        videoContainer.style.display = 'block';
    });
});



videoPlayer.addEventListener('ended', () => {
    videoContainer.style.display = 'none';
});