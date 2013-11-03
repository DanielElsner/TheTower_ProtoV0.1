function MapObject(firstObj){
    this.Objects = [];
    if(firstObj){
        this.add(firstObj);
    }

}
MapObject.prototype.add = function(obj){
    this.Objects[this.Objects.length] = obj;
}

MapObject.prototype.draw = function(){
    for(var i = 0 ; i < this.Objects.length ; i++){
        this.Objects[i].draw();
    }
}
MapObject.prototype.click = function(){
    for(var i = 0 ; i < this.Objects.length ; i++){
        if(this.Objects[i].click){
            this.Objects[i].click();
        }
    }
}


function DrawableObject (sprite,x,y){
    this._sprite = sprite,
        this._x = x,
        this._y =y;
}
DrawableObject.prototype.draw = function(){
    this._sprite.draw(this._x,this._y);
}
DrawableObject.prototype.click = function(){
    console.log('clicked: '+this._sprite._image);
}



function Sprite (image,xScale,yScale){
    this._image =image,
        this._xScale =xScale,
        this._yScale =yScale;
}

function Tile (xPos,yPos){
    this._xPos;
    this._yPos;
    this._objects = [];
}

Tile.prototype.getObjects = function(){
    return this._objects;
}
Tile.prototype.getObject = function(id){
    return this._objects[id];
}
Tile.prototype.add = function (obj){
    this._objects.push(obj);
}
Tile.prototype.removeObj = function (obj){
    var idInt = parseInt(obj);


}

Sprite.prototype.draw = function(xPos,yPos){
    var field = {
        x:xPos,
        y:yPos ,
        image: this._image
    }
    Engine.MapRenderer.fillFieldWithImage(field,{x:this._xScale , y:this._yScale});
}