
Engine.Controls = function(){
    function handleClick(ev){
        var coords = Engine.Util.posToMapCoords(Engine.Util.getRelativePostion(ev.pageX ,ev.pageY));
        var obj = Engine.Map.getByCoords(coords);
        if(obj){
            obj.click();
        }

    }


    function attachEventListener(){
        $(Engine.getCanvas()).click(function(event){
          handleClick(event);
        })
    }

    return {
        init: function(){
            attachEventListener();
        }
    }
} ();
