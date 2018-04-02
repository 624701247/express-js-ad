var path = require("path");
var express = require('express');
var app = express();

var ejs = require('ejs');

var fs = require('fs'); 
var mongoMgr = require('./mongoMgr')

mongoMgr.init('mongodb://localhost:27017', 'admin', function() {
    // mongoMgr.insertItem("users", { name: "bill", addr: "bejing"} )
    mongoMgr.findAll('users',function(dataAry) {
        // console.log(dataAry)
    })
})


// 
var defHtml = function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) { return callback(new Error(err));}
        var rendered = content.toString()

        // 动态替换标题
        var regObj1 = new RegExp("(<title>).+(</title>)", "")
        rendered = rendered.replace(regObj1, '<title>' + options.title + '</title>');

        // 替换平台正式js
        var regObj2 = new RegExp("(<script).+(carry-local).+(</script>)", "")
        rendered = rendered.replace(regObj2, '<script src="carry.js"></script>');

        // 
        return callback(null, rendered);
    })
}

// 
var server = app.listen(8081, function () {
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Access-Control-Allow-Credentials", "true")
        if(req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
        else  next();
    });

    /*
    app.get('/', (req, res) => {
        app.use(express.static("web")); 
        res.sendFile(__dirname + '/web/index.html');
    });
    */

    // 自定义模板
    app.engine('html', defHtml)
    app.set('view engine', 'html');   // 注册模板引擎
    app.set('views', './jinx');      // 指定视图所在的位置
    app.use(express.static("jinx")); // 配置静态访问目录
    

    // 
    app.get('/a', (req, res) => {    
        res.render("index", {
            title: '111222211'
        });
    });

    app.get('/users', (req, res) => {
        res.render("users", {
            title: 'myTitle'
        });
    });


    // 
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", '127.0.0.1', port) 
})




/*
启动：
node main.js
*/