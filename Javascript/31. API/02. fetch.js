// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData(){
    fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}

const url2 = 'https://jsonplaceholder.typicode.com/users';
function loadData2(){
fetch(url2)
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    const ul = document.getElementById('user-list');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText= user.name;
        ul.appendChild(li);
    }
}
