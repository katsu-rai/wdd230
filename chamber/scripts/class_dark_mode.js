const classModeButton = document.querySelector(".mode");

classModeButton.addEventListener("click", () => {
    const main = document.querySelector(".dark");
    const upcoming = document.querySelector(".upcoming-event")
    const weather = document.querySelector(".weather-info")
	if (classModeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
		upcoming.style.borderColor = "#fff";
		weather.style.borderColor = "#fff";
	 } 
    else {
		main.style.background = "#eee";
		main.style.color = "#000";
		upcoming.style.borderColor = "#000";
		weather.style.borderColor = "#000";
	}
});