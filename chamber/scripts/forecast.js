// ----------- forcast ---------------------
const min1 = document.querySelector("#forecast1-minTemp")
const max1 = document.querySelector("#forecast1-maxTemp")
const min2 = document.querySelector("#forecast2-minTemp")
const max2 = document.querySelector("#forecast2-maxTemp")
const min3 = document.querySelector("#forecast3-minTemp")
const max3 = document.querySelector("#forecast3-maxTemp")

const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=35.81&lon=137.25&exclude=current,minutely,hourly,alertsy&appid=fcab982bf34e29b8f59c4a27d0d30ae7&units=imperial`

async function forecastApiFetch() {
    try {
        const response = await fetch(urlForecast)
        if (response.ok){
            const data = await response.json();
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayForecast(data){
    min1.innerHTML = data.daily[1].temp.min
    max1.innerHTML = data.daily[1].temp.max
    min2.innerHTML = data.daily[2].temp.min
    max2.innerHTML = data.daily[2].temp.max
    min3.innerHTML = data.daily[3].temp.min
    max3.innerHTML = data.daily[3].temp.max
}

forecastApiFetch()

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 1);
let dayOfWeekTomorrow = currentDate.getDay();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(`Tomorrow is ${daysOfWeek[dayOfWeekTomorrow]}`);
const day1 = document.querySelector("#forecast1-day")
day1.textContent = daysOfWeek[dayOfWeekTomorrow]

currentDate.setDate(currentDate.getDate() + 1);
dayOfWeekTomorrow = currentDate.getDay();
const day2 = document.querySelector("#forecast2-day")
day1.textContent = daysOfWeek[dayOfWeekTomorrow]

currentDate.setDate(currentDate.getDate() + 1);
dayOfWeekTomorrow = currentDate.getDay();
const day3 = document.querySelector("#forecast3-day")
day1.textContent = daysOfWeek[dayOfWeekTomorrow]