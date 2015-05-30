var express = require('express'),
	config = require('../../config/config'),
  	router = express.Router(),
  	db = require('../models');

var app = express();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/pedidos', function (req, res, next) {
  db.Orders.findAll().then(function (orders) {
    res.render('pedidos', {
      title: 'Lista de pedidos Northwind',
      orders: orders
    });
  });
});
