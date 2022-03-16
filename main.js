
// hecho gracias a la mano de nuestro señor Daniel, el monitor de los martes.
//Esta página será usada para tener ejemplos y cosas de lo que usaré al final

const input = document.querySelector('input');

console.log(input)
input.addEventListener('input', e => {
  let file = e.target.files[0];
  const soundFile = new p5.SoundFile(file);
  mySound.push(soundFile)
})

function createObjectURL(file) {
  if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file);
  } else if (window.URL && window.URL.createObjectURL) {
    return window.URL.createObjectURL(file);
  } else {
    return null;
  }
}

let mySound = [];
let currentSoundIndex = 0;
//Must be called just like above
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = [
    loadSound('./sounds/sound.mp3'),
    loadSound('./sounds/sound2.mp3'), 
  ];
}

function setup() {
  let cnv = createCanvas(200, 200);
  background(0);
}

function draw() {
  ellipse(200, 200, 100, 100);
}

function keyPressed() {
  switch (keyCode) {
    case 39:
      //arrow right
      jumpSong('next');
      mySound[currentSoundIndex].play();
      break;
    case 37:
      //arrow left
      jumpSong('prev');
      mySound[currentSoundIndex].play();
      break;
    case 32:
      //space bar
      if (mySound[currentSoundIndex].isPlaying()) {
        mySound[currentSoundIndex].pause();
        background(255, 0, 0);
      } else {
        mySound[currentSoundIndex].play();
        background(0, 255, 0);
      }
      break;
    case 82:
      //r key
      mySound[currentSoundIndex].jump(25);
      break;
  }
}

function jumpSong(mode) {
  console.log(currentSoundIndex);
  let jumper = 1;
  let verify = false;
  if (mode === 'next') {
    jumper = 1;
    verify = currentSoundIndex + 1 < mySound.length
  } else if (mode === 'prev') {
    jumper = -1;
    verify = currentSoundIndex - 1 > 0
  }

  if (verify) {
    console.log('aaaa')
    mySound[currentSoundIndex].stop();
    currentSoundIndex += jumper;
  } else {
    mySound[currentSoundIndex].stop();
    currentSoundIndex = 0;
  }
}

//hasta qui lo hecho con Daniel