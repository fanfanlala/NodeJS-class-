var url = require('url');
//require引入 exports输出
//定义url
var baiduUrl = 'http://www.baidu.com/1/img/1.jpg?width=100&height=200#host';
var urlJson = url.parse(baiduUrl);
// console.dir(urlJson);
/*
* protocol 协议
* search 查询完整的字符串
* query:查询字符串后的参数
* prot 默认为8080
* auth: 授权
* pathname: 路径
* host:域名
* */

//1.解析url
var urlObj = {
    protocol:'http:',
    host:'www.baidu.com',
    port:'8080',
    pathname:'/2/text/1.txt',
    search:'?name=zhangsan$age=18'
};
//2.格式化url对象
var urlString = url.format(urlObj);
console.log(urlString);



