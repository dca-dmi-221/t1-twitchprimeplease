class Texto{
    constructor(x,y){
    this._x = x;
    this._y = y;
    }
    show(texto,size){
    fill(0)
    textAlign(CENTER);
    textSize(size)
    text(texto,this._x,this._y)
    textAlign(RIGHT);
    textSize(12);
    noFill()

    }
}