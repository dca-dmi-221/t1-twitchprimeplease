class Stop extends Boton {

    constructor(x,y){
      super(x,y)
      this._r = 0
      this._g = 255
      this._b = 255
    }

    show(){

      if (this.underPressured) {
          this._r = 0;
      }else if (!this.underPressured) {
          this._r = 0;
          this._g = 0;
          this._b = 0;
      }
  
      
      
      fill(this._r,this._g,this._b);
      rect(this._x, this._y, this._bWeight, this._bHeight);
      textAlign(CENTER,CENTER)
      textSize(this._bHeight/2)
      text("⏹",this._x+(this._bWeight/2), this._y+(this._bHeight/2))
      textAlign(RIGHT,BOTTOM)
      textSize(12)
      noFill();
      }
    accionar (){
      if(this.underPressured){
        if (currentPlaylist.length > 0) {
          currentPlaylist[currentSoundIndex].items((song)=> {
            if(song.data.isPlaying()){
              song.stop()
            }
          })
        }
      }
    }
  }