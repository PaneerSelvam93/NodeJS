var Sequelize = require('sequelize');

// sequelize initialization
var sequelize = new Sequelize('node_db', 'root', 'root', {host: 'localhost',port:3306,dialect: 'mysql'});

// check database connection
sequelize.authenticate().then(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});

module.exports = sequelize;