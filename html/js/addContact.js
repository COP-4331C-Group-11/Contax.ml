
var form = document.getElementById('reg')
// wait untill form is submitted
form.addEventListener('submit',function(e)
{
  // prevent auto-submission 
  e.preventDefault()

  var login= document.getElementById('logUsername').value;
  var password= document.getElementById('logPass').value;
  var firstName = document.getElementById('firstNameReg').value;
  var lastName = document.getElementById('lastNameReg').value;

  // fetch post request
  fetch('api/signup.php',{
    method:'POST',
    body: JSON.stringify
    ({
      firstName : firstName,
      lastName : lastName,
      login : login,
      password :password,
      
    }),
    // adding xml headers
    headers:{
      'Content-type' : 'application/json; charset=UTF-8' ,
    }
})
  //getting the promise
  .then(res => res.text())          
  .then(text => console.log(text)) 

  
  window.location.href = "contactPage.html";

})

