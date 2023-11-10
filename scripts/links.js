const baseURL = "https://katsu-rai.github.io/wdd230/";
const linksURL = "https://katsu-rai.github.io/wdd230/data/links.json";

// async function getLinks() 
// {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.log(data["lessons"][0]);
// }
  
getLinks();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (data) => {
    data.lessons.forEach((eachLesson) => {

      let lesson = document.createElement('li');
      let lessonNumber = eachLesson.lesson;
      lesson.innerText = lessonNumber;

      eachLesson.links.forEach((link) => {
        let aTagLink = document.createElement('a')
        aTagLink.setAttribute('href', link.url)
        aTagLink.innerText = link.title

        lesson.appendChild(aTagLink)
      })

      const lessons = document.querySelector('#lessons')
      lessons.appendChild(lesson)
  
    });
}

//   // Build the h2 content out to show the prophet's full name
//   fullName.textContent = `${prophet._____} ____________`; // fill in the blank
//   // Build the image portrait by setting all the relevant attributes
//   portrait.setAttribute('src', prophet.imageurl);
//   portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`); // fill in the blank
//   portrait.setAttribute('loading', 'lazy');
//   portrait.setAttribute('width', '340');
//   portrait.setAttribute('height', '440');

//   // Append the section(card) with the created elements
//   card.appendChild(_______); //fill in the blank
//   card.appendChild(portrait);

//   cards.appendChild(card);