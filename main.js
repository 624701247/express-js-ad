var path = require("path");
var express = require('express');
var app = express();
var jinx = require('./jinx');
var accountRoute = require('./accountRoute');
var fs = require('fs'); 
// var ejs = require('ejs');


/*start mongodb*/ 
var mongoMgr = require('./mongoMgr')
mongoMgr.init('mongodb://localhost:27017', 'admin', function() {
    // mongoMgr.insertItem("users", { name: "bill", addr: "bejing"} )
    mongoMgr.findAll('users',function(dataAry) {
        // console.log(dataAry)
    })
})
/*end mongodb*/ 


/*start 自定义模板*/ 
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
app.set('view engine', 'html'); // 指定模板文件的后缀名为html
app.engine('html', defHtml)    // 运行模板
app.set('views', 'jinx');      // 指定视图所在的位置
/*end 自定义模板*/ 


// 挂载路径到指定路由
// 即访问 http://127.0.0.1:8081/api/login 的响应在 accountRoute.js中对应的方法
app.use('/api', accountRoute)


/*响应头设置*/ 
app.all('*', function(req, res, next) {

    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:2019");

    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");

    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    res.header("X-Powered-By",' 3.2.1')

    res.header("Access-Control-Allow-Credentials", "true")
    if(req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else  next();
});


/*start 静态目录*/
// 所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
// 访问 http://127.0.0.1:8081/closeM.png  可获取
app.use(express.static('public'));

// 挂载一个路径 访问 http://127.0.0.1:8081/public-v/closeM.png  可获取
app.use('/public-v', express.static('public'));

// http://127.0.0.1:8081/jh5/blue  可以访问jinx目录下的blue项目
app.use('/h5', express.static('jinx'));
/*end 静态目录*/


/**/ 



/*启动服务器*/ 
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", '127.0.0.1', port) 
})


