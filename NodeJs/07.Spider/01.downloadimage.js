/**
 * Created by dllo on 17/8/8.
 */
//http://img2.imgtn.bdimg.com/it/u=3521197000,2512504385&fm=214&gp=0.jpg
var request = require('request');
var path = require('path');
var fs = require('fs');
//1.图片地址
var imageURl = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=960749313,2968250507&fm=173&s=27965380485374DE9800019C0300C0E2&w=640&h=480&img.JPEG';
//2.图片保存路径
var imagePath = path.join(__dirname,'images','image1.jpg');
//3.下载并保存文件
//  步骤1:下载
//  步骤2:导流(把下载好的数据以流的形式传递给后边)
//  步骤3:fs根据传递过来的流以及图片路径,创建文件
request(imageURl).pipe(fs.createWriteStream(imagePath));

//下载函数
//参数一:要下载内容的地址
//参数二:要保存的文件夹名
//参数三:要保存的文件名
function download(url,directory,filename) {
    //根据当前,目录生成文件夹目录
    var dir = path.join(__dirname,directory);
    //判断文件夹是否存在
    var isDirectory = fs.existsSync(dir);
    //不存在创建
    if(!isDirectory){
        fs.mkdir(dir);
    }
    //生成保存文件路径
    var filepath = path.join(dir,filename);
    //下载并保存
    request(url).pipe(fs.createWriteStream(filepath));
}



var imgUrl = 'http://pic1.win4000.com/wallpaper/5/57a428a0b1ef1_270_185.jpg';
download(imgUrl,'image','img2.jpg');

//判断文件夹是否存在
// var isDirectory = fs.existsSync(path.join(__dirname,'file'))
// if(isDirectory){
//     console.log("文件夹存在")
// }else{
//     console.log("文件夹不存在")
// }
