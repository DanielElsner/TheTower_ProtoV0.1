function MapObject(firstObj,coords){
    this.Objects = [];
    this.coords = coords;
    this.TileStack = new TileStack();
    if(firstObj){
        this.add(firstObj);
    }

}
MapObject.prototype.add = function(obj){
    this.Objects[this.Objects.length] = obj;
    this.TileStack.add(obj,this.coords);
}

MapObject.prototype.draw = function(){
   this.TileStack.draw();
}
MapObject.prototype.getCoords = function(){
   return this.coords;
}
MapObject.prototype.click = function(){
    for(var i = 0 ; i < this.Objects.length ; i++){
        if(this.Objects[i].click){
            this.Objects[i].click();
        }
    }
}

function TileStack(){
    this.stack = [];
}

TileStack.prototype.add = function(obj,coords){
    this.stack[this.stack.length] = new Tile(obj._sprite,coords.x,coords.y)
}

TileStack.prototype.draw = function(){
    for(var i = 0 ; i < this.stack.length ; i++){
        if(this.stack[i].draw){
            this.stack[i].draw();
        }
    }
}


function Tile (sprite,x,y){
    this._sprite = sprite,
        this._x = x,
        this._y =y;
}
Tile.prototype.draw = function(){
    var field = {
        x:this._x,
        y:this._y ,
        image: this._sprite._image
    }
    Engine.MapRenderer.fillFieldWithImage(field,{x:this._sprite._xScale , y:this._sprite._yScale});
}

function DefaultMapObject(){
    this.sprite;
}
DefaultMapObject.prototype.click = function(){
    console.log('clicked: '+this._sprite._image );
}


function Sprite (image,xScale,yScale){
    this._image =image,
        this._xScale =xScale,
        this._yScale =yScale;
}