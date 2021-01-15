/*const {db}=require('../database-mysql/indexdb');
 

function find(Email) {
    return db.execute('SELECT * FROM User_table_register WHERE Email = ?', [Email]);
  }

function save (user){
        return db.execute(
          'INSERT INTO User_table_register (FirstName, LastName, Email,Password) VALUES (?, ?, ?)',
          [user.FirstName, user.LastName, user.Email,user.Password]
        );
      }

exports.save = save ;
exports.find = find;
*/
//to set our table
const Sequelize = require('sequelize');
const {db} = require('../database-mysql/indexdb');

const User_table_register = db.define('User_table_register', {
  FirstName: {
    type: Sequelize.STRING
  },
  LastName: {
    type: Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  },
  Password: {
    type: Sequelize.STRING
  },
});

User_table_register.sync().then(() => {
  console.log('table created');
});
module.exports = User_table_register;