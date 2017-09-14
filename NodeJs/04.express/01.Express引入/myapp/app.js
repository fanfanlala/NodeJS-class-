//引入模块/依赖
//1.引入express
var express = require('express');
//2.引入path
var path = require('path');
//3.引入serve-favicon
var favicon = require('serve-favicon');
//4.引入日志
var logger = require('morgan');
//5.引入cookie的设置
var cookieParser = require('cookie-parser');
//6.引入body的解析
var bodyParser = require('body-parser');

//引入路由
//1.引入index routes 首页路由
var index = require('./routes/index');
//2.引入users routes
var users = require('./routes/users');

//创建express对象
var app = express();

// view engine setup  设置模板引擎
//常用 pug jade ejs html....
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//设置日志状态
app.use(logger('dev'));
//设置Body解析方式JSon
app.use(bodyParser.json());
//body需不需要urlencode 默认不需要
app.use(bodyParser.urlencoded({ extended: false }));
//设置cookie解析
app.use(cookieParser());
//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

//使用路由,使用谁,对应哪个路径
//app.use('对应url路径',路由)
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出
module.exports = app;
