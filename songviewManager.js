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
        rect(this.x-100,this.y,900,20);
        fill(255);
        textAlign(CENTER,TOP);
        text(this.tiles.nombre,this.x,this.y)
        text(this.tiles.artista,this.x-300,this.y, this.x+ 39)
        text(this.tiles.album,this.x -220,this.y, this.x+ 59)
        text(this.tiles.genero,this.x -90,this.y, this.x + 79)
        text(this.tiles.publicationYear,this.x, this.y, this.x + 99)
        text(transformarSegundos(this.tiles.data.duration()) + " minutes", this.x + 100, this.y,this.x + 119)
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

    xdd (callback) {
        callback(this.tiles);
    }

}