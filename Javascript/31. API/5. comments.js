// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(comments => displayComments(comments));
// }

// function displayComments(comments){
//     const commentsContainer = document.getElementById('comments-container');
//     for(const comment of comments){
//         const commentDiv = document.createElement('div');
//         commentDiv.classList.add('comment')
//         commentDiv.innerHTML = `
//             <p>Post id: ${comment.postId}</p>
//             <h3>${comment.name}</h3>
//             <p>Email: ${comment.email}</p>
//             <p>${comment.body}</p>

//         `
//         commentsContainer.appendChild(commentDiv);
//     }
    
// }

// loadData();
