const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const nodemailer = require('nodemailer');
require('dotenv').config();

// GET ROUTE
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);
    const queryText = `SELECT * FROM "product" ORDER BY type`;
    pool.query(queryText)
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
    const queryText = `INSERT INTO "product" (name, description, size, cost, image_path, type)
                     VALUES ( $1, $2, $3, $4, $5, $6 )`;
    pool.query(queryText, [req.body.name, req.body.description, req.body.size, 
                           req.body.cost, req.body.image_path, req.body.type])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server POST adding product ---->', error)
          res.sendStatus(501)
    });
});

// DELETE ROUTE
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('user', req.user);
    console.log('params', req.params);
    if (req.user.id === 1 || req.user.id === 2) { 
    const queryText = `DELETE FROM "product" WHERE id = $1`;
    pool.query(queryText, [req.params.id])
          .then(() => { res.sendStatus(200); })
          .catch((err) => {
            console.log('Bad news bears error in server DELETE product ---->', error)
            res.sendStatus(500);
          });
      } else { 
        console.log(`User with id of ${req.user.id} is unauthorized to delete`)
      }
});

// PUT ROUTE
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);
    const queryText = `UPDATE "product" SET "name" = $1, "description" = $2, "size" = $3, 
                      "cost" = $4, "image_path" = $5, "type" = $6 WHERE id = $7;`
    pool.query(queryText, [req.body.name, req.body.description, req.body.size, 
                           req.body.cost, req.body.image_path, req.body.type, req.body.id])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server PUT route ---->', error)
          res.sendStatus(501)
        });
});

module.exports = router;
