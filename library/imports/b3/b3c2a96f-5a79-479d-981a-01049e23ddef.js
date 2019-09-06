"use strict";
cc._RF.push(module, 'b3c2alvWnlHnZgaAQSeI93v', 'zhengE');
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