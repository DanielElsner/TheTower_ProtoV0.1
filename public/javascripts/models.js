function Grass(x,y){
    this._image = ['grass',16,16];
}
Grass.prototype = Object.create(DefaultMapObject.prototype);
function Tower (){
    this._image = ['tower',64,128];
}
Tower.prototype = Object.create(DefaultMapObject.prototype);

function Castle (){
    this._image = ['castle',64,64];
}
Castle.prototype = Object.create(DefaultMapObject.prototype);

function Tree (){
    this._image = [fetchRandomTreeImage(),16,16];
}
Tree.prototype = Object.create(DefaultMapObject.prototype);

function fetchRandomTreeImage (){
    var images = ['rock','rock'];
//    var images = ['tree1','tree2','tree3'];
    var randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
}
