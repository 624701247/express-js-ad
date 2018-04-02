##web server

##### 技术：
nodejs - express - js版本
 
##### express 
npm install express --save



##### 监听修改代码事件，save自动重启服务器用 nodemon
1. npm install nodemon --save
2. 加入 nodemon.json 配置文件，不加也可以，还不知道其作用
3. package.json 中写入命令 "start":"nodemon"。 直接 cmd 运行 nodemon 会包找不到 nodemon 的



#### ejs 动态生成html返回
###### 类似的模板还有 jade,nunjucks,swig
npm install ejs --save

###
	app.engine('html', ejs.__express);  //设置引擎模板为 ejs 模板，
	app.set("views", path.join(__dirname, "views")) 
	.set("view engine", "ejs")     //模板文件识别 .ejs后缀
	//.set("view engine", "html")  //模板文件识别 .html后缀

	app.get('/users', (req, res) => {
	    res.render("users",{
	        name: 'kone',
	        id: '18'
	    });
	});	



#### 自定义html5模板


#### get  post 返回 json
    // 
    app.get('/ktest', function (req, res) {
        res.send({
            ktest:5
        });
    })

    app.post('/ktest', function (req, res) {
        res.send({
            ktest:3
        });
    }) 




#### 提交到git 自动同步部署上服务器
	jenkins
