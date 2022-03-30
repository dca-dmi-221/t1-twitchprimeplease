// hecho gracias a la mano de nuestro señor Daniel, el monitor de los martes.

const input = document.querySelector('input');

console.log(input)
input.addEventListener('input', e => {
  let file = e.target.files[0];
  const soundFile = new p5.SoundFile(file);
  defaultPlaylist.push(soundFile)
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

let defaultPlaylist = [];
let currentSoundIndex = 0;
//Must be called just like above
function preload() {
  soundFormats('mp3', 'ogg');
  //Cambios en como se maneja Song hechos con Cristian :D
  defaultPlaylist = [
    new Song ("Feeling Good", "Michael Buble", "It's Time","Pop", 2005,loadSound('./sounds/Feeling_Good.mp3'),"Feeling_Good.mp3"),
    new Song ("Boy like you", "Ashley Tisdale", " ","Nightcore", 2001, loadSound('./sounds/Boy_like_you.mp3'),"Boy_like_you.mp3"),
    new Song ("Rol Playing Game", "mafumafu", "Vocaloid", "Rol Playing Game - Ep", 2017, loadSound ('./sounds/RPG.mp3'))
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
let volumen = 0.5;

//texto
let reproduciendo = new Texto (720,600)
let reproduciendoArtista = new Texto (720, 630)
let listaDeReproduccion = new Texto (720, 100)

//playlist

let playlist0 = [];
let playlist1Raw = [];
let playlist1 = [];
let playlist2Raw = [];
let playlist2 = [];
let playlist3Raw = [];
let playlist3 = [];

let currentPlaylist = playlist0;

function setup() {
  let cnv = createCanvas(1440, 730);
  let x = 800;
  let y = 100;
  for (let i = 0; i < defaultPlaylist.length; i++) {
    //playlist0.push(new SongTileViewManager(defaultPlaylist[i],x,y));
    y += 20;
    
  }

  for (let i = 0; i < playlist1Raw.length; i++) {
    playlist1.push(new SongTileViewManager(playlist1Raw[i],x,y));
    y += 20;
    
  }

  for (let i = 0; i < playlist2Raw.length; i++) {
    playlist2.push(new SongTileViewManager(playlist2Raw[i],x,y));
    y += 20;
    
  }

  for (let i = 0; i < playlist3Raw.length; i++) {
    playlist3.push(new SongTileViewManager(playlist3Raw[i],x,y));
    y += 20;
    
  }

}

function draw() {
  background(255);
  ellipse(200, 200, 100, 100);
  botones.forEach(elemento =>{

    elemento.show();

  })

  reproduciendo.show(defaultPlaylist[currentSoundIndex].nombre,20)
  reproduciendoArtista.show(defaultPlaylist[currentSoundIndex].artista,15)

  switch (currentPlaylist) {
    case playlist0:

      playlist0.forEach(cancion => {
        cancion.show()
      })
      
      break;

      case playlist1:

        playlist1.forEach(cancion => {
          cancion.show()
        })
      
      break;

      case playlist2:

        playlist2.forEach(cancion => {
          cancion.show()
        })
      
      break;

      case playlist3:

        playlist3.forEach(cancion => {
          cancion.show()
        })
      
      break;
  
  }
  

}

function keyPressed() {
  switch (keyCode) {
    case 39:
      //arrow right
      jumpSong('next');
      defaultPlaylist[currentSoundIndex].data.play().setVolume(volumen);
      break;
    case 37:
      //arrow leftx
      jumpSong('prev');
      defaultPlaylist[currentSoundIndex].data.play().setVolume(volumen);
      break;
    case 32:
      //space bar
      if (defaultPlaylist[currentSoundIndex].data.isPlaying()) {
        defaultPlaylist[currentSoundIndex].data.pause().setVolume(volumen);
        background(255, 0, 0);
      } else {
        defaultPlaylist[currentSoundIndex].data.play().setVolume(volumen);
        background(0, 255, 0);
      }
      break;
    case 82:
      //r key
      defaultPlaylist[currentSoundIndex].data.jump(25);
      break;
  }
}

function jumpSong(mode) {
  //console.log(currentSoundIndex);
  let jumper = 1;
  let verify = false;
  if (mode === 'next') {
    jumper = 1;
    verify = currentSoundIndex + 1 < defaultPlaylist.length
  } else if (mode === 'prev') {
    jumper = -1;
    verify = currentSoundIndex - 1 > 0
  }

  if (verify) {
    console.log('aaaa')
    
    defaultPlaylist[currentSoundIndex].data.stop();
    currentSoundIndex += jumper;
  } else {
    defaultPlaylist[currentSoundIndex].data.stop();
    currentSoundIndex = 0;
  }
}

//hasta aqui lo hecho con Daniel

function mousePressed(){
  botones.forEach(elemento =>{

    elemento.action();
    elemento.accionar (defaultPlaylist,currentSoundIndex);

    
  })

  // defaultPlaylist.accionar()
  


}

function mouseReleased(){

  botones.forEach(elemento =>{

    elemento.underPressured = false;

  })

}