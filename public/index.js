function moreOptions (event) {
	var menu = document.getElementsByClass("more-options");
	menu.classList.toggle('hidden');
}

function showMoreOptions(event) {
	var open_menu = document.getElementsByClass("more-options-menu");
	open_menu.classList.toggle('hidden');
}

var class_card = document.getElementsByClass("card");
class_card.addEventListener('mouseover', moreOptions);

var menu = document.getElementsByClass("more-options");
menu.addEventListener('click', showMoreOptions);