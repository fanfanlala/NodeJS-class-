/**
 * Created by dllo on 17/8/8.
 */
var download = require('./download');
var imageArray = [
    'http://p0.qhimg.com/t01e7d58d51120bcccb.jpg','http://img3.cache.netease.com/photo/0026/2016-08-22/BV2NABKC5SJC0026.jpg','http://pic1.win4000.com/wallpaper/5/57a4289ebae6c.jpg','http://pic.enorth.com.cn/003/019/826/00301982624_09dd943a.jpg','http://img16.3lian.com/gif2016/q18/47/41.jpg'
];


//item 是values
//index 是下标
//arr 是数组本身
imageArray.forEach(function (item,index,arr) {
    download(item,'imgs',index + '.jpg');
});