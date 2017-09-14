/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var router = express.Router();
router.get('/',function (req,res){
    //response渲染页面,   views/page
    res.render('page',{page:'feiye'});
});
module.exports = router;