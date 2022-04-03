class AddToPlaylist1 extends Boton {
    constructor(x,y){
    super(x,y)
    this._r = 200
    this._g = 200
    this._b = 200
    this._bWeight = 15;
    this._bHeight = 15;
    }

    show(){
        fill(this._r,this._g,this._b);
        rect(this._x, this._y, this._bWeight, this._bHeight,2);
        textAlign(CENTER,CENTER);
        textSize(this._bHeight/2)
        fill(0)
        text("P1",this._x, this._y)
        textAlign(RIGHT,BOTTOM)
        textSize(12)
        noFill();
    }

    accionar (){
        if(this.underPressured){
            
            if (currentPlaylist.length > 0) {
                
                    playlist0[i].items((song)=> {
                        let addToP1 =song
                        playlist1.push(new SongTileViewManager(addToP1,x,y1))
                        })
                    
            
            }
            y1 +=25;
        };
    }

}