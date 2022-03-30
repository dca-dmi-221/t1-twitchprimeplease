class Next extends Boton {

    constructor(x,y){
      super(x,y)
      this._r = 0
      this._g = 0
      this._b = 0
    }
    accionar (array,index){
      if(this.underPressured){
        console.log("next 😍");
        //jumpSong('prev');
        // array[index].data.stop();
        jumpSong('next');

        array[currentSoundIndex].data.play();
      };
    }
  }