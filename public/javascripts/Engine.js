var Engine = function(){

    var canvas,context;
    function startup(){
        canvas = document.getElementById('mainCanvas');
        context = canvas.getContext('2d');
        Engine.Map.set(Engine.Util.getMap('startupMap'));

        Engine.MapRenderer.draw();
        Engine.Controls.init();

//        Engine.Map.add(new Castle(),{x:11,y:14});
//        Engine.Map.add(new Tree(),{x:30,y:25});

//        Engine.Map.add(new Tree(),{x:25,y:5});
//        Engine.Map.add(new Tree(),{x:35,y:20});
//        Engine.Map.add(new Tree(),{x:100,y:350});
//        Engine.Map.add(new Tree(),{x:300,y:350});
//        Engine.Map.add(new Tree(),{x:50,y:150});
//        Engine.Map.add(new Tree(),{x:100,y:450});
//        Engine.Map.add(new Tree(),{x:250,y:150});
    }


 return {
    start: function(){
        startup();
    },
     getCanvas: function(){return canvas},
     getContext:function(){return context}

 }
}();
