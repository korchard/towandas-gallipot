const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// GET ROUTE
router.get('/', (req, res) => {

});

// POST ROUTE
router.post('/', (req, res) => {

});

// DELETE ROUTE
router.delete('/:id', (req, res) => {

});

// PUT ROUTE
router.put('/:id', (req, res) => {

});

module.exports = router;
