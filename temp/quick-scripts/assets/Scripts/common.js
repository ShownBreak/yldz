(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/common.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3d6c3H7gKFBK6G9ODlIVyML', 'common', __filename);
// Scripts/common.js

'use strict';

var common = {
    Speed_X: 0,
    Speed_Y: 0,
    is_Success: 0,
    haoshi: 0,
    playTime: 0, //游戏时间，倒计时
    num_door: 0,
    num_yinli: 0,
    lastest_door: 0, //最高关卡
    is_pengzhuang: 0,
    center_x: [],
    center_y: [],
    actions: '',
    avatarUrl: '',
    ppppp: 0
    //导出为引用模块
};module.exports = common;

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
        //# sourceMappingURL=common.js.map
        