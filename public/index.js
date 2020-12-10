function moreOptions (event) {
	var menu = document.getElementsByClassName("more-options");
	menu.classList.toggle('hidden');
}

function showMoreOptions(event) {
	var open_menu = document.getElementsByClassName("more-options-menu");
	open_menu.classList.toggle('hidden');
}

var class_card = document.getElementsByClassName("card");
class_card.addEventListener('mouseover', moreOptions);

var menu = document.getElementsByClassName("more-options");
menu.addEventListener('click', showMoreOptions);


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
if (quizmodeButton) {
	quizmodeButton.addEventListener('click', showQuizModal);
}
var classButton = document.getElementsByClassName('add-class');
if (classButton) {
	console.log("hello");
	classButton.addEventListener('click', showClassModal);
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