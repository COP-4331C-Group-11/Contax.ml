
var form = document.getElementById('addContacts')
// wait untill form is submitted
form.addEventListener('submit',function(e)
{
  // prevent auto-submission 
  e.preventDefault()

  var id = document.getElementById('id').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // fetch post request
  fetch('api/addcontact.php',{
    method:'POST',
    body: JSON.stringify
    ({
      userId : id,
      firstname : firstName,
      lastname : lastName,
      phonenumber : phone,
      email : email,
      date : '4/23/30'
      
    }),
    // adding xml headers
    
})
  //getting the promise
  .then(res => res.text())          
  .then(text => console.log(text))  
//
})

