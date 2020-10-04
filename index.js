let hamburgerIcons = document.querySelectorAll(".swapper");
let toggable = document.getElementById("myTopnav");
let svgIndex = 1;


const showSvg = (n) => {
	let svg = document.getElementsByClassName("swapper");
	if (n > svg.length) {
		svgIndex = 1;
	}
	if (n < 1) {
		svgIndex = svg.length;
	}
	for (const slider of svg) {
		slider.style.display = "none";
	}

	svg[svgIndex - 1].style.display = "";
}

const plusIndex = (n) => {
	showSvg((svgIndex += n));
}

for (const icon of hamburgerIcons) {
	icon.addEventListener('click', () => {
		(toggable.className === "topnav") ?
			toggable.className += " responsive" :
			toggable.className = "topnav";
	});
}

showSvg(svgIndex);
