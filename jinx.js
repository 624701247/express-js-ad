
// 路由
var express = require('express');
var router = express.Router();
var path = require("path");



// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    // console.log('q', req.originalUrl, Date.now());
    next();
});


// var serveIndex = require('serve-index')
// router.use('/jinx', 
// express.static('/public'), 
// serveIndex('/jinx', {}))
// router.use(express.static("jinx/blue"));
// router.use(express.static("jinx/ktest"));


router.use(function(req, res, next) {
    next()
})

// prj blue
router.get('/blue', function(req, res) {
    // router.use("jinx/blue", express.static("jinx/blue"));
    res.render("blue", {
        title: 'blue prj'
    });
});

// prj ktest  
router.get('/ktest', function(req, res) {
    // router.use("jinx/ktest", express.static("jinx/ktest"));
    res.render("ktest", {
        title: 'ktest prj'
    });
});

module.exports = router;