Engine.MapRenderer = function(){


    function drawMap(){
        for(var i = 0 ; i < Engine.Map.get().length ; i++){
            var row = Engine.Map.get()[i];
            for(var j = 0 ; j < row.length ; j++){
               row[j].draw();
            }
        }
    }
    function _fillFieldWithImage(field,scale){
        scale = scale || {x:16,y:16};
        var image = new Image();
//        var elem = document.getElementById(field.image);
        var pos = Engine.Util.getMapPosByCoords(field);
        image.onload = function () {
            Engine.getContext().drawImage(image,pos.x,pos.y,scale.x,scale.y);//,field.x+verticalFactor,field.y+horizontalFactor,100,100);
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
