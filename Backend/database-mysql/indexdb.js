var mysql = require('mysql');  
var db = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root"  , 
database : 'Nannyform'
});  
db
module.exports.db=db

