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

var queCount = 0

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
                "examName": "分页-014（AI+AI）",
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

var codee = 0
router.post('/getTestPaperList', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": codee,
        "responseMsg": "请求1111成功",
        "total": 4,
        "data": {
            "examSet": 2,
            "testPaperInfo": [{
                    "testPaperType": 3,
                    "testPaperCode": "/P\\d{4}/",
                    "finishStatus": 0
                },
                {
                    "testPaperType": 1,
                    "testPaperCode": "/P\\d{4}/",
                    "finishStatus": 0
                }, {
                    "testPaperType": 2,
                    "testPaperCode": "/P\\d{4}/",
                    "finishStatus": 0
                }, {
                    "finishStatus": 0,
                    testPaperCode: "SJ0182",
                    testPaperType: 2
                }, {
                    "testPaperType": 4,
                    "testPaperCode": "/P\\d{4}/",
                    "finishStatus": 0
                },
            ]
        }
    }
    console.log('ccc', codee)
    res.send(data);
    // codee = 2022
})

router.post('/startTestAndGetQuestion', jsonParser, function(req, res) {
    queCount++
    var code = 0
    var que = {
        "examQuestionType": 1, //1 单选； 5 点击
        "examQuestionTitle": 'asfsfasf' + queCount,
        // "examQuestionTitle": `<p>点击题目啊<video style="height: 240px;" class="video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=wSa4qbfHxJO39NCVyv5oOghYdxfw6Vg403p2DkH4xEUlmfzDMi13K1I_NvklMLxhRpCSfjNkjvbs30ddex5nXQzWw3F0spMrCdD4twdP3N6p3uEdZS7CjVxrFGsA2yj-wYRJYBnZPhwuub-UiVKO6KnZ1kZQGm4kLzXd1k7XFU7EYSImAYYrP26eiqqvyDIP.mp3" data-setup="{}"></video>,视频内放了什么</p>`,
        // "examQuestionTitle": '题号题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号题号'
        // + queCount,

        // 大图片
        // examQuestionTitle: `<p>天使一级互动点击4题的题目</p><p><img height="240px" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=Qw8Psqeb8argnikbmGN1vCcP1k0fCMUS-GpnIJIXbabh0u00brPTm9KTsxVKY5Mm5Zgeb9Gq5NLRvEuNifcTzs-6bu_dCut3oT7e1Sg3X7eN3VQzQzewEtorHYnojwE8QcCRsaoMxLeGuUa2kciguJJ9UJoWkhYfbzGcsSZSOtajntDNHonvGddfjRCgLazr"/></p><p><video style="height: 240px;" class="video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="http://media.aiwanpai.com/video/otbc_1.mp4" data-setup="{}"></video></p>`,

        // "examQuestionTitle": `<p>天使一级互动点击3题的题目，天使一级互动点击3题的考点天使一级互动点击3题的考点天使一级互动点击3题的考点天使一级互动点击3题的考点天使一级互动点击3题的考点天使一级互动点击3题的考点，天使一级互动3</p><p><img height="240px" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=_3aqB6L2LMs-YKqV7c__hkoje_vvbkFznX946teZzbbh0u00brPTm9KTsxVKY5MmrUnT_QjHo2PLyUZ7Q9Q7mjXgcfO6sVuDTAeFhO9-ZiGN3VQzQzewEtorHYnojwE8A6Xb24EnEN0z4TcRbROygxdzwawaZpwZyqS3wvHqXeGjntDNHonvGddfjRCgLazr" alt="wKjwDlwzBgqEflpwAAAAAA1PV4E170.jpg"/></p>`,
        "optionList": [{
                "optionId": 105,
                // "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658"
                "optionDesc": '阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法',

            },
            {
                "optionId": 554,
                "optionDesc": "1"
            },
            {
                "optionId": 9417,
                "optionDesc": "送达方式地方阿什顿飞暗示法"
            },
            {
                "optionId": 355,
                "optionDesc": "a"
            }
        ],
        "examQuestionCode": "111",
        "interactType": 1,
        "examQuestionNum": 100,
        "examQuestionTypeName": "多1111选题",
        "examQuestionId": 2
    }
    var queYes = {
        "examQuestionType": 3,
        examQuestionTitle: `时代发生的发生的发生双方的啊身份证沙发上地方`,
        "optionList": [{
                "optionId": 105,
                "optionDesc": '对',

            },
            {
                "optionId": 554,
                "optionDesc": "错"
            }
        ],
        "examQuestionCode": "111",
        "interactType": 1,
        "examQuestionNum": 100,
        "examQuestionTypeName": "多1111选题",
        "examQuestionId": 2
    }
    var queClick = {
        "examQuestionType": 5, //1 单选； 5 点击

        // 带视频的题目
        // "examQuestionTitle": `<p>这是视频题目额<video style="height: 240px;" class="video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=wSa4qbfHxJO39NCVyv5oOghYdxfw6Vg403p2DkH4xEUlmfzDMi13K1I_NvklMLxhRpCSfjNkjvbs30ddex5nXQzWw3F0spMrCdD4twdP3N6p3uEdZS7CjVxrFGsA2yj-wYRJYBnZPhwuub-UiVKO6KnZ1kZQGm4kLzXd1k7XFU7EYSImAYYrP26eiqqvyDIP" data-setup="{}"></video>,视频内放了什么</p>`,

        // "examQuestionTitle": 'ai考试试题，啊哈哈哈哈接啊哈啊哈' + queCount,

        // 带图片题目
        "examQuestionTitle": `<p>有图片</p>
            <p><img height="240px" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=_3aqB6L2LMs-YKqV7c__hkoje_vvbkFznX946teZzbbh0u00brPTm9KTsxVKY5MmrUnT_QjHo2PLyUZ7Q9Q7mjXgcfO6sVuDTAeFhO9-ZiGN3VQzQzewEtorHYnojwE8A6Xb24EnEN0z4TcRbROygxdzwawaZpwZyqS3wvHqXeGjntDNHonvGddfjRCgLazr" alt="wKjwDlwzBgqEflpwAAAAAA1PV4E170.jpg"/></p>`,

        "optionList": [{
                "optionId": 105,
                // "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658"
                "optionDesc": '阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法阿什顿飞卡是你发的啊速度发快速打法',

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
    }
    var queRank = {
        "examQuestionType": 5,
        "examQuestionTitle": "育究技会育人规已手引题目",
        "optionList": [{
                "optionId": 105,
                "optionDesc": "A:五山"
            },
            {
                "optionId": 554,
                "optionDesc": "B.珠江新珠"
            },
            {
                "optionId": 947,
                "optionDesc": "C.珠江新城五山五山五山五山五山五山五山五山五山五山五山五山五山五山五山五山五山五山珠江新城"
            },
            {
                "optionId": 947,
                "optionDesc": "C.猎德22222"
            },
            {
                "optionId": 947,
                "optionDesc": "C.猎德22222"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
            },
            {
                "optionId": 947,
                "optionDesc": "C.s"
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
    }
    var queList = [
        // queRank, que, queClick
        que
    ]
    if (queCount >= 4) {
        // code = 2019
        // console.log('下架了')
    }
    if (queCount >= 5) {
        console.log('没题了')
        queList = []
    } else {
        console.log('获取考题：', queCount)
    }
    var data = {
        "isSuccess": true,
        "responseCode": code,
        "responseMsg": "请求成功",
        "data": queList,
        "total": 1
    }
    res.send(data);
})

router.post('/submitAnswers', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求1成功",
        "data": null,
        // "data": {
        //     "score": 67,
        //     "totalQuestionNum": 5,
        //     "totalAnswerNum": 5,
        //     "answerResultList": [{
        //             "examQuestionNum": 1,
        //             "answerCorrect": 0
        //         },
        //         {
        //             "examQuestionNum": 1,
        //             "answerCorrect": 0
        //         },
        //         {
        //             "examQuestionNum": 1,
        //             "answerCorrect": 1
        //         },
        //         {
        //             "examQuestionNum": 4,
        //             "answerCorrect": 0
        //         },
        //         {
        //             "examQuestionNum": 5,
        //             "answerCorrect": 0
        //         }
        //     ]
        // }
    }
    res.send(data);
})


router.post('/getAnswers', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0, //2007,
        "responseMsg": "成功啊啦啊啊",
        "data": [{
                "examQuestionType": 1,
                "examQuestionTitle": "getAnswers  11111111",
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
                "answerAnalysis": '<video src="xxx.mp3"></video>',
                "interactType": 1,
                "examQuestionTypeName": "单选题1111"
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
                        "optionDesc": "没成问好111111",
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
                "answerAnalysis": '<video src="xxx.mp3"></video>',
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
                "answerAnalysis": '<video src="xxx.mp3"></video>',
                "interactType": 2,
                "examQuestionTypeName": "单选题"
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
            },
            { // kone todo 
                "examQuestionId": 79,
                "examQuestionCode": "",
                "examQuestionType": 5,
                "examQuestionTypeName": "单选题",
                "interactType": 1,
                "examQuestionTitle": "带题山色大基群物和件",
                "optionList": [{
                        "optionId": 1692,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658",
                        "answerCorrect": 1
                    },
                    {
                        "optionId": 1399,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 1042,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658",
                        "answerCorrect": 0
                    },
                    {
                        "optionId": 912,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658",
                        "answerCorrect": 0
                    }
                ]
            }
        ],
        "total": 43
    }
    res.send(data);
})

var ccc = 0
router.post('/getExamFinish', jsonParser, function(req, res) {
    var isend = (ccc == 10)
    var code = 0
    if (isend) {
        // code = 2022
    }
    var data = {
        "isSuccess": true,
        "responseCode": code,
        "responseMsg": "11请1求11成功",
        "total": 13,
        "data": isend
    }
    ccc++
    console.log('是否结束', data.data, data.responseCode)
    res.send(data);
})


// 考试预览
router.post('/previewGetQuestions', jsonParser, function(req, res) {
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
                    "examQuestionTitle": "11111111111带题山色大基群物和件",
                    "optionList": [{
                        "optionId": 105,
                        answerCorrect: 1,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666859553&di=61f634d013f3545a46384ce88b8e9807&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F26e3f21b16af3ed9b3f9bddfe74215bc2f9467db5690-OXjrNu_fw658"

                    }, {
                        "optionId": 554,
                        answerCorrect: 0,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556261563&di=017ccd97add3126c5d99f955f56fcad2&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F01%2FCA%2F05XfllQQjbGAFMiVAADGVkI-pdc335.jpg"

                    }, {
                        "optionId": 947,
                        answerCorrect: 0,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555667367560&di=9b4639f48bf4d15bda22f141ff6dfde0&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F95%2F49%2F2159%2F140401565.png"

                    }, {
                        "optionId": 355,
                        answerCorrect: 0,
                        "optionDesc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555666747275&di=36a802ecfaa339bcfa657de4b9504915&imgtype=0&src=http%3A%2F%2Fi.gtimg.cn%2Fqqlive%2Fimg%2Fjpgcache%2Ffiles%2Fqqvideo%2Fhori%2Fv%2Fvj4pvtejerml1my.jpg"

                    }],
                    "examQuestionNum": 71,
                    examFocus: '啊哈哈哈 我是考点',
                    examAnalysis: '哈哈哈，我是解析~~~'
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
                            answerCorrect: 1,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            answerCorrect: 1,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            answerCorrect: 0,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            answerCorrect: 0,
                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71,
                    examFocus: '啊哈哈哈 我是考点',
                    examAnalysis: '哈哈哈，我是解析~~~'
                }
            ],
            "total": 61,
            "testName": "常1111规考试试1卷",
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
                    "examQuestionType": 3,
                    "examQuestionTypeName": "单选题",
                    "interactType": 2,
                    "examQuestionTitle": "带题山色大基群物和件",
                    "optionList": [{
                            "optionId": 105,
                            answerCorrect: 0,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            answerCorrect: 1,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            answerCorrect: 1,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            answerCorrect: 0,
                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71,
                    examFocus: '啊哈哈哈 我是考点',
                    examAnalysis: '哈哈哈，我是解析~~~',
                    examQuestionAnswer: 'asddfsafasdf'
                },
                {
                    "examQuestionId": 79,
                    "examQuestionCode": "",
                    "examQuestionType": 2,
                    "examQuestionTypeName": "多选题",
                    "interactType": 2,
                    "examQuestionTitle": `<p>天使一级互动点击4题的题目</p><p><img height="240px" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=Qw8Psqeb8argnikbmGN1vCcP1k0fCMUS-GpnIJIXbabh0u00brPTm9KTsxVKY5Mm5Zgeb9Gq5NLRvEuNifcTzs-6bu_dCut3oT7e1Sg3X7eN3VQzQzewEtorHYnojwE8QcCRsaoMxLeGuUa2kciguJJ9UJoWkhYfbzGcsSZSOtajntDNHonvGddfjRCgLazr"/></p><p><video style="height: 240px;" class="video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="http://media.aiwanpai.com/video/otbc_1.mp4" data-setup="{}"></video></p>`,
                    "optionList": [{
                            "optionId": 105,
                            answerCorrect: 1,
                            "optionDesc": "A:五山"
                        },
                        {
                            "optionId": 554,
                            answerCorrect: 0,
                            "optionDesc": "B.珠江新城"
                        },
                        {
                            "optionId": 947,
                            answerCorrect: 0,
                            "optionDesc": "C.猎德"
                        },
                        {
                            "optionId": 355,
                            answerCorrect: 0,

                            "optionDesc": "D.上社"
                        }
                    ],
                    "examQuestionNum": 71,
                    examFocus: '啊哈哈哈 我是考点',
                    examAnalysis: '<p>天使一级互动点击4题的题目</p><p><img height="240px" src="http://tmallapi.bluemoon.com.cn/cloudStorage/read/read?p=Qw8Psqeb8argnikbmGN1vCcP1k0fCMUS-GpnIJIXbabh0u00brPTm9KTsxVKY5Mm5Zgeb9Gq5NLRvEuNifcTzs-6bu_dCut3oT7e1Sg3X7eN3VQzQzewEtorHYnojwE8QcCRsaoMxLeGuUa2kciguJJ9UJoWkhYfbzGcsSZSOtajntDNHonvGddfjRCgLazr"/></p><p><video style="height: 240px;" class="video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="http://media.aiwanpai.com/video/otbc_1.mp4" data-setup="{}"></video></p>',
                    examQuestionAnswer: '我是大啊啊沙发上'
                }
            ],
            "total": 68,
            "testName": "常1111规考试试1卷",
        }
    }

    res.send(data);
    // console.log(req.query, 'q')
    // console.log(req.body, 'bd')
})



// 实操作考试
router.post('/startPracticalAndGetQuestion', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "data": {
            "sysConfigInfo": {
                "clothesType": ["毛呢大衣", "qwqwqw", "衬衣", "羽绒服", "w", "西服", "运动服", "牛仔裤", "哒哒哒哒哒哒多多多多多哒哒哒哒哒哒多多", "1111"],
                "washQuestionInfos": [{ "examQuestionCode": "ST000455", "clothesFabrics": ["1、麻", "2、类羽绒"] }],
                "washResult": ["洗净", "淡化"],
                "operationStep": [{ "configValueId": 25, "value": "干衣预涂" }, { "configValueId": 26, "value": "常规步骤" }, { "configValueId": 120, "value": "测试允许多少个" }, { "configValueId": 82, "value": "测试产品" }, { "configValueId": 107, "value": "测试洗衣产品及步骤" }, { "configValueId": 121, "value": "6" }, { "configValueId": 122, "value": "7" }, { "configValueId": 123, "value": "8" }, { "configValueId": 124, "value": "9" }, { "configValueId": 125, "value": "10" }, { "configValueId": 126, "value": "11" }, { "configValueId": 135, "value": "测试适当的滴滴答答滴滴答答" }],
                "houseQuestionInfos": [{ "examQuestionCode": "ST000456", "cleanTargets": ["1、茶几", "2、厨房"] }],
                "stainSustainTime": ["1~2周", "1个月", "2~3个月", "半年", "一年或以上", "测试限制测试测试测试测测 hi"],
                "cleanUseProduct": ["油污克星(强力型)", "油污克星(保护型)", "地板清洁剂", "卫诺洁厕液", "卫诺洁厕宝"]
            },
            "practicalCompositeType": 5
        }
    }
    res.send(data);
})






// 云学堂
router.post('/getCautionInfo', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "data": {
            "showCautionPage": true,
            "lessonInfo": {
                "courseClassifyCode": "TC4362",
                "courseClassifyName": "第一极默认",

                "courseSuiteCode": "TC7434",
                "courseSuiteName": "哈哈哈",

                "progress": 0,
                "courseBaseHistoryId": 209
            }
        }
    }
    res.send(data);
})


router.post('/getCourseClassifyList', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 3,
        "data": [{
            "courseClassifyCode": "TC4362",
            "courseClassifyName": "第一极默认"
        },{
            "courseClassifyCode": "TC22222",
            "courseClassifyName": "第一极选项2"
        }]
    }
    console.log('sdfsdfsdfd')
    res.send(data);
})


router.post('/getCourseSuiteList', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 3,
        "data": [{
                "courseSuiteCode": "TC3522",
                "courseSuiteName": "第一极111",
                "studyProgress": 0,
                "associateExam": true,
                "courseBaseHistoryId": 12,
                "examCode": "E4288",
                "examHistoryId": 907
            },
            {
                "courseSuiteCode": "TC1896",
                "courseSuiteName": "第一极222",
                "studyProgress": 1,
                "associateExam": true,
                "courseBaseHistoryId": 12,
                "examCode": "E5442",
                "examHistoryId": 245
            }
        ]
    }
    res.send(data);
})


router.post('/getCourseList', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 5,
        "data": [{
                "courseCode": "KC9814",
                "courseName": "济表课程",
                "notStudyNum": 8
            },
            {
                "courseCode": "KC8052",
                "courseName": "是油课程",
                "notStudyNum": 7
            }
        ]
    }
    res.send(data);
})


router.post('/getKnowledgeList', jsonParser, function(req, res) {
    var data = {
        "isSuccess": true,
        "responseCode": 0,
        "responseMsg": "请求成功",
        "total": 9,
        "data": [{
                "knowledgeCode": "K77744",
                "knowledgeName": "易长知识",
                "totalLearnerNum": 4629,
                "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556261563&di=017ccd97add3126c5d99f955f56fcad2&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F01%2FCA%2F05XfllQQjbGAFMiVAADGVkI-pdc335.jpg",
                "learnStatus": 1,
                "learnStatusName": "待学习",
                "courseCode": "/KC\\d{4}/"
            },
            {
                "knowledgeCode": "K65791",
                "knowledgeName": "律件知识",
                "totalLearnerNum": 4495,
                "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556261563&di=017ccd97add3126c5d99f955f56fcad2&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F01%2FCA%2F05XfllQQjbGAFMiVAADGVkI-pdc335.jpg",
                "learnStatus": 2,
                "learnStatusName": "已完成",
                "courseCode": "/KC\\d{4}/"
            }
        ]
    }
    res.send(data);
})


router.post('/getKnowledgeDetail', jsonParser, function(req, res) {
    console.log('detail')
    var data = {
  "isSuccess": true,
  "responseCode": 0,
  "responseMsg": "请求成功",
  "data": {
    "knowledgeCode": "K20681",
    "knowledgeName": "情满往院等知识",
    "techingForm": "线下课程",
    "description": "济持火算又断快比节快生须发口。课程说明",
    "knowledgeProgressList": [
      {
        "knowledgeCode": "K22343",
        "knowledgeName": "别种现知识",
        "studyProgress": 48
      },
      {
        "knowledgeCode": "K19483",
        "knowledgeName": "严都时知识",
        "studyProgress": 91
      },
      {
        "knowledgeCode": "K41783",
        "knowledgeName": "适叫运知识",
        "studyProgress": 20
      },
      {
        "knowledgeCode": "K82688",
        "knowledgeName": "装细个知识",
        "studyProgress": 67
      },
      {
        "knowledgeCode": "K76066",
        "knowledgeName": "看关速知识",
        "studyProgress": 21
      },
      {
        "knowledgeCode": "K86281",
        "knowledgeName": "率往状知识",
        "studyProgress": 19
      },
      {
        "knowledgeCode": "K15408",
        "knowledgeName": "局他引知识",
        "studyProgress": 88
      }
    ],
    "studyProgress": 4,
    "lecturerList": [
      {
        "empCode": 80510439,
        "empName": "唐敏"
      },
      {
        "empCode": 80521651,
        "empName": "文秀兰"
      },
      {
        "empCode": 80505974,
        "empName": "萧芳"
      },
      {
        "empCode": 80516290,
        "empName": "黎丽"
      }
    ],
    "certList": [
      {
        "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559287606&di=da8fb00d28405a6c56dee4b2c77eba40&imgtype=jpg&er=1&src=http%3A%2F%2Fphotos.tuchong.com%2F437009%2Ff%2F22741241.jpg"
      },
      {
        "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559287699&di=acefa59187a01620883bb364a1c38a01&imgtype=jpg&er=1&src=http%3A%2F%2Fimg01.tooopen.com%2Fdowns%2Fimages%2F2010%2F8%2F9%2Fsy_20100809170837615126.jpg"
      }
    ],
    "lastStudyLocation": 6579,
    "type": 1,
    "fileUrl": "",
    "picUrl": "https://tmallapi.bluemoon.com.cn/img/group1/M00/02/D7/wKjwDVyJyeWEQeB6AAAAAH3ePbs257.jpg",
    "cancelFlag": true,
    "knowledgeFinish": true
  }
}
    res.send(data);
})

module.exports = router;