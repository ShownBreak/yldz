(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c1b1GZMOhBN5Cpn/gKPIV3', 'main', __filename);
// Scripts/main.js

"use strict";

var common = require("common");
var door = require("door");
cc.Class({
  extends: cc.Component,

  properties: {
    player: {
      default: null,
      type: cc.Node
    },
    sun: {
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
    },
    restart: {
      default: null,
      type: cc.Node
    },
    back: {
      default: null,
      type: cc.Node
    },

    zhengE: {
      default: null,
      type: cc.Prefab
    },
    timeLabe: {
      default: null,
      type: cc.Label
    },
    yinliLabe: {
      default: null,
      type: cc.Label
    },
    nameLabe: {
      default: null,
      type: cc.Label
    },
    block: {
      default: null,
      type: cc.Prefab
    },
    block1: {
      default: null,
      type: cc.Prefab
    },
    block2: {
      default: null,
      type: cc.Prefab
    },
    block3: {
      default: null,
      type: cc.Prefab
    },
    block4: {
      default: null,
      type: cc.Prefab
    },
    block5: {
      default: null,
      type: cc.Prefab
    },
    block6: {
      default: null,
      type: cc.Prefab
    },
    temp: 0

  },
  createnum: function createnum() {
    return parseInt(Math.random() * 6 + 1, 10);
  },
  initgame: function initgame() {
    var that = this;
    //common.num_door = parseInt(wx.getStorageSync('level'));
    if (common.num_door >= common.lastest_door) cc.director.loadScene("success");

    common.center_x = [];
    common.center_y = [];
    common.Speed_X = 0;
    common.Speed_Y = 0;
    common.is_Success = 0;
    common.haoshi = 0;
    common.playTime = door.guanqia[common.num_door].playTime;
    common.num_yinli = door.guanqia[common.num_door].num_yinli;
    that.temp = door.guanqia[common.num_door].num_yinli;
    var length_array = door.guanqia[common.num_door].array_bolck.length;
    that.player.setPosition(cc.v2(door.guanqia[common.num_door].player_location[0], door.guanqia[common.num_door].player_location[1]));
    that.sun.setPosition(cc.v2(door.guanqia[common.num_door].sun_location[0], door.guanqia[common.num_door].sun_location[1]));
    for (var i = 0; i < length_array; i++) {
      //if( door.guanqia[common.num_door].array_bolck[i].where)
      var x_block = door.guanqia[common.num_door].array_bolck[i].x;
      var y_block = door.guanqia[common.num_door].array_bolck[i].y;
      switch (that.createnum()) {
        case 1:
          that.Newblock = cc.instantiate(that.block1);
          break;
        case 2:
          that.Newblock = cc.instantiate(that.block2);
          break;
        case 3:
          that.Newblock = cc.instantiate(that.block3);
          break;
        case 4:
          that.Newblock = cc.instantiate(that.block4);
          break;
        case 5:
          that.Newblock = cc.instantiate(that.block5);
          break;
        case 6:
          that.Newblock = cc.instantiate(that.block6);
          break;
        default:
          that.Newblock = cc.instantiate(that.block);
          break;
      }

      that.node.addChild(that.Newblock);
      that.Newblock.setPosition(cc.v2(x_block, y_block));
      that.Newblock.setRotation(door.guanqia[common.num_door].array_bolck[i].where);
    }
  },
  mean_array: function mean_array(array1, a) {
    var sum = 0;
    for (var i = 0; i < array1.length; i++) {
      sum += array1[i];
    }
    return (sum + a) / (array1.length + 1);
  },
  setJumpAction: function setJumpAction(x1, y1, x2, y2) {
    var dist = cc.v2(x1, y1).sub(cc.v2(x2, y2)).mag(); //Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    var time = dist / 150;
    var jumpUp = cc.moveTo(time, cc.v2(x2, y2)).easing(cc.easeQuadraticActionIn());
    var jumpDown = cc.moveTo(time, cc.v2(x2 + x2 - x1, y2 + y2 - y1)).easing(cc.easeQuadraticActionOut());
    var jumpDownzero = cc.moveTo(time, cc.v2(x1, y1)).easing(cc.easeQuadraticActionOut());
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, jumpUp, jumpDownzero));
  },
  onLoad: function onLoad() {
    this.timeLabe = cc.find("Canvas/mianban/timebiao/time");
    this.yinliLabe = cc.find("Canvas/mianban/zhengE/yinli");
    this.nameLabe = cc.find("Canvas/titleboard/name");
    cc.director.preloadScene("gameover");
    cc.director.preloadScene("success");
    cc.director.preloadScene("welcome");

    this.initgame();
    var windowSize = cc.view.getVisibleSize();
    //this.timeLabe.setPosition(cc.v2(-(windowSize.width/2)+20,windowSize.height/2-15));
    this.mianbanboard.setPosition(cc.v2(0, -windowSize.height / 2 - 58));
    this.yinliLabe.getComponent(cc.Label).string = ": " + common.num_yinli + " 个";

    this.titleboard.setPosition(cc.v2(0, windowSize.height / 2 + 45));
    this.nameLabe.getComponent(cc.Label).string = door.guanqia[common.num_door].name_guanqia;
    this.timeLabe.getComponent(cc.Label).string = ": " + common.playTime + " s";

    this.mianbanboard_Action = cc.moveTo(1, cc.v2(0, -windowSize.height / 2)).easing(cc.easeCubicActionOut());
    this.mianbanboard.runAction(this.mianbanboard_Action);

    this.titleboard_Action = cc.moveTo(1, cc.v2(0, windowSize.height / 2)).easing(cc.easeCubicActionOut());
    this.titleboard.runAction(this.titleboard_Action);

    this.node.on('touchstart', function (event) {
      if (common.num_yinli > 0) {
        var target = event.getCurrentTarget(); //获取事件所绑定的target
        var locationInNode = target.convertToNodeSpaceAR(event.getLocation());

        if (!this.sun.getBoundingBoxToWorld().contains(event.getLocation()) && !this.titleboard.getBoundingBoxToWorld().contains(event.getLocation()) && !this.mianbanboard.getBoundingBoxToWorld().contains(event.getLocation())) {
          var NewzhengE = cc.instantiate(this.zhengE);
          this.node.addChild(NewzhengE);
          NewzhengE.setPosition(cc.v2(locationInNode.x, locationInNode.y));
          common.center_x.push(locationInNode.x);
          common.center_y.push(locationInNode.y);
          common.num_yinli--;
          this.yinliLabe.getComponent(cc.Label).string = ": " + common.num_yinli + " 个";
        }
      }
    }, this);

    this.ctx = this.node.getChildByName("tu").getComponent(cc.Graphics);;
    this.ctx.clear();

    this.restart.on("touchstart", function () {
      cc.director.loadScene("main");
    });
    this.back.on("touchstart", function () {
      cc.director.loadScene("welcome");
    });

    this.begin_x = this.player.x;
    this.begin_y = this.player.y;
  },
  start: function start() {
    this.schedule(function () {
      common.playTime--;
      common.haoshi++;
      this.timeLabe.getComponent(cc.Label).string = ": " + common.playTime + " s";
      if (common.playTime < 1) {
        common.is_Success = 0;
        cc.eventManager.removeListener(common.listener);
        cc.director.loadScene('gameover');
        this.ctx.clear();
      }
    }, 1);
  },
  update: function update(dt) {
    if (common.center_x.length > 0) {
      var c_x = this.mean_array(common.center_x, this.player.x);
      var c_y = this.mean_array(common.center_y, this.player.y);
      cc.director.getPhysicsManager().gravity = cc.v2((c_x - this.player.x) / 2, (c_y - this.player.y) / 2);
    }

    this.ctx.moveTo(this.begin_x, this.begin_y);
    this.ctx.lineTo(this.player.x, this.player.y);

    this.begin_x = this.player.x;
    this.begin_y = this.player.y;
    this.ctx.stroke();
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
        //# sourceMappingURL=main.js.map
        