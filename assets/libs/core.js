"use strict";
let playerToggler = document.querySelector('.toggler');
let durationContainer = document.querySelector('.duration');
let currentPlayer = document.getElementById('currentPlayer');
let playerContainer = document.getElementById('playerContainer');
let playerSlider = document.getElementById('playerSlider');
let title = document.getElementById('title');

window.addEventListener('keydown', (e) => { // player toggle
    if (e.key == ' ') togglePlayer();
});
playerToggler.textContent = '|>'; // paused
function togglePlayer() {
    if (currentPlayer.paused) {
        currentPlayer.play();
    }
    else {
        currentPlayer.pause();
    }
}
currentPlayer.addEventListener("pause", ()=>{
    playerToggler.textContent = '|>'; // paused
})
currentPlayer.addEventListener("playing", ()=>{
    playerToggler.textContent = '||'; // playing
})

setTimeout(function () { // time stamp before played
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
}, 150);


function formatTime(time) { // formats time in seconds:minutes format
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${((playerSlider.value / playerSlider.max) * 100)}%, #ddd ${((playerSlider.value / playerSlider.max) * 100)}%)`;
// playerSlider.max = Math.floor(currentPlayer.duration);
// playerSlider.value = 20;
// playerSlider.max = Math.floor(currentPlayer.duration);

currentPlayer.addEventListener('timeupdate', () => { // timestamp while being played (live)
    playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${((playerSlider.value / playerSlider.max) * 100)}%, #ddd ${((playerSlider.value / playerSlider.max) * 100)}%)`;
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
    playerSlider.value = Math.floor(currentPlayer.currentTime)
    playerSlider.max = Math.floor(currentPlayer.duration);
});
playerSlider.addEventListener('input', () => {
    currentPlayer.currentTime = playerSlider.value;
    playerSlider.max = Math.floor(currentPlayer.duration);
}); 

