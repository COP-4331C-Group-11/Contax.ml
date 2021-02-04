// Form data can be extracted at the same time.

/*
      // Event Listeners
      document.getElementById("formElement")
      .addEventListener("onsubmit", (e) => {
        console.log(e);
        updateTable(e.target.value);
      });

    // when the form is sumbmit the data will be extracted 
    async function doReg()
    {
      e.preventDefault();
      var form = document.querySelector("#login");
        // getting the data from the forms 
        data = {
          Username: form.querySelector('input[name="Username"]').value,
          Password : form.querySelector('input[name="Password"]').value,
          firstName : form.querySelector('input[name="firstName"]').value,
          lastname : form.querySelector('input[name="lastName"]').value,
          
        }
        console.log(data);

        let response = await fetch('http://localhost:8080/api/login.php', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                // converting data into JSON package
                body: JSON.stringify(data),
        })
        //read response body as text
        let text = await response.text(); 
        // send back information into this part of the HTML
        document.querySelector("#decoded").innerHTML = text;
    }

    */

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
    
    let tempHolder = localStorage.getItem('tester');
    console.log(JSON.parse(tempHolder));
  
    // Sending json files to the PHP file
    const jsonString = JSON.stringify(tempHolder);
    // making the request 
    const xhr = new XMLHttpRequest();
    // prepares a HTTP requesto to be
    xhr.open("POST","http://localhost:8080/api/signup.php");
    // content-type header
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    // send request with JSON payload
    xhr.send(jsonString);

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
  xhr.open("POST","http://localhost:8080/api/login.php");
  // content-type header
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  // send request with JSON payload
  xhr.send(jsonString);
}
