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

    // get nombre() {
    //     return this.nombre;
    // }

    // get artista() {
    //     return this.artista
    // }

    // get album() {
    //     return this.album
    // }
    // get genero(){
    //     return this.genero;
    // }
    
    // get publicationYear(){
    //     return this.publicationYear;
    // }

    // get data(){
    //     return this.data
    // }

    // get duration(){
    //     return this.duracion;
    // }

    // get underPressured(){
    //     return this.underPressured;
    // }

    // set underPressured (valor){
    //     this.underPressured = valor;
    // }
}