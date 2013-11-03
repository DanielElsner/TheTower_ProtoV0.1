Engine.Map = function(){
    var Map = Engine.Util.defaultMap();


    function _add(obj, cleanPos){
        cleanPos = cleanPos || {x: obj._x,y: obj._y}
       var coords = Engine.Util.posToMapCoords(cleanPos);
        obj._x = cleanPos.x;
        obj._y = cleanPos.y;
//        Map[coords.i][coords.j] = obj;
        Map[cleanPos.x][cleanPos.y] = obj;
        obj.draw();
    }

    return {
        get : function(){
            return Map;
        },
        getByCoords: function (coords){
             var obj;
            if (coords) {
                obj =Map[coords.i][coords.j];
            }
            return obj;
        }   ,
        add : _add
    }
}() ;