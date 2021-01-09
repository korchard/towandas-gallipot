const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const nodemailer = require('nodemailer');
require('dotenv').config();

// GET ROUTE
router.get('/', (req, res) => {
    console.log('req.user', req.user);
    const queryText = `SELECT * FROM "product" ORDER BY type ASC`;
    pool.query(queryText)
        .then((results) => {
          res.send(results.rows);
        }).catch((error) => {
          console.log('Bad news bears error in server GET route ---->', error)
          res.sendStatus(500);
        })
});

// POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('body', req.body);
    console.log('user', req.user);
    let queryText = `INSERT INTO "product" (name, description, size, cost, image_path, type)
                     VALUES ( $1, $2, $3, $4, $5, $6 )`;
    pool.query(queryText, [req.body.name, req.body.description, req.body.size, 
                           req.body.cost, req.body.image_path])
        .then(() => res.sendStatus(201))
        .catch((error) => { 
          console.log('Bad news bears error in server POST adding product ---->', error)
          res.sendStatus(501)
    });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {

});

// PUT ROUTE
router.put('/:id', (req, res) => {

});

module.exports = router;
