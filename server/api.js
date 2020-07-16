const express = require("express");
const fetch = require('node-fetch');
const router = express.Router();
const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

module.exports = router;

