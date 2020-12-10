//Assumes url is going to be /class/:class_name
function getClassIdFromURL(){
    var path = window.location.pathname;
    var pathParts = path.split('/');
    console.log(pathParts[2]);
    return pathParts[2];
}

function addFlashCardDelete(){
    var flashcards = document.getElementsByClassName("each-card");
    console.log(typeof(flashcards));
    var Lcontainer = flashcards.item(flashcards.length - 1);
    console.log(typeof(Lcontainer));
    Lcontainer.addEventListener('click', function(){
        removeFlashCard(event);
    });
}

//Takes event of click and answer/question pair
//While the function could get the values for answer and question itself,
//since the function cannot access other functions to do things like close
//a modal, it makes more sense to validate answer and question input
//before calling function.
function addFlashCard(a, q) {
    var postRequest = new XMLHttpRequest();
    var URL = '/' + getClassIdFromURL() + "/addCard";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        question: q,
        answer: a
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            //var template = Handlebars.templates.definitions;
            var Content = {
                question: q,
                answer: a
            };
            var cardHTML = Handlebars.templates.definitions(Content);
            var container = document.getElementsByClassName("flashcard-definitions");
            container[0].insertAdjacentHTML('beforeend', cardHTML);
            addFlashCardDelete();
        }else{
            alert("Error adding flashcard to server: " + event.target.response);
        }
    });
    postRequest.send(reqBody);

}

//takes event of click to determine which flashcard is being removed.
//use for event listener on delete flashcard button on each flashcard
function removeFlashCard(event){
    var flashcardButton = event.target;
    console.log(flashcardButton);
    var flashcard = flashcardButton.parentElement.parentElement;
    console.log("Flashcard" + flashcard);
    console.log(flashcard);
    console.log(flashcard.children[0].textContent);
    console.log(flashcard.children[0].innerHTML);
    console.log(flashcard.children[0].innerText);
    var q =  flashcard.children[0].textContent.replace(/\t/g, '');
    q.replace(/\n/g, '');
    var a = flashcard.children[1].textContent.replace(/\t/g, '');
    a.replace(/\n/g, '');

    var postRequest = new XMLHttpRequest();
    var URL = '/' + getClassIdFromURL() + "/removeCard";
    console.log(URL);
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        question: q,
        answer: a
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            flashcard.remove();
        }else{
            alert("Error adding flashcard to server: " + event.target.response);
        }
    });
    postRequest.send(reqBody);
}

//Takes name of new class.
function addClass(name){
    var postRequest = new XMLHttpRequest();
    var URL = "/addClass";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        class_name: name
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            var context = {
                classURI: encodeURI(name),
                name: name
            };
            var classHTML = Handlebars.templates.classCardlocal(context);
            var container = document.getElementById('classes');
            container.insertAdjacentHTML('beforeend', classHTML);
        }else{
            alert("Error adding flashcard to server: " + event.target.response);
        }
    });
    postRequest.send(reqBody);

}


function removeClass(event){
    var classButton = event.target;
    var classCard = classButton.parentElement.parentElement;
    var className =  classCard.children[0].textContent;

    var postRequest = new XMLHttpRequest();
    var URL = "/removeClass";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        class_name: className
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            classCard.remove();
        }else{
            alert("Error adding flashcard to server: " + event.target.response);
        }
    });
    postRequest.send(reqBody);
}