/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config.js');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


// Ask for name page
app.get('/ask', function(req, res) {
    res.render('ask.hbs');
});

// Submit name
app.post('/submit_name', function(req, res) {
    var password = req.body.password;
    var confirm = req.body.confirm;
    if (password === confirm) {
        res.send(true);
    } else {
        res.send(false);
    }
});

// Start server
app.listen(3000, function() {
    console.log('Listening on port 3000!');
});
