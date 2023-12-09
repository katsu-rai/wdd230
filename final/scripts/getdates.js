let oLastModif = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = oLastModif;

const d = new Date();
let year = d.getFullYear();
document.querySelector("#last-modified-year").textContent = year;