class AddToPlaylist3 extends Boton {
    constructor(x,y){
    super(x,y)
    this._r = 242
    this._g = 242
    this._b = 242
    }

    show(){
        fill(this._r,this._g,this._b,200);
        rect(this._x, this._y, this._bWeight, this._bHeight,20);
        textAlign(CENTER,CENTER);
        textSize(this._bHeight/2)
        fill(0)
        text("P3",this._x+(this._bWeight/2), this._y+(this._bHeight/2))
        textAlign(RIGHT,BOTTOM)
        textSize(12)
        noFill();
    }

    accionar (){
        if(this.underPressured){
            
            if (currentPlaylist.length > 0) {
                
                        currentPlaylist[currentSoundIndex].items((song)=> {
                        let addToP3 = song;
                        playlist3.push(new SongTileViewManager(addToP3,x,y2))
                        })
                    
            
            }
            y3 +=25;
        };
    }

}