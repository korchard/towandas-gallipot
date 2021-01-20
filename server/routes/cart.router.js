const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET ROUTE - for cart items
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

});

// GET ROUTE - for item total to display in navbar
router.get('/items', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);

    const queryText = `SELECT COUNT(cart.quantity) FROM product
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
});

// GET ROUTE - to calculate total cost of items
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
});

// POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);

    const queryText = `INSERT INTO "cart" (product_id, quantity, total_cost, user_id)
                       VALUES ( $1, $2, $3, $4 )`;
    pool.query(queryText, [req.body.product_id, req.body.quantity, req.body.total_cost, 
                           req.user.id])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server POST adding product ---->', error)
          res.sendStatus(501)
    });
});

// POST ROUTE
// router.post('/', rejectUnauthenticated, (req, res) => {
//   console.log('body', req.body);
//   console.log('user', req.user);

//   const queryText = `INSERT INTO "cart" (product_id, quantity, total_cost, user_id)
//                      VALUES ( $1, $2, $3, $4 )`;
//   pool.query(queryText, [req.body.product_id, req.body.quantity, req.body.total_cost, 
//                          req.user.id])
//       .then(() => res.sendStatus(201))
//       .catch((error) => { 
//         console.log('Bad news bears error in server POST adding product ---->', error)
//         res.sendStatus(501)
//   });
// });

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

});

// DELETE ROUTE -- for cart reset
// router.delete('/', rejectUnauthenticated, (req, res) => {
//     console.log('user', req.user);

//     const queryText = `DELETE FROM "cart" WHERE user_id = $1`;
//     pool.query(queryText, [req.user.id])
//           .then(() => { res.sendStatus(200); })
//           .catch((err) => {
//             console.log('Bad news bears error in server DELETE cart ---->', error)
//             res.sendStatus(500);
//           });

// });

// PUT ROUTE
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
});

// PUT ROUTE
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
});

module.exports = router;
