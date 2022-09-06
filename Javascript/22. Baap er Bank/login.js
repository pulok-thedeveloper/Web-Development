document.getElementById('login-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email == 'mdpulokhasan@gmail.com' && password == 'secret'){
        location.href = 'bank.html';
    }
    else{
        alert('Incorrect Email or Password')
    }

})