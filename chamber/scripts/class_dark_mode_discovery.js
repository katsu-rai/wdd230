const classModeButton = document.querySelector(".mode");

classModeButton.addEventListener("click", () => {
    const main = document.querySelector(".dark");
    const sideEvent = document.querySelector(".event")
    const calendar = document.querySelector(".calendar")
    const visit = document.querySelector(".visit-number")
    const weather = document.querySelector(".side-weather")
    const sideMain = document.querySelector(".side-main")
	if (classModeButton.checked == true) {
		main.style.background = "#000";
		sideMain.style.background = "#000";
		main.style.color = "#fff";
		sideEvent.style.borderColor = "#fff";
		calendar.style.borderColor = "#fff";
		visit.style.borderColor = "#fff";
		weather.style.borderColor = "#fff";
        console.log("clicked")
    } 
    else {
        console.log("truend off")
		main.style.background = "#eee";
		sideMain.style.background = "#eee";
		main.style.color = "#000";
		sideEvent.style.borderColor = "#000";
		calendar.style.borderColor = "#000";
		visit.style.borderColor = "#000";
		weather.style.borderColor = "#000";
	}
});