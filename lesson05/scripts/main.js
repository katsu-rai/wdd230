const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


button.addEventListener('click', () => {
    if (input.value != '') 
    {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.textContent = input.value;
        deleteButton.textContent = 'x'
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
})
