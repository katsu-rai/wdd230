


async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.96&appid=fcab982bf34e29b8f59c4a27d0d30ae7&units=imperial'
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIconTag = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#weather-name');
    const weatherIcon = document.createElement('img')
    const humidity = document.querySelector("#humidity")
    
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].main;
    const humidityData = data.main.humidity;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    weatherIconTag.appendChild(weatherIcon)
    humidity.textContent = humidityData;
}

apiFetch();

