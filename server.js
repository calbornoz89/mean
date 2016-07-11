var express = require('express');
var app = express();
var path = require('path');
var adminRouter = express.Router();


app.get('/',function(req,res){
res.sendFile(path.join(__dirname) + '/index.html');
})


//Middleware
adminRouter.use(function (req, res, next){

console.log('--->',req.method, req.url);



next();

})

adminRouter.param('name', function(req, res, next, name){

console.log("req.name: ",req.name);
console.log("name: ",name);
req.name = ' Heroku';
next();

})




//Rutas
adminRouter.get('/',function(req, res){
	res.send('Estoy en la pagina principal del admin');

})

adminRouter.get('/users',function(req, res){
	console.log('Ya llegue a la vista de usuarios');
	res.send('Aqui se mostraran los usuarios');

})

adminRouter.get('/users/:name',function(req, res){

	res.send('Hola '+ req.name);

})




adminRouter.get('/posts',function(req, res){
	res.send('Aqui se mostraran los articulos');

})

app.use('/admin',adminRouter);


app.set('port',(process.env.PORT || 5000))

app.listen(app.get('port'));

console.log('Here we go!');
