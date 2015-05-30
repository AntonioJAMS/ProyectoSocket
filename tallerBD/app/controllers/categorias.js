var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/categorias', function (req, res, next) {
  db.Categories.findAll().then(function (categories) {
    res.render('categorias', {
      title: 'Lista de Categorias Northwind',
      categories: categories
    });
  });
});
