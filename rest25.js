class Rest25 extends Boton {
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
    fill(0)
    textSize(this._bHeight/2)
    text("⏪",this._x+(this._bWeight/2), this._y+(this._bHeight/2))
    textAlign(RIGHT,BOTTOM)
    textSize(12)
    noFill();
    }
    accionar (){

    if(this.underPressured){
        if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
            song.data.jump(song.data.currentTime()-25);
        })
        
        }
    }
    }
}