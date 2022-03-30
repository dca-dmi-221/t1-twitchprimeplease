class SongTileViewManager {
    constructor(tileViewItems) {
    this.tiles = tileViewItems;
    }

    show() {

    this.tiles.forEach((item) => {
        item.show();
    });
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