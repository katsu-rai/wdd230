const input = document.querySelectro('#favchap');
const button = document.querySelectro('button');
const list = document.querySelectro('#list');

button.addEventListener('click', () => {
    if (input.value != '') 
    {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.textContent = input.value;
        deleteButton.textContent = 'x'
        li.append(deleteButton);
        list.append(li);
 
    }
})

deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
    input.value = '';
})