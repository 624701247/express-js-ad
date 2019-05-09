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

router.get('/init', function(req, res) {
	// console.log('链接上参数', req.query, req.params)
	res.end( JSON.stringify({name:'kone'}) );
})


router.post('/lottery', jsonParser, function(req, res) {
	/* kone point : 获取get post 参数 */ 
	console.log('链接上参数', req.query) 
	console.log('body部分', req.body)  //这个要加上中间件 body-parser 才能拿得到

	var data = {name:'login'}
	setTimeout(function() {
		res.send(data);
	}, 11000)
})

module.exports = router;
