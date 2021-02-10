
var form = document.getElementById('reg')
// wait untill form is submitted
form.addEventListener('submit',function(e)
{
  // prevent auto-submission 
  e.preventDefault()

  var Username = document.getElementById('logUsername').value;
  var Password= document.getElementById('logPass').value;
  var First = document.getElementById('firstNameReg').value;
  var Last = document.getElementById('lastNameReg').value;

  // fetch post request
  fetch('api/signup.php',{
    method:'POST',
    body: JSON.stringify
    ({
      username : Username,
      password : Password,
      first : First,
      last : Last,
      
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
  //window.location.href = "contactPage.html";

})
