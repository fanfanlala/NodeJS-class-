/**
 * Created by dllo on 17/8/9.
 */
var  webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';

/*************************分割线*******************************/
//引入phantom的文件系统
var fs = require('fs');
//由于浏览器没有控制台输出,创建一个输出函数
page.onConsoleMessage = function (msg,lineNum,sourceId) {
    console.log('CONSOLE:'+msg);
};
page.open('http://pianke.me',function (status) {
   if(status === 'success'){
       console.log('成功');
       console.log(page.title);
       /*************************分割线*******************************/
       //includeJs  浏览器可以识别其他js库,可以引入一些代码,例如:jQuery
       page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
           //实际情况浏览器加载网页,有部分内容延迟加载
           //比如:ajax请求
           //延时 10s ,读取数据
           setTimeout(function () {
               //对浏览器中的网页进行操作  比如:dom操作,事件
             var arrString = page.evaluate(function () {
                   // var element = document.querySelector('.container');
                   // return element.textContent;
                   var arr =[];
                 //通过jQuery获取对应的img的src
                    $(".container .focus-picture div a img").each(function (index,element) {
                        var imgSrc = $(element).attr('src');
                        //将获取的src添加到数组中
                        arr.push(imgSrc);
                    });
                 //将数组返回,
                 return arr;
               });
               //并写入文件
               fs.write('./arr.json',arrString,'w');
               phantom.exit(0);
           },5000);
       });
       /*************************分割线*******************************/
   } else{
       console.log('失败');
       phantom.exit(0);
   }
});