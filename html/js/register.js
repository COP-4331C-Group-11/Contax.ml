
var form = document.getElementById('reg')
// wait untill form is submitted
form.addEventListener('submit',(e) =>doReg(e));

  // prevent auto-submission 
  function doReg(e){

  var login= document.getElementById('logUsername').value;
  var password= document.getElementById('logPass').value;
  var firstName = document.getElementById('firstNameReg').value;
  var lastName = document.getElementById('lastNameReg').value;
  
  register(login,password,firstName,lastName);
  }
  // fetch post request
  async function register(login,password,firstName,lastName)
  {
    let response = await fetch('api/signup.php', 
    {
    method:'POST',
    body: JSON.stringify
    ({
      firstName : firstName,
      lastName : lastName,
      login : login,
      password :password,
      
    }),
//getting the promise

});
  
  let json = await response.json();

  console.log(json);

  if (json.status != "success")
  {
    // if failed it will display a message and return out of this function
    const $message = document.getElementById('message');
    $message.style.display = "block";
    return;
  }

  saveCookie(json.firstName, json.lastName, json.id);
  //window.location.href = "contactPage.html";
  console.log(readCookie());

  }

