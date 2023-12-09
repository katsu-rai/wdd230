const mainnav = document.querySelector("#main-nav");
const hambutton = document.querySelector("#hamburger-button");

hambutton.addEventListener("click", () => {
    if (mainnav.style.display === "flex") {
        mainnav.style.display = "none";
    } else {
        mainnav.style.display = "flex";
    }
});