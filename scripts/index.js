var intervalID = window.setInterval(isPopupOpen, 200);
var aWindow = 0;

function openPopup() {
	aWindow = window.open("HURRRRRRRRRRRRRRRRR.html", "HURRrrRRrrr-DuUUUUUUUuUuUURRRRR", 'resizable=no, width=640, height=580');
	
	while (aWindow == null) {	
		if (confirm("HURRrrRRrrr-DuUUUUUUUuUuUURRRRR!!!\nYou must enable pop-ups for the site to work correctly."))
			aWindow = window.open("HURRRRRRRRRRRRRRRRR.html", "HURRrrRRrrr-DuUUUUUUUuUuUURRRRR", 'resizable=no, width=640, height=580');  
	}
	
	return true;
}

function isPopupOpen() {	
    if (!aWindow || aWindow && aWindow.closed) {	
		document.getElementById('hurr-picon').src = "images/popup-blocked.png";
		
		return false;
	}
	
	return true;
}

document.addEventListener('click', clckBegin);

function clckBegin() {		
	var picon = document.getElementById('hurr-picon');

	picon.addEventListener('click', clckBegin);

	if (!isPopupOpen()) {
		openPopup();
		picon.src = "images/popup-allowed.png";
	}
	else {
		aWindow.close();
		picon.src = "images/popup-blocked.png";
	}
	
	// Attempt to close the window, it works if entered via a Discord link, for instance. Weird.
	window.open('', '_self').close();
	
	document.removeEventListener('click', clckBegin);
	return true;
}