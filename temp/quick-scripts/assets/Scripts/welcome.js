(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/welcome.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '98ee4MSwktMzK+Tflm5Q997', 'welcome', __filename);
// Scripts/welcome.js

"use strict";

var common = require("common");
var door = require("door");
cc.Class({
    extends: cc.Component,
    properties: {
        startBtn: {
            default: null,
            type: cc.Node
        },
        rank_btn: {
            default: null,
            type: cc.Node
        },
        audio: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad: function onLoad() {
        var flag = 0;
        try {
            var value = wx.getStorageSync('level');
            if (value) {
                common.num_door = 0;
            } else {
                wx.setStorageSync('time', 0);
                wx.setStorageSync('level', 0);
                flag = 1;
                common.num_door = 0;
            }
        } catch (e) {}

        cc.director.preloadScene("main");
        cc.director.preloadScene("rank");
        cc.director.preloadScene("teach");
        cc.audioEngine.stopAll();
        this.current = cc.audioEngine.play(this.audio, true, 0.2);
        common.lastest_door = door.guanqia.length; //读取共有多少关卡

        this.GameClubButton = wx.createGameClubButton({
            icon: 'green',
            style: {
                left: 0,
                top: 100,
                width: 40,
                height: 40
            }
        });
        wx.showShareMenu();
        //监听右上角的分享调用 
        wx.onShareAppMessage(function (res) {
            return {
                title: "@我 这个小游戏真的好火！",
                imageUrl: "https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",
                success: function success(res) {
                    console.log("转发成功!!!");
                    wx.showToast({
                        title: '转发成功',
                        icon: 'success'
                    });
                },
                fail: function fail(res) {
                    console.log("转发失败!!!");
                    wx.showToast({
                        title: '转发失败',
                        icon: 'none'
                    });
                }
            };
        });

        var scaleTo = cc.scaleTo(0.8, 0.9);
        var reverse = cc.scaleTo(0.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
        this.startBtn.runAction(repeat);
        this.startBtn.on("touchstart", function () {

            if (flag == 1) cc.director.loadScene("teach");else cc.director.loadScene("main");
        });
        this.rank_btn.on("touchstart", function () {
            if (CC_WECHATGAME) {
                // 发消息给子域
                window.wx.postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: "x1"
                });
            } else {
                cc.log("获取好友排行榜数据。x1");
            }
            cc.director.loadScene("rank");
        });
    },
    start: function start() {},

    onDestroy: function onDestroy() {
        this.GameClubButton.destroy();
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
        //# sourceMappingURL=welcome.js.map
        