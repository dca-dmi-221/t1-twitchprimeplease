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

    show(){
        textFill(0);
        rect(this.x,this.y,150,20)
        textAlign(CENTER);
        text(this.nombre,x,y)
        text(this.artista,x + 20,y, x+ 39)
        text(this.album,x + 40,y, x+ 59)
        text(this.genero,x + 60,y, x + 79)
        text(this.publicationYear,x + 80, y, x + 99)
        text(this.duracion, x + 100, y,x + 119)
        textAlign(RIGHT);
    }

    validateClick(mx,my){

        return (mx < this.x && my < this.y && mx < this.x + 700 && my < this.y + 50)

    }
}