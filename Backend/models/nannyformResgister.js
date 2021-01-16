const Sequelize = require('sequelize');
const {db} = require('../database-mysql/indexdb');

const Register_NannyForm = db.define('Register_NannyForm', {
  FirstName: {
    type: Sequelize.STRING
  },
  LastName: {
    type: Sequelize.STRING
  },
  Age: {
    type: Sequelize.STRING
  },
  Region: {
    type: Sequelize.STRING
  },
  Phonenumber: {
    type: Sequelize.STRING
  },
  About: {
    type: Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  },
});

Register_NannyForm.sync().then(() => {
  console.log('table Register_NannyForm  created');
});
module.exports = Register_NannyForm;