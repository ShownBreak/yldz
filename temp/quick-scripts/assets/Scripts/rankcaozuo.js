(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/rankcaozuo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd4c50X+Y1JAIJK0NMR6FrII', 'rankcaozuo', __filename);
// Scripts/rankcaozuo.js

"use strict";

var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        backBtn: {
            default: null,
            type: cc.Node
        },
        continueBtn: {
            default: null,
            type: cc.Node
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        cc.director.preloadScene("main");
        cc.director.preloadScene("welcome");
        cc.director.preloadScene("success");
        this.backBtn.on("touchstart", function () {
            cc.director.loadScene("welcome");
        });
        this.continueBtn.on("touchstart", function () {
            if (common.num_door < common.lastest_door) cc.director.loadScene("main");else {
                cc.director.loadScene("success");
            }
        });
    },
    start: function start() {}
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
        //# sourceMappingURL=rankcaozuo.js.map
        