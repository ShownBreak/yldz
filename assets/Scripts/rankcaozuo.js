var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        backBtn:{
           default:null,
           type:cc.Node
       },
       continueBtn:{
           default:null,
           type:cc.Node
       },
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        cc.director.preloadScene("main");
        cc.director.preloadScene("welcome");
        cc.director.preloadScene("success");                    
        this.backBtn.on("touchstart",function(){
            cc.director.loadScene("welcome");
        });
        this.continueBtn.on("touchstart",function(){
             if(common.num_door<common.lastest_door)
              cc.director.loadScene("main");
            else{
              cc.director.loadScene("success");
            }  
        });
    },
    start () {
    },
});
