"use strict";
let playerToggler = document.querySelector(".toggler");
let durationContainer = document.querySelector(".duration");
let currentPlayer = document.getElementById("currentPlayer");
let playerContainer = document.getElementById("playerContainer");
let playerSlider = document.getElementById("playerSlider");
let audTitle = document.querySelectorAll(".currentTitle");
let foryouSlider = document.getElementById("foryouSlider");

window.addEventListener("keydown", (e) => {
    if (e.key == " ") togglePlayer();
});


// window.addEventListener("keydown", (e) => {
    //     console.log(e.key);
    // });
    
    playerToggler.textContent = "|>"; // paused / default expression
    
    function togglePlayer() {
        if (currentPlayer.paused) {
            currentPlayer.play();
        } else {
            currentPlayer.pause();
        }
    }
    
    function togglenext() {
        currentPlayer.src = 'assets/audio/Blue Eyes_Yo Yo Honey Singh.mp3';
        refreshUI();
    }
    currentPlayer.addEventListener("pause", () => {
        playerToggler.textContent = "|>"; // paused
    });
currentPlayer.addEventListener("playing", () => {
    playerToggler.textContent = "||"; // playing
});

setTimeout(function () {
    // time stamp before played
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
}, 100); 

durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;

function formatTime(time) {
    // formats time in seconds:minutes format
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// default lookup, for exception: no audio file mounted
playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${(playerSlider.value / playerSlider.max) * 100}%, #ddd ${(playerSlider.value / playerSlider.max) * 100}%)`;

currentPlayer.addEventListener("timeupdate", () => {
    // timestamp while being played (live)
    playerSlider.style.background = `linear-gradient(90deg, #ca3500 ${(playerSlider.value / playerSlider.max) * 100}%, #ddd ${(playerSlider.value / playerSlider.max) * 100}%)`;
    durationContainer.innerHTML = `${formatTime(currentPlayer.currentTime)} / ${formatTime(currentPlayer.duration)}`;
    playerSlider.value = Math.floor(currentPlayer.currentTime);
    playerSlider.max = Math.floor(currentPlayer.duration);
});
playerSlider.addEventListener("input", () => {
    currentPlayer.currentTime = playerSlider.value;
    playerSlider.max = Math.floor(currentPlayer.duration);
});