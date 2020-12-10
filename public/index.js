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

var active_question = 0;
var questions = document.getElementsByClassName('one-question');
var next_button = document.getElementById('next-button');
var prev_button = document.getElementById('prev-button');

document.getElementById('quiz-button').onclick = function() {
	document.getElementById('quiz').style.display = 'flex';
	//document.getElementById('quiz').classList.add(".hidden");
	active_question = 0;
	update_buttons();
	update_questions();
	console.log("quiz button clicked");
}

document.getElementById('close-button').onclick = function() {
	document.getElementById('quiz').style.display = 'none';
}


prev_button.onclick = function() {
	console.log(active_question);
	active_question -= 1;
	update_buttons();
	update_cards();
}

next_button.onclick = function() {
	console.log(active_question);
	active_question += 1;
	update_buttons();
	update_cards();	
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
		addFlashCard("test", "test");
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