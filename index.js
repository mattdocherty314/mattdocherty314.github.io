function pageLoad() {
	window.addEventListener('scroll', updateText);
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

window.addEventListener('load', pageLoad);