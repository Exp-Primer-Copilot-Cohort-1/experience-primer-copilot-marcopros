//create a web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';

//create a comment
router.post('/', function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, secret, function(err, decoded){
        if(err){
            return res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });
        }else{
            var newComment = new Comment({
                content: req.body.content,
