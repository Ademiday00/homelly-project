
document.getElementById('login-input').addEventListener('submit', event => {
    event.preventDefault();
 
    const formData = {
       email:document.getElementById('email').value,
       password:document.getElementById('password').value
    };
    console.log(formData)
   
    fetch('https://be-ecommerce-l69j.onrender.com/v1/auth/login', {
       method: 'POST',
       headers:{
           'Content-Type': 'application/json'
       },
       body:JSON.stringify(formData)
    })
    .then(res => res.json())
      .then(data => {
        localStorage.setItem("userdetails", JSON.stringify(data));
        window.location.href= 'index.html'
    })
      .catch(error => console.log(error))
  });



