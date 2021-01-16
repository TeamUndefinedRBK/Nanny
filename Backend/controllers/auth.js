const { validationResult } = require('express-validator');
//const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User_table_register = require('../models/user');
  require("dotenv").config();
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  console.log('erro:', errors)
  console.log('post on /register', req.body)
  if (!errors.isEmpty()) return;
  try {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName
    const Email = req.body.Email;
    const Password = req.body.Password;


    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt)


    //Insert into table
    var result = await User_table_register.create({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword
    })
    res.status(201).json({ message: 'User registered!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.login = async (req, res) => {
  try {
  const Email = req.body.Email;
  const Password = req.body.Password;
  if (!Email || !Password)
  return res.status(400).json({ msg: "Not all fields have been entered." });
  
    const user = await User_table_register.findAll({
      where: {
        Email: Email
      }
    });
    if (user.length !== 1) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0]
  console.log('stored password:',storedUser.Password)
    const isEqual = await bcrypt.compare(Password, storedUser.Password);
        console.log('equality:',isEqual)
    if (!isEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign({ userId: storedUser.id }, `${process.env.JWT_SECRET_KEY}`);
    
    res.status(200).json({ token: token, userId: storedUser.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};
