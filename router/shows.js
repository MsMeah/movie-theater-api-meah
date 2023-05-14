const express = require('express');
const router = express.Router();
const { db, DataTypes } = require('../db/connection')
const shows = require('./shows.json')

router.get('/', (req, res) => {
  res.send('This is the Shows route.');
});

module.exports = router;
