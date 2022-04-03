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
let play = new Play(850,850);
botones.push(play);

let pause = new Pause (880,850);
botones.push(pause);

let next = new Next(910,850);
botones.push(next);

let prev = new Prev(790,850);
botones.push(prev);

let stop = new Stop(820,850);
botones.push(stop)

let plusVol = new PlusVol (130,850);
botones.push(plusVol);

let restVol = new RestVol(100,850);
botones.push(restVol);

//variable Volumen
let volumen = 0.5;

//texto
let reproduciendo = new Texto (850,800)
let reproduciendoArtista = new Texto (850, 830)
let listaDeReproduccion = new Texto (850, 100)
let avanceDeReproduccion = new Texto (1700,845)

//playlist

let playlist0 = [];
let playlist1Raw = [];
let playlist1 = [];
let playlist2Raw = [];
let playlist2 = [];
let playlist3Raw = [];
let playlist3 = [];

let titulo = "Todas las canciones"

let currentPlaylist;

function setup() {
  let cnv = createCanvas(1920, 1080);
  let x = 950;
  let y = 150;
  for (let i = 0; i < defaultPlaylist.length; i++) {
    playlist0.push(new SongTileViewManager(defaultPlaylist[i],x,y));
    y += 25;
    
  }

  for (let i = 0; i < playlist1Raw.length; i++) {
    playlist1.push(new SongTileViewManager(playlist1Raw[i],x,y));
    y += 25;
    
  }

  for (let i = 0; i < playlist2Raw.length; i++) {
    playlist2.push(new SongTileViewManager(playlist2Raw[i],x,y));
    y += 25;
    
  }

  for (let i = 0; i < playlist3Raw.length; i++) {
    playlist3.push(new SongTileViewManager(playlist3Raw[i],x,y));
    y += 25;
    
  }

  currentPlaylist = playlist0
  //console.log(currentPlaylist)

}

function draw() {
  background(95);
  ellipse(200, 200, 100, 100);
  botones.forEach(elemento =>{

    elemento.show();

  })
  
  fill(150)
  rect(100,900,1720,30)
  fill(0)
  text(mouseX + "/" + mouseY,mouseX,mouseY);
  if (currentPlaylist.length > 0) {
    currentPlaylist[currentSoundIndex].items((song)=> {
      rect(100,900,(song.data.currentTime()*(1720/song.data.duration())),30)
      //console.log(song.data.currentTime());
      //14.862889077325582
  })
  }
  

  if (currentPlaylist.length > 0) {
      currentPlaylist[currentSoundIndex].items((song)=> {
      reproduciendo.show(song.nombre,20)
      reproduciendoArtista.show(song.artista,15)
      avanceDeReproduccion.show(transformarSegundos(song.data.currentTime()) + "/" + transformarSegundos(song.data.duration()),19)
    
    })
    }

    

    if (currentPlaylist.length > 0) {
      currentPlaylist[currentSoundIndex].items((song)=> {
        if(song.data.currentTime() === song.data.duration()){ 
          jumpSong('next');
          song.data.play().setVolume(volumen);
        }
    })
    }
  

  listaDeReproduccion.show(titulo,50)
  
  //avanceDeReproduccion.show(defaultPlaylist[currentSoundIndex].transformarSegundos(defaultPlaylist[currentSoundIndex].data.currentTime()), + "/" + defaultPlaylist[currentSoundIndex].transformarSegundos(defaultPlaylist[currentSoundIndex].duration()),14)

  switch (currentPlaylist) {
    case playlist0:

      playlist0.forEach(cancion => {
        cancion.show()
      })
      
      break;

      case playlist1:
        if (currentPlaylist.length > 0) {
          playlist1.forEach(cancion => {
            cancion.show()
          })
        }

        titulo = "Playlist 1"
        
      
      break;

      case playlist2:

        if (currentPlaylist.length > 0) {
          playlist2.forEach(cancion => {
            cancion.show()
          })
        }
        titulo = "Playlist 2"
      
      break;

      case playlist3:

        if (currentPlaylist.length > 0) {
          playlist3.forEach(cancion => {
            cancion.show()
          })
        }
        titulo = "Playlist 3"
      
      break;
  
  }
  

}

function keyPressed() {
  switch (keyCode) {
    case 39:
      //arrow right
      jumpSong('next');
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
          song.data.play().setVolume(volumen);
      })
      }
      
      break;
    case 37:
      //arrow leftx
      jumpSong('prev');
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
          song.data.play().setVolume(volumen);
      })
      }
      break;
    case 32:
      //space bar
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
          if (song.data.isPlaying()) {
            song.data.pause().setVolume(volumen);
          } else {
            song.data.play().setVolume(volumen);
          }
      })
      }
      break;
    case 82:
      //r key
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
          song.data.jump(25);
      })
      }
      break;
  }
}

function jumpSong(mode) {
  //console.log(currentSoundIndex);
  let jumper = 1;
  let verify = false;
  if (mode === 'next') {
    jumper = 1;
    verify = currentSoundIndex + 1 < currentPlaylist.length
  } else if (mode === 'prev') {
    jumper = -1;
    verify = currentSoundIndex - 1 > 0
  }

  if (verify) {
    //console.log('aaaa')
    if (currentPlaylist.length > 0) {
      currentPlaylist[currentSoundIndex].items((song)=> {
        song.data.stop();
    })
    }
    currentSoundIndex += jumper;
  } else {

    if (currentPlaylist.length > 0) {
      currentPlaylist[currentSoundIndex].items((song)=> {
        song.data.stop();
    })
    }
    currentSoundIndex = 0;
  }
}

//hasta aqui lo hecho con Daniel

function mousePressed(){
  botones.forEach(elemento =>{

    elemento.action();
    elemento.accionar (currentPlaylist,currentSoundIndex);

    
  })

  // defaultPlaylist.accionar()
  
  currentPlaylist.forEach((songManager, index) => {

    songManager.interact(mouseX, mouseY, (song) => {
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((cancion)=> {
          cancion.data.stop();
      })
      }
    
      song.play();
      currentSoundIndex = index;

    })
  })

  
}

function mouseReleased(){

  botones.forEach(elemento =>{

    elemento.underPressured = false;

  })

}

//función basada en la hecha por el usuario "Alberto" en el siguiente URL https://desarrolloweb.com/faq/convertir-segundos-en-horas-minutos-y-segundos-en-javascript

function transformarSegundos(segundos) {

  let minutos = Math.floor((segundos / 60) % 60);
  minutos = (minutos < 10)? '0' + minutos : minutos;
  let segundo = Math.floor(segundos % 60);
  segundo = (segundo < 10)? '0' + segundo : segundo;
  return minutos + ':' + segundo;
}