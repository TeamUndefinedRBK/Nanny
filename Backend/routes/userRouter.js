const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User_table_register = require('../models/user.js');

const authController = require('../controllers/auth.js');

router.post(
  '/Register',
  [
    body('FirstName').trim().not().isEmpty(),
    body('LastName').trim().not().isEmpty(),
    body('Email').isEmail().withMessage('Please enter a valid email.')
      .custom(async (Email) => {
        const user = await User_table_register.findAll({
          where: {
            Email: Email
          }
        });
        console.log("user:", user)
        if (user.length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('Password').trim().isLength({ min: 7 }),
    // //body('Verifypassword')
    // //.trim()
    //   //.isLength({ min: 5 })
    //   .withMessage('Verifypassword is required.')
    //   //probleme//
    //   .matches('Password')
    //   .withMessage('Passwords do not match')
  ],
  authController.signup
);
router.post('/login', authController.login);

module.exports = router;