Engine.Map = function(){

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
        }

    }
}() ;