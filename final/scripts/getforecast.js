
// ----------- forcast ---------------------

const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=20.51&lon=-86.96&exclude=current,minutely,hourly,alertsy&appid=fcab982bf34e29b8f59c4a27d0d30ae7&units=imperial`

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
    const min = document.querySelector("#tomorrow-max")
    const max = document.querySelector("#tomorrow-min")
    const condition = document.querySelector("#tomorrow-condition")
    
    condition.textContent = data.daily[1].weather[0].main
    min.textContent = data.daily[1].temp.min
    max.textContent = data.daily[1].temp.max
}

forecastApiFetch()