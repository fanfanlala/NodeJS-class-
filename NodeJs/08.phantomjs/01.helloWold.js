/**
 * Created by dllo on 17/8/9.
 */
//var phantom = require('phantomjs');
//引入 webpage 并创建
var page = require('webpage').create();
//设置phantom的编码格式
phantom.outputEncoding = 'utf-8';
//通过phantom打开网页
page.open('http://douban.com',function (status) {
    //当成功的时候可以加载网页内容
    if(status == 'success'){
        console.log('加载成功');
        //标题
        console.log(page.title);
        var content = page.evaluate(function () {
            var element = document.querySelector('body')
            return element.textContent;
        });
        console.log(content);
    }else{
        console.log('加载失败');
    }
    //将phantom关闭
    phantom.exit(0);
});