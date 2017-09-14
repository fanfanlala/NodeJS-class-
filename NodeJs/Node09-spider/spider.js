/**
 * Created by QCL on 2017/4/28.
 */

var md5 = require('md5');
var dateformat = require('dateformat');
var base64 = require('Base64');
var request = require('request');
var mysql = require('mysql');

var downloadImage = require('./downloadImage');

// 数据库连接参数
var sqlOptions = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'pianke',
    charset: 'utf8'
};
// 通过参数创建数据库连接池
var pool = mysql.createPool(sqlOptions);

// 获得签名 sig
// 1.获取当前时间
var time = new Date();
// 2.根据当前时间, 进行格式化 yyyymmddHHMMss
var timestamp = dateformat(time.getTime(), 'yyyymmddHHMMss');
// 3.将字符串 0+''+timestamp 转成MD5, 并变为全大写
var sig = md5('0' + '' + timestamp).toUpperCase();
console.log(sig);

// 获得授权
// 通过Base64, 压缩字符串
var Authorization = base64.btoa('' + ':' + timestamp);
// 通过Base64, 还原字符串
// var originString = base64.atob(Authorization);
console.log(Authorization);

var day = dateformat(time.getTime(), 'yyyy-mm-dd');

var options = {
    method: 'GET',
    url: 'http://pianke.me/version5.0/headline/day.php',
    qs: {
        sig: sig,
        time: day,
        mode: 'day'
    },
    headers: {
        Authorization: Authorization
    }
};

// 发送request请求
request(options, function (error, response, body) {
    // 如果出现error, 抛出异常
    if (error) throw new Error(error);
    // 根据返回的body字符串转换为json对象
    var json = JSON.parse(body);
    // 获取json中的data数组
    var dataArray = json.data;
    // 循环遍历data数组
    for (var i = 0; i < dataArray.length; i++) {
        // 获取元素
        var day = dataArray[i];
        // 获取location
        var location = day.location;
        // 根据location判断是否继续循环
        // 当 location 为vision ting article时, 继续循环
        // 否则跳出, 执行下一次循环
        if (location !== 'vision' &&
            location !== 'ting' &&
            location !== 'article') {
            continue;
        }
        day.data.forEach(function (each) {
            var imagePath = '';
            // 当定位为vision时, 代表多图
            if (location === 'vision') {
                var images = each.detail.images;
                var array = new Array();
                images.forEach(function (imageUrl) {
                    array.push(downloadImage(imageUrl, location));
                });
                imagePath = array.join(',');
            // 否则代表单图
            } else {
                // 获取图片相对路径
                imagePath = downloadImage(each.cover, location);
            }
            var insertSQL = 'insert into day SET ?';
            var views = each.detail.views || each.detail.plays;
            var dayObject = {
                title: each.title,
                summary: each.summary,
                uname: each.detail.userinfo.uname,
                views: views,
                likes: each.detail.likes,
                comments: each.detail.comments,
                location: location,
                cover: imagePath
            };
            pool.query(insertSQL, dayObject, function (error) {
                if (!error) {
                    console.log('成功');
                } else {
                    console.log('失败');
                    console.error(error);
                }
            });
        });
    }
});








