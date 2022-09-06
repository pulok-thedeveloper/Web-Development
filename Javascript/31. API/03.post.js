function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPost(posts))
}

function displayPost(posts){
    const postContainer = document.getElementById('posts-contsiner');
    for(const post of posts){
        console.log(post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h5>User: ${post.id}</h5>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPost()