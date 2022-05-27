class ToPlaylist0 extends Boton {
    constructor(x,y){
    super(x,y)
    this._r = 242
    this._g = 242
    this._b = 242
    this._bWeight = 100
    }

    show(){
    
    fill(this._r,this._g,this._b,200);
    rect(this._x, this._y, this._bWeight, this._bHeight,25);
    textAlign(CENTER,CENTER)
    textSize(this._bHeight/3)
    fill(0)
    text("Todas",this._x+(this._bWeight/2), this._y+(this._bHeight/2))
    textAlign(RIGHT,BOTTOM)
    textSize(12)
    noFill();
    }
    accionar (){

    if(this.underPressured){
        
        currentPlaylist = playlist0
        if (currentPlaylist.length > 0) {
            currentPlaylist[currentSoundIndex].items((song)=> {
                song.stop()
            
            })
        }
        currentSoundIndex = 0;
    }
    }
}