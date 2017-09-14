/**
 * Created by dllo on 17/8/2.
 */
//题目:编写一个服务,读取对应文件内容
/*
* 1.创建服务
* 2.创建需要访问的文件
* 3.读取文件
* 4.获取url 根据url的pathname进行文件读取
* 5.引入url模块,进行request.url 的解析
* 6.判断路径是否正确.正确 200;错误 404
* 7.拼接绝对路径 __dirname 以及 pathname
* 8.读取,response.end();
* */


var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

var server = http.createServer(function (request,response) {
    //解析url
    var urlObj = url.parse(request.url);
    //pathname  query
    console.log(urlObj);
    var pathname = urlObj.pathname;
    if(pathname === '/http.txt'){
        //拼接当前读取文件的路径
        var finalPath = path.join(__dirname,pathname)
        fs.readFile(finalPath,'utf-8',function (err,data) {
            console.log(data);
            response.end(data);
        })

    }else{
        response.statusCode = 404;
        response.end('文件未找到');
    }

});
//监听
server.listen(8080,function () {
    //监听完毕时会去执行的函数
    console.log('服务运行在http://localhost:8080');
});