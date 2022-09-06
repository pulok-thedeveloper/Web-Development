const dataLoad = () =>{
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users =>{
    const usersContainer = document.getElementById('users-container');
    
    for(const user of users){
        console.log(user);
        const userDiv  = document.createElement('div');
        userDiv.innerHTML=`
        <h3>User Name</h3>
        <p>User info</p>
        `
        usersContainer.appendChild(userDiv)
    }
}

dataLoad()