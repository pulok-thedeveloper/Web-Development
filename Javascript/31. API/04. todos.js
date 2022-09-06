function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => displayTodos(todos))
}

function displayTodos(todos){
    const todosContainer = document.getElementById('todo-container')
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>user: ${todo.userId}</p>
            <p>Is Completed: ${todo.completed}</p>
        `;
        todosContainer.appendChild(todoDiv)
    }
}

loadTodos()