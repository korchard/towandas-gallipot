const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET ROUTE - for cart items
// router.get('/', rejectUnauthenticated, (req, res) => {
//     console.log('user', req.user);
//     const queryText = `SELECT product.id, product.name, product.size, product.image_path, 
//                         product.type, SUM(cart.quantity), 
//                         COALESCE(SUM(cart.quantity * cart.total_cost), cart.total_cost) 
//                         FROM product
//                         LEFT JOIN cart ON cart.product_id = product.id
//                         WHERE cart.user_id = $1
//                         GROUP BY product.id, cart.product_id, cart.quantity, cart.total_cost;`;
//     pool.query(queryText, [req.user.id])
//         .then((results) => {
//           res.send(results.rows);
//           console.log('result', results.rows)
//         }).catch((error) => {
//           console.log('Bad news bears error in server GET route ---->', error)
//           res.sendStatus(500);
//         })
// });

// POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);

    let itemList = null;
    for (let item of req.body.product_items) {
        console.log('item', item);
    }

    // const queryText = `INSERT INTO "order" (user_id, product_items, product_cost, shipping_cost, total_cost)
    //                    VALUES ( $1, $2, $3, $4, $5 )`;
    // pool.query(queryText, [req.user.id, req.body.order.product_items, req.body.order.product_cost, 
    //                        req.body.order.shipping_cost, req.body.order.total_cost])
    //     .then(() => res.sendStatus(201))
    //     .catch((error) => { 
    //       console.log('Bad news bears error in server POST adding order ---->', error)
    //       res.sendStatus(501)
    // });
});

module.exports = router;
