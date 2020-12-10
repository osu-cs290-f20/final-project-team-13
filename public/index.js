//add & remove class
if(document.getElementById('add-class')){
	document.getElementById('add-class').onclick = function() {
		console.log("add-class button clicked");
		document.getElementById('add-class-modal').style.display = 'flex';
	}

	document.getElementById('modal-close-button').onclick = function() {
		document.getElementById('add-class-modal').style.display = 'none';
	}

	document.getElementById('add-new-class-button').onclick = function(){
		var name_input = document.getElementById('new-class-name-input');
		var name = name_input.value;
		if(name){
			var cards = document.querySelectorAll("#class-card");
			var NewName = true;
			for(var i = 0; i < cards.length; i++){
				if(cards[i].getAttribute('data-name') == name){
					NewName = false;
				}
			}
			if(NewName){
				addClass(name);
				document.getElementById('add-class-modal').style.display = 'none';
				name_input.value = "";
			}
		}
	}
	//var more_menus = document.querySelectorAll(".more-options-menu");
	var menus = document.querySelectorAll(".more-options");
	//menus.forEach
	for(var i = 0; i < menus.length; i++){
		//console.log(menus[i].parentElement.lastElementChild);
		menus[i].onclick = function(){
			//should grab more options menu
			if(this.parentElement.lastElementChild.hasAttribute('hidden')){
				this.parentElement.lastElementChild.removeAttribute('hidden');
			}else{
				this.parentElement.lastElementChild.setAttribute('hidden', "");
			}
		}
	}

	var deleteClassButtons = document.querySelectorAll(".delete-class");
	for(var i = 0; i < deleteClassButtons.length; i++){
		deleteClassButtons[i].onclick = function(){
			removeClass(event);
		}
	}
}

var add_def_modal = document.getElementById('add-definition-modal');
document.getElementById('close-add-def-button').onclick = function() {
	add_def_modal.style.display = 'none';
}

//quiz stuff
var active_question = 0;
var questions = document.getElementsByClassName('one-question');
var backButton = document.getElementById('back-button');
var nextButton = document.getElementById('next-button-quiz');

document.getElementById('quiz-mode').onclick = function() {
	document.getElementById('quiz').style.display = 'flex';
	active_question = 0;
	update_buttons_quiz();
	update_questions();
	console.log("quiz button clicked");
}
// if(document.getElementById('submit')){
// 	console.log("something");
// 	document.getElementById('submit').onclick = function() {
// 		document.getElementById('answer').style.display = 'flex';
// 		console.log("something");
// 	}
// }

document.getElementsByClassName('quiz-mode-button').onclick = function() {
	console.log("quiz mode button clicked");
}

document.getElementById('quiz-close-button').onclick = function() {
	document.getElementById('quiz').style.display = 'none';
	document.getElementById('answer-text-input').value = '';
	document.getElementById('answer').style.display = 'none';
}


backButton.onclick = function() {
	console.log(active_question);
	active_question -= 1;
	update_buttons_quiz();
	update_questions();
}

nextButton.onclick = function() {
	console.log(active_question);
	active_question += 1;
	update_buttons_quiz();
	update_questions();	
}

function update_questions(){
	for(i = 0; i < questions.length; i++){
		if(i != active_question){
			questions[i].style.display = 'none';
		}
		else{
			questions[i].style.display = 'block';
			if(document.getElementById('submit')){
				document.getElementById('submit').onclick = function() {
					document.getElementById('answer').style.display = 'flex';
					console.log("something");
				}
			}
		}
	}
}

function update_buttons_quiz(){
	console.log(active_question);
	if(questions[active_question - 1])
		backButton.style.display = 'block';
	else
		backButton.style.display = 'none';

	if(questions[active_question + 1])
		nextButton.style.display = 'block';
	else
		nextButton.style.display = 'none';
}

var addCardOption = document.querySelector(".add-card");
if(addCardOption){
	addCardOption.onclick = function(){
		if(document.getElementById('add-definition-modal').hasAttribute('hidden')){
			document.getElementById('add-definition-modal').removeAttribute('hidden');
		}else{
			document.getElementById('add-definition-modal').setAttribute('hidden', "");
		}
	}
}

var addCardButton = document.getElementById("add-new-card-button");
if(addCardButton){
	addCardButton.addEventListener('click', function(){
		var ques = document.getElementById('question-input');
		var ans = document.getElementById('answer-input');
		var question = ques.value;
		var answer = ans.value;
		if(question && answer){
			addFlashCard(answer, question);
		} else {
			alert('please add front and back');
		}
	});
}

var addClassButton = document.getElementById("add-class");
if(addClassButton){
	addClassButton.addEventListener('click', function(){
		addClass("Test");
	});
}

var flashCards = document.getElementsByClassName("each-card");
console.log(flashCards);
for (i = 0; i < flashCards.length; i++){
	console.log(flashCards[i].lastElementChild);
	flashCards[i].lastElementChild.addEventListener('click', function(){
		removeFlashCard(event);
	});
}

//below this is levi's flashcard shit!
var active_card = 0;
var flashcard_modal = document.getElementById('flashcard-modal');
var flashcards = document.getElementsByClassName('flash-card');
var next_button = document.getElementById('next-button');
var prev_button = document.getElementById('prev-button');
if(document.getElementById('flashcard-mode')){
	document.getElementById('flashcard-mode').onclick = function() {
		flashcard_modal.style.display = 'flex';
		active_card = 0;
		update_buttons();
		update_cards();
	}

	document.getElementById('close-button').onclick = function() {
		flashcard_modal.style.display = 'none';
		modal_background.style.display = 'none';
	}

	prev_button.onclick = function() {
		active_card -= 1;
		update_buttons();
		update_cards();
	}

	next_button.onclick = function() {
		active_card += 1;
		update_buttons();
		update_cards();	
	}

	function update_cards(){
		for(i = 0; i < flashcards.length; i++){
			if(i != active_card){
				flashcards[i].style.display = 'none';
			}
			else{
				flashcards[i].style.display = 'block';
			}
		}
	}

	function update_buttons(){
		if(flashcards[active_card - 1])
			prev_button.style.display = 'block';
		else
			prev_button.style.display = 'none';

		if(flashcards[active_card + 1])
			next_button.style.display = 'block';
		else
			next_button.style.display = 'none';
	}
}
//levi's flashcard shit stops here