
  // start by getting a button that when clicked executes 
<<<<<<< HEAD
  document.getElementById('logbutton').addEventListener('click',doLogin);
  function doLogin()
  {
    //Acess the text fields
    let tempUser = document.getElementById('logUsername').value;
    let tempPass = document.getElementById('logPass').value;

    // creating the json objects
    let myObject = JSON.stringify({"username":tempUser,"pass":tempPass});
    // ********************************************************************
=======
  // do not know our URL yet 
var extension = 'php';
// so we have acess to the php files

var userId = 0;
var firstName = "";
var lastName = "";
 /*
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
*/






  function doLogin()
  {
    //Acess the text fields
    let tempUser = document.getElementById("logUsername").value;
    let tempPass = document.getElementById("logPass").value;
    // creating the json objects
    let myObject = '{"login" : "' + tempUser + '", "password" : "' + tempPass + '"}';
>>>>>>> 5c59292b77d0d5a0a43c11f09228e0f5d54d399d

    localStorage.setItem('tester',myObject);   
    let tempHolder = localStorage.getItem('tester');
    console.log(JSON.parse(tempHolder));

<<<<<<< HEAD
    //******************************************************************** */

    // this is the string we are parsing
    const jsonString = JSON.stringify(tempHolder);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "api/login.php");
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
      xhr.send(jsonString);
      
      var jsonObject = JSON.parse( xhr.responseText );
      
=======
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "api/Login.php", false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
      xhr.send(myObject);
      var jsonObject = JSON.parse( xhr.responseText );
>>>>>>> 5c59292b77d0d5a0a43c11f09228e0f5d54d399d
      userId = jsonObject.id;
      
      if( userId < 1 )
      {
        // indicates that they are not matches 
<<<<<<< HEAD
        document.getElementById("error").innerHTML = "User/Password combination incorrect";
        
      }
      // go back to 
      window.location.href = "contactPage.html";
    }
    catch(err)
    {
      document.getElementById("error").innerHTML = err.message;
    }
  }

=======
        document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
          
      }
      // go back to 
      document.location.href = "contactPage.html";
    }
    catch(err)
    {
      document.getElementById("loginResult").innerHTML = err.message;
    }
  }
>>>>>>> 5c59292b77d0d5a0a43c11f09228e0f5d54d399d
