// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  var horn = document.getElementById('horn-select');
  var hornSound = document.querySelector('audio');
  horn.addEventListener('input', function() {
    // display correct image and set correct audio file
    var image = document.querySelector('img');
    if (horn.value == 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      image.alt = 'air horn';
      hornSound.src = 'assets/audio/air-horn.mp3';
    } else if (horn.value == 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      image.alt = 'car horn';
      hornSound.src = 'assets/audio/car-horn.mp3';
    } else if (horn.value == 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      image.alt = 'party horn';
      hornSound.src = 'assets/audio/party-horn.mp3';
    } else {
      image.src = 'assets/images/no-image.png';
      image.alt = 'No image selected';
    }
  });

  var volumeSlider = document.getElementById('volume');
  var volumeImg = document.querySelectorAll('img')[1];
  var volumeAudio = document.querySelector('audio');
  volumeSlider.addEventListener('change', function() {
    if (volumeSlider.value == 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg';
      volumeImg.alt = 'Volume level 0';
    } else if (volumeSlider.value >= 1 && volumeSlider.value < 33) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
      volumeImg.alt = 'Volume level 1';
    } else if (volumeSlider.value >= 33 && volumeSlider.value < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
      volumeImg.alt = 'Volume level 2';
    } else {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
      volumeImg.alt = 'Volume level 3';
    }
    volumeAudio.volume = volumeSlider.value / 100;
  });

  var playSoundButton = document.querySelector('button');
  playSoundButton.addEventListener('click', function() {
    hornSound.play();
    if (horn.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}