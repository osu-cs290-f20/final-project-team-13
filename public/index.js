// function moreOptions (event) {
// 	var menu = document.querySelector(".more-options");
// 	menu.classList.toggle('hidden');
// }

// function showMoreOptions(event) {
// 	var open_menu = document.querySelector(".more-options-menu");
// 	open_menu.classList.toggle('hidden');
// }


// var class_card = document.querySelector(".card");
// class_card.addEventListener('mouseover', moreOptions);

// var menu = document.querySelector(".more-options");
// menu.addEventListener('click', showMoreOptions);

// function showQuizModal() {
// 	var showQuizModal = document.getElementById('quizmode-modal');
// 	var modalBackground = document.getElementById('modal-background');
  
// 	showQuizModal.classList.toggle('hidden');
// 	modalBackground.classList.toggle('hidden');
// }
// function showClassModal() {
// 	var showClassModal = document.getElementById('class-modal');
// 	var modalBackground = document.getElementById('modal-background');
  
// 	showClassModal.classList.toggle('hidden');
// 	modalBackground.classList.toggle('hidden');
// }

// function handleModalAcceptClick() {
// 	//
// }

// function hideQuizModal() {
// 	var showQuizModal = document.getElementById('quizmode-modal');
// 	var modalBackground = document.getElementById('modal-background');

// 	showQuizModal.classList.toggle('hidden');
// 	modalBackground.classList.toggle('hidden');
// }
// function hideClassModal() {
// 	var showClassModal = document.getElementById('add-class-modal');
// 	var modalBackground = document.getElementById('modal-background');

// 	showClassModal.classList.toggle('hidden');
// 	modalBackground.classList.toggle('hidden');
// }

// var quizmodeButton = document.querySelector('.quiz-mode');
// if (quizmodeButton) {
// 	quizmodeButton.addEventListener('click', showQuizModal);
// }
// var classButton = document.querySelector('.add-class');
// if (classButton) {
// 	console.log("hello");
// 	classButton.addEventListener('click', showClassModal);
// }

// var modalAcceptButton = document.getElementById('modal-done');
// if (modalAcceptButton) {
//     modalAcceptButton.addEventListener('click', handleModalAcceptClick);
// }

// var modalHideButtons = document.querySelector('.modal-hide-button');
// for (var i = 0; i < modalHideButtons.length; i++) {
// 	modalHideButtons[i].addEventListener('click', hideQuizModal);
// 	modalHideButtons[i].addEventListener('click', hideClassModal);
// }

// var active_question = 0;
// var questions = document.getElementsByClassName('one-question');
// var next_button = document.getElementById('next-button');
// var prev_button = document.getElementById('prev-button');

// document.getElementById('quiz-button').onclick = function() {
// 	document.getElementById('quiz').style.display = 'flex';
// 	//document.getElementById('quiz').classList.add(".hidden");
// 	active_question = 0;
// 	update_buttons();
// 	update_questions();
// 	console.log("quiz button clicked");
// }

// document.getElementById('close-button').onclick = function() {
// 	document.getElementById('quiz').style.display = 'none';
// }


// prev_button.onclick = function() {
// 	console.log(active_question);
// 	active_question -= 1;
// 	update_buttons();
// 	update_cards();
// }

// next_button.onclick = function() {
// 	console.log(active_question);
// 	active_question += 1;
// 	update_buttons();
// 	update_cards();	
// }

// function update_questions(){
// 	for(i = 0; i < questions.length; i++){
// 		if(i != active_question){
// 			questions[i].style.display = 'none';
// 		}
// 		else{
// 			questions[i].style.display = 'block';
// 		}
// 	}
// }

// function update_buttons(){
// 	console.log(active_question);
// 	if(questions[active_question - 1])
// 		prev_button.style.display = 'block';
// 	else
// 		prev_button.style.display = 'none';

// 	if(questions[active_question + 1])
// 		next_button.style.display = 'block';
// 	else
// 		next_button.style.display = 'none';
// }

// var addCardButton = document.getElementById("add-new-card-button");
// if(addCardButton){
// 	addCardButton.addEventListener('click', function(){
// 		addFlashCard("test", "test");
// 	});
// }

// var addClassButton = document.getElementById("add-class");
// if(addClassButton){
// 	addClassButton.addEventListener('click', function(){
// 		addClass("Test");
// 	});
// }

// var flashCards = document.getElementsByClassName("each-card");
// console.log(flashCards);
// for (i = 0; i < flashCards.length; i++){
// 	console.log(flashCards[i].lastElementChild);
// 	flashCards[i].lastElementChild.addEventListener('click', function(){
// 		removeFlashCard(event);
// 	});
// }


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
		console.log(menus[i].parentElement.lastElementChild);
		menus[i].onclick = function(){
			//should grab more options menu
			//this.parentElement.lastElementChild.setAttribute("test", "true");
			if(this.parentElement.lastElementChild.hasAttribute('hidden')){
				this.parentElement.lastElementChild.removeAttribute('hidden');
			}else{
				this.parentElement.lastElementChild.setAttribute('hidden', "");
			}
		}
	}
}

//quiz stuff
var active_question = 0;
var questions = document.getElementsByClassName('one-question');
var next_button = document.getElementById('next-button');
var prev_button = document.getElementById('prev-button');

if(document.getElementById('quiz-button')){
	document.getElementById('quiz-button').onclick = function() {
		document.getElementById('quiz').style.display = 'flex';
		active_question = 0;
		update_buttons();
		update_questions();
		console.log("quiz button clicked");
	}
}
if(document.getElementById('submit')){
	document.getElementById('submit').onclick = function() {
		document.getElementById('answer').style.display = 'flex';
	}
}

document.getElementsByClassName('quiz-mode-button').onclick = function() {
	console.log("quiz mode button clicked");
}
if(document.getElementById('close-button')){
	document.getElementById('close-button').onclick = function() {
		document.getElementById('quiz').style.display = 'none';
		document.getElementById('answer-text-input').value = '';
		document.getElementById('answer').style.display = 'none';
	}
}

if(prev_button){
	prev_button.onclick = function() {
		console.log(active_question);
		active_question -= 1;
		update_buttons();
		update_cards();
	}
}

if(next_button){
	next_button.onclick = function() {
		console.log(active_question);
		active_question += 1;
		update_buttons();
		update_cards();	
	}
}

function update_questions(){
	for(i = 0; i < questions.length; i++){
		if(i != active_question){
			questions[i].style.display = 'none';
		}
		else{
			questions[i].style.display = 'block';
		}
	}
}

function update_buttons(){
	console.log(active_question);
	if(questions[active_question - 1])
		prev_button.style.display = 'block';
	else
		prev_button.style.display = 'none';

	if(questions[active_question + 1])
		next_button.style.display = 'block';
	else
		next_button.style.display = 'none';
}

var addCardButton = document.getElementById("add-new-card-button");
if(addCardButton){
	addCardButton.addEventListener('click', function(){
		var ques = document.getElementById('question-input');
		var ans = document.getElementById('answer-input');
		var question = ques.value;
		var answer = ans.value;
		addFlashCard(answer, question);
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