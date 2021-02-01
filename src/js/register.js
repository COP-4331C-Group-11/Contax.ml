
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

  // Sending json files to the PHP file
  const jsonString = JSON.stringify(tempHolder);
  // making the request 
  const xhr = new XMLHttpRequest;

  // open the post
  xhr.open("POST","api/login.php");
  // content-type header
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  // send request with JSON payload
  xhr.send(jsonString);

}
/*try
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
*/