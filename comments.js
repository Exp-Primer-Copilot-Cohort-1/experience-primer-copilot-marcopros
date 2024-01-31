//create a web server
//http://localhost:3000/comments?name=xxx&message=xxx
const http = require('http');
const url = require('url');
const fs = require('fs');
const template = require('art-template');
const comments = [
    {
        name:'zhangsan',
        message:'hello',
        dateTime:'2019-11-11'
    },
    {
        name:'lisi',
        message:'hello',
        dateTime:'2019-11-11'
    },
    {
        name:'wangwu',
        message:'hello',
        dateTime:'2019-11-11'
    },
    {
        name:'zhaoliu',
        message:'hello',
        dateTime:'2019-11-11'
    }
];

http.createServer(function (req,res) {
    //parse url
    const parseObj = url.parse(req.url,true);
    //get path
    const pathname = parseObj.pathname;
    if(pathname === '/'){
        fs.readFile('./views/index.html',function (err,data) {
            if(err){
                return res.end('404 not found');
            }
            const htmlStr = template.render(data.toString(),{
                comments:comments
            });
            res.end(htmlStr);
        })
    }else if(pathname.indexOf('/public/') === 0){
        fs.readFile('.'+pathname,function (err,data) {
            if(err){
                return res.end('404 not found');
            }
            res.end(data);
        })
    }else if(pathname === '/post'){
        fs.readFile('./views/post.html',function (err,data) {
            if(err){
                return res.end('404 not found');
            }
            res.end(data);
        })
    }else if(pathname === '/pinglun'){
        //get query
        const comment = parseObj.query;
        comment.dateTime = '2019-11-11';
        comments.unshift(comment);
        //redirect
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }else{
        fs.readFile('./views/404.html',function (err,data) {
            if(err){
                return res.end('404 not found');
            }
            res.end(data);
        })
    }
}).listen(3000,function () {
    console.log('server is running');
});