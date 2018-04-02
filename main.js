var path = require("path");
var express = require('express');
var app = express();
var jinx = require('./jinx');
var fs = require('fs'); 
var mongoMgr = require('./mongoMgr')

// var ejs = require('ejs');

mongoMgr.init('mongodb://localhost:27017', 'admin', function() {
    // mongoMgr.insertItem("users", { name: "bill", addr: "bejing"} )
    mongoMgr.findAll('users',function(dataAry) {
        // console.log(dataAry)
    })
})


// 自定义模板
var defHtml = function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) { return callback(new Error(err));}
        var rendered = content.toString()

        // 动态替换标题
        var regObj1 = new RegExp("(<title>).+(</title>)", "")
        rendered = rendered.replace(regObj1, '<title>' + options.title + '</title>');

        // 替换平台正式js
        var regObj2 = new RegExp("(<script).+(carry-local).+(</script>)", "")
        rendered = rendered.replace(regObj2, '<script src="./carry.js"></script>');

        // 
        return callback(null, rendered);
    })
}

app.set('view engine', 'html'); // 指定模板文件的后缀名为html
app.engine('html', defHtml)    // 运行模板
app.set('views', './jinx');      // 指定视图所在的位置

app.use('/jinx', jinx);

// 
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Access-Control-Allow-Credentials", "true")
    if(req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else  next();
});

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
// app.use(function (req, res, next) {
    // console.log('Time:', Date.now());
    // next();
// });

// 
var server = app.listen(8081, function () {
    // 
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", '127.0.0.1', port) 
})




/*
启动：
node main.js


*/


