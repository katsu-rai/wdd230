const urlVehicles = "https://katsu-rai.github.io/wdd230/final/data/vehicles.json"

async function priceApi() {
    try {
        const response = await fetch(urlVehicles)
        if (response.ok){
            const data = await response.json();
            displayPrice(data.vehicles)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayPrice(data.){

    console.log(data)
}


priceApi();