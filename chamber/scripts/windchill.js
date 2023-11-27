async function apiFetchWindchill() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.81&lon=137.25&appid=fcab982bf34e29b8f59c4a27d0d30ae7&units=imperial'
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWindchill(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayWindchill(data){

    let temp = data.main.temp
    let windSpeed = data.wind.speed
    
    let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16
    windChill = windChill.toFixed(2)
    
    const IdTemp = document.querySelector("#current-temp")
    const IdWindspeed = document.querySelector("#wind-speed")
    const IdWindChill = document.querySelector("#wind-chill")

    IdTemp.textContent = temp;
    IdWindspeed.textContent = windSpeed;
    
    if (temp <= 50 && windSpeed > 3.0) {
        IdWindChill.innerHTML = "N/A"
    }
    else{
        IdWindChill.innerHTML = windChill
    }
}

apiFetchWindchill()
