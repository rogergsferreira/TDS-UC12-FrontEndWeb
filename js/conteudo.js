// DOCUMENTADO

// Get the audio element and the volume control slider
const audioPlayer = document.getElementById('audioPlayer');
const volumeControl = document.getElementById('volumeControl');

// Set the initial volume to match the slider value
audioPlayer.volume = volumeControl.value;

// Update the audio volume when the slider value changes
volumeControl.addEventListener('input', function () {
    audioPlayer.volume = this.value;
});

// Ensure the volume is set correctly after the page loads
window.addEventListener('load', function () {
    audioPlayer.volume = volumeControl.value;
    audioPlayer.play();
});
