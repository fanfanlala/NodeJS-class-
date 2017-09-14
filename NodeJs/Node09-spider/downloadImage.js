/**
 * Created by QCL on 2017/4/28.
 */

var url = require('url');
var path = require('path');
var request = require('request');
var fs = require('fs');

function downloadImage(imageUrl, imageDirName) {
    // 根据图片url, 解析成对象
    var urlObj = url.parse(imageUrl);
    // 获取url对象中的pathname
    var pathName = urlObj.pathname;
    // 通过 '/' 分隔成数组
    var pathArray = pathName.split('/');
    // 获取数组中最后一个元素作为图片名
    var imageName = pathArray.pop();

    var imageDir = imageDirName || '';

    // 根据imageName和参数imageDirName
    // 拼接成图片相对路径, 数据库中图片的存储路径
    var imagePath = path.join('images', imageDir, imageName);
    // 拼接成图片绝对路径, 图片写入本地
    var fullImagePath = path.join(__dirname, imagePath);

    // 下载导流存储
    request(imageUrl).pipe(fs.createWriteStream(fullImagePath));

    return imagePath;
}

module.exports = downloadImage;