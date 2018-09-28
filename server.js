// server.js
const express = require('express');
const app = express.Router();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/ng6-proj'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);