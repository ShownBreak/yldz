"use strict";
cc._RF.push(module, '770799JJ4NJrZvpH8h8BTLv', 'aotu');
// Scripts/aotu.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.preloadScene("welcome");
    },
    start: function start() {
        var playTime = 3;
        this.schedule(function () {
            if (playTime < 1) {
                cc.director.loadScene('welcome');
            }
            playTime -= 1;
        }, 1);
    }
}

// update (dt) {},
);

cc._RF.pop();