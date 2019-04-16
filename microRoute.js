// 路由
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");  
var path = require("path");


router.all('*', function (req, res, next) {
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
	  "data": [
	    {
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
	  "data": [
	    {
	      "testPaperInfo": [
	        {
	          "testPaperType": 1,
	          "testPaperCode": "/P\\d{4}/",
	          "finishStatus": 1
	        },
	        {
	          "testPaperType": 1,
	          "testPaperCode": "/P\\d{4}/",
	          "finishStatus": 0
	        }
	      ],
	      "examSet": 2
	    },
	    {
	      "testPaperInfo": [
	        {
	          "testPaperType": 2,
	          "testPaperCode": "/P\\d{4}/",
	          "finishStatus": 1
	        }
	      ],
	      "examSet": 2
	    },
	    {
	      "testPaperInfo": [
	        {
	          "testPaperType": 3,
	          "testPaperCode": "/P\\d{4}/",
	          "finishStatus": 0
	        }
	      ],
	      "examSet": 2
	    },
	    {
	      "testPaperInfo": [
	        {
	          "testPaperType": 4,
	          "testPaperCode": "/P\\d{4}/",
	          "finishStatus": 0
	        }
	      ],
	      "examSet": 2
	    }
	  ]
	}
	res.send(data);
})

router.post('/startTestAndGetQuestion', jsonParser, function(req, res) {
	var data = {
	  "isSuccess": true,
	  "responseCode": 0,
	  "responseMsg": "请求成功",
	  "data": [
	    {
	      "examQuestionType": 2,
	      "examQuestionTitle": "育究技会育人规已手引题目",
	      "optionList": [
	        {
	          "optionId": 105,
	          "optionDesc": "D.1111111111111"
	        },
	        {
	          "optionId": 554,
	          "optionDesc": "E.22222222222222"
	        },
	        {
	          "optionId": 947,
	          "optionDesc": "D.333333333333333"
	        },
	        {
	          "optionId": 355,
	          "optionDesc": "C.4444444444444444"
	        }
	      ],
	      "examQuestionCode": "",
	      "interactType": 2,
	      "examQuestionNum": 100,
	      "examQuestionTypeName": "多选题",
	      "examQuestionId": 2
	    },
	    {
	      "examQuestionType": 1,
	      "examQuestionTitle": "输入法舒服阿什顿飞",
	      "optionList": [
	        {
	          "optionId": 105,
	          "optionDesc": "D.1111111111111"
	        },
	        {
	          "optionId": 554,
	          "optionDesc": "E.22222222222222"
	        },
	        {
	          "optionId": 947,
	          "optionDesc": "D.333333333333333"
	        },
	        {
	          "optionId": 355,
	          "optionDesc": "C.4444444444444444"
	        }
	      ],
	      "examQuestionCode": "",
	      "interactType": 2,
	      "examQuestionNum": 100,
	      "examQuestionTypeName": "判断题",
	      "examQuestionId": 2
	    },
	    {
	      "examQuestionType": 3,
	      "examQuestionTitle": "判断判断啦",
	      "examQuestionCode": "",
	      "interactType": 2,
	      "examQuestionNum": 100,
	      "examQuestionTypeName": "判断题",
	      "examQuestionId": 2
	    },
	    {
	      "examQuestionType": 5,
	      "examQuestionTitle": "育究技会育人规已手引题目",
	      "optionList": [
	        {
	          "optionId": 105,
	          "optionDesc": "D.1111111111111"
	        },
	        {
	          "optionId": 554,
	          "optionDesc": "E.22222222222222"
	        },
	        {
	          "optionId": 947,
	          "optionDesc": "D.333333333333333"
	        },
	        {
	          "optionId": 355,
	          "optionDesc": "C.4444444444444444"
	        }
	      ],
	      "examQuestionCode": "",
	      "interactType": 2,
	      "examQuestionNum": 100,
	      "examQuestionTypeName": "多选题",
	      "examQuestionId": 2
	    },
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
	    "answerResultList": [
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
	  "data": [
	    {
	      "examQuestionType": 1,
	      "examQuestionTitle": "计素土指般常代正住经",
	      "optionList": [
	        {
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
	      "optionList": [
	        {
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
	      "optionList": [
	        {
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


module.exports = router;
