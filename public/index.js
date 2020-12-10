function moreOptions (event) {
	var menu = document.getElementsByClassName("more-options");
	menu.classList.toggle('hidden');
}

function showMoreOptions(event) {
	var open_menu = document.getElementsByClassName("more-options-menu");
	open_menu.classList.toggle('hidden');
}

var class_card = document.getElementsByClassName("card");
for (i = 0; i < class_card.length; i++){
	class_card[i].addEventListener('mouseover', moreOptions);
}

var menu = document.getElementsByClassName("more-options");
for (i = 0; i < menu.length; i++){
	menu[i].addEventListener('click', showMoreOptions);
}


function showQuizModal() {
	var showQuizModal = document.getElementById('quizmode-modal');
	var modalBackground = document.getElementById('modal-background');
  
	showQuizModal.classList.toggle('hidden');
	modalBackground.classList.toggle('hidden');
}
function showClassModal() {
	var showClassModal = document.getElementById('class-modal');
	var modalBackground = document.getElementById('modal-background');
  
	showClassModal.classList.toggle('hidden');
	modalBackground.classList.toggle('hidden');
}

function handleModalAcceptClick() {
	//
}

function hideQuizModal() {
	var showQuizModal = document.getElementById('quizmode-modal');
	var modalBackground = document.getElementById('modal-background');

	showQuizModal.classList.toggle('hidden');
	modalBackground.classList.toggle('hidden');
}
function hideClassModal() {
	var showClassModal = document.getElementById('add-class-modal');
	var modalBackground = document.getElementById('modal-background');

	showClassModal.classList.toggle('hidden');
	modalBackground.classList.toggle('hidden');
}

var quizmodeButton = document.getElementsByClassName('quiz-mode');
for(i = 0; i < quizmodeButton.length; i++){
	quizmodeButton[i].addEventListener('click', showQuizModal);
}
var classButton = document.getElementsByClassName('add-class');
for(i = 0; i < classButton; i++){
	classButton[i].addEventListener('click', showClassModal);
}

var modalAcceptButton = document.getElementById('modal-done');
if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
}

var modalHideButtons = document.getElementsByClassName('modal-hide-button');
for (var i = 0; i < modalHideButtons.length; i++) {
	modalHideButtons[i].addEventListener('click', hideQuizModal);
	modalHideButtons[i].addEventListener('click', hideClassModal);
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