const express = require('express');
const router = express.Router();
const { db, DataTypes } = require('../db/connection')
const user = require ('./users.json')

router.get('/', (req, res) => {
    res.send('This is the Users route.');
  });
  
  router.get('/:id', (req, res) => {
    res.send(`This is the User {req.params.id} route.`);
  });
  
  router.get('/:id/shows', (req, res) => {
    res.send(`These are the shows watched by User {req.params.id}.`);
  });
  
  router.put('/:id/shows/:showId', (req, res) => {
    res.send(`User ${req.params.id} has watched and rated Show {req.params.showId}.`);
  });


module.exports = router;