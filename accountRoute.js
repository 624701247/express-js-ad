// 路由
var express = require('express');
var router = express.Router();
var path = require("path");


router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


router.get('/uerinfo', function(req, res) {
	console.log('u info')
	res.end( JSON.stringify({name:'kone'}) );
})


router.post('/login', function(req, res) {
	var data = {name:'login'}
	res.send(data);
})

router.post('/register', function(req, res) {
	console.log('rrrrr')
	var data = {name:'register'}
	res.send(data);
})


module.exports = router;