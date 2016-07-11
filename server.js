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

adminRouter.param('username', function(req, res, next, username){

validUser = 'carlos';

if (username == validUser ) {
	req.username = 'CARLOS';
	next();
} else {
	//console.log('FALLASTE EN USUARIO');
	res.redirect('/error');
}
})


adminRouter.param('userpassword', function(req, res, next, userpassword){

validPass = 'heroku';

if (userpassword == validPass ) {
	console.log('entre');
	req.userpassword = ' con PASSWORD';
	next();
} else {
	//req.userpassword = ' sin PASSWORD';

	//console.log('FALLASTE EN PASSWORD');
	
res.redirect('/error');

}
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



adminRouter.get('/login',function(req, res){
	console.log('Accesando Login');
	res.send('Accesando Login');

})
adminRouter.get('/login/:username/:userpassword',function(req, res){

	res.send('Bienvenido:  '+ req.username + req.userpassword);

})




adminRouter.get('/posts',function(req, res){
	res.send('Aqui se mostraran los articulos');

})

app.use('/admin',adminRouter);


app.set('port',(process.env.PORT || 5000))

app.listen(app.get('port'));

console.log('Here we go!');
