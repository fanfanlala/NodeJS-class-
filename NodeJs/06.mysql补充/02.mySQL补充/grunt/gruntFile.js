/**
 * Created by dllo on 17/8/7.
 */
//加载函数,所有的代码都写在这个函数内
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'text.js',
                dest: 'build/hao.min.js'
            }
        }
    });
    //插件加载代码
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //任务注册代码  第一个default是任务别名  后面[]里面任务名,可以有多个,但是有顺序
    grunt.registerTask('default', ['uglify']);


};