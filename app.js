const backgroundImage = document.querySelectorAll('.background-image');
const listItems = document.querySelectorAll('.item');

listItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		hideAllBackgroundImages();
		hideAllListItems();

		item.classList.add('active');
		backgroundImage[index].classList.add('show');
	});
});

function hideAllBackgroundImages() {
	backgroundImage.forEach((image) => {
		image.classList.remove('show');
	});
}

function hideAllListItems() {
	listItems.forEach((item) => {
		item.classList.remove('active');
	});
}
