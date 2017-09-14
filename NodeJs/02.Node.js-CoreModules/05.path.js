/**
 * Created by dllo on 17/8/1.
 */
var path  = require('path');
//1.join 路径拼接
var fullpath = path.join(__dirname,'B','A.jpg');
// console.log(fullpath);

//2.resolve生成绝对路径  从右往左
//当最终路径为绝对路径时,拼接终止
var fullpath = path.resolve('./1','./b','./c','./d');
console.log(fullpath);