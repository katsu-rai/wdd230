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

function displayPrice(data){
    const priceTable = document.querySelector("#price-table")

    data.forEach(vehicle => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = vehicle.name;
        tr.appendChild(td1)
        let td2 = document.createElement("td");
        td2.textContent = vehicle.capacity;
        tr.appendChild(td2)
        let td3 = document.createElement("td");
        td3.textContent = vehicle.reservation.halfDay;
        tr.appendChild(td3)
        let td4 = document.createElement("td");
        td4.textContent = vehicle.reservation.fullDay;
        tr.appendChild(td4)
        let td5 = document.createElement("td");
        td5.textContent = vehicle.walkIn.halfDay;
        tr.appendChild(td5)
        let td6 = document.createElement("td");
        td6.textContent = vehicle.walkIn.fullDay;
        tr.appendChild(td6)

        priceTable.appendChild(tr)
    });
}


priceApi();