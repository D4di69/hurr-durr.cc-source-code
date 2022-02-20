if (self.parent.frames.length) self.parent.location = document.location;

var hurr = "HURR\n\
			 HURRrrRRrrr-DuUUUUUUUuUuUURRRRR\n\
			 DURR???!1!\n\
			 DURR!\n\
			 DURR!\n\
			 DURR!\n\
			 HURR-DURR\n\
			 DURR???!1!\n\
			 HURR-DURR\n\
			 HURR-DURR\n\
			 GET HURR + GET DURR\n\
			 DURR!\n\
			 DURR???!1!\n\
			 DURR\n\
			 DURR!\n\
			 DURR???!1!\n\
			 HURRrrRRrrr-DuUUUUUUUuUuUURRRRR\n\
			 DURR\n\
			 DURR???!1!\n\
			 HURRrrRRrrr-DuUUUUUUUuUuUURRRRR\n\
			 DURR???!1!\n\
			 HURR-DURR\n\
			 DURR???!1!\n\
			 GET HURR + GET DURR\n\
			 DURR\n\
			 HURR!!!111Ione";

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {			
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}

function setTitle() {	
	document.title = hurr.split('\n')[randomRange(0, 25)];
}

window.onload = function () {	
	setInterval(setTitle, 1500);
	setInterval(setWindow, 750);
	
	return true;
}

window.onkeydown = function () {
	var keyCode = event.keyCode;
	
	if (keyCode == 18 || keyCode == 27 || keyCode == 115)
		for (x in hurr.split('\n')) confirm(hurr.split('\n')[x]);
	
    return null;
}

window.oncontextmenu = function () {
	
	return false;
}

window.onbeforeunload = function () {
	
	return "HURRRRRRRRRRRRRRRRRRRRR!";
}