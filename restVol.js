class RestVol extends Boton {
    constructor(x,y){
    super(x,y)
    this._r = 0
    this._g = 0
    this._b = 0
    }

    show(){
    
    fill(this._r,this._g,this._b);
    rect(this._x, this._y, this._bWeight, this._bHeight);
    textAlign(CENTER)
    fill(255)
    text("-",this._x+10, this._y+15)
    textAlign(RIGHT)
    noFill();
    }
    accionar (){

    if(this.underPressured){
        if (currentPlaylist.length > 0) {
        currentPlaylist[currentSoundIndex].items((song)=> {
            if (volumen  != 0) {
                volumen = volumen - 0.1
                song.data.setVolume(volumen)
                
            } else if (volumen === 0){
                volumen = 0
                song.data.setVolume(volumen)
            }
            
        })
        }
    }
    console.log(volumen);
    }

}