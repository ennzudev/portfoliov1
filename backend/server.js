const express = require("express");
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile('home.html', { root: './frontend/public' });
    console.log("Home page succesfully loaded");
  });

//app.listen(3000, () => {
//    console.log("Listening on port 3000...");
//});

app.use(express.static('./frontend'));