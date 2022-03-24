class Play extends Boton {

    constructor(x,y){
      super(x,y)
  
      this._r = 0
      this._g = 0
      this._b = 255
    }
    accionar (array,index){
  
      if(this.underPressured){
        array[index].play()
      }
    }
  }