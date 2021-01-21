const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const nodemailer = require('nodemailer');
require('dotenv').config();

// GET ROUTE - for cart items
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);
    console.log('order id', req.params.id);
    const queryText = `SELECT "order".order_date, product.name, product.size, 
                        cart.quantity from "cart" 
                        JOIN "order_connection" ON cart.id = order_connection.cart_id
                        JOIN "order" ON order_connection.order_id = "order".id
                        JOIN "product" ON cart.product_id = product.id
                        WHERE "order".id = $1
                        GROUP BY "order".order_date, product.name, product.size, 
                        cart.quantity;`;

    pool.query(queryText, [req.params.id])
        .then((results) => {
          res.send(results.rows);
          console.log('result', results.rows);

          const data = results.rows;
          console.log('data', data);
        
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
              from: `${req.user.email_address}`,
              to: 'kimberly.a.orchard@gmail.com',
              subject: `New Order to Fill`,
              html: `<h5>Hi Steph!</h5>
                    <p>There is another order to fill.</p>
                    <p>Items include: </p>
                    <p>Product: ${data.name}</p>
                    <p>Size: ${data.size}</p>
                    <p>Quantity: ${data.quantity}</p>
                    <p>The order is for user:</p>
                    <p>${req.user.first_name}</p>
                    <p>${req.user.last_name}</p>
                    <p>${req.user.street_address}</p>
                    <p>${req.user.city}</p>
                    <p>${req.user.zip}</p>
                    <p>${req.user.email_address}</p>
                    <p>Thank you!</p>`
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

        }).catch((error) => {
          console.log('Bad news bears error in server GET route ---->', error)
          res.sendStatus(500);
        })
});

// POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);

    const queryText = `INSERT INTO "order" (user_id, product_cost, shipping_cost, total_cost)
                       VALUES ( $1, $2, $3, $4 )
                       RETURNING "id"`;
    pool.query(queryText, [req.user.id, req.body.product_cost, 
                           req.body.shipping_cost, req.body.total_cost])

        .then(result => {
            console.log('Order id...', result.rows[0].id);

        const createdOrderId = result.rows[0].id

        const queryText2 = `SELECT cart.id
                            FROM cart
                            WHERE cart.user_id = $1 AND order_completed = false
                            GROUP BY cart.id;`;
        
        pool.query(queryText2, [req.user.id])
            .then((results) => {
                console.log('Cart ids...', results.rows)

        const createdCartId = results.rows
        
        for (let i of createdCartId) {
            const sqlText = `INSERT INTO "order_connection" (order_id, cart_id)
                                VALUES ( $1, $2 );`;

            pool.query(sqlText, [createdOrderId, i.id])
            .then(result => {
                console.log('in the loop')
            })
        }

        }).catch(error => {
          // catch for second query
          console.log('Bad news bears error in server GET for cart id ---->', error)
          res.sendStatus(500)
        })

            const sqlText2 = `UPDATE "cart" SET order_completed = true WHERE user_id = $1`;

            pool.query(sqlText2, [req.user.id])
                .then((results) => {
            }).catch((error) => { 
                console.log('Bad news bears error in server POST adding order ---->', error)
                res.sendStatus(501)
            });

          res.send(result.rows)  
        }).catch((error) => { 
          console.log('Bad news bears error in server POST adding order ---->', error)
          res.sendStatus(501)
    });
});

module.exports = router;
