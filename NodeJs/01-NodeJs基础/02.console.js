/**
 * Created by dllo on 17/7/31.
 */
require('console');
//log info  主要用于语义化

//1.log
console.log('log打印输出');
//2.info
console.info('info打印输出');

//warn error 警告 错误

//3.warn
console.warn("warn警告");

//4.error
console.error('error警告');

//5.dir 用于打印对象
var obj = new Object();
obj.name = '哈哈';
obj.type = 1;
console.dir(obj);

//6.time timeEnd
console.time('flag');
for(var i = 0; i < 100000; i++){

}
console.timeEnd('flag');

//7.trace 栈信息
console.trace();

//8.assert 断言  有错误时中断程序 不继续执行 正确是继续执行
//中断代码执行,给出错误提示
console.assert(1 === 2,'1不等于2');
console.log('1111');
