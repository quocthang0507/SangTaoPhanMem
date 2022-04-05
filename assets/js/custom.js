let top_btn = document.getElementById("btn-back-to-top");
let section = document.querySelectorAll("section");
let sections = {};
let i = 0;

Array.prototype.forEach.call(section, function (e) {
	sections[e.id] = e.offsetTop;
});

setActiveMenu();
window.addEventListener('hashchange', setActiveMenu);

window.onscroll = function () {
	/* Su kien dung de len dau trang */
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		top_btn.style.display = "block";
	} else {
		top_btn.style.display = "none";
	}
	/* Su kien dung de danh dau menu khi cuon trang */
	let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (className in sections) {
		// Neu o cuoi trang
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			window.location.hash = '#form';
		}
		// Neu o cac menu dau tien
		else if (sections[className] <= scrollPosition + 100) {
			removeActive();
			document.getElementsByClassName(className)[0].className += " active";
		}
	}
};

function setActiveMenu() {
	if (window.location.hash) {
		removeActive();
		let selected = window.location.hash.replace('#', '');
		document.getElementsByClassName(selected)[0].className += " active";
	}
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function removeActive() {
	let current = document.getElementsByClassName("active");
	if (current.length > 0)
		current[0].className = current[0].className.replace(" active", "");
}