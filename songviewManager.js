class SongTileViewManager {
    constructor(tileViewItems,x,y) {
    this.tiles = tileViewItems;
    this.x = x;
    this.y = y;
    }

    show() {


        textFill(0);
        rect(x,y,500,20)
        textAlign(CENTER);
        text(this.tiles.nombre,x,y)
        text(this.tiles.artista,x + 20,y, x+ 39)
        text(this.tiles.album,x + 40,y, x+ 59)
        text(this.tiles.genero,x + 60,y, x + 79)
        text(this.tiles.publicationYear,x + 80, y, x + 99)
        text(this.tiles.duracion, x + 100, y,x + 119)
        textAlign(RIGHT);
    }

    interact(mx, my) {
        let anyItemClicked = false;

        this.tiles.forEach((item) => {

            if (item.validateClick(mx, my)) {
                anyItemClicked = true;
                item.underPressured = true
            }
            });

        
        
    }

}