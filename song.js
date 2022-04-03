class Song{
    constructor(nombre, artista,album,genero, publicationYear, data,nombreDeArchivo){
    this.nombre = nombre
    this.artista  = artista
    this.album  = album
    this.genero  = genero
    this.publicationYear  = publicationYear
    this.data  = data
    this.duracion  = data.duration()/60
    this.nombreDeArchivo  = nombreDeArchivo
    this.underPressured = false;
    }



    play() {
        this.data.play();
    }

    isPlaying() {
        this.data.isPlaying();
    }

    pause() {
        this.data.pause();
    }

    stop() {
        this.data.stop();
    }
}