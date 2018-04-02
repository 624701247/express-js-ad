var MongoClient = require('mongodb').MongoClient;

var dbase = null;

exports.init = function(dbUrl, dbName, func) {
    MongoClient.connect(dbUrl, function(err, db) {
        console.log("mongo 连接成功！");
        dbase = db.db(dbName);
        func()
    });
}

exports.insertItem = function(cname, data) {    
    if(dbase == null) {
        console.error('数据库还没连接上')
        return 
    }

    dbase.collection(cname).insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("document 插入成功");
    });
}

// 查找 collection 全部内容
exports.findAll = function(cname, func) {
    dbase.collection(cname).find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        // console.log(result[0]);
        func(result)
    });
}
