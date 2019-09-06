"use strict";
cc._RF.push(module, '799f8kihq1LMb4SwGcllMOf', 'teach');
// Scripts/teach.js

"use strict";

var common = require("common");
var door = require("door");
cc.Class({
    extends: cc.Component,

    properties: {
        dialog_daojishi: {
            default: null,
            type: cc.Node
        },
        dialog_yinliqiu: {
            default: null,
            type: cc.Node
        },
        dialog_back: {
            default: null,
            type: cc.Node
        },
        dialog_location: {
            default: null,
            type: cc.Node
        },
        dialog_restart: {
            default: null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        },
        sun: {
            default: null,
            type: cc.Node
        },
        zhengE: {
            default: null,
            type: cc.Prefab
        },
        skip: {
            default: null,
            type: cc.Node
        },
        gotogame: {
            default: null,
            type: cc.Node
        },
        titleboard: {
            default: null,
            type: cc.Node
        },
        mianbanboard: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    mean_array: function mean_array(array1, a) {
        var sum = 0;
        for (var i = 0; i < array1.length; i++) {
            sum += array1[i];
        }
        return (sum + a) / (array1.length + 1);
    },

    onLoad: function onLoad() {
        cc.director.preloadScene("main");
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
        this.btn = 0;
        common.center_x = [];
        common.center_y = [];

        this.gotogame.active = false;
        this.dialog_daojishi.active = false;
        this.dialog_yinliqiu.active = false;
        this.dialog_restart.active = false;
        this.dialog_back.active = false;
        this.dialog_location.active = false;
        this.sun.active = false;
        this.node.on('touchstart', function (event) {
            switch (this.btn) {
                case 0:
                    this.dialog_daojishi.active = true;
                    this.btn++;
                    break;
                case 1:
                    this.dialog_daojishi.active = false;
                    this.dialog_yinliqiu.active = true;
                    this.btn++;
                    break;
                case 2:
                    this.dialog_yinliqiu.active = false;
                    this.dialog_restart.active = true;
                    this.btn++;
                    break;
                case 3:
                    this.dialog_restart.active = false;
                    this.dialog_back.active = true;
                    this.btn++;
                    break;
                case 4:
                    this.dialog_back.active = false;
                    this.dialog_location.active = true;
                    this.btn++;
                    break;
                case 5:
                    this.gotogame.active = true;

                    this.dialog_location.active = false;
                    var target = event.getCurrentTarget(); //获取事件所绑定的target
                    var locationInNode = target.convertToNodeSpaceAR(event.getLocation());
                    if (!this.sun.getBoundingBoxToWorld().contains(event.getLocation()) && !this.titleboard.getBoundingBoxToWorld().contains(event.getLocation()) && !this.mianbanboard.getBoundingBoxToWorld().contains(event.getLocation())) {
                        var NewzhengE = cc.instantiate(this.zhengE);
                        this.node.addChild(NewzhengE);
                        NewzhengE.setPosition(cc.v2(locationInNode.x, locationInNode.y));
                        common.center_x.push(locationInNode.x);
                        common.center_y.push(locationInNode.y);
                        break;
                    }
            }
        }, this);
        this.skip.on("touchstart", function () {
            cc.director.loadScene("main");
        });
        this.gotogame.on("touchstart", function () {
            cc.director.loadScene("main");
        });
        this.ctx = this.node.getChildByName("tu").getComponent(cc.Graphics);
        this.ctx.clear();
        this.begin_x = this.player.x;
        this.begin_y = this.player.y;
    },
    start: function start() {},
    update: function update(dt) {
        if (common.center_x.length > 0) {
            var c_x = this.mean_array(common.center_x, this.player.x);
            var c_y = this.mean_array(common.center_y, this.player.y);
            cc.director.getPhysicsManager().gravity = cc.v2(c_x - this.player.x, c_y - this.player.y);
        }

        this.ctx.moveTo(this.begin_x, this.begin_y);
        this.ctx.lineTo(this.player.x, this.player.y);

        this.begin_x = this.player.x;
        this.begin_y = this.player.y;
        this.ctx.stroke();
    }
});

cc._RF.pop();