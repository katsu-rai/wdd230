const baseURL = "https://katsu-rai.github.io/wdd230/";
const linksURL = "https://katsu-rai.github.io/wdd230/data/links.json";


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