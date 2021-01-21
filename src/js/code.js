var urlBase = '';
// do not know our URL yet 
var extension = 'php';
// so we have acess to the php files


var userId = 0;
var firstName = "";
var lastName = "";
var phoneNumber =0;

//this is going to capture the log in information
function doLogin()
{
var userId = 0;
var firstName = "";
var lastName = "";
var phoneNumber =0;

//now get the log in and password information from the id status

var login = document.getElementById("logUsername").value;
var password = document.getElementById("logPass").value;

// creating the json package for the registration 

// this is the json packaging part 
var jsonPayload = '{"login" : "' + login + '", "password" : "' + password + '"}';
var url = urlBase + '/Login.' + extension;

// this is where the package will check matching 
var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    hr.send(jsonPayload);
		
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

//function for registration json package 
function doReg()
{
  var userId = 0;
  var firstName = "";
  var lastName = "";

  // we also have a registration section, create jason package 
  var registerLog = document.getElementById("regUsername").value;
  var registerLog = document.getElementById("regPass").value; 
  
  // creating the jason package for the registration 
  // this is the jason packaging part 
  var jsonPayload = '{"login" : "' + login + '", "password" : "' + password + '"}';
  var url = urlBase + '/Login.' + extension;

  // this is where the package will check matching 
  var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
      hr.send(jsonPayload);
      
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

// recalling information
function saveCookie()
{
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
}

function readCookie()
{
	userId = -1;
	var data = document.cookie;
	var splits = data.split(",");
	for(var i = 0; i < splits.length; i++) 
	{
		var thisOne = splits[i].trim();
		var tokens = thisOne.split("=");
		if( tokens[0] == "firstName" )
		{
			firstName = tokens[1];
		}
		else if( tokens[0] == "lastName" )
		{
			lastName = tokens[1];
		}
		else if( tokens[0] == "userId" )
		{
			userId = parseInt( tokens[1].trim() );
		}
  }
  
  if( userId < 0 )
	{
		window.location.href = "landing.html";
	}
	else
	{
		document.getElementById("userName").innerHTML = "Logged in as " + firstName + " " + lastName;
	}
}

//logging out 
function doLogout()
{
	userId = 0;
	firstName = "";
	lastName = "";
	document.cookie = "firstName= ; expires = Thu, 01 Jan 2021 00:00:00 GMT";
	window.location.href = "landing.html";
}

// this is adding the contact files to the json package 
function addContact()
{

}


