// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const form = document.getElementById('login-section');
// const errorMail = document.getElementById('messagmail');
// const passError = document.getElementById('messagepass')
// const signinButton = document.getElementById('Sign-inbtn');

// form.addEventListener('submit',(e) =>
// { 
//     let valid = true;

//     const storedEmail = localStorage.getItem('email');
//     const storesPassword = localStorage.getItem('password');
    
//     if(emailInput.value !== storedEmail){
//      errorMail.textContent = 'Email does not match';
//      emailInput.style.borderColor = 'red'
//      valid = false
//  }else{
//      errorMail.textContent = '';
//  } 
//  if(passwordInput.value !== storesPassword) {
//     passError.textContent = 'incorrect Password.';
//    passwordInput.style.borderColor='red'
//     valid = false

// }else{
//     passError.textContent = '';
// }
// if(valid){
//     window.location.href = 'index.html'
// }else{
//     e.preventDefault();
//     signinButton.classList.add('active');
// }
// })
document.getElementById('login-input').addEventListener('submit', event => {
    event.preventDefault();
 
    const formData = {
       email:document.getElementById('email').value,
       password:document.getElementById('password').value
    };
    console.log(formData)

    // localStorage.setItem("formData", JSON.stringify(formData));
    
    // localStorage.setItem('firstname', formData.first_name);
    // localStorage.setItem('lastname', formData.last_name);
    // localStorage.setItem('email', formData.email);
    // localStorage.setItem('password', formData.password);
   
    fetch('https://be-ecommerce-l69j.onrender.com/v1/auth/login', {
       method: 'POST',
       headers:{
           'Content-Type': 'application/json'
       },
       body:JSON.stringify(formData)
    })
    .then(res => res.json())
      .then(data => {
        localStorage.setItemItem("userdetails", JSON.stringify(data))
        console.log(data)
    })
      .catch(error => console.log(error))
  });
   