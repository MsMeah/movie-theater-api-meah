const express = require('express');
const app = express();
const port = 3000;
const user = require ('../users.json')
const shows = require('../shows.json')

app.listen(port, () => {
    console.log(`Your server is listening on port http://localhost:${port}/1`);
})
