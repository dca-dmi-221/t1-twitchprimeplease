// hecho gracias a la mano de nuestro señor Daniel, el monitor de los martes.

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
  //Cambios en como se maneja Song hechos con Cristian :D
  mySound = [
    new Song ("Feeling Good", "Michael Buble", "It's Time","Pop",2001,loadSound('./sounds/Feeling_Good.mp3'),"xdd"),
    new Song ("Boy like you", "Kesha", "x","x",2001,loadSound('./sounds/Boy_like_you.mp3'),"xdd")
  ];
}

//bottoms
let botones = []
let play = new Play(720,650);
botones.push(play);

let pause = new Pause (750,650);
botones.push(pause);

let next = new Next(780,650);
botones.push(next);

let prev = new Prev(660,650);
botones.push(prev);

let stop = new Stop(690,650);
botones.push(stop)

//variable Volumen
let volumen = 1

//texto
let reproduciendo = new Texto (720,600)

function setup() {
  let cnv = createCanvas(1439, 732);
  background(255);
}

function draw() {
  
  ellipse(200, 200, 100, 100);
  botones.forEach(elemento =>{

    elemento.show();

  })
  reproduciendo.show(currentSoundIndex,20)
  

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
  //console.log(currentSoundIndex);
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
    //console.log('aaaa')
    mySound[currentSoundIndex].stop();
    currentSoundIndex += jumper;
  } else {
    mySound[currentSoundIndex].stop();
    currentSoundIndex = 0;
  }
}

//hasta aqui lo hecho con Daniel

function mousePressed(){
  botones.forEach(elemento =>{

    elemento.action();
    elemento.accionar (mySound,currentSoundIndex);

    
  })
  


}

function mouseReleased(){

  botones.forEach(elemento =>{

    elemento.underPressured = false;

  })

}