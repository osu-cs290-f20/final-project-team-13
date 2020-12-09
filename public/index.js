var active_card = 0;
var flashcards = document.getElementsByClassName('flash-card');
var next_button = document.getElementById('next-button');
var prev_button = document.getElementById('prev-button');

document.getElementById('flashcard-button').onclick = function() {
	document.getElementById('flashcards').style.display = 'flex';
	active_card = 0;
	update_buttons();
	update_cards();
}

document.getElementById('close-button').onclick = function() {
	document.getElementById('flashcards').style.display = 'none';
}

prev_button.onclick = function() {
	console.log(active_card);
	active_card -= 1;
	update_buttons();
	update_cards();
}

next_button.onclick = function() {
	console.log(active_card);
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
	console.log(active_card);
	if(flashcards[active_card - 1])
		prev_button.style.display = 'block';
	else
		prev_button.style.display = 'none';

	if(flashcards[active_card + 1])
		next_button.style.display = 'block';
	else
		next_button.style.display = 'none';
}