var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
//var postData = require('./postData.json');
const { type } = require('os');
var port = process.env.PORT || 3000;

//app.engine('handlebars', exphbs({defaultLayout: 'null'}));
//app.set('view engine', 'handlebars');

app.use(express.static('public'));

//app.get('/', function(req, res, next) {
    //var content = "<html> <body> <h1>Hello World!</h1> </body> </html>";
    //res.status(200).send(content);
//});

app.get('/class/:n', function(req, res, next) {
    var n = req.params.n;
    next();
});

app.get('*', function (req, res) {
    var content = "<html> <body> <h1>Out of my swamp!</h1> </body> </html>";
    res.status(404).send(content);
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
