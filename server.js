var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var classData = require('./classData.json');
const { type } = require('os');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.status(200).render('homepage', {classData});
});

app.get('/class/:n', function(req, res, next) {
    var n = req.params.n;
    res.status(200).render('class', classData[n]);
});

//add a class to the list
//expected reqBody: class name that does not exist yet
app.post('/addClass', function (req, res, next){
    console.log("req.body:", req.body);
    res.status(501).send("Not yet implemented");
});

//remove a class from the list
//expected reqBody: class name that does exist
app.post('/removeClass', function (req, res, next){
    console.log("req.body:", req.body);
    res.status(501).send("Not yet implemented");
});

//add a flashcard to a class
//request needs URI encoded class name (gotten from class URL)
//expected reqBody: { question: q,  answer: a }
app.post('/:class/addCard', function (req, res, next){
    console.log("req.body:", req.body);
    res.status(501).send("Not yet implemented");
});

//remove a flashcard from a class
//request needs URI encoded class name (gotten from class URL)
//expected reqBody: { question: q,  answer: a }
app.post('/:class/removeCard', function (req, res, next){
    console.log("req.body:", req.body);
    res.status(501).send("Not yet implemented");
});

app.get('*', function (req, res) {
    var content = "<html> <body> <h1>404 not found</h1> </body> </html>";
    res.status(404).send(content);
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
