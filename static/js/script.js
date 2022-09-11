const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");
const cookiesButton = document.getElementById("cookies-button");

function start() {
    video.play();
    overlay.hidden = true;
};

function stop() {
    video.pause()
    overlay.hidden = false;
};

function main() {
    start();
    fullscreen();
};

function fullscreen() {
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
};

cookiesButton.addEventListener("click", main);
acceptButton.addEventListener("click", main);
declineButton.addEventListener("click", main);
video.addEventListener("click", fullscreen);
