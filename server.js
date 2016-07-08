var express = require('express');
var app = express();
var path = require('path');
var 

app.get('/',function(req,res){

res.sendFile(path.join(__dirname)+ '/index.html');

})

app.set('port',(proceess.env.PORT || 5000))

app.listen(app.get('port'));
console.log('Here we go!');
