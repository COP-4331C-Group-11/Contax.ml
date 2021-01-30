var urlBase = 'api';
// do not know our URL yet 
var extension = 'php';
// so we have acess to the php files


var userId = 0;
var firstName = "";
var lastName = "";
var phoneNumber = 0;

function doLogin()
{
  //now get the log in and password information from the id status

  var login = document.getElementById("loginName").value;
  var password = document.getElementById("loginPassword").value;

  // creating the json package for the registration 
  document.getElementById("loginResult").innerHTML = "";

  // this is the json packaging part 
  var jsonPayload = '{"login" : "' + login + '", "password" : "' + password + '"}';
  var url = urlBase + '/Login.' + extension;

  // this is where the package will check matching 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    xhr.send(jsonPayload);
    
    var jsonObject = JSON.parse( xhr.responseText );
    
    userId = jsonObject.id;
    
    if( userId < 1 )
    {
      // this is the username does not match 
      // go back into html and create a span that tell if the result is // sucessful or not 
      document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
      return;
    }
    // this is the registration information that is needed
    firstName = jsonObject.firstName;
    lastName = jsonObject.lastName;
    saveCookie();
  
    window.location.href = "data.html";
  }
  catch(err)
  {
    document.getElementById("loginResult").innerHTML = err.message;
  }
}