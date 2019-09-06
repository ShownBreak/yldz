(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/bianjie.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ee5cbAulMRCrYvQq0865aI6', 'bianjie', __filename);
// Scripts/bianjie.js

"use strict";

cc.Class({
  extends: cc.Component,
  properties: {
    hengbianjie_up: {
      default: null,
      type: cc.Node
    },
    hengbianjie_down: {
      default: null,
      type: cc.Node
    },
    shubianjie_left: {
      default: null,
      type: cc.Node
    },
    shubianjie_right: {
      default: null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    var windowSize = cc.view.getVisibleSize();
    this.hengbianjie_up.setPosition(cc.v2(0, windowSize.height / 2 + 15));
    this.hengbianjie_down.setPosition(cc.v2(0, -windowSize.height / 2 - 15));
    this.shubianjie_left.setPosition(cc.v2(-(windowSize.width / 2 + 15), 0));
    this.shubianjie_right.setPosition(cc.v2(windowSize.width / 2 + 15, 0));
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
        //# sourceMappingURL=bianjie.js.map
        