document.getElementById('login-submit').addEventListener('click',function(){
    // Get email
    const emailField  = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    //checking user
    if(userEmail == 'exp@gmail.com' && userPassword == '1234'){
        window.location.href = 'acc.html';
    }else{
        alert('wrong input');
    }
})

