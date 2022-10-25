var socket = io();

//Change socket to the below when not running locally
//var socket = io.connect('http://example.com');
window.addEventListener("load", function () {
	var buttonState = document.getElementById("button");
	socket.emit("init");
	button.addEventListener("click", function () {
		socket.emit("check", Number(this.value));
	});


	var checkbox = document.getElementsByClassName("checkbox")[0];
	checkbox.addEventListener("click", function () {
	console.log("IN");
	if(checkbox.checked) {
		document.getElementsByTagName("html")[0].classList.add("dark");
	}
	else {
		document.getElementsByTagName("html")[0].classList.remove("dark");
	}
});


});
socket.on('change', function (state, sound) {
	if (state) {
		document.getElementById("button").src = "images/green_button.png";
		document.getElementById("button").value = 1;
	} else {
		document.getElementById("button").src = "images/red_button.png";
		document.getElementById("button").value = 0;
		playSound(sound);
	}
});

socket.on('init', function () {
	document.getElementById("button").src = "images/red_button.png";
	document.getElementById("button").value = 0;
});

function playSound(source) {
	new Audio("audio/" + source).play();
}


