"use strict";
let playerToggler = document.querySelector('.toggler');
let durationContainer = document.querySelector('.duration');
let currentPlayer = document.getElementById('currentPlayer');
let playerContainer = document.getElementById('playerContainer');
let playerSlider = document.getElementById('playerSlider');

window.addEventListener('keydown', (e) => { // player toggle
    if (e.key == ' ') togglePlayer();
});
playerToggler.textContent = '|>'; // paused
function togglePlayer() {
    if (currentPlayer.paused) {
        currentPlayer.play();
        playerToggler.textContent = '||'; // playing
    }
    else {
        currentPlayer.pause();
        playerToggler.textContent = '|>'; // paused
    }
}
setTimeout(function () { // time stamp before played
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
}, 150);


function formatTime(time) { // formats time in seconds:minutes format
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

playerSlider.max = Math.floor(currentPlayer.duration);
currentPlayer.addEventListener('timeupdate', () => { // timestamp while being played (live)
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
    playerSlider.value = Math.floor(currentPlayer.currentTime)
    playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${currentPlayer.value / currentPlayer.duration}%, #ddd ${playerSlider.value}%)`;
    playerSlider.max = Math.floor(currentPlayer.duration);
    console.log(Math.floor(currentPlayer.value / currentPlayer.duration))
});
playerSlider.addEventListener('input', () => {
    playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${playerSlider.value}%, #ddd ${playerSlider.value}%)`;
    playerSlider.value = Math.floor(currentPlayer.currentTime)
    playerSlider.max = Math.floor(currentPlayer.duration);
}); 