var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
    
var config = {
  development: {
    root: rootPath,
    app: {
      name: 'proy27'
    },
    port: 8000,
    db:'sqlite://localhost/prueba_northwind.db',
    storage: rootPath + '/data/prueba_northwind.db'
  },

  test: {
    root: rootPath,
    app: {
      name: 'proy27'
    },
    port: 8000,
    db: 'sqlite://localhost/proy27-test',
    storage: rootPath + '/data/proy27-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'proy27'
    },
    port: 8000,
    db: 'sqlite://localhost/proy27-production',
    storage: rootPath + 'data/proy27-production'
  }
};

module.exports = config[env];
