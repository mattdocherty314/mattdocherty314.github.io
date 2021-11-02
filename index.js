function pageLoad() {
	window.addEventListener('scroll', updateText);
}

function updateText() {
	const positions = {
		'': 750,
		'Matthew Docherty > Who Am I?': 1000,
		'Matthew Docherty > Experiences': 2350,
		'Matthew Docherty > Projects': 4650
	}

	for (let key in positions) { 
		if (window.scrollY < positions[key]) {
			window.document.getElementById("head").innerHTML = key;
			break;
		}
	};
}

window.addEventListener('load', pageLoad);