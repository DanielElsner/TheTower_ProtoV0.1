
Engine.Controls = function(){
    function handleClick(ev){
        var coords = Engine.Util.posToMapCoords(Engine.Util.getRelativePostion(ev.pageX ,ev.pageY));
        var obj = Engine.Map.getByCoords(coords);
        if(obj){
            obj.click({originalEvent:ev,coords : coords});
        }

    }


    function attachEventListener(){
        $(Engine.getCanvas()).click(function(event){
          handleClick(event);
        });
        $(Engine.getCanvas()).on('contextmenu',function(e){
            //suppress rightclick context menu
            e.preventDefault();
        });


    }

    return {
        init: function(){
            attachEventListener();
        }
    }
} ();
