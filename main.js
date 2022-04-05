// hecho gracias a la mano de nuestro señor Daniel, el monitor de los martes.

const input = document.querySelector('input');

console.log(input)
input.addEventListener('input', e => {
  let file = e.target.files[0];
  const soundFile = new p5.SoundFile(file);
  playlist0.push(new SongTileViewManager(soundFile,x,y))
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
    new Song ("Rol Playing Game", "mafumafu", "Vocaloid", "Rol Playing Game - Ep", 2017, loadSound ('./sounds/RPG.mp3')),
    new Song ("7 Year Old", " Lukas Graham"," Lukas Graham","Soul-Pop",2016, loadSound ('./sounds/7_Years_Old.mp3')),
    new Song ("A Sadness Runs Through Him","The Hoosiers","A Trick of Life","Pop",2007,loadSound('./sounds/A_Sadness_Runs_Through_Him.mp3')),
    new Song ("Fallen Angel", "Mari Cat", "Nightcore1", "Nightcore", 2015,loadSound('./sounds/Fallen_Angel.mp3')),
    new Song ("Jitter Doll", "DarkHole","DarlHole - EP","Fansub",2016, loadSound('./sounds/Jitter_Doll.mp3')),
    new Song ("One Step Closer","Linkin Park"," Hybrid Theory (Bonus Edition)","Nu Metal",2000,loadSound('./sounds/One_Step_Closer.mp3')),
    new Song ("Savin' me","Nickelback","All the Right Reasons","Post-grunge",2006,loadSound('./sounds/Savin_Me.mp3'))
  ];
}

//bottoms
let botones = []

let plusVol = new PlusVol (160,830);
botones.push(plusVol);

let restVol = new RestVol(100,830);
botones.push(restVol);

let prev = new Prev(670,830);
botones.push(prev);

let rest25 = new Rest25 (730,830)
botones.push(rest25);

let stop = new Stop(790,830);
botones.push(stop)

let play = new Play(850,830);
botones.push(play);

let pause = new Pause (910,830);
botones.push(pause);

let plus25 = new Plus25 (970,830)
botones.push(plus25);

let next = new Next(1030,830);
botones.push(next);

let toplaylist0 = new ToPlaylist0(100,150);
botones.push(toplaylist0);

let toplaylist1 = new ToPlaylist1(100,210);
botones.push(toplaylist1);

let toplaylist2 = new ToPlaylist2(100,270);
botones.push(toplaylist2);

let toplaylist3 = new ToPlaylist3(100,330);
botones.push(toplaylist3);

let addtoplaylist1 = new AddToPlaylist1(1200,830);
botones.push(addtoplaylist1);

let addtoplaylist2 = new AddToPlaylist2(1260,830);
botones.push(addtoplaylist2);

let addtoplaylist3 = new AddToPlaylist3(1320,830);
botones.push(addtoplaylist3);

//variable Volumen
let volumen = 0.5;

//texto
let reproduciendo = new Texto (870,750)
let reproduciendoArtista = new Texto (870, 780)
let listaDeReproduccion = new Texto (870, 100)
let avanceDeReproduccion = new Texto (1700,870)
let titulo = "Todas las canciones"

//playlist

let playlist0 = [];
let playlist1Raw = [];
let playlist1 = [];
let playlist2Raw = [];
let playlist2 = [];
let playlist3Raw = [];
let playlist3 = [];

let p1Bottoms = [];

let currentPlaylist;
let x = 1200;
let y = 150;
let y1 = 150;
let y2 = 150;
let y3 = 150;

// Imagenes 

let fondoYuya;
let fondoYuto;
let fondoYugo;
let fondoYuri;


function setup() {
  let cnv = createCanvas(1920, 1080);
  for (let i = 0; i < defaultPlaylist.length; i++) {
    playlist0.push(new SongTileViewManager(defaultPlaylist[i],x,y));
    y += 25;
  }

  fondoYuya = loadImage('./Images/YuyaFondo.png')
  fondoYuto = loadImage('./Images/YutoFondo.png')
  fondoYugo = loadImage('./Images/YugoFondo.png')
  fondoYuri = loadImage('./Images/YuriFondo.png')
    
  currentPlaylist = playlist0
}

function draw() {
  background(95);
  noStroke();
  switch (currentPlaylist) {
    case playlist0:
      fill(242)
      image(fondoYuya,0,0)
      playlist0.forEach(cancion => {
        cancion.show()
        
      })


      titulo = "Todas las canciones"
      
      if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
          
        rect(100,900,(song.data.currentTime()*(1720/song.data.duration())),30)
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

    botones.forEach(elemento =>{
      elemento.show();
    })
    
    
    rect(100,900,1720,30)
    
    
  
    listaDeReproduccion.show(titulo,50)

    noFill();
      break;

      case playlist1:
        fill(242)
        image(fondoYuto,0,0)
        if (currentPlaylist.length > 0) {
          playlist1.forEach(cancion => {
            cancion.show()
          })
        }

        titulo = "Playlist 1"
        
        if (currentPlaylist.length > 0) {
          currentPlaylist[currentSoundIndex].items((song)=> {
          rect(100,900,(song.data.currentTime()*(1720/song.data.duration())),30)
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

      botones.forEach(elemento =>{
        elemento.show();
      })
      
      rect(100,900,1720,30)
      listaDeReproduccion.show(titulo,50)
      noFill();
      break;

      case playlist2:
        fill(242)
        image(fondoYugo,0,0)
        if (currentPlaylist.length > 0) {
          playlist2.forEach(cancion => {
            cancion.show()
          })
        }
        titulo = "Playlist 2"
        if (currentPlaylist.length > 0) {
          currentPlaylist[currentSoundIndex].items((song)=> {
          rect(100,900,(song.data.currentTime()*(1720/song.data.duration())),30)
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

      botones.forEach(elemento =>{
        elemento.show();
      })
      rect(100,900,1720,30)

      listaDeReproduccion.show(titulo,50)
      noFill();
      break;

      case playlist3:
        fill(242)
        image(fondoYuri,0,0);
        if (currentPlaylist.length > 0) {
          playlist3.forEach(cancion => {
            cancion.show()
          })
        }
        titulo = "Playlist 3"
        if (currentPlaylist.length > 0) {
          currentPlaylist[currentSoundIndex].items((song)=> {
          rect(100,900,(song.data.currentTime()*(1720/song.data.duration())),30)
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

      botones.forEach(elemento =>{
        elemento.show();
      })
      rect(100,900,1720,30)
    
      listaDeReproduccion.show(titulo,50)
      noFill();
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
          song.data.jump(song.data.currentTime()+25);
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

  p1Bottoms.forEach(boton => {
    boton.accionar();
  })
}


function mouseReleased(){

  botones.forEach(elemento =>{
    elemento.underPressured = false;
  })
  p1Bottoms.forEach(boton => {
    boton.underPressured = false;
  })
}

function transformarSegundos(segundos) {

  let minutos = Math.floor((segundos / 60) % 60);
  minutos = (minutos < 10)? '0' + minutos : minutos;
  let segundo = Math.floor(segundos % 60);
  segundo = (segundo < 10)? '0' + segundo : segundo;
  return minutos + ':' + segundo;
}