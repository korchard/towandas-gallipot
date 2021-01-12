const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});
module.exports = router;