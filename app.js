//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event){
    //Prevent for to submitting
    event.preventDefault();
    // Create ToDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo'); //add class to element
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>"
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append Div with everything to list
    todoList.appendChild(todoDiv);

    //Clear Input Value
    todoInput.value='';
}

function deleteCheck(event) {
    //Prevent for to submitting
    event.preventDefault();
    //Grab item
    const item = event.target;
    //DELETE
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement; // to grab the parent element
        todo.classList.add('fall');
        //Animation
        todo.addEventListener('transitionend', function(){ // till transition end
            todo.remove(); // To remove an item
        })
        
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement; // to grab the parent element
        todo.classList.toggle('completed'); // To change the class for effect
    }
}