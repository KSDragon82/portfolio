const root = document.documentElement;
const btn = document.querySelector('#mode-toggle');
var style = getComputedStyle(document.body);
const lightDark = document.querySelectorAll('.light-dark');
const nav = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');

menuBtn = document.querySelector('div.menu-btn');
isOpen = false;
menuBtn.addEventListener('click', () => {
	if (!isOpen) {
		menuBtn.classList.add('open');
		nav.style.height = '30vh';
		navItems.style.display = 'flex';
		navItems.style.flexDirection = 'column';
		navItems.style.justifyContent = 'center';
		navItems.style.alignItems = 'center';
		isOpen = true;
	} else {
		menuBtn.classList.remove('open');
		nav.style.height = '6vh';
		navItems.style.display = 'none';
		isOpen = false;
	}
});

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
