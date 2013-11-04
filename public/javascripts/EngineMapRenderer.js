Engine.MapRenderer = function(){


    function drawMap(){
        for(var i = 0 ; i < Engine.Map.get().length ; i++){
            var row = Engine.Map.get()[i];
            for(var j = 0 ; j < row.length ; j++){
               row[j].draw();
            }
        }
    }
    function _fillFieldWithImage(field,clipping){
        clipping = clipping || {x:16,y:16};
        var image = new Image();
        var pos = Engine.Util.getMapPosByCoords(field);
        image.onload = function () {
            Engine.getContext().drawImage(image,clipping.x,clipping.y,16,16,pos.x,pos.y,16,16);
        }
        //TODO magic magic
        image.src = 'images/'+field.image+'.png';
    }
    return {
        draw : function(){
            drawMap();
        },
        fillFieldWithImage  : _fillFieldWithImage


    }
}();
