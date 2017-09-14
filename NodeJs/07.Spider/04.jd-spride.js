/**
 * Created by dllo on 17/8/8.
 */
var request = require('request');
var cheerio = require('cheerio');
var download = require('./download');
var url = 'http://www.fruitday.com/';
request(url,function (error,response,body) {
   var $ = cheerio.load(body);
    var items = [];
    var $imgUrl = $('.good-list').eq(2).children('ul').children('li').children('.s-img').children('a').children('.lazy');
    $imgUrl.each(function (index,element) {
        items.push($(element).attr('data-original'));
        download($(element).attr('data-original'),'img',index+'.jpg');
    });

   console.log(items);



});

