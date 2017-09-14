/**
 * Created by dllo on 17/8/3.
 */
//问题:node.js  系统的HTTP有哪些问题
var http = require('http');
var server = http.createServer(function(request,response){
    if(request.url === '/1'){
        response.end ('1');
    }else if(request.url === '/2'){
        response.end('2');
    }else if(request.url === '/3'){
        response.end('3');
    }else{
        response.end('结束');
    }

});
server.listen(8080);

//connect
//npm 包管理工具
/*
* 1.npm init 初始化package.json文件   name里面不能有大写字母
*    entry point:入口 默认为index,js
* 2.npm install 依赖/模块  下载项目所需的依赖或者模块
*    本地会生成目录node_modules
* 3.package中包含dependencies(依赖)
*    执行npm install
*
*    例如下载JQ,在package.json 中添加JQ及相应的版本,不写版本,默认下载最新版本 直接写npm install
*
*    通过npm 下载的依赖 / 模块 直接引入
*    node_modules  下的都可以直接引入
* */

var connect = require('connect');
//connect 解决判断重叠问题  使代码更清晰
//弊端:需要考虑代码顺序  =>express
var app = connect();
app.use('/1',function (req,res) {
    res.end('1');
});
app.use('/2',function (req,res) {
    res.end('2');
});
app.use('/3',function (req,res) {
    res.end('3');
});
app.use('/',function (req,res) {
    res.end('其他');
});
http.createServer(app).listen(8081);

//express  默认下载最新版并放在node_modules 代码:npm install express --save

var express = require('express');
var appExpress = express();
//express 设置一个 get请求
appExpress.get('/1',function (res,req) {
    req.end('1');
});
//express 设置一个 post请求
appExpress.post('/2',function (res,req) {
    req.end('2');
});
//所有的请求都可以
//express 设置一个任意请求
appExpress.all('/3',function (res,req) {
    req.end('3');
});

//加载静态资源
//express设置静态文件目录,使其内容资源可以直接被访问
//路径写文件夹 访问时直接写文件名 http://localhost:8082/1.jpg

appExpress.use(express.static('./image'));
http.createServer(appExpress).listen(8082,function () {
    console.log('服务器监听:http://localhost"8082');
});
