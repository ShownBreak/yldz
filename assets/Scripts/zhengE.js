var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        player:{
          default:null,
          type:cc.Node
        },       
    },
    onLoad () {
        this.player = cc.find("Canvas/xiaoqiu");
    },
    start () {
    },
    whereinarray:function(arr,item){
        for( var i=0;i<arr.length;i++){
            if(arr[i]===item)
                return i;
        }
        return -1;
    },
    update (dt) {
    },
});
