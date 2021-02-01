
// JSON is the same format as Javascript object literal 
/* When the button is clicked add the data to storage */
document.getElementById('button-reg').addEventListener('click',addToStorage);
// the view storage button is just allowing us to print to console to 
// see if everything is being parsed and stored corectly
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
  const xhr = new XMLHttpRequest();
  // prepares a HTTP requesto to be
  xhr.open("POST","api/signup.php");
  // content-type header
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  // send request with JSON payload
  xhr.send(jsonString);

}

