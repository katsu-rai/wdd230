const currentTemp = document.querySelector('#current-temp');
const weatherIconTag = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-name');
const weatherIcon = document.createElement('img')

35.81, 137.25

async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.81&lon=137.25&appid=fcab982bf34e29b8f59c4a27d0d30ae7&units=imperial'
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    weatherIconTag.appendChild(weatherIcon)
}

apiFetch();
