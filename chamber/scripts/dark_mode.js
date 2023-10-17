const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const slider = document.querySelector(".slider");

modeButton.addEventListener("click", () => {
	if (slider.style.background == "white") {
		main.style.background = "#000";
		main.style.color = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
	}
});