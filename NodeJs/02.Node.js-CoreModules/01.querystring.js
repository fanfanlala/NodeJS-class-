/**
 * Created by dllo on 17/8/1.
 */
//查询字符串
// http://www.baidu.com?width=100&height=200
var querystring = require('querystring');
var string = 'width=100&height=200';
//1.parse 将字符串解析成json对象
/*
* 参数1:要解析的字符串
* 参数2:键值对间链接方式  例 & key=value&key=value
* 参数3:键值间链接方式    例= key=value
* 参数4:选项  解析函数  最大解析条数
* */
var obj = querystring.parse(string);
console.dir(obj);
//2.stringify 将json对象转换为字符串
/*
* 参数1:要字符串化的对象
* 参数2:键值对间链接方式  例 & key=value&key=value
* 参数3:键值间链接方式    例= key=value
* 参数4:选项  字符串化函数
* */
var json = {
    name:'小明',
    sex:'男',
    age:18
};
var query = querystring.stringify(json);
console.dir(query);
