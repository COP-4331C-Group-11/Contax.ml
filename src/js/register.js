/*
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
*/

// JSON is the same format as Javascript object literal 
/* When the button is clicked add the data to storage */
document.getElementById('button-reg').addEventListener('click',addToStorage);
document.getElementById('see - local sotage').addEventListener('click',viewStorage);
/* Holding storage content, page loads and people ocntains content from tester*/
/*const people = JSON.parse(localStorage.getItem('tester'));
console.log(people);
*/

function addToStorage()
{
    /* logs the information in the username alongside number of times is clicked*/

    // these are all the acess to text fields for regsitration form
    let tempUser = document.getElementById('logUsername').value;
    let tempPass = document.getElementById('logPass').value;
    let tempFirst = document.getElementById('firstNameReg').value;
    let tempLast = document.getElementById('lastNameReg').value;
    /*Creating an object for this*/
    let myObject = JSON.stringify({"username":tempUser,"pass":tempPass,"First Name":tempFirst,"Last Name":tempLast});
    localStorage.setItem('tester',myObject);   
}
function viewStorage()
{
  let tempHolder = localStorage.getItem('tester');
  console.log(JSON.parse(tempHolder));
}
try
{
const xhr = new XMLHttpRequest();

// listen for `load` event
xhr.onload = () => {

    // print JSON response
    if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
// initalize the json package
const json = JSON.stringify(tempHolder);

// open request
xhr.open('POST', "api/signup.php");

// set Content-Type header
xhr.setRequestHeader('Content-Type', 'application/json');

// send rquest with JSON payload
xhr.send(JSON.stringify(json));
}
catch(err)
{
  document.getElementById("regAddResult").innerHTML = err.message;

}