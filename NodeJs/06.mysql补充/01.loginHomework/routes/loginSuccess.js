/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var handlerError = require('./../public/javascripts/handlerError');

// router.get('/',function (req,res) {
//     console.dir(req.query);
//     console.log(req.query.username);
//     console.log(req.query.password);
//    res.send('登录成功');
// });

var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'login'
};
var connection = mysql.createConnection(options);
connection.connect(function (error) {
     handlerError("连接",error);
});





router.post('/',function (req,res) {
    // console.dir(req.body);
    var username = req.body.username;
    var password = req.body.password;

    // var selectSQL ='select * from information where username='+'\''+username+'\''+'and password='+'\''+password+'\'';
    //ES6写法  模板字符串
    var selectSql = `select * from information where username = '${username}' and password = '${password}' `;
    var selectUsername = `select * from information where username = '${username}'`;
    connection.query(selectUsername,function (error,results) {
       if(!handlerError('查询',error)) return;
        if(results.length != 0){
            var user = results[0];
            if(user.password == password){
                res.send('登录成功');
            }else{
                res.send('密码错误');
            }
        }else{
            res.send('用户不存在');
        }
    });
});
module.exports = router;