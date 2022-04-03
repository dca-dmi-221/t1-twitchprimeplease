class ToPlaylist1 extends Boton {
    constructor(x,y){
    super(x,y)
    this._r = 0
    this._g = 0
    this._b = 0
    this._bWeight = 100
    }

    show(){
    
    fill(this._r,this._g,this._b);
    rect(this._x, this._y, this._bWeight, this._bHeight,25);
    textAlign(CENTER,CENTER)
    textSize(this._bHeight/3)
    fill(255)
    text("Playlist1",this._x+(this._bWeight/2), this._y+(this._bHeight/2))
    textAlign(RIGHT,BOTTOM)
    textSize(12)
    noFill();
    }
    accionar (){

    if(this.underPressured){
        
        currentPlaylist = playlist1
        
    }
    }
}