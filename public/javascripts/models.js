function Grass(x,y){
    this._sprite = new Sprite('grass',16,16);
}
Grass.prototype = Object.create(DefaultMapObject.prototype);
function Tower (){
    this._sprite = new Sprite('tower',64,128);
}
Tower.prototype = Object.create(DefaultMapObject.prototype);

function Castle (){
    this._sprite = new Sprite('castle',64,64);
}
Castle.prototype = Object.create(DefaultMapObject.prototype);

function Tree (){
    this._sprite = new Sprite(this.fetchRandomTreeImage(),16,16);
}
Tree.prototype = Object.create(DefaultMapObject.prototype);

Tree.prototype.fetchRandomTreeImage = function (){
    var images = ['rock','rock'];
//    var images = ['tree1','tree2','tree3'];
    var randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
}
