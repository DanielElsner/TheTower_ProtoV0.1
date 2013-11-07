function MapObject(coords){
    this.Objects = [];
    this.coords = coords;
    this.TileStack = new TileStack();
}
MapObject.prototype.add = function(obj){
    this.Objects[this.Objects.length] = obj;
    this.TileStack.add(obj,this.coords);
}

MapObject.prototype.draw = function(){
   this.TileStack.draw();
}

MapObject.prototype.click = function(ev){
    for(var i = 0 ; i < this.Objects.length ; i++){
        if(this.Objects[i].click){
            this.Objects[i].click(ev);
        }
    }
}

function TileStack(){
    this.stack = {};
}

TileStack.prototype.add = function(obj, coords){
    var tile = new Tile(obj.sprite, coords.x, coords.y);
    obj.addTile(tile,coords,obj);
    this.stack.set(obj.uid,tile);
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
    this.renderedTiles = [];
    console.log('DMO called');
}

DefaultMapObject.prototype.addTile = function(tile,coords){
    this.renderedTiles.push({
        tile : tile,
        coords : coords
    });
}

function ClickableMapObject(){
}
ClickableMapObject.prototype = new DefaultMapObject();


function Clickable(action){
    this.action = action;
    this.click = function(ev){
       var action = this.action || function(){console.log('clicked, no action definied')};
        action(this);
    }
    return this;
}

function CanMove(){
    this.move = function(direction, steps){
        console.log('canMove');
    }
    return this;
}


function Sprite (image,xClipping,yClipping){
    this._image =image,
        this._xClipping =xClipping || 0,
        this._yClipping =yClipping || 0;
}