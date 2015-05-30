var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/proveedores', function (req, res, next) {
  db.Suppliers.findAll().then(function (suppliers) {
    res.render('proveedores', {
      title: 'Lista de proveedores Northwind',
      suppliers: suppliers
    });
  });
});