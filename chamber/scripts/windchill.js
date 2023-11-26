let temp = parseInt(document.querySelector("#current-temp").innerHTML)
let windSpeed = parseFloat(document.querySelector("#wind-speed").innerHTML)


console.log(temp)

let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16
windChill = windChill.toFixed(2)

const IdWindChill = document.querySelector("#wind-chill")

if (temp <= 50 && windSpeed > 3.0) {
    IdWindChill.innerHTML = "N/A"
}
else{
    IdWindChill.innerHTML = windChill
}