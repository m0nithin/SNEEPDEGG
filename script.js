let audio = new Audio('/music.mp3');
// let toggleButton = document.getElementById('toggleButton');
let isPlaying = false;



document.addEventListener('DOMContentLoaded', () => {
  function toggle() {

    // Look for any element with the 'data-toggle' attribute
    const elements = document.querySelectorAll('[data-toggle]');

    elements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();

        const targetID = element.getAttribute('data-toggle');
        const targetElement = document.getElementById(targetID);

        // Toggle the class 'toggled' on the targeted element
        targetElement.classList.toggle('toggled');

        // Toggle the class 'active' on the clicked element
        element.classList.toggle('active');
        togglePlay();

      });
    });
  }
  toggle();
  // togglePlay()
});

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    toggleButton.classList.remove('pause');
  } else {
    audio.play();
    isPlaying = true;
    toggleButton.classList.add('pause');
  }
}