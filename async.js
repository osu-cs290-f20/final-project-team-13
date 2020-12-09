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
function addFlashCard(event, answer, question) {
    var postRequest = new XMLHttpRequest();
    var URL = '/' + getClassIdFromURL() + "/addCard";
    postRequest.open('POST', URL);
    var reqBody = JSON.stringify({
        question: req.body.question,
        answer: req.body.answer
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

function removeFlashCard(event){


}


function addClass(event){


}


function removeClass(event){


}