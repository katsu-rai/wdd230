getMembers();

async function getMembers() {
    const response = await fetch("../data/members.json");
    const data = await response.json();
    displayLinks(data.members);
}

const displayLinks = (data) => {
    data.forEach((member) => {

      let card = document.createElement('section');
      let name = member.name;
      let phoneNumber = member.phoneNumber;
      let websiteURL = member.websiteURL;
      let imageLink = member.image;
      let membership = member.membership;

      console.log(name)
      console.log(phoneNumber)
      console.log(websiteURL)
      console.log(imageLink)
      console.log(membership)

    //   lesson.innerText = name;

    //   const lessons = document.querySelector('#lessons')
    //   lessons.appendChild(lesson)
  
    });
}