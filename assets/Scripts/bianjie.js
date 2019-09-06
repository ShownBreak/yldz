cc.Class({
    extends: cc.Component,
    properties: {
        hengbianjie_up:{
          default:null,
          type:cc.Node
        },
        hengbianjie_down:{
          default:null,
          type:cc.Node
        },
        shubianjie_left:{
          default:null,
          type:cc.Node
        },
        shubianjie_right:{
          default:null,
          type:cc.Node
        },
    },
    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        this.hengbianjie_up.setPosition(cc.v2(0,windowSize.height/2+15));
        this.hengbianjie_down.setPosition(cc.v2(0,-windowSize.height/2-15));
        this.shubianjie_left.setPosition(cc.v2(-(windowSize.width/2+15),0));
        this.shubianjie_right.setPosition(cc.v2(windowSize.width/2+15,0));
    },
    start () {
    },
});
