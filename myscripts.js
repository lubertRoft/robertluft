function on() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("scrollBox").focus();
}

function off() {
	document.getElementById("overlay").style.display = "none";
}

function sendMail() {
	var link = "mailto:mail@luftr.de?subject=Hey, I just visited your Webpage!";
	window.location.href = link;
}

function openInterests() {
	window.location.href = "interests.html";
}

function openHome() {
	window.location.href = "index.html";
}