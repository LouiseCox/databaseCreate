//express_exe

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));//this line must be here to receive data from a post request

app.use(express.static('public')); //this brings in the public file with the image and the css file

app.use(my_middleware); //this is registering the middleware

function my_middleware(req, res, next){
	console.log('Hello Middleware');
	next();
}

app.get('/', function(req, res){
	//query data output
	/*console.log(req.query.first_name);
	console.log(req.query.last_name);
	console.log(req.query.email);*/
	res.sendFile(__dirname + '/home.html');
});

app.post('/', function(req, res){
	//query data output
	console.log(req.body.first_name);
	console.log(req.body.last_name);
	console.log(req.body.email);
	res.redirect('/');
});

app.get('/about', function(req, res){
	console.log('About Us');
	res.send('About Me page');
});

app.get('/contacts', my_middleware, function(req, res){
	res.send('Contacts page');
});

app.listen(3000, function() {
	console.log('Server is running on port 3000');
});


