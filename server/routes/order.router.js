const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET ROUTE - for cart items
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);
    const queryText = `SELECT COALESCE("order".order_date), product.name, 
                        product.size, cart.quantity from "cart" 
                        JOIN "order" ON cart.order_id = "order".id
                        JOIN "product" ON cart.product_id = product.id
                        WHERE "order".id = $1
                        GROUP BY "order".order_date, product.name, product.size, cart.quantity;`;
    pool.query(queryText, [req.user.id])
        .then((results) => {
          res.send(results.rows);
          console.log('result', results.rows)
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

        const createdId = result.rows[0].id

        const sqlText = `UPDATE "cart" SET order_id = $1 WHERE user_id = $2;`;
  
        // SECOND QUERY MAKES ORDER ID FOR CART TABLE
        pool.query(sqlText, [createdId, req.user.id])
        .then(result => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        }).catch(error => {
          // catch for second query
          console.log('Bad news bears error in server PUT adding order ---->', error)
          res.sendStatus(500)
        })


        }).catch((error) => { 
          console.log('Bad news bears error in server POST adding order ---->', error)
          res.sendStatus(501)
    });
});

module.exports = router;
