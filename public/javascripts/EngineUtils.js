
Engine.Util = function(){
    var width = 800 , height=480,horizontalSquares = 50,verticalSquares = 30;
    var horizontalFactor = width / horizontalSquares;
    var verticalFactor = height / verticalSquares;


    function _getRelativePostion(totalX,totalY){
        var offset = $(Engine.getCanvas()).offset();
        return {
            x : totalX - offset.left,
            y : totalY - offset.top
        };
    }
    function _posToCursor(pos,factor){
        return (pos - (pos % factor) ) / factor;
    }



    function _getMap (mapName){
        console.log('fetchMap : '+mapName);
        var mapObj = Maps[mapName];
        var map = [verticalSquares];
        for(var i = 0 ; i < horizontalSquares ; i++){
            var row = [horizontalSquares];
            for(var j = 0 ; j < verticalSquares ; j++){
                row[j] = new MapObject(new mapObj.backgroundObj(i,j));
            }
            map[i] = row;
        }
        mapObj.arr = map;
        for(var i = 0 ; i < mapObj.objects.length ; i++){
            var obj = mapObj.objects[i];
            map[obj.coords.x][obj.coords.y].add(new obj.obj(obj.coords.x,obj.coords.y));
        }
        return mapObj;
    }

    function _posToMapCoords(relativePos){
        var coords = {};
        coords.i = _posToCursor(relativePos.x,horizontalFactor);
        coords.j = _posToCursor(relativePos.y,verticalFactor);
       return coords;
    }

    function _getMapPosByCoords(field){
        var pos = [];
        pos.x = field.x * horizontalFactor;
        pos.y = field.y * verticalFactor;
        return pos;
        return field;
    }

    return{
        posToCursor :_posToCursor ,
        getRelativePostion: _getRelativePostion,
        posToMapCoords : _posToMapCoords,
        getMapPosByCoords : _getMapPosByCoords,
        getMap : _getMap
    }
}();
