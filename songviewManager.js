class SongTileViewManager {
    constructor(tileViewItems,x,y) {
    this.tiles = tileViewItems;
    this.x = x;
    this.y = y;
    }

    show() {
        console.log(this.tiles);

        fill(0);
        rect(this.x,this.y,500,20);
        fill(255);
        textAlign(CENTER);
        text(this.tiles.nombre,this.x,this.y)
        text(this.tiles.artista,this.x + 20,this.y, this.x+ 39)
        text(this.tiles.album,this.x + 40,this.y, this.x+ 59)
        text(this.tiles.genero,this.x + 60,this.y, this.x + 79)
        text(this.tiles.publicationYear,this.x + 80, this.y, this.x + 99)
        text(this.tiles.duracion, this.x + 100, this.y,this.x + 119)
        textAlign(RIGHT);
        noFill();
    }

    interact(mx, my, callback) {

        if (mx > this.x && my > this.y && mx < this.x + 700 && my < this.y + 50) {
            this.tiles.underPressured = true;
            console.log("Click");
            callback(this.tiles);
        }

        
        
    }

}