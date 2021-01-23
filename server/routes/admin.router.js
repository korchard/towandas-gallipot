const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
require('dotenv').config();

// POST ROUTE - to add a new item to the product list
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);
    if (req.user.id === 1 || req.user.id === 2) { 
    const queryText = `INSERT INTO "product" (name, description, size, cost, image_path, type)
                     VALUES ( $1, $2, $3, $4, $5, $6 )`;
    pool.query(queryText, [req.body.name, req.body.description, req.body.size, 
                           req.body.cost, req.body.image_path, req.body.type])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server POST adding product ---->', error)
          res.sendStatus(501)
        });
    } else { 
      console.log(`User with id of ${req.user.id} is unauthorized to add products`);
    } // end conditional - for extra security
}); // end POST ROUTE

// DELETE ROUTE - to remove an item from the product list
// IS ACTUALLY A PUT ROUTE - this way customers may view product items from 
// previous orders
router.put('/delete/:id', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);
    console.log('params', req.params);
    if (req.user.id === 1 || req.user.id === 2) { 
    const queryText = `UPDATE "product" SET "archived" = true WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
          .then(() => { res.sendStatus(200); })
          .catch((error) => {
            console.log('Bad news bears error in server DELETE product ---->', error)
            res.sendStatus(500);
          });
      } else { 
        console.log(`User with id of ${req.user.id} is unauthorized to delete`);
      } // end conditional for extra security
}); // end DELETE ROUTE

// PUT ROUTE - to edit any of the products
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);
    if (req.user.id === 1 || req.user.id === 2) { 
    const queryText = `UPDATE "product" SET "name" = $1, "description" = $2, "size" = $3, 
                      "cost" = $4, "image_path" = $5, "type" = $6 WHERE id = $7;`
    pool.query(queryText, [req.body.name, req.body.description, req.body.size, 
                           req.body.cost, req.body.image_path, req.body.type, req.body.id])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server PUT route ---->', error)
          res.sendStatus(501)
        });
      } else { 
        console.log(`User with id of ${req.user.id} is unauthorized to edit`);
      } // end conditional for extra security
}); // end PUT ROUTE

module.exports = router;
