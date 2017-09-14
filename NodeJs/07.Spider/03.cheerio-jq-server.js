/**
 * Created by dllo on 17/8/8.
 */
var cherrio = require('cheerio');
var request = require('request');
var url ='http://cnodejs.org/';
request(url,function (error,response,body) {
   var $ =  cherrio.load(body);
    var items =[];
    $("#topic_list .topic_title").each(function (index,element) {

        var item = {
            title:$(element).attr('title'),
            href:$(element).attr('href')
        };
        items.push(item);

    })

    $(".cell>.user_avatar>img").each(function (index,element) {

       items[index].icon = $(element).attr('src') ;
    });
    console.log(items) ;
});