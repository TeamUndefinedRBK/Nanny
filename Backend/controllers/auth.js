const { validationResult } = require('express-validator');
//const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const User_table_register = require('../models/user');

exports.signup = async (req, res ) => {
  const errors = validationResult(req);
  console.log('erro:',errors)
console.log( 'post on /register',req.body)
  if (!errors.isEmpty()) return;
  try {
  const FirstName = req.body.FirstName;
  const LastName=req.body.LastName
  const Email = req.body.Email;
  const Password = req.body.Password;


  
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt)

   console.log("hached:",hashedPassword)
 
   //Insert into table
   var result= await User_table_register.create({
    FirstName,
    LastName,
    Email,
    hashedPassword 
  })
  console.log('result:',result)
  res.status(201).json({ message: 'User registered!',result });
}catch (err) {
    res.status(500).json({ error: err.message });
  }
};

