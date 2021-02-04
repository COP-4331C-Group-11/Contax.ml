
  // start by getting a button that when clicked executes 
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
    let myObject = JSON.stringify({"username":tempUser,"pass":tempPass});


    localStorage.setItem('tester',myObject);   
    let tempHolder = localStorage.getItem('tester');
    console.log(JSON.parse(tempHolder));

    

    // this is the string we are parsing
    const jsonString = JSON.parse(tempHolder);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "api/Login.php", false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
      xhr.send(jsonString);
      console.log(xhr.responseText);
      var jsonObject = JSON.parse( xhr.responseText );
      userId = jsonObject.id;
      
      if( userId < 1 )
      {
        // indicates that they are not matches 
        document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
          
      }
      // go back to 
      window.location.href = "contactPage.html";
    }
    catch(err)
    {
      document.getElementById("loginResult").innerHTML = err.message;
    }
  }
