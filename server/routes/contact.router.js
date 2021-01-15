const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// NODEMAILER && POST ROUTE
router.post('/', (req, res) => {
    console.log('email', req.body);
    const data = req.body;
    const password = process.env.password;
  
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'kimberly.a.orchard@gmail.com',
            pass: password
        },
        tls: {
            rejectUnauthorized: false 
        }
    });

    smtpTransport.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages!");
        }
      });
  
    const mailOptions = {
        from: `${data.email_address}`,
        to: 'kimberly.a.orchard@gmail.com',
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, ${data.name}</p>`
    };

    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.log('error sending', error);
            } else {
                console.log('Success!');
            }
            smtpTransport.close();
    });

});

module.exports = router;