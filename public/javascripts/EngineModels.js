function MapObject(coords){
    this.Objects = [];
    this.coords = coords;
    this.TileStack = new TileStack();
}
MapObject.prototype.add = function(obj){
    this.Objects[this.Objects.length] = obj;
    this.TileStack.add(obj.sprite,this.coords);
}

MapObject.prototype.draw = function(){
   this.TileStack.draw();
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

TileStack.prototype.add = function(sprite,coords){
    this.stack[this.stack.length] = new Tile(sprite,coords.x,coords.y)
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
    Engine.MapRenderer.fillFieldWithImage(field,{x:this._sprite._xClipping , y:this._sprite._yClipping});
}

function DefaultMapObject(){
}
DefaultMapObject.prototype.click = function(){
    console.log(this );
}


function Sprite (image,xClipping,yClipping){
    this._image =image,
        this._xClipping =xClipping || 0,
        this._yClipping =yClipping || 0;
}