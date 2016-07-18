//Call tha packages
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user')

var port = process.env.PORT || 5000;

//console.log(mongoose);
//console.log(mongoose);

//APP CONFIGURATION
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','GET, POST');
res.setHeader('Access-Control-Allow-Headers','X-Requested-Width, content-type, Authorization');
next();
})

//Loggin all requeest
app.use(morgan('dev'));

//DB conection
//mongoose.connect('mongodb://localhost/pokemon');
mongoose.connect('mongodb://admin:Enigma401@ds017862.mlab.com:17862/pokemon_cal');


//API ROUTERS
//Main/basic route
app.get('/', function(req, res){
 res.send('Welcome to the real world!')
});

//Express router instance
var apiRouter = express.Router();

//Accesed at GET http://localhost:5000/api
apiRouter.get('/', function(req, res){
	res.json({ message: 'Welcome to Zion! (Our mother API)' });
});

//Routes /users
apiRouter.route('/users')
//Create a user through POST
//URL: http://localhost:5000/api/users
.post(function(req, res){
  var user = new User();
  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;

  user.save(function(err){
    //Verified duplicate entry on username
    if(err){
    if(err.code == 11000){
    return res.json({ success: false, message: 'El nombre de usuario ya existe.'})
  }}
  res.json({message: 'El usuario se ha creado'});

})
})
//Get all users through Get
// URL: http://localhost:5000/api/users
.get(function(req, res){
  User.find (function(err, users){
    if(err) return res.send(err);
    res.json(users);
  })


})

//Register our Routers
app.use('/api', apiRouter)

app.listen(port);
console.log('Neo comes over port '+ port);


app.get('/',function(req,res){
res.sendFile(path.join(__dirname) + '/index.html');
})


//Middleware
//adminRouter.use(function (req, res, next){

//console.log('--->',req.method, req.url);



//next();

//})

// adminRouter.param('name', function(req, res, next, name){
//
// console.log("req.name: ",req.name);
// console.log("name: ",name);
//
// req.name = ' Heroku';
//
// next();
//
// })

// adminRouter.param('username', function(req, res, next, username){
//
// validUser = 'carlos';
//
// if (username == validUser ) {
// 	req.username = 'CARLOS';
// 	next();
// } else {
// 	//console.log('FALLASTE EN USUARIO');
// 	res.redirect('/error');
// }
// })


// adminRouter.param('userpassword', function(req, res, next, userpassword){
//
// validPass = 'heroku';
//
// if (userpassword == validPass ) {
// 	console.log('entre');
// 	req.userpassword = ' con PASSWORD';
// 	next();
// } else {
// 	//req.userpassword = ' sin PASSWORD';
//
// 	//console.log('FALLASTE EN PASSWORD');
//
// res.redirect('/error');
//
// }
// })



//
// //Rutas
// adminRouter.get('/',function(req, res){
// 	res.send('Estoy en la pagina principal del admin');
//
// })
//
// adminRouter.get('/users',function(req, res){
// 	console.log('Ya llegue a la vista de usuarios');
// 	res.send('Aqui se mostraran los usuarios');
//
// }).get('/users/:name',function(req, res){
//
// 	res.send('Hola '+ req.name);
//
// })
// //
// //
// adminRouter.get('/login',function(req, res){
// 	console.log('Accesando Login');
// 	res.send('Accesando Login');
//
// }).get('/login/:username/:userpassword',function(req, res){
//
// 	res.send('Bienvenido:  '+ req.username + req.userpassword);
//
// })
//
//
//
//
// adminRouter.get('/posts',function(req, res){
// 	res.send('Aqui se mostraran los articulos');
//
// })
//
// app.use('/admin',adminRouter);
//
//
// app.route('/account')
// .get(function(req, res){
//
// console.log('Metodo GET');
// res.send('Metodo GET');
//
// })
// .post(function(req, res){
// console.log('Metodo POST');
// res.send('Metodo POST');
// })
// .put(function(req, res){
// console.log('Metodo PUT');
// res.send('Metodo PUT');
// })
// .delete(function(req, res){
// console.log('Metodo DELETE');
// 	res.send('Metodo DELETE');
// })




//app.set('port',(process.env.PORT || 5000))
// app.listen(app.get('port'));
// console.log('Here we go!');
