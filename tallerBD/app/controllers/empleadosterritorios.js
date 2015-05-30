var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/empleados-territorios', function (req, res, next) {
  db.EmployeeTerritories.findAll().then(function (employeeterritories) {
    res.render('empleadosterritorios', {
      title: 'Lista de empleado-territorio Northwind',
      employeeterritories: employeeterritories
    });
  });
});