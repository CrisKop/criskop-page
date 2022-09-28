var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// use res.render to load up an ejs view file

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.listen(1000);
console.log('Server is listening on port 1000');