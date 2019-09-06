(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/heidong.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0d629CAPwNN760sHFyzK942', 'heidong', __filename);
// Scripts/heidong.js

"use strict";

var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        angle: 0,
        audio: {
            default: null,
            type: cc.AudioClip
        }
    },
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        cc.director.preloadScene("gameover");
        cc.director.preloadScene("success");
    },

    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        common.is_Success = 1;
        this.current = cc.audioEngine.play(this.audio, false, 0.2);

        if (common.num_door < common.lastest_door) {

            cc.director.loadScene("gameover");
        } else {
            common.num_door = 0;
            cc.director.loadScene("success");
        }
    },
    start: function start() {},
    update: function update(dt) {
        this.angle = this.angle - 45;
        this.node.setRotation(this.angle * Math.PI / 180);
    }
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
        //# sourceMappingURL=heidong.js.map
        