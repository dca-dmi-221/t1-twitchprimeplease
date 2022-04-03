class SongTileViewManager {
    constructor(tileViewItems,x,y) {
    this.tiles = tileViewItems;
    this.x = x;
    this.y = y;
    }

    show() {
       // console.log(this.tiles);

        fill(0);
        rectMode(CENTER)

        rect(this.x,this.y,700,20,15);
        fill(255);
        textAlign(LEFT,CENTER);
        text(this.tiles.nombre,this.x -440,this.y)
        text(this.tiles.artista,this.x-300,this.y)
        text(this.tiles.album,this.x -180,this.y)
        text(this.tiles.genero,this.x-80,this.y)
        text(this.tiles.publicationYear,this.x+80, this.y)
        text(transformarSegundos(this.tiles.data.duration()) + " minutes", this.x + 140, this.y)
        textAlign(CENTER,BOTTOM)
        rectMode(CORNER)
        noFill();
    }

    interact(mx, my, callback) {

        if (mx > this.x - 350 && my > this.y && mx < this.x + 350 && my < this.y + 20) {
            this.tiles.underPressured = true;
            //console.log("Click");
            callback(this.tiles);
        }

        
        
    }

    items(callback) {
        callback(this.tiles);
    }

}