function pageLoad() {
	window.addEventListener('scroll', updateText);
	randomiseSubheading()
}

function updateText() {
	const positions = {
		'top': '',
		'description': 'Matthew Docherty > Who Am I?',
		'experiences': 'Matthew Docherty > Experiences',
		'projects': 'Matthew Docherty > Projects'
	}

	for (let key in positions) {
		if (document.getElementById(key).getBoundingClientRect().top < 50) {
			document.getElementById('head').innerHTML = positions[key];
		}
	}
}

function randomiseSubheading() {
	const subheadings = [
		"A Software Engineering & Computer Science student.",
		"An aspiring software engineer",
		"A passionate computer programmer"
	];
	let r = Math.floor(Math.random()*subheadings.length);

	document.getElementById("sh").innerHTML = subheadings[r];
}

window.addEventListener('load', pageLoad);