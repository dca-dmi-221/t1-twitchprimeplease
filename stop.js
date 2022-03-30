class Stop extends Boton {

    constructor(x,y){
      super(x,y)
      this._r = 0
      this._g = 255
      this._b = 255
    }
    accionar (array,index){
      if(this.underPressured){
        array[currentSoundIndex].data.stop()
      }
    }
  }