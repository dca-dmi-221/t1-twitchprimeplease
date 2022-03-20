//Esta página será usada para tener ejemplos y cosas de lo que usaré al final
class Song{
  constructor(){
    this.nombre = nombre ="No hay información";
    this.duración  = duracion = "No hay información";
    this.artista  = artista = "No hay información";
    this.album  = album = "No hay información";
    this.genero  = genero = "No hay información";
    this.publicationYear  = publicationYear = "No hay información";
    this.archivo  = archivo = "No hay información";
    this.nombreDeArchivo  = nombreDeArchivo ="No hay información";
  }

  createSong(n,d,ar,al,g,y,arc,nda){
    return {
      nombre: n,
      duracion: d,
      artista: ar,
      album: al,
      genero: g,
      publicationYear: y,
      archivo: arc,
      nombreDeArchivo: nda


    }
  }

}

//todo lo relacionado con botones, hecho con christian :D
class Boton {

  constructor(x,y){
    this._x = x
    this._y = y;
    this._bWeight = 20;
    this._bHeight = 20;
    this._r = 150;
    this._g = 150;
    this._b = 150;
    this.underPressured = false;
  }

  show(){
    //console.log("a")

    if (this.underPressured) {
      this._r = 0;
    }else if (!this.underPressured) {
      this._r = 150;
    }
    
    fill(this._r,this._g,this._b);
    rect(this._x, this._y, this._bWeight, this._bHeight);
    noFill();
  }

  action(){
    if (mouseX>this._x && mouseX<this._x+this._bWeight && mouseY>this._y && mouseY < this._y + height){
      this.underPressured = true;
    } else {
      this.underPressured = false;
    }
  }

  accionar (array,index){
    
  }

}

class Play extends Boton {

  constructor(x,y){
    super(x,y)
    this._b = 255
  }
  accionar (array,index){

    if(this.underPressured){
      array[index].play()
    }
  }
}

class Pause extends Boton {
  constructor(x,y){
    super(x,y)
    this._b = 210
  }
  accionar (array,index){

    if(this.underPressured){
      array[index].pause()
    }
  }
}

class Next extends Boton {

  constructor(x,y){
    super(x,y)
    this._b = 160
  }
  accionar (array,index){
    //jumpSong('next');
  }
}

class Prev extends Boton {
  constructor(x,y){
    super(x,y)
    this._b = 90
  }

  accionar (array,index){
    //jumpSong('prev');
  }
}

class Stop extends Boton {

  constructor(x,y){
    super(x,y)
    this._b = 0
  }
  accionar (array,index){
    if(this.underPressured){
      array[index].stop()
    }
  }
}

class Texto{
  constructor(x,y){
    this._x = x;
    this._y = y;
  }

  show(texto,size){
    fill(0)
    textAlign(CENTER);
    textSize(size)
    text(texto,this._x,this._y)
    textAlign(RIGHT);
    textSize(12);
    noFill()

  }
}

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
  mySound = [
    loadSound('./sounds/sound.mp3'),
    loadSound('./sounds/sound2.mp3'), 
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

//texto
let reproduciendo = new Texto (720,600)

function setup() {
  let cnv = createCanvas(1439, 732);
  background(255);
}

function draw() {
  ellipse(200, 200, 100, 100);
  botones.forEach(elemento =>{

    elemento.show()

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