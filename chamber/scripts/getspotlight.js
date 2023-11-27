const membersURL = "https://katsu-rai.github.io/wdd230/chamber/data/members.json";
const displayMembers = document.querySelector("#members")

getSpotlight();

async function getSpotlight() {
    const response = await fetch("https://katsu-rai.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    displayLinks(data.members);
}

const displayLinks = (data) => {
    const spotlight1 = document.querySelector("#spotlight1")
    const spotlightCompany1 = document.querySelector("#spotlight-company-name1")
    const spotlight2 = document.querySelector("#spotlight2")
    const spotlightCompany2 = document.querySelector("#spotlight-company-name2")

    const filteredData = data.filter(user => user.membership === 'Gold' || user.membership === 'Silver');

    let randomUsers = getRandomElements(filteredData, 2);

    const imgURL1 = randomUsers[0].image;
    const companyName1 = randomUsers[0].name;
    
    const imgURL2 = randomUsers[1].image;
    const companyName2 = randomUsers[1].name;

    let imgTag1 = document.createElement('img');
    let imgTag2 = document.createElement('img');
    
    imgTag1.setAttribute('src', imgURL1);
    imgTag1.setAttribute('alt', `Profile of ${companyName1}`);
    imgTag1.setAttribute('loading', 'lazy');
    spotlightCompany1.textContent = companyName1;
    
    imgTag2.setAttribute('src', imgURL2);
    imgTag2.setAttribute('alt', `Profile of ${companyName2}`);
    imgTag2.setAttribute('loading', 'lazy');
    spotlightCompany2.textContent = companyName2;

    spotlight1.appendChild(imgTag1);
    spotlight2.appendChild(imgTag2);

}

function getRandomElements(array, numberOfElements) {
  var shuffled = array.slice(0), i = array.length, min = i - numberOfElements, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}