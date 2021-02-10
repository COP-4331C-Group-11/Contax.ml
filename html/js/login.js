var form = document.getElementById('loginForm')
// wait untill form is submitted
form.addEventListener('submit',function(e)
{
  // prevent auto-submission 
  e.preventDefault()

  var username = document.getElementById('loginName').value;
  var password = document.getElementById('loginPassword').value;

  // fetch post request
  fetch('api/signup.php',{
    method:'POST',
    body: JSON.stringify
    ({
      username : username,
      password : password,
    }),
    // adding xml headers
    headers:{
      'Content-type' : 'application/json; charset=UTF-8' ,
    }
})
  //getting the promise
  .then(res => res.text())          
  .then(text => console.log(text)) 

  // redirecting after the data is sent
  window.location.href = "contactPage.html";

})
