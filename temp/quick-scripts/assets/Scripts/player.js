(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c0c91B9kEJAm6NH0dmoTIv6', 'player', __filename);
// Scripts/player.js

"use strict";

var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        //this.node.stopAllActions();
        this.current = cc.audioEngine.play(this.audio, false, 0.2);
    },
    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function onEndContact(contact, selfCollider, otherCollider) {},
    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function onPreSolve(contact, selfCollider, otherCollider) {},
    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function onPostSolve(contact, selfCollider, otherCollider) {},
    onLoad: function onLoad() {},
    start: function start() {},
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=player.js.map
        