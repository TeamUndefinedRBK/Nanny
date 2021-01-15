//var mysql = require('mysql');  
//var db = mysql.createConnection({  
//host: "localhost",  
//user: "root",  
//password: "root"  , 
//database : 'USER'
//});  
///module.exports.db=db
///////////////////////////////////////////////////////////////////
// to set conection databse//
const { Sequelize } = require('sequelize');
const db = new Sequelize('USER', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql' ,
  });
  module.exports.db=db