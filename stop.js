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
      textAlign(CENTER)
      text("⏹",this._x+10, this._y+15)
      textAlign(RIGHT)
      noFill();
      }
    accionar (array,index){
      if(this.underPressured){
        array[currentSoundIndex].data.stop()
      }
    }
  }