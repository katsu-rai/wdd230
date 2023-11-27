const mainnav = document.querySelector("#navigation");
const hambutton = document.querySelector("#menu");
const closebutton = document.querySelector("#close-button")

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  closebutton.classList.toggle("show")
  hambutton.classList.toggle("show");
});

mainnav.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  closebutton.classList.toggle("show")
  hambutton.classList.toggle("show");
});

closebutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  closebutton.classList.toggle("show")
  hambutton.classList.toggle("show");
});
