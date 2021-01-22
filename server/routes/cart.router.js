const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET ROUTE - for cart items for specific user
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);

    const queryText = `SELECT cart.id, product.name, product.description, 
                      product.size, product.image_path, product.type, SUM(cart.quantity), 
                      COALESCE(SUM(cart.quantity * cart.total_cost), cart.total_cost) 
                      FROM cart
                      LEFT JOIN product ON cart.product_id = product.id
                      WHERE cart.user_id = $1 AND order_completed = false
                      GROUP BY cart.id, product.name, product.description, product.size, 
                      product.image_path, product.type;`;
    pool.query(queryText, [req.user.id])
        .then((results) => {
          res.send(results.rows);
          console.log('result', results.rows)
        }).catch((error) => {
          console.log('Bad news bears error in server GET route ---->', error)
          res.sendStatus(500);
        })
}); // end GET ROUTE

// GET ROUTE - for cart item total to display in navbar
router.get('/items', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);

    const queryText = `SELECT SUM(cart.quantity) FROM product
                        LEFT JOIN cart ON cart.product_id = product.id
                        WHERE cart.user_id = $1 AND cart.order_completed = false;`
    pool.query(queryText, [req.user.id])
        .then((results) => {
          res.send(results.rows);
          console.log('result', results.rows)
        }).catch((error) => {
          console.log('Bad news bears error in server GET route ---->', error)
          res.sendStatus(500);
        })
}); // end GET ROUTE

// GET ROUTE - to calculate total cost of items in cart
router.get('/total', rejectUnauthenticated, (req, res) => {
  console.log('user', req.user);

  const queryText = `SELECT SUM(cart.quantity * product.cost) FROM product
                      LEFT JOIN cart ON cart.product_id = product.id
                      WHERE cart.user_id = $1 AND cart.order_completed = false;`
  pool.query(queryText, [req.user.id])
      .then((results) => {
        res.send(results.rows);
        console.log('result', results.rows)
      }).catch((error) => {
        console.log('Bad news bears error in server GET route ---->', error)
        res.sendStatus(500);
      })
}); // end GET ROUTE

// GET/PUT/POST ROUTE 
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);

    // GET ROUTE to retrieve items from cart with status of order_completed = false
    const sqlText = `SELECT cart.product_id from "cart" WHERE cart.product_id = $1
                    AND cart.user_id = $2 AND order_completed = false`;
    pool.query(sqlText, [req.body.product_id, req.user.id])
        .then((results) => {
          console.log('already there', results.rows);

          if (results.rows.length > 0) {
            // PUT ROUTE to increase the quantity of the item in the cart if it
            // already exists in the  user's cart
            const sqlText2 = `UPDATE "cart" SET quantity = (quantity + 1) 
                              WHERE product_id = $1;`
            pool.query(sqlText2, [req.body.product_id])
            .then(() => res.sendStatus(201))
            .catch((error) => { 
              console.log('Bad news bears error in server POST adding product ---->', error)
              res.sendStatus(501)
            }); // end PUT ROUTE
          } else if (results.rows.length === 0) {
            // otherwise, if item does not already exist in the cart, add it
            const queryText = `INSERT INTO "cart" (product_id, quantity, total_cost, user_id)
                              VALUES ( $1, $2, $3, $4 )`;
            pool.query(queryText, [req.body.product_id, req.body.quantity, req.body.total_cost, 
                            req.user.id])
            .then(() => res.sendStatus(201))
            .catch((error) => { 
              console.log('Bad news bears error in server POST adding product ---->', error)
              res.sendStatus(501)
            }); // end POST ROUTE
          }
          
        }).catch((error) => { 
          console.log('Bad news bears error in server POST adding product ---->', error)
          res.sendStatus(501)
    });
}); // end GET/PUT/POST ROUTE 

// DELETE ROUTE - to delete single item from the cart
router.delete('/adjust/:id', rejectUnauthenticated, (req, res) => {
  console.log('user', req.user);
  console.log('req.params', req.params);

  const queryText = `DELETE FROM "cart" WHERE id = $1`;
  pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
          console.log('Bad news bears error in server DELETE cart ---->', error)
          res.sendStatus(500);
        });
}); // end DELETE ROUTE

// PUT ROUTE - to increase the quantity to an item already in the cart
router.put('/add/:id', rejectUnauthenticated, (req, res) => {
    console.log('params', req.params);
    console.log('user', req.user);

    const queryText = `UPDATE "cart" SET quantity = (quantity + 1) WHERE id = $1;`
    pool.query(queryText, [req.params.id])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server PUT route ---->', error)
          res.sendStatus(501)
        });
}); // end PUT ROUTE

// PUT ROUTE - to decrease the quantity of an intem already in the cart
router.put('/subtract/:id', rejectUnauthenticated, (req, res) => {
  console.log('params', req.params);
  console.log('user', req.user);

  const queryText = `UPDATE "cart" SET quantity = GREATEST(quantity - 1, 0) WHERE id = $1;`
  pool.query(queryText, [req.params.id])
      .then(() => res.sendStatus(201))
      .catch((error) => { 
        console.log('Bad news bears error in server PUT route ---->', error)
        res.sendStatus(501)
      });
}); // end PUT ROUTE

module.exports = router;
