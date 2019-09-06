var common = require("common");
cc.Class({
    extends: cc.Component,

    properties: {
        backBtn:{
           default:null,
           type:cc.Node
       },
       coldstar:{
           default:null,
           type:cc.Node
       }, 
       angel:0,
    },
    onLoad () {
         cc.director.preloadScene("welcome");
         this.node.on("touchstart",function(){
            common.ppppp = 1;
            cc.director.loadScene("welcome");
        });
    },
    start () {
    },
    update (dt) {
       this.angel = this.angel + 60;
        this.coldstar.setRotation(this.angel * Math.PI/180);
    },
});
