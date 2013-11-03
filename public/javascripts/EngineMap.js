Engine.Map = function(){
    var Map;


    function _add(obj, cleanPos){
        cleanPos = cleanPos || {x: obj._x,y: obj._y}
        obj._x = cleanPos.x;
        obj._y = cleanPos.y;
        Map.arr[cleanPos.x][cleanPos.y].add(obj);//[Map.arr[cleanPos.x][cleanPos.y].length] = obj;
        obj.draw();
    }

    return {
        set : function(mapObj){
           this.Map =  mapObj;
        },
        get : function(){
            return this.Map.arr;
        },
        getByCoords: function (coords){
             var obj;
            if (coords) {
                obj =this.Map.arr[coords.i][coords.j];
            }
            return obj;
        }   ,
        add : _add
    }
}() ;