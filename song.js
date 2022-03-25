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
    }
}