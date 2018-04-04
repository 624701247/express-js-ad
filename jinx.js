// 路由
// 请访问 ： http://127.0.0.1:8081/jinx/prjname/

var express = require('express');
var router = express.Router();
var path = require("path");


// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    // console.log('q', req.originalUrl, Date.now());
    next();
});

router.use(function(req, res, next) {
    next()
})

// prj blue
router.get('/blue', function(req, res) {
    res.render("blue", {
        title: 'blue prj'
    });
});

// prj ktest  
router.get('/ktest', function(req, res) {
    res.render("ktest", {
        title: 'ktest prj'
    });
});

module.exports = router;