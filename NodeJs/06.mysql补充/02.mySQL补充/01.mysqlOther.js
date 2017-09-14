/**
 * Created by dllo on 17/8/7.
 */
var mysql = require('mysql');
var handleerror = require('./handlerError');

var options  = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'login'//连接时,直接使用数据库login
};
// var connection = mysql.createConnection(options);
// connection.connect(function (error) {
//     handleerror('连接',error);
// });
// var insertSQL = 'insert into information SET ?';
// var user = {
//     username:'朱六',
//     password:'666'
// };
// connection.query(insertSQL,user,function (error) {
//     handleerror('插入',error);
// });

//连接池
//电池,游泳池

var option = {
    connectionLimit : 3,
    host:'localhost',
    port:3306,
    user:'root',
    password:'111111',
    database:'NewDB'
};
var pool = mysql.createPool(option);
// pool.getConnection(function (error,connection) {
//    handleerror('连接',error);
//     var createDB = 'create database NewDB';
//    connection.query(createDB,function (error) {
//       handleerror('创建数据库',error);
//    });
//     var useDB = 'use NewDB';
//     connection.query(useDB,function (error) {
//         handleerror('使用数据库',error);
//     });
//     //自增字段 (auto_increment)
//     var createTable ='create table user (id int(20) auto_increment, username varchar(20), password varchar(20), primary key(id))';
//     connection.query(createTable,function (error) {
//         handleerror('创建表',error);
//     });
//
//     var insertSQL = 'insert into user set ?';
//     var user = {
//         username:'zhangsan',
//         password:123
//     };
//     connection.query(insertSQL,user,function (error) {
//         handleerror('插入',error);
//     });
//    //console.log(connection);
// });
pool.getConnection(function (error,connection) {
    var selectSQL = 'select * from user';
    connection.query(selectSQL,function (error) {
        handleerror('查找1',error);
        //还回去
        connection.release();
    });
});
pool.getConnection(function (error,connection) {
    var selectSQL = 'select * from user';
    connection.query(selectSQL,function (error) {
        handleerror('查找',error);
    });
});
pool.getConnection(function (error,connection) {
    var selectSQL = 'select * from user';
    connection.query(selectSQL,function (error) {
        handleerror('查找',error);
    });
});
pool.getConnection(function (error,connection) {
    var selectSQL = 'select * from user';
    connection.query(selectSQL,function (error) {
        handleerror('查找',error);
    });
});
pool.getConnection(function (error,connection) {
    var selectSQL = 'select * from user';
    connection.query(selectSQL,function (error) {
        handleerror('查找',error);
    });
});