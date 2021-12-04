// Page Initialisation Scripts
function pageLoad() {
	window.addEventListener('scroll', updateText);
	
	typewriterText(randomiseSubheading(), 0, document.getElementById('sh'), 100);
}

// Updates the header text to show the section of the page
function updateText() {
	const positions = {
		'top': '',
		'description': 'Matthew Docherty > Who Am I?',
		'experiences': 'Matthew Docherty > Experiences',
		'projects': 'Matthew Docherty > Projects'
	}

	for (let key in positions) {
		if (document.getElementById(key)?.getBoundingClientRect().top < 50) {
			document.getElementById('head').innerHTML = positions[key];
		}
	}
}

// Randomises the subheading on the page
function randomiseSubheading() {
	const subheadings = [
		"A Software Engineering & Computer Science Student.",
		"An Aspiring Software Engineer.",
		"A Passionate Computer Programmer."
	];
	let r = Math.floor(Math.random()*subheadings.length);

	return subheadings[r];
}

// Animates a DOM text object to look like a typewriter
function typewriterText(word, c, DOMobj, delay) {
	if (DOMobj === null) {
		return;
	}
	DOMobj.innerHTML = word.slice(0, c+1);

	if (c+1 !== word.length) {
		setTimeout(typewriterText.bind(null, word, c+1, DOMobj, delay), delay);
	}
}

window.addEventListener('load', pageLoad);