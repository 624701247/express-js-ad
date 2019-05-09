// 路由
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");


router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 
router.post('/getNeedParticipateExamList', jsonParser, function(req, res) {
    // console.log('链接上参数', req.query) 
    // console.log('body部分', req.body)  //这个要加上中间件 body-parser 才能拿得到
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 3,
        "data": [{
                "examCode": "exam111",
                "examName": "考试111",
                "currentStatus": 2,
                "examSet": 2,
                "examExplain": "被务热长办我百华东前回始斯进传。",
                "examHistoryId": 461,
                "examType": 1,
                "publishStartTime": 1554864047329,
                "publishEndTime": 1554871247329
            },
            {
                "examCode": "exam222",
                "examName": "考试222",
                "currentStatus": 1,
                "examSet": 1,
                "examExplain": "求下将作属山情命回象效政革米。",
                "examHistoryId": 466,
                "examType": 1,
                "publishStartTime": 1554864047329,
                "publishEndTime": 1554871247329
            },
            {
                "examCode": "exam333",
                "examName": "考试333",
                "currentStatus": 0,
                "examSet": 2,
                "examExplain": "用并每结展叫定权大选别片角技何机平后。",
                "examHistoryId": 70,
                "examType": 2,
                "publishStartTime": 1554864047329,
                "publishEndTime": 1554871247329
            }
        ]
    }
    res.send(data);
})


router.post('/getTestPaperList', jsonParser, function(req, res) {
    var data = {
      "isSuccess": true,
      "responseCode": 0,
      "responseMsg": "请求成功",
      "total": 4,
      "data": {
        "examSet": 2,
        "testPaperInfo": [
          {
            "testPaperType": 1,
            "testPaperCode": "/P\\d{4}/",
            "finishStatus": 0
          }, {
            "testPaperType": 2,
            "testPaperCode": "/P\\d{4}/",
            "finishStatus": 0
          }
        ]
      }
    }
    res.send(data);
})

router.post('/startTestAndGetQuestion', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "data": [{
                "examQuestionType": 5,
                "examQuestionTitle": "育究技会育人规已手引题目",
                "optionList": [{
                        "optionId": 105,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658"
                    },
                    {
                        "optionId": 554,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556261563&di=017ccd97add3126c5d99f955f56fcad2&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F01%2FCA%2F05XfllQQjbGAFMiVAADGVkI-pdc335.jpg"
                    },
                    {
                        "optionId": 947,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555667367560&di=9b4639f48bf4d15bda22f141ff6dfde0&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F95%2F49%2F2159%2F140401565.png"
                    },
                    {
                        "optionId": 355,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666747275&di=36a802ecfaa339bcfa657de4b9504915&imgtype=0&src=http%3A%2F%2Fi.gtimg.cn%2Fqqlive%2Fimg%2Fjpgcache%2Ffiles%2Fqqvideo%2Fhori%2Fv%2Fvj4pvtejerml1my.jpg"
                    }
                ],
                "examQuestionCode": "",
                "interactType": 1,
                "examQuestionNum": 100,
                "examQuestionTypeName": "多选题",
                "examQuestionId": 2
            },
            {
                "examQuestionType": 5,
                "examQuestionTitle": "育究技会育人规已手引题目",
                "optionList": [{
                        "optionId": 105,
                        "optionDesc": "A:五山"
                    },
                    {
                        "optionId": 554,
                        "optionDesc": "B.珠江新城"
                    },
                    {
                        "optionId": 947,
                        "optionDesc": "C.猎德"
                    },
                    {
                        "optionId": 355,
                        "optionDesc": "D.上社"
                    }
                ],
                "examQuestionCode": "",
                "interactType": 2,
                "examQuestionNum": 100,
                "examQuestionTypeName": "多选题",
                "examQuestionId": 2
            },
            {
                "examQuestionId": 79,
                "examQuestionCode": "",
                "examQuestionType": 1,
                "examQuestionTypeName": "多选题",
                "interactType": 2,
                "examQuestionTitle": "带题山色大基群物和件",
                "optionList": [{
                        "optionId": 105,
                        "optionDesc": "A:五山"
                    },
                    {
                        "optionId": 554,
                        "optionDesc": "B.珠江新城"
                    },
                    {
                        "optionId": 947,
                        "optionDesc": "C.猎德"
                    },
                    {
                        "optionId": 355,
                        "optionDesc": "D.上社"
                    }
                ],
                "examQuestionNum": 71
            }
        ],
        "total": 1
    }
    res.send(data);
})

router.post('/submitAnswers', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "data": {
            "score": 67,
            "totalQuestionNum": 5,
            "totalAnswerNum": 5,
            "answerResultList": [{
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 1,
                    "answerCorrect": 1
                },
                {
                    "examQuestionNum": 2,
                    "answerCorrect": 0
                },
                {
                    "examQuestionNum": 3,
                    "answerCorrect": 0
                },
                {
                    "examQuestionNum": 4,
                    "answerCorrect": 0
                },
                {
                    "examQuestionNum": 5,
                    "answerCorrect": 0
                }
            ]
        }
    }
    res.send(data);
})


router.post('/getAnswers', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "data": [{
                "examQuestionType": 1,
                "examQuestionTitle": "计素土指般常代正住经",
                "optionList": [{
                        "optionId": 1692,
                        "optionDesc": "表老标然",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1399,
                        "optionDesc": "算月类位力",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1042,
                        "optionDesc": "没成问好",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 912,
                        "optionDesc": "调指热组革",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 125,
                        "optionDesc": "期达严科对引",
                        "answerCorrect": 1
                    }
                ],
                "examQuestionCode": "Q8553",
                "examFocus": "少反适基队",
                "answerAnalysis": "行政场团会她",
                "interactType": 1,
                "examQuestionTypeName": "单选题"
            },
            {
                "examQuestionType": 2,
                "examQuestionTitle": "222222222222222222",
                "optionList": [{
                        "optionId": 1692,
                        "optionDesc": "表老标然",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1399,
                        "optionDesc": "算月类位力",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1042,
                        "optionDesc": "没成问好",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 912,
                        "optionDesc": "调指热组革",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 125,
                        "optionDesc": "期达严科对引",
                        "answerCorrect": 1
                    }
                ],
                "examQuestionCode": "Q8553",
                "examFocus": "少反适基队",
                "answerAnalysis": "行政场团会她",
                "interactType": 1,
                "examQuestionTypeName": "单选题"
            },
            {
                "examQuestionType": 5,
                "examQuestionTitle": "计素土指般常代正住经",
                "optionList": [{
                        "optionId": 1692,
                        "optionDesc": "表老标然",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1399,
                        "optionDesc": "算月类位力",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1042,
                        "optionDesc": "没成问好",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 912,
                        "optionDesc": "调指热组革",
                        "answerCorrect": 0
                    }
                ],
                "examQuestionCode": "Q8553",
                "examFocus": "少反适基队",
                "answerAnalysis": "行政场团会她",
                "interactType": 2,
                "examQuestionTypeName": "单选题"
            },
        ],
        "total": 43
    }
    res.send(data);
})


router.post('/getExamFinish', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 13,
        "data": false
    }
    res.send(data);
})

router.post('/previewGetAnswers', jsonParser, function(req, res) {
    var data;
    if (req.body.questionCodes == 'game') {
        // 互动
        data = {
            "isSuccess": true,
            "responseCode": 0,
            "responseMsg": "请求成功",
            "data": [{
                    "examQuestionId": 79,
                    "examQuestionCode": "",
                    "examQuestionType": 5,
                    "examQuestionTypeName": "单选题",
                    "interactType": 1,
                    "examQuestionTitle": "带题山色大基群物和件",
                    "optionList": [{
                        "optionId": 105,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658"
                    }, {
                        "optionId": 554,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556261563&di=017ccd97add3126c5d99f955f56fcad2&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F01%2FCA%2F05XfllQQjbGAFMiVAADGVkI-pdc335.jpg"
                    }, {
                        "optionId": 947,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555667367560&di=9b4639f48bf4d15bda22f141ff6dfde0&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F95%2F49%2F2159%2F140401565.png"
                    }, {
                        "optionId": 355,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666747275&di=36a802ecfaa339bcfa657de4b9504915&imgtype=0&src=http%3A%2F%2Fi.gtimg.cn%2Fqqlive%2Fimg%2Fjpgcache%2Ffiles%2Fqqvideo%2Fhori%2Fv%2Fvj4pvtejerml1my.jpg"
                    }],
                    "examQuestionNum": 71
                },
                {
                    "examQuestionId": 79,
                    "examQuestionCode": "",
                    "examQuestionType": 5,
                    "examQuestionTypeName": "多选题",
                    "interactType": 2,
                    "examQuestionTitle": "师傅师傅师傅",
                    "optionList": [{
                            "optionId": 105,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71
                }
            ],
            "total": 68
        }
    } else {
        // 常规
        data = {
            "isSuccess": true,
            "responseCode": 0,
            "responseMsg": "请求成功",
            "data": [{
                    "examQuestionId": 79,
                    "examQuestionCode": "",
                    "examQuestionType": 1,
                    "examQuestionTypeName": "单选题",
                    "interactType": 2,
                    "examQuestionTitle": "带题山色大基群物和件",
                    "optionList": [{
                            "optionId": 105,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71
                },
                {
                    "examQuestionId": 79,
                    "examQuestionCode": "",
                    "examQuestionType": 2,
                    "examQuestionTypeName": "多选题",
                    "interactType": 2,
                    "examQuestionTitle": "师傅师傅师傅",
                    "optionList": [{
                            "optionId": 105,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71
                }
            ],
            "total": 68
        }
    }

    res.send(data);
    // console.log(req.query, 'q')
    // console.log(req.body, 'bd')
})


module.exports = router;