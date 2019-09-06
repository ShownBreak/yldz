(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/success_fire.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '131e5dc2GJK/ZnMVosVBuiD', 'success_fire', __filename);
// Scripts/success_fire.js

"use strict";

var common = require("common");
cc.Class({
    extends: cc.Component,

    properties: {
        backBtn: {
            default: null,
            type: cc.Node
        },
        coldstar: {
            default: null,
            type: cc.Node
        },
        angel: 0
    },
    onLoad: function onLoad() {
        cc.director.preloadScene("welcome");
        this.node.on("touchstart", function () {
            common.ppppp = 1;
            cc.director.loadScene("welcome");
        });
    },
    start: function start() {},
    update: function update(dt) {
        this.angel = this.angel + 60;
        this.coldstar.setRotation(this.angel * Math.PI / 180);
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
        //# sourceMappingURL=success_fire.js.map
        