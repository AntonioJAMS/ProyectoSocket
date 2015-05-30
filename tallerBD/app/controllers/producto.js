var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/productos', function (req, res, next) {
  db.Products.findAll().then(function (products) {
    res.render('productos', {
      title: 'Lista de Productos Northwind',
      products: products
    });
  });
});

