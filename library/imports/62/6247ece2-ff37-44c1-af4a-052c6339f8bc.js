"use strict";
cc._RF.push(module, '6247ezi/zdEwa9KBSxjOfi8', 'door');
// Scripts/door.js

"use strict";

var door = {
    guanqia: [{ "name_guanqia": "round 1 开始", "player_location": [-320, 0], "sun_location": [368, 0], "playTime": 10, "num_yinli": 1, "array_bolck": [] }, //第一关
    {
        "name_guanqia": "round 2 正方形",
        "player_location": [-240, 240],
        "sun_location": [320, -240],
        "playTime": 15,
        "num_yinli": 2,
        "array_bolck": [{ "x": 0, "y": -75, "where": 0 }, { "x": 0, "y": 75, "where": 0 }, { "x": -75, "y": 0, "where": 90 }, { "x": 75, "y": 0, "where": 90 }]
    }, //第二关
    {
        "name_guanqia": "round 3 愤怒", //关卡名
        "player_location": [0, 200], //弹珠的位置
        "sun_location": [0, -218], //小太阳的位置
        "playTime": 15, //该关卡游戏时间
        "num_yinli": 2, //该关卡限制放置引力点个数
        "array_bolck": [//该数组表示障碍物的个数以及每一个障碍物的位置，
        //若为空表示该关卡没有障碍物
        { "x": -244, "y": 131, "where": 32 }, //X表示障碍物横坐标，y表示障碍物纵坐标，where表示障碍物旋转角度
        { "x": -161, "y": 81, "where": 32 }, { "x": 226, "y": 121, "where": -32 }, { "x": 157, "y": 77, "where": -32 }, { "x": -72, "y": -145, "where": -32 }, { "x": 60, "y": -145, "where": 32 }]
    }, //第三关
    {
        "name_guanqia": "round 4 字母 T",
        "player_location": [-100, 150],
        "sun_location": [100, 150],
        "playTime": 15,
        "num_yinli": 2,
        "array_bolck": [{ "x": 0, "y": -89, "where": 90 }, { "x": 0, "y": 138, "where": 90 }, { "x": 0, "y": 66, "where": 90 }, { "x": 80, "y": 227, "where": 0 }, { "x": 240, "y": 227, "where": 0 }, { "x": -238, "y": 227, "where": 0 }, { "x": -78, "y": 227, "where": 0 }]
    }, //第四关
    {
        "name_guanqia": "round 5 π",
        "player_location": [-363, 195],
        "sun_location": [198, -200],
        "playTime": 15,
        "num_yinli": 2,
        "array_bolck": [{ "x": -400, "y": 259, "where": 0 }, { "x": -248, "y": 259, "where": 0 }, { "x": -96, "y": 259, "where": 0 }, { "x": 54, "y": 259, "where": 0 }, { "x": 204, "y": 259, "where": 0 }, { "x": 349, "y": 259, "where": 0 }, { "x": 416, "y": 259, "where": 0 }, { "x": -400, "y": 146, "where": 0 }, { "x": -243, "y": 146, "where": 0 }, { "x": 41, "y": 146, "where": 0 }, { "x": 408, "y": 146, "where": 0 }, { "x": 348, "y": 146, "where": 0 }, { "x": -167, "y": 65, "where": 90 }, { "x": -33, "y": 65, "where": 90 }, { "x": 117.8, "y": 70.7, "where": 90 }, { "x": 273, "y": 70.7, "where": 90 }, { "x": 273, "y": -89, "where": 90 }, { "x": 273, "y": -174, "where": 90 }, { "x": 118, "y": -89, "where": 90 }, { "x": 118, "y": -174, "where": 90 }, { "x": -134, "y": -189, "where": 120 }, { "x": -72, "y": -81, "where": 120 }, { "x": -205.1, "y": -81, "where": 120 }, { "x": -261, "y": -179, "where": 120 }]
    }, //第五关
    {
        "name_guanqia": "round 6 关卡",
        "player_location": [-214, -169],
        "sun_location": [240, -138],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": -80, "y": 185, "where": -90 }, { "x": -80, "y": -73, "where": -90 }, { "x": -80, "y": -172, "where": -90 }, { "x": 88, "y": 172, "where": -90 }, { "x": 88, "y": 102, "where": -90 }, { "x": 88, "y": -172, "where": -90 }]
    }, //第6关
    {
        "name_guanqia": "round 7 一条鱼",
        "player_location": [-175, -20],
        "sun_location": [0, -20],
        "playTime": 60,
        "num_yinli": 7,
        "array_bolck": [{ "x": -232, "y": 54, "where": -34 }, { "x": -156, "y": 105, "where": -34 }, { "x": -66, "y": 166, "where": -34 }, { "x": -228, "y": -107, "where": 34 }, { "x": -153, "y": -157, "where": 34 }, { "x": -88.3, "y": 74, "where": 90 }, { "x": -88.3, "y": -125, "where": 90 }, { "x": -20.8, "y": 105, "where": 34 }, { "x": 54.1, "y": 54.5, "where": 34 }, { "x": 180, "y": 56, "where": -34 }, { "x": -73, "y": -211, "where": 34 }, { "x": -20, "y": -156.3, "where": -34 }, { "x": 53, "y": -107, "where": -34 }, { "x": 180, "y": -106, "where": 34 }]
    }, //第7关
    {
        "name_guanqia": "round 8 另一条鱼",
        "player_location": [0, -20],
        "sun_location": [-175, -20],
        "playTime": 60,
        "num_yinli": 7,
        "array_bolck": [{ "x": -232, "y": 54, "where": -34 }, { "x": -156, "y": 105, "where": -34 }, { "x": -66, "y": 166, "where": -34 }, { "x": -228, "y": -107, "where": 34 }, { "x": -153, "y": -157, "where": 34 }, { "x": -88.3, "y": 74, "where": 90 }, { "x": -88.3, "y": -125, "where": 90 }, { "x": -20.8, "y": 105, "where": 34 }, { "x": 54.1, "y": 54.5, "where": 34 }, { "x": 180, "y": 56, "where": -34 }, { "x": -73, "y": -211, "where": 34 }, { "x": -20, "y": -156.3, "where": -34 }, { "x": 53, "y": -107, "where": -34 }, { "x": 180, "y": -106, "where": 34 }]
    }, //第8关
    {
        "name_guanqia": "round 9 两室一厅",
        "player_location": [-281, 176],
        "sun_location": [-281, -160],
        "playTime": 30,
        "num_yinli": 5,
        "array_bolck": [{ "x": 0, "y": 187, "where": 90 }, { "x": 0, "y": -168, "where": 90 }, { "x": 0, "y": 0, "where": 0 }, { "x": -160.7000161, "y": 0, "where": 0 }, { "x": -321.4000482, "y": 0, "where": 0 }, { "x": -482.1000964, "y": 0, "where": 0 }]
    }, //第9关
    {
        "name_guanqia": "round 10 简单吗?",
        "player_location": [-287, 0],
        "sun_location": [300, 0],
        "playTime": 10,
        "num_yinli": 1,
        "array_bolck": [{ "x": -211, "y": 179, "where": 45 }, { "x": -47, "y": 15, "where": 45 }, { "x": 99, "y": -131, "where": 45 }, { "x": 160, "y": -192, "where": 45 }]
    }, //第10关
    {
        "name_guanqia": "round 11 Money",
        "player_location": [-45, -53],
        "sun_location": [77, -185],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": -40, "y": 96, "where": 60 }, { "x": 40, "y": 96, "where": -60 }, { "x": 0, "y": -50, "where": 90 }, { "x": 0, "y": -178.6, "where": 90 }, { "x": 0, "y": 0, "where": 0 }, { "x": 0, "y": -98, "where": 0 }]
    }, //第11关
    {
        "name_guanqia": "round 12 字母 W",
        "player_location": [-298, 84],
        "sun_location": [317, 84],
        "playTime": 25,
        "num_yinli": 5,
        "array_bolck": [{ "x": -170, "y": 188, "where": 90 }, { "x": -170, "y": 27, "where": 90 }, { "x": 0, "y": 0, "where": 90 }, { "x": 0, "y": -156, "where": 90 }, { "x": 170, "y": 188, "where": 90 }, { "x": 170, "y": 27, "where": 90 }]
    }, //第12关
    {
        "name_guanqia": "round 13 小人儿",
        "player_location": [0, -148],
        "sun_location": [0, 167],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": 0, "y": 40, "where": 90 }, { "x": -100, "y": 50, "where": 0 }, { "x": 100, "y": 50, "where": 0 }, { "x": -41, "y": -105, "where": -60 }, { "x": 41, "y": -105, "where": 60 }]
    }, //第13关
    {
        "name_guanqia": "round 14 Letter H",
        "player_location": [0, -100],
        "sun_location": [0, 100],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": 0, "y": 0, "where": 0 }, { "x": -125, "y": 125, "where": 90 }, { "x": -125, "y": 0, "where": 90 }, { "x": -125, "y": -100, "where": 90 }, { "x": 125, "y": 125, "where": 90 }, { "x": 125, "y": 0, "where": 90 }, { "x": 125, "y": -100, "where": 90 }]
    }, //第14关
    {
        "name_guanqia": "round 15  管道",
        "player_location": [-216, 181],
        "sun_location": [212, -152],
        "playTime": 30,
        "num_yinli": 4,
        "array_bolck": [{ "x": -212, "y": 240, "where": 0 }, { "x": -212, "y": -221, "where": 0 }, { "x": -61, "y": 40, "where": 0 }, { "x": 56, "y": -37, "where": 0 }, { "x": 209, "y": 240, "where": 0 }, { "x": 209, "y": -221, "where": 0 }, { "x": -287, "y": 165, "where": 90 }, { "x": -136, "y": 165, "where": 90 }, { "x": 132, "y": 165, "where": 90 }, { "x": 286, "y": 165, "where": 90 }, { "x": -287, "y": 8, "where": 90 }, { "x": 286, "y": 8, "where": 90 }, { "x": -287, "y": -146, "where": 90 }, { "x": -136, "y": -146, "where": 90 }, { "x": 132, "y": -146, "where": 90 }, { "x": 286, "y": -146, "where": 90 }]
    }, //第15关
    {
        "name_guanqia": "round 16  半个Z",
        "player_location": [-260, 173],
        "sun_location": [190, -108],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": -236, "y": 231, "where": 0 }, { "x": -79, "y": 231, "where": 0 }, { "x": 76, "y": 231, "where": 0 }, { "x": 225, "y": 231, "where": 0 }, { "x": -236, "y": 120, "where": 0 }, { "x": -79, "y": 120, "where": 0 }, { "x": 74, "y": 120, "where": 0 }, { "x": -236, "y": -223, "where": 0 }, { "x": -82, "y": -223, "where": 0 }, { "x": 72, "y": -223, "where": 0 }, { "x": 224, "y": -223, "where": 0 }, { "x": -319, "y": 158, "where": 90 }, { "x": -319, "y": 1, "where": 90 }, { "x": -319, "y": -149, "where": 90 }, { "x": 300, "y": 158, "where": 90 }, { "x": 300, "y": 7, "where": 90 }, { "x": 300, "y": -148, "where": 90 }, { "x": 83, "y": 79, "where": -30 }, { "x": -48, "y": 4, "where": -30 }, { "x": 235, "y": 40, "where": -30 }, { "x": 100, "y": -38, "where": -30 }, { "x": 5, "y": -93, "where": -30 }]
    }, //第16关
    {
        "name_guanqia": "round 17  拾阶而上",
        "player_location": [119, -224],
        "sun_location": [-265, 198],
        "playTime": 25,
        "num_yinli": 4,
        "array_bolck": [{ "x": -64, "y": 183, "where": 0 }, { "x": 337, "y": 149, "where": 0 }, { "x": -261, "y": 113, "where": 0 }, { "x": 113, "y": 104, "where": 0 }, { "x": -46, "y": 23, "where": 0 }, { "x": -360, "y": -17, "where": 0 }, { "x": 281, "y": -14, "where": 0 }, { "x": -380, "y": -115, "where": 0 }, { "x": 160, "y": -115, "where": 0 }, { "x": -133, "y": -195, "where": 0 }, { "x": 296, "y": -224, "where": 0 }, { "x": -116, "y": -107, "where": 0 }]
    }]
    //导出为引用模块
};module.exports = door;

cc._RF.pop();