class SongTileViewManager {
    constructor(tileViewItems,x,y) {
    this.tiles = tileViewItems;
    this.x = x;
    this.y = y;
    }

    show() {
       // console.log(this.tiles);

        fill(0);
        //rectMode(CENTER)
        rect(this.x,this.y,900,20);
        fill(255);
        textAlign(LEFT,TOP);
        text(this.tiles.nombre,this.x,this.y)
        text(this.tiles.artista,this.x+200,this.y)
        text(this.tiles.album,this.x +350,this.y)
        text(this.tiles.genero,this.x +450,this.y)
        text(this.tiles.publicationYear,this.x+600, this.y)
        text(transformarSegundos(this.tiles.data.duration()) + " minutes", this.x + 700, this.y)
        textAlign(CENTER,BOTTOM)
    
        noFill();
    }

    interact(mx, my, callback) {

        if (mx > this.x && my > this.y && mx < this.x + 900 && my < this.y + 20) {
            this.tiles.underPressured = true;
            //console.log("Click");
            callback(this.tiles);
        }

        
        
    }

    items(callback) {
        callback(this.tiles);
    }

}