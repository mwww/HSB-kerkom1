const navbar_el = document.getElementById("mi-navbar");
const body_el = document.body;

console.log(navbar_el);

if (window.pageYOffset >= 45) {
	navbar_el.classList.toggle("mi-navBG");
}
window.addEventListener("scroll", (event) => {
	if (window.pageYOffset >= 45 && !navbar_el.classList.contains("mi-navBG")) {
		navbar_el.classList.toggle("mi-navBG");
	} else if (
		window.pageYOffset <= 45 &&
		navbar_el.classList.contains("mi-navBG")
	) {
		navbar_el.classList.toggle("mi-navBG");
	}
});
