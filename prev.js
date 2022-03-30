class Prev extends Boton {
    constructor(x,y){
      super(x,y)
      this._r = 0
      this._g = 0
      this._b = 0
    }
  
    accionar (array,index){
      if(this.underPressured){
        console.log("prev 😭");
        //jumpSong('prev');
        jumpSong('prev');
        array[currentSoundIndex].data.play();
      }
    }
  }