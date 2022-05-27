class SongTileViewManager {
    constructor(tileViewItems,x,y) {
    this.tiles = tileViewItems;
    this.x = x;
    this.y = y;
    }

    show() {
       // console.log(this.tiles);

        fill(242,242,242,200);
        rectMode(CENTER)

        rect(this.x,this.y,1000,20,15);
        fill(0);
        textAlign(LEFT,CENTER);
        text(this.tiles.nombre,this.x -490,this.y)
        text(this.tiles.artista,this.x-250,this.y)
        text(this.tiles.album,this.x -150,this.y)
        text(this.tiles.genero,this.x+50,this.y)
        text(this.tiles.publicationYear,this.x+190, this.y)
        text(transformarSegundos(this.tiles.data.duration()) + " minutes", this.x + 240, this.y)
        textAlign(CENTER,BOTTOM)
        rectMode(CORNER)
        noFill();
    }

    interact(mx, my, callback) {

        if (mx > this.x - 500 && my > this.y && mx < this.x + 500 && my < this.y + 20) {
            this.tiles.underPressured = true;
            callback(this.tiles);
        }

        
        
    }

    items(callback) {
        callback(this.tiles);
    }

}