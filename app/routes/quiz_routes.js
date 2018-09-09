var express = require('express');
var apiRouter = express.Router();
var quiz = require('./../quiz.js');

apiRouter.get('/category/:category', function(req, res){
  quiz
    .getQuiz(req.params)
    .then(function(result){res.json(result);});
});

apiRouter.get('/category/:category/difficulty/:difficulty', function(req, res){
  quiz
  .getQuiz(req.params)
  .then(function(result){res.json(result);});
});

apiRouter.get('./category/:category/difficulty/:difficulty', function(req, res){
  quiz 
    .getQuiz(req.params)
    .then(function(result){res.json(result);});
});

apiRouter.get('/category:category/difficulty/:difficulty/count/:count', function(req, res){
  quiz  
    .getQuiz(req.params)
    .then(function(result){res.json(result);});
});


apiRouter.get('/', function (req, res) {
  res.json({
    message: 'hooray! Your API is working!'
  });
});

module.exports = apiRouter;