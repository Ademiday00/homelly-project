// const userName = document.getElementById('username');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');

const errorUser = document.getElementById('messageuser');
const errorMail = document.getElementById('messagmail');
const passError = document.getElementById('messagepass')
const signupButton = document.getElementById('Signupbtn')


// const usernamePattern = /^[a-zA-Z0-9]{3,}$/;
// const passwordPattern =/^(?=.*[0-9])[A-Za-z\d@$!%*?&]{8,}$/;
// form.addEventListener('submit', (e)=>
// {
   //  e.preventDefault()
   //  let valid = true;
   //   if(!usernamePattern.test(userName.value)){
   //      errorUser.textContent= ' Username must be at least alphanumeric characters.';
   //      userName.style.borderColor='red'
   //      valid = false
      
   //   } else{
   //      errorUser.textContent= '';
   //   }
   //   if(emailInput.value == '' || emailInput.value == null){
   //      errorMail.textContent = 'Email is required!'
   //      emailInput.style.borderColor = 'red'
   //      valid = false
   //   }else{
   //      errorMail.textContent = ''
   //   }
   //   if(!passwordPattern.test(passwordInput.value)){
   //      passError.textContent = 'Password must be at least 8 character.';
   //     passwordInput.style.borderColor='red'
   //      valid = false
        
   //  }else{
   //      passError.textContent = '';
   //   }
   // //   if(valid){
   //      localStorage.setItem('email', emailInput.value);
   //      localStorage.setItem('password', passwordInput.value)
   //      signupButton.disabled = false;
   //      window.location.href = 'index.html'
   //   } else{
   //    e.preventDefault();
   //    signupButton.disabled = true;
   //    signupButton.classList.add('active');
   //    signupButton.style.cursor = 'not-allowed';
   //   }
    // e.preventDefault();
    // if(userName.value == ''|| userName.value == null)
    // {
    //   nameError.innerHTML= "Username is required"
    // }
   //  const formData = new FormData(form);
   //  const data = Object.fromEntries(formData);

   //  fetch('https://be-ecommerce-l69j.onrender.com/register', {
   //    method: 'POST',
   //    headers: {
   //       'Content-Type': 'application/json'
   //    },
   //    body:JSON.stringify(data)
   //  }).then(response => response.json())
   //  .then(data => console.log(data))
   //  .catch(error => console.log(error))
   //  .then(data => {
   //    if(data.success){
   //       signupButton.disabled = false;
   //       window.location.href ='index.html'
   //    } else{
   //          e.preventDefault();
   //          signupButton.disabled = true;
   //          signupButton.classList.add('active');
   //          signupButton.style.cursor = 'not-allowed';
   //  })

// })

document.getElementById('signup-input').addEventListener('submit', event => {
   event.preventDefault();

   const formData = {
      usernmae:document.getElementById('username').value,
      email:document.getElementById('email').value,
      passwordInput:document.getElementById('password').value
   };
   console.log(formData)
   
  
   fetch('https://be-ecommerce-l69j.onrender.com/v1/auth/register', {
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
   }).then(res => res.json())
     .then(data => console.log(data))
     .catch(error => console.log(error))
 });
  