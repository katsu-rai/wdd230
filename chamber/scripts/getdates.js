let oLastModif = new Date(document.lastModified);
console.log(oLastModif);
document.querySelector("#last-modified").textContent = oLastModif;

const d = new Date();
let year = d.getFullYear();
document.querySelector("#last-modified-year").textContent = year;