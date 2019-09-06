(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/gameover.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '36d32eLIPVPgKEb3p+tJYNb', 'gameover', __filename);
// Scripts/gameover.js

"use strict";

var common = require("common");
var door = require("door");
cc.Class({
    extends: cc.Component,
    properties: {
        label_tittle: {
            default: null,
            type: cc.Label
        },
        label_time: {
            default: null,
            type: cc.Label
        },
        label_leijitime: {
            default: null,
            type: cc.Label
        },
        backBtn: {
            default: null,
            type: cc.Node
        },
        continueBtn: {
            default: null,
            type: cc.Node
        },
        success: {
            default: null,
            type: cc.Node
        },
        defeat: {
            default: null,
            type: cc.Node
        },
        success_btn: {
            default: null,
            type: cc.Node
        },
        defeat_btn: {
            default: null,
            type: cc.Node
        },
        rank_btn: {
            default: null,
            type: cc.Node
        }

    },
    wxupdate: function wxupdate() {
        var score = common.num_door;
        if (CC_WECHATGAME) {
            window.wx.postMessage({
                messageType: 3,
                MAIN_MENU_NUM: "x1",
                score: score
            });
        } else {
            cc.log("提交得分: x1 : " + score);
        }
    },

    onLoad: function onLoad() {

        cc.director.preloadScene("main");
        cc.director.preloadScene("success");
        cc.director.preloadScene("welcome");
        cc.director.preloadScene("rank");
        this.label_tittle = cc.find("Canvas/tittle");
        this.label_time = cc.find("Canvas/time");
        this.label_leijitime = cc.find("Canvas/leijitime");
        var scaleTo = cc.scaleTo(0.8, 0.9);
        var reverse = cc.scaleTo(0.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
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
        this.backBtn.on("touchstart", function () {
            cc.director.loadScene("welcome");
        });
        this.continueBtn.on("touchstart", function () {
            //this.initgame();
            if (common.num_door < common.lastest_door) cc.director.loadScene("main");else {
                common.num_door = 0;
                wx.setStorageSync('time', 0);
                cc.director.loadScene("success");
            }
        });
        this.success_btn.on("touchstart", function () {
            //this.initgame();
            cc.log("转发");
            wx.shareAppMessage({
                title: "@我 我已经达到第" + common.num_door + "关了，你敢挑战我吗？",
                imageUrl: "https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",
                success: function success(res) {
                    console.log("转发成功!!!");
                    wx.showToast({
                        title: '转发成功',
                        icon: 'success'
                    });
                },
                fail: function fail(res) {
                    console.log("转发失败");
                    wx.showToast({
                        title: '转发失败',
                        icon: 'none'
                    });
                }
            });
        });
        this.defeat_btn.on("touchstart", function () {
            //this.initgame();
            cc.log("转发");
            var score_now = common.num_door + 1;
            wx.shareAppMessage({
                title: "@我 我卡在第" + score_now + "关了，快来帮帮我吧",
                imageUrl: "https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",
                success: function success(res) {
                    console.log("转发成功!!!");
                    wx.showToast({
                        title: '转发成功',
                        icon: 'success'
                    });
                    common.num_door++;
                    this.wxupdate();
                },
                fail: function fail(res) {
                    console.log("转发失败");
                    wx.showToast({
                        title: '转发失败',
                        icon: 'none'
                    });
                }
            });
        });
        if (common.is_Success == 0) {
            this.success.active = false;
            this.defeat.active = true;
            this.success_btn.active = false;
            this.defeat_btn.active = false; //后续视频接口需要修改这里
            this.defeat_btn.runAction(repeat);
            this.label_tittle.getComponent(cc.Label).string = "失败";
            this.label_time.getComponent(cc.Label).string = common.haoshi + " s";
            var userData_time1 = parseInt(wx.getStorageSync('time'));
            var youtime = userData_time1 + common.haoshi;
            this.label_leijitime.getComponent(cc.Label).string = +youtime + " s";
            wx.setStorageSync('time', youtime);
            //this.label_tittle.getComponent(cc.Label).color = new cc.color(239,9,47,255);
        } else {
            this.success.active = true;
            this.defeat.active = false;
            this.success_btn.active = true;
            this.defeat_btn.active = false;
            this.success_btn.runAction(repeat);
            this.label_tittle.getComponent(cc.Label).string = "成功";
            this.label_time.getComponent(cc.Label).string = common.haoshi + " s";
            // this.label_tittle.getComponent(cc.Label).color = new cc.color(5,26,127,255);
            common.num_door++;
            this.wxupdate();
            var userData_time2 = parseInt(wx.getStorageSync('time'));
            var youtime1 = userData_time2 + common.haoshi;
            this.label_leijitime.getComponent(cc.Label).string = youtime1 + " s";
            wx.setStorageSync('time', youtime1);
            if (common.num_door >= parseInt(wx.getStorageSync('level'))) wx.setStorageSync('level', common.num_door);else {
                if (common.ppppp == 0) common.num_door = parseInt(wx.getStorageSync('level'));
            }
        }
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
        //# sourceMappingURL=gameover.js.map
        