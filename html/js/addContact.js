// adding contacts to database 

// Convert to json on 
document.getElementById('add-contact').addEventListener('click',addContact);

function addContact()
{
//acess the text feilds 
let tempFristName = document.getElementById('firstName').value;
let tempLastName = document.getElementById('lastName').value;
let tempPhoneNumber = document.getElementById('phoneNumber').value;

//creating the json object 
let myObject = JSON.stringify({"First Name":tempFristName,"tempLastName":tempLastName,"Phone Number":tempPhoneNumber});
localStorage.setItem('tester',myObject);  
let tempHolder = localStorage.getItem('tester');
console.log(JSON.parse(tempHolder));

// setting to JSON
const jsonString = JSON.stringify(tempHolder);

//******** This is where the XML request is happening *********/
const xhr = new XMLHttpRequest();
  // prepares a HTTP requesto to be
  xhr.open("POST","api/database.php");
  // content-type header
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.send(jsonString); 
  // using promise statments 
  let promise = new Promise((resolve, reject) =>
  {
    // onreadystate gets calls every time readySate propertry in the request chnages  
    xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
                // this is our sucess 
				resolve(document.getElementById("add-results").innerHTML = "Adeed to contacts");
            }
            else
            {
                // this is our failure- not able to add to contacts
                reject(document.getElementById("colorAddResult").innerHTML = err.message);
            }
		};
        xhr.send(jsonString); 
})
}

