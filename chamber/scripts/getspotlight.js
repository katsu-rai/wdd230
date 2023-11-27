const membersURL = "https://katsu-rai.github.io/wdd230/chamber/data/members.json";
const displayMembers = document.querySelector("#members")

getMembers();

async function getMembers() {
    const response = await fetch("https://katsu-rai.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    displayLinks(data.members);
}

const displayLinks = (data) => {
    data.forEach((member) => {

      let card = document.createElement('section');
      let nameDisplay =document.createElement('p');
      let membershipDisplay =document.createElement('p');
      let phoneNumberDisplay =document.createElement('p');
      let websiteURLDisplay =document.createElement('a');
      let imgTag = document.createElement('img');

      let imageLink = member.image;
      let name = member.name;
      let membership = member.membership;
      let phoneNumber = member.phoneNumber;
      let websiteURL = member.websiteURL;

        imgTag.setAttribute('src', imageLink);
        imgTag.setAttribute('alt', `Profile of ${name}`);
        imgTag.setAttribute('loading', 'lazy');
        card.appendChild(imgTag);

      nameDisplay.innerText = name;
      card.appendChild(nameDisplay);
      membershipDisplay.innerText = membership;
      card.appendChild(membershipDisplay);
      phoneNumberDisplay.innerText = phoneNumber;
      card.appendChild(phoneNumberDisplay);
      websiteURLDisplay.innerText = websiteURL;
      websiteURLDisplay.setAttribute("href", websiteURL)
      card.appendChild(websiteURLDisplay);

        displayMembers.appendChild(card);

    });
}