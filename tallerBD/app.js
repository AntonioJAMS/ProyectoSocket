var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models'),
  passport = require('./config/passport'),
  router = express.Router(),
  db = require('./app/models');

var app = express();

require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    app.listen(3000);
  }).catch(function (e) {
    throw new Error(e);
  });

var server = app.listen(config.port);
var io = require('socket.io').listen(server);
var count = 0;

var datos = new Object();

db.Employees.findAll().then(function (employees) {
	datos.employees = employees
});
db.Products.findAll().then(function (products) {
	datos.products = products
});
db.Customers.findAll().then(function (customers) {
	datos.customers = customers
});
db.Orders.findAll().then(function (orders) {
	datos.orders = orders
});
db.Regions.findAll().then(function (regions) {
	datos.regions = regions
});
db.Territories.findAll().then(function (territories) {
	datos.territories = territories
});
db.Suppliers.findAll().then(function (suppliers) {
	datos.suppliers = suppliers
});
db.Categories.findAll().then(function (categories) {
	datos.categories = categories
});

io.sockets.on('connection',function(socket){
	count++;
	console.log('Usuario conectado. ' + count+ 'Usuario(s) ahora');
	socket.on('message', function(data){
		console.log("-------------->"+data.tabla);
		switch (data.tabla) {
			case "proveedores":
				socket.emit('users', {
					number:count,
					suppliers:datos.suppliers
				});
				break;
			case "empleados":
				socket.emit('users', {
					number:count,
					employees:datos.employees
				});	
			break;
			case "productos":
				socket.emit('users', {
					number:count,
					products:datos.products
				});
			break;
			case "clientes":
				socket.emit('users', {
					number:count,
					customers:datos.customers
				});
			break;
			case "pedidos":
				socket.emit('users', {
					number:count,
					orders:datos.orders
				});
			break;
			case "regiones":
				socket.emit('users', {
					number:count,
					regions:datos.regions
				});
			break;
			case "territorios":
				socket.emit('users', {
					number:count,
					territories:datos.territories
				});
			break;
			case "categorias":
				socket.emit('users', {
					number:count,
					categories:datos.categories
				});
				
			break;
		}
		socket.broadcast.emit('users', {
					number:count,
					employees:datos.employees,
					products:datos.products,
					suppliers:datos.suppliers,
					customers:datos.customers,
					orders:datos.orders,
					regions:datos.regions,
					territories:datos.territories,
					categories:datos.categories
				});
	});

	socket.on('disconnect', function(data){
		count--;
		console.log('Usuario desconectado. ' + count+ 'Usuario(s) ahora');
		socket.broadcast.emit('users', {
			number:count,
			employees:datos.employees,
			products:datos.products,
			suppliers:datos.suppliers,
			customers:datos.customers,
			orders:datos.orders,
			regions:datos.regions,
			territories:datos.territories,
			categories:datos.categories
		});
	});
});