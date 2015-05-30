var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/regiones', function (req, res, next) {
  db.Regions.findAll().then(function (regions) {
    res.render('regiones', {
      title: 'Lista de regiones Northwind',
      regions: regions
    });
  });
});
