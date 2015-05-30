var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/territorios', function (req, res, next) {
  db.Territories.findAll().then(function (territories) {
    res.render('territorios', {
      title: 'Lista de territorios Northwind',
      territories: territories
    });
  });
});