const btn = document.querySelector('.btn');
const modal = document.querySelector('#modal');
const screen = document.querySelector('.screen');

btn.addEventListener('click', function(e){
	e.stopPropagation();
	modal.classList.add('active');
	screen.style.display = 'block';
})

screen.addEventListener('click', function(){
	modal.classList.remove('active');
	screen.style.display = 'none';
})

document.addEventListener('keydown', function(e){
	if (e.key == 'Escape') {
		modal.classList.remove('active');
		screen.style.display = 'none';
	}	
})

