function Grass(x,y){
    this._sprite = new Sprite('grass',16,16);
    this._x = x || 16;
    this._y = y ||  25;
}
Grass.prototype = Object.create(DrawableObject.prototype);
function Tower (){
    this._sprite = new Sprite('tower',64,128);
    this._x = 30;
    this._y = 15;
}
Tower.prototype = Object.create(DrawableObject.prototype);

function Castle (x,y){
    this._sprite = new Sprite('castle',128,128);
    this._x = x || 5;
    this._y = y ||  10;
}
Castle.prototype = Object.create(DrawableObject.prototype);

function Tree (x,y){
    this._sprite = new Sprite(this.fetchRandomTreeImage(),16,16);
    this._x = x || 16;
    this._y = y ||  25;
}
Tree.prototype = Object.create(DrawableObject.prototype);

Tree.prototype.fetchRandomTreeImage = function (){
    var images = ['rock','rock'];
//    var images = ['tree1','tree2','tree3'];
    var randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
}
