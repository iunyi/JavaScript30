'use strict';

// Play sound and highlight a key it is pressed
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.main__key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    console.log(key)
}

window.addEventListener('keydown', playSound);

// Remove the highlight effect after the transition ends
function removeTransition() {
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.main__key');
for(let item of keys){
    item.addEventListener('transitionend', removeTransition);
}
//# sourceMappingURL=main.js.map
