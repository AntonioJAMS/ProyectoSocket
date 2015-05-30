var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/detalle-pedido', function (req, res, next) {
  db.OrderDetails.findAll().then(function (orderdetails) {
    res.render('detallepedidos', {
      title: 'Lista de detalle pedido Northwind',
      orderdetails: orderdetails
    });
  });
});