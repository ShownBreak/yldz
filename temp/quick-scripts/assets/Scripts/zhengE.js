(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/zhengE.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b3c2alvWnlHnZgaAQSeI93v', 'zhengE', __filename);
// Scripts/zhengE.js

"use strict";

var common = require("common");
cc.Class({
    extends: cc.Component,
    properties: {
        player: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad() {
        this.player = cc.find("Canvas/xiaoqiu");
    },
    start: function start() {},

    whereinarray: function whereinarray(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) return i;
        }
        return -1;
    },
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
        //# sourceMappingURL=zhengE.js.map
        