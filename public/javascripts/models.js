function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}


function Grass(){
    this.uid =  guid();
    this._image = ['grass',16,16];
}
Grass.prototype = new DefaultMapObject();

Grass.prototype.click = function(ev){

}
function Tower (){
    this.uid =  guid();
    this._image = ['tower',64,128];
}
Tower.prototype = new ClickableMapObject();

function Castle (){
    this.uid =  guid();
    this._image = ['castle',64,64];
}
Castle.prototype = new ClickableMapObject();
Clickable.call(Castle.prototype,function(obj,options){
    obj.move()
});
CanMove.call(Castle.prototype);

function Tree (){
    this.uid =  guid();
    this._image = [fetchRandomTreeImage(),96,96];
}
Tree.prototype = new ClickableMapObject();
Clickable.call(Tree.prototype);
function fetchRandomTreeImage (){
//    var images = ['rock','rock'];
    var images = ['tree1','tree2','tree3'];
    var randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
}
