// adding contacts to database 

// Convert to json on 


// get the form 
var form = document.getElementById('contact')
// wait untill form is submitted
form.addEventListener('submit',function(e)
{
  // prevent auto-submission 
  e.preventDefault()

  var FristName = document.getElementById('firstName').value;
  var LastName = document.getElementById('lastName').value;
  var PhoneNumber = document.getElementById('phoneNumber').value;
  var Email = document.getElementById('email').value;
  var id = document.getElementById('id').value;
  // fetch post request
  fetch("api/login.php",{
    method:'POST',
    body:JSON.stringify
    ({
      id : id,
      email: Email,
      first:FristName,
      last:LastName,
      phone:PhoneNumber,
    }),
    // adding xml headers
    headers:{
      "Content-type" : "application/json; charset=UTF-8",
    },

})

  //getting the promise
    //getting the promise
    .then(res => res.text())          
    .then(text => console.log(text)) 
    document.getElementById("addResult").innerHTML = "Added Contact";


})

