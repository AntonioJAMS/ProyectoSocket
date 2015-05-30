var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/clientes', function (req, res, next) {
  db.Customers.findAll().then(function (customers) {
    res.render('clientes', {
      title: 'Lista de clientes Northwind',
      customers: customers
    });
  });
});

router.get('/clientes/:customerid', function (req, res, next) {
  var idcustomer = req.params.customerid;
  console.log("|------>|"+idcustomer);
  db.Customers.findOne(idcustomer).then(function (customers) {
    res.render('clientes', {
      title: 'Lista de Clientes',
      customers: customers
    });
  });
});