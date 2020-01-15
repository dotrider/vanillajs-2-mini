document.querySelector('form').addEventListener('submit', addToDo)

//In index.js, create a new function called addTodo that takes in an event as a parameter.
function addToDo(event){
    event.preventDefault();
//Use document.createElement to create a new li element that will hold our new todo item.
    const item =document.createElement('li')
    item.innerText = document.getElementById('item').value
    item.addEventListener('click', completeToDo);

    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeToDo);
    item.appendChild(button);


    const list = document.querySelector('ul');
    list.appendChild(item)

    document.getElementById('item').value = ''
}

function removeToDo(event){
    event.target.parentNode.remove();
}

function completeToDo(event){
    const value = event.target.getAttribute('aria-checked');
    if( value !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
    }else {
        event.target.setAttribute('aria-checked', 'false')
    }

}