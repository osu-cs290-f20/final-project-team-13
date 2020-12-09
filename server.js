var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var classData = require('./classData.json');
const { type } = require('os');
const { EDESTADDRREQ } = require('constants');
var port = process.env.PORT || 3000;

//app.engine('handlebars', exphbs({defaultLayout: 'null'}));
//app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

/* app.get('/', function(req, res, next) {
    //doesn't need to be implemented until index.html is removed
}); */

app.get('/class/:n', function(req, res, next) {
    var n = req.params.n;
    next();
});

//add a class to the list
//expected reqBody: class_name that does not exist yet (not URI)
app.post('/addClass', function (req, res, next){
    console.log("req.body:", req.body);
    if(req.body && req.body.class_name){
        if(!classData[encodeURI(req.body.class_name)]){
            classData[encodeURI(req.body.class_name)] ={
                name: req.body.class_name,
                flashcards: []
            };
            console.log("Updated Data: ", classData);
            fs.writeFile(
                __dirname + '/classData.json',
                JSON.stringify(classData, null, 2),
                function(err, data) {
                    if(err) {
                        console.log("add class write error: ", err);
                        res.status(500).send("Error saving new class");
                    } else {
                        res.status(200).send("Class added.");
                    }
                }
            );
        }else{
            next();
        }
    }else{
        res.status(400).send("Request body must contain 'class_name'.");
    }
});

//remove a class from the list
//expected reqBody: class_name that does exist (not URI)
app.post('/removeClass', function (req, res, next){
    console.log("req.body:", req.body);
    if(req.body && req.body.class_name){
        if(classData[encodeURI(req.body.class_name)]){
            delete classData[encodeURI(req.body.class_name)];
            console.log("data: ", classData);
            fs.writeFile(
                __dirname + '/classData.json',
                JSON.stringify(classData, null, 2),
                function(err, data) {
                    if(err) {
                        console.log("add class write error: ", err);
                        res.status(500).send("Error removing class");
                    } else {
                        res.status(200).send("Class removed.");
                    }
                }
            );
        }else{
            next();
        }
    }else{
        res.status(400).send("Request body must contain 'class_name'.");
    }
});

//add a flashcard to a class
//request needs URI encoded class name (gotten from class URL)
//expected reqBody: { question: q,  answer: a }
app.post('/:class/addCard', function (req, res, next){
    console.log("req.body:", req.body);
    if(req.body && req.body.question && req.body.answer){
        //params seems to auto decode so I have to re-encode
        var URI = encodeURI(req.params.class);
        if(classData[URI]){
            console.log("adding flashcard");
            //add flashcard to data and JSON
            classData[URI].flashcards.push({
                question: req.body.question,
                answer: req.body.answer
            });
            console.log("New data for ", decodeURI(URI), ": ", classData[URI]);
            fs.writeFile(
                __dirname + '/classData.json',
                JSON.stringify(classData, null, 2),
                function(err, data) {
                    if(err) {
                        console.log("add class write error: ", err);
                        res.status(500).send("Error saving card");
                    } else {
                        res.status(200).send("flashcard added.");
                    }
                }
            );
        } else {
            next();
        }
    } else{
        res.status(400).send("Request body must contain 'question' and 'answer'.");
    }
});

//remove a flashcard from a class
//request needs URI encoded class name (gotten from class URL)
//expected reqBody: { question: q,  answer: a }
app.post('/:class/removeCard', function (req, res, next){
    console.log("req.body:", req.body);
    if(req.body && req.body.question && req.body.answer){
        var URI = encodeURI(req.params.class);
        if(classData[URI] && classData[URI].flashcards.indexOf({question: req.body.question,
            answer: req.body.answer}) != -1){
            //remove flashcard
            classData[URI].flashcards.splice(classData[URI].flashcards.indexOf({
                question: req.body.question,
                answer: req.body.answer
            }), 1);
            console.log("New data for ", decodeURI(URI), ": ", classData[URI]);
            fs.writeFile(
                __dirname + '/classData.json',
                JSON.stringify(classData, null, 2),
                function(err, data) {
                    if(err) {
                        console.log("add class write error: ", err);
                        res.status(500).send("Error removing card");
                    } else {
                        res.status(200).send("flashcard removed.");
                    }
                }
            );
        } else {
            next();
        }
    } else{
        res.status(400).send("Request body must contain 'question' and 'answer'.");
    }
});

app.get('*', function (req, res) {
    var content = "<html> <body> <h1>404 not found</h1> </body> </html>";
    res.status(404).send(content);
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
