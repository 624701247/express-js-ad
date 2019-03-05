// 路由
var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/login', function(req, res) {
	var data = {name:'kone'}
	res.end(JSON.stringify(data));
})

module.exports = router;