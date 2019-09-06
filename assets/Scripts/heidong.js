var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        angle:0,
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },
    onLoad () {
        cc.director.getCollisionManager().enabled=true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        cc.director.preloadScene("gameover");
        cc.director.preloadScene("success");
        
    },
    onBeginContact:function(contact,selfCollider,otherCollider){
        common.is_Success = 1;
        this.current = cc.audioEngine.play(this.audio, false, 0.2);  
         
        if(common.num_door<common.lastest_door){
           
            cc.director.loadScene("gameover");
            
        }
        else{
            common.num_door = 0;
            cc.director.loadScene("success");
        } 
    },
    start () {
    },
    update (dt) {
        this.angle = this.angle - 45;
        this.node.setRotation(this.angle * Math.PI/180);
    },
});
