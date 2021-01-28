var urlBase = 'api';
// do not know our URL yet 
var extension = 'php';
// so we have acess to the php files


var userId = 0;
var firstName = "";
var lastName = "";
var phoneNumber = 0;

//this is going to capture the log in information
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
  var newFirstName = document.getElementById("inputFirstName").value;
  var newLastName = document.getElementById("inputLastName").value;
  var newPhone = document.getElementById("inputPhone").value;

  document.getElementById("newContactResult").innerHTML = "";

  var jsonPayload = '{"firstname" : "' + newFirstName + '", "lastname" : "' + newLastName + '", "phone number" : "' + newPhone + '"}';
  var url = urlBase + '/AddContact.' + extension;

  var xhr = newXMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    xhr.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById(newContactResult).innerHTML = "Contact has been added";
      }
    };
    xhr.send(jsonPayload);
  }
  catch(err)
  {
    document.getElementById("newContactResult").innerHTML = err.message;
  }
}

//this is for searching a contact in the list
function searchContact()
{
  var srch = document.getElementById("searchText").value;
  document.getElementById("contactSearchResult").innerHTML = "";
  
  var contactList = "";
  
  var jsonPayload = '{"search" : "' + srch + '","userId" : ' + userId + '}';
  var url = urlBase + '/SearchContacts.' + extension;
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  try
  {
    //this code may not work if not using a list 
    xhr.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
        document.getElementById("contactSearchResult").innerHTML = "Contact(s) has been retrieved";
        var jsonObject = JSON.parse( xhr.responseText );
        
        for( var i=0; i<jsonObject.results.length; i++ )
        {
          contactList += jsonObject.results[i];
          if( i < jsonObject.results.length - 1 )
          {
            contactList += "<br />\r\n";
          }
        }
        
        document.getElementsByTagName("p")[0].innerHTML = contactList;
      }
    };
    xhr.send(jsonPayload);
  }
  catch(err)
  {
    document.getElementById("contactSearchResult").innerHTML = err.message;
  }
}
