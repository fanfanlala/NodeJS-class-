/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var router = express.Router();
//router.get('/',function (req,res)
//第一个参数"/"后接的辅助路径,浏览器访问时必须拼接的.默认"/"为空
router.get('/',function (req,res) {
    res.render('shoppingCar',{car:'宝马'});
})
module.exports = router;