const root = document.documentElement;
const btn = document.querySelector('#mode-toggle');
var style = getComputedStyle(document.body);
const lightDark = document.querySelectorAll('.light-dark');
/*
enuBtn = document.querySelector('div.menu-btn');
isOpen = false;
menuBtn.addEventListener('click', () => {
	if (!isOpen) {
		menuBtn.classList.add('open');
		isOpen = true;
	} else {
		menuBtn.classList.remove('open');
		isOpen = false;
	}
});*/

var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML = year;

btn.addEventListener('click', () => {
	if (`${style.getPropertyValue('--bg-color')}` == ' #f3f3f3') {
		root.style.setProperty('--bg-color', ' #333');
		root.style.setProperty('--box-color', ' rgb(68, 67, 67)');
		document.body.style.color = '#fff';
		lightDark.forEach((a) => {
			a.style.color = '#fff';
		});
	} else {
		root.style.setProperty('--bg-color', ' #f3f3f3');
		root.style.setProperty('--box-color', ' rgb(247, 212, 212)');
		document.body.style.color = '#000';
		lightDark.forEach((a) => {
			a.style.color = '#000';
		});
	}
});
