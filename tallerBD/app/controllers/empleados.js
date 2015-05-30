var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/empleados', function (req, res, next) {
  db.Employees.findAll().then(function (employees) {
    res.render('empleados', {
      title: 'Lista de empleados Northwind',
      employees: employees
    });
  });
});
//azureuser