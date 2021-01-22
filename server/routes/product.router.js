const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

// GET ROUTE - to get ALL the products available
router.get('/', (req, res) => {

    const queryText = `SELECT * FROM "product" WHERE archived = false ORDER BY type`;
    pool.query(queryText)
        .then((results) => {
          res.send(results.rows);
          console.log('result', results.rows)
        }).catch((error) => {
          console.log('Bad news bears error in server GET route ---->', error)
          res.sendStatus(500);
        })
}); // end GET ROUTE

// GET ROUTE - for SEARCH item
router.get('/search/:search', (req, res) => {
  let search = req.params.search; // identifys search item

  const queryText = `SELECT * FROM "product" WHERE "name" || "description" || "size" || 
                    "cost" || "type" ILIKE '%' || $1 || '%' LIMIT 12;`;
  
  pool.query(queryText, [search])
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Bad news bears, error in GET', error);
      res.sendStatus(500);
    });
}); // end GET ROUTE

module.exports = router;