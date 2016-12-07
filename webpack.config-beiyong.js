/**
 * Created by asus8 on 2016/12/6.
 */
/**
 * Created by asus8 on 2016/12/2.
 */
var webpack=require("webpack");
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var extractCSS=new ExtractTextPlugin('css/index.css');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:__dirname+'/src/js/index.js',
    output:{
        path:__dirname+'/assets/',
        filename:"js/index.js"
        // publicPath:"/temp/"  //公共的存放地点 小组件临时放缓存物的地方
    },
    devServer:{
        // contentBase:'./src/tpl',//本机文件夹
        contentBase:'./assets/',//本机文件夹
        host:'192.168.1.194', //本机端口 不知道ipconfig
        port:'3333',
        color:true
    },
    module:{
        loaders:[
            {
                test:/\.less$/,
                loader:'style!css!less'
            },
            {
                test:/\.css$/,
                loader:extractCSS.extract('style-loader','css-loader')
            },

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin('index.css')
        extractCSS,
        new HtmlWebpackPlugin({
            title:'hi',
            filename:'../assets/index.html',
            // filename:'../index.html',
            template:__dirname+'/src/tpl/index.html',
            inject:'body',
            info:'hello world  h1的内容'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('v','lib/jquery.min.js')
    ],
    watch:true
}