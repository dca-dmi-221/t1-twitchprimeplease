//todo lo relacionado con botones, hecho con christian :D
class Boton {

    constructor(x,y){
    this._x = x
    this._y = y;
    this._bWeight = 50;
    this._bHeight = 50;
    this._r = 150;
    this._g = 150;
    this._b = 150;
    this.underPressured = false;
    }

    show(){

    fill(this._r,this._g,this._b);
    rect(this._x, this._y, this._bWeight, this._bHeight,20);
    noFill();
    }

    action(){
    if (mouseX > this._x && mouseX < this._x+this._bWeight && mouseY > this._y && mouseY < this._y + this._bHeight){
        this.underPressured = true;
    } else {
        this.underPressured = false;
    }
    }
    accionar (){
    
    }
}
