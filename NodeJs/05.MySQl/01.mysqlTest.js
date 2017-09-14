/**
 * Created by dllo on 17/8/6.
 */
//引入mysql依赖
var mysql = require('mysql');
var handleError = require('./handlerError');

// function handleError(message,error) {
//     if(error){
//         console.log(message+'失败');
//         console.log(error);
//         return false;
//     }else{
//         console.log(message+'成功');
//         return true;
//     }
// }


//1.建立连接
//options{主机名/IP地址,端口,用户名,密码}
//连接数据库需要的参数
var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:''
};
//建立连接(相当于双击)
var connect = mysql.createConnection(options);
connect.connect(function (error) {
    // if(error){
    //     console.log('连接失败啦');
    // }else{
    //     console.log('连接成功啦');
    // }

    handleError('连接',error);
});

//2.执行sql语句,创建数据库
var createDBSQL = 'create database city';
//执行创建数据库
connect.query(createDBSQL,function (error) {
    // if(error){
    //     console.log('创建失败');
    // }else{
    //     console.log('创建成功');
    // }

    handleError('创建',error);
});

//3.使用数据库
var useDBSQL = 'use city';
connect.query(useDBSQL,function (error) {
    // if(error){
    //     console.log('使用数据库失败');
    // }else{
    //     console.log('使用数据库成功');
    // }

    handleError('使用数据库',error);
});

//4.创建表
var createTableSQL = 'create table dl (id int(20),area varchar(20),primary key(id)) ';
connect.query(createTableSQL,function (error) {
    // if(error){
    //     console.log('创建表失败');
    // }else{
    //     console.log('创建表成功');
    // }

    handleError('创建表',error);
});
//5.增删改查
//5.1 插入数据
var insertSQL = 'insert into dl (id,area) values (101,\'甘井子区\')';
connect.query(insertSQL,function (error) {
    // if(error){
    //     console.log('插入数据失败');
    // }else{
    //     console.log('插入数据成功');
    // }

    handleError('插入',error);
});

//5.2 查询

var selectSQL = 'select * from dl where id = 100';
//results 是数组
connect.query(selectSQL,function (error,results) {
    // if(error){
    //     console.log('查询数据失败');
    // }else{
    //     console.log('查询数据成功');
    //     console.log(results);
    // }

    //false
    //true
   // var isSuccess = handleError('查询数据',error);
   //  if(!isSuccess){
   //      return;
   //  }

    if( !handleError('查询数据',error)) return;
    console.log(results);
});

//6.关闭数据库
connect.end(function (error) {
    if(error){
        console.log('关闭失败');
    }else{
        console.log('关闭成功');
    }
});


