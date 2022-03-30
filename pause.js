class Pause extends Boton {
    constructor(x,y){
      super(x,y)
      this._r = 0
      this._g = 255
      this._b = 0
    }
    accionar (array,index){
  
      if(this.underPressured){
        console.log("🥶");
        array[currentSoundIndex].data.pause()
      }
    }
  }