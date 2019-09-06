var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },
    // LIFE-CYCLE CALLBACKS:
    onBeginContact:function(contact,selfCollider,otherCollider){
        //this.node.stopAllActions();
         this.current = cc.audioEngine.play(this.audio, false, 0.2);    
    },
    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {     
    },
    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {
    },
    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
    },
    onLoad () {   
    },
    start () {
    },
    update (dt) {},
});
