//Assumes url is going to be /class/:class_name
function getClassIdFromURL(){
    var path = window.location.pathname;
    var pathParts = path.split('/');
    console.log(pathParts[2]);
    return pathParts[2];
}


//Takes event of click and answer/question pair
//While the function could get the values for answer and question itself,
//since the function cannot access other functions to do things like close
//a modal, it makes more sense to validate answer and question input
//before calling function.
function addFlashCard(answer, question) {
    var postRequest = new XMLHttpRequest();
    var URL = '/' + getClassIdFromURL() + "/addCard";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        question: question,
        answer: answer
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            var template = Handlebars.templates.definitions;
            var cardHTML = template({
                question: question,
                answer: answer
            });
            var container = document.querySelector('.flashcard-definitions');
            container.insertAdjacentElement('beforeend', cardHTML);
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
    var flashcard = flashcardButton.parentElement;
    var question =  flashcard.children[0].innerHTML;
    var answer = flashcard.children[1].innerHTML;

    var postRequest = new XMLHttpRequest();
    var URL = '/' + getClassIdFromURL() + "/removeCard";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        question: question,
        answer: answer
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
    var URL = "/addCard";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        class_name: name
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event){
        if (event.target.status === 200) {
            var template = Handlebars.templates.classCard;
            var classHTML = template({
                ClassURI: encodeURI(name),
                name: name
            });
            var container = document.querySelector('.classes');
            container.insertAdjacentElement('beforeend', classHTML);
        }else{
            alert("Error adding flashcard to server: " + event.target.response);
        }
    });
    postRequest.send(reqBody);

}


function removeClass(event){
    var classButton = event.target;
    var classCard = classButton.parentElement.parentElement;
    var className =  classCard.children[0].innerHTML;

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