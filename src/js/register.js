var urlBase = 'api';
// do not know our URL yet 
var extension = 'php';
// so we have acess to the php files

var userId = 0;
var firstName = "";
var lastName = "";

//function for registration json package 
function doReg()
{

  // we also have a registration section, create jason package 
  var registerUser = document.getElementById("logUsername").value;
  var registerPass = document.getElementById("logPass").value; 
  var registerfName = document.getElementById("firstNameReg").value; 
  var registerlName = document.getElementById("lastNameReg").value;
  
  // creating the jason package for the registration 
  // this is the jason packaging part 
  var jsonPayload = '{"login" : "' + registerUser + '", "password" : "' + registerPass + '", "firstName" : "' + registerfName + '", "lastName" : "' + registerlName + '"}';
  var url = urlBase + '/signup.' + extension;

  // this is where the package will check matching 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    xhr.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
        window.location.href = "index.html";
        document.getElementById("regAddResult").innerHTML = "Registration Successful";
      }
    };
    xhr.send(jsonPayload);
  }
  catch(err)
  {
    document.getElementById("regAddResult").innerHTML = err.message;
  }
}