if (window.location.hash) {
	var current = document.getElementsByClassName("active");
	if (current.length > 0)
		current[0].className = current[0].className.replace(" active", "");
	var selected = window.location.hash.replace('#', '');
	document.getElementsByClassName(selected)[0].className += " active";
}

let top_btn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		top_btn.style.display = "block";
	} else {
		top_btn.style.display = "none";
	}
}
top_btn.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}