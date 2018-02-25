module.exports = function(){
	var app = {};
	//http://expressjs.com/
	app.express 		= require('express');
	//https://nodejs.org/api/path.html
	app.path 			= require('path');
	// http://www.embeddedjs.com/
	app.ejs 			= require('ejs');
	//https://nodejs.org/api/http.html#http_http
	app.http 			= require('http');
	//https://github.com/expressjs/morgan
	app.morgan         	= require('morgan');
	//Esse é o que deixa eu usar req.body https://github.com/expressjs/body-parser
	app.bodyParser     	= require('body-parser');
	//https://github.com/expressjs/method-override
	app.methodOverride 	= require('method-override');
	//https://lodash.com/
	app._				= require('lodash');
	//https://github.com/expressjs/multer
	app.multer  		= require('multer');
	// Arquivo de configuracoes
  	// app.config 			= require('./config')();
	// https://github.com/nodemailer/nodemailer
	var nodemailer = require('nodemailer');
  	var transporter = nodemailer.createTransport('smtps://neofield.contato@gmail.com:Toronto123@smtp.gmail.com');

  	//Views
  	var views = {};
  	views.landingPage = {};
  	views.landingPage.index = require(__dirname + '/modules/views/landingPage.js')(app.path);

  	//Contato
  	var contato = {};
  	contato.controllers = {};
  	contato.controllers.contato = require(__dirname + '/modules/contato/contato-controller.js')(transporter);

	//Teste
	var teste = {};
	teste.controllers = {};
	teste.controllers.teste = require(__dirname + '/modules/teste/teste-controller.js')();

	//Middleware
	// var middleware = {};
	// var storage = app.multer.diskStorage({
	//   destination: function (req, file, cb) {
	//     cb(null, __dirname + '/public/images/produto/')
	//   },
	//   filename: function (req, file, cb) {
	//     app.crypto.pseudoRandomBytes(16, function (err, raw) {
	//       cb(null, raw.toString('hex') + app.path.extname(file.originalname));
	//     });
	//   }
	// });
	// middleware.upload = app.multer({ storage: storage });

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(app.express, routes);
	routes.v1 = {};
	routes.v1.contato = require(__dirname + '/routes/v1/contato.js')(contato);
	routes.v1.teste = require(__dirname + '/routes/v1/teste.js')(teste);
	routes.view = {};
	routes.view.landingPage = require(__dirname + '/routes/views/landingPage.js')(views);

	return {
		app: app,
		router: routes.routes
	}

}