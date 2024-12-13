

document.getElementById('signup-input').addEventListener('submit', event => {
    event.preventDefault();
 
    const formData = {
       first_name:document.getElementById('firstname').value,
       last_name:document.getElementById('lastname').value,
       email:document.getElementById('email').value,
       password:document.getElementById('password').value
    };
    console.log(formData);

    // localStorage.setItem("formData", JSON.stringify(formData));
    
    // localStorage.setItem('firstname', formData.first_name);
    // localStorage.setItem('lastname', formData.last_name);
    // localStorage.setItem('email', formData.email);
    // localStorage.setItem('password', formData.password);
   
    fetch('https://be-ecommerce-l69j.onrender.com/v1/auth/register', {
       method: 'POST',
       headers:{
           'Content-Type': 'application/json'
       },
       body:JSON.stringify(formData)
    })
    .then(res => res.json())
      .then(data =>{
        localStorage.setItem('userdetails', JSON.stringify(data))
        window.location.href= 'index.html'
      })
      .catch(error => console.log(error))
  });
   