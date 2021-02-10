
  // start by getting a button that when clicked executes 
  // document.getElementById('login-btn').addEventListener('click', doLogin());
  function doLogin()
  {
    document.getElementById("loginResult").innerHTML = "";
    //Acess the text fields
    let tempUser = document.getElementById('loginName').value;
    let tempPass = document.getElementById('loginPassword').value;

    // creating the json objects
    let myObject = JSON.stringify({"username":tempUser,"pass":tempPass});
    // ********************************************************************

    localStorage.setItem('tester',myObject);   
    let tempHolder = localStorage.getItem('tester');
    console.log(JSON.parse(tempHolder));

    //******************************************************************** */

    // this is the string we are parsing
    var jsonPayload = '{"username" : "' + tempUser + '", "pass" : "' + tempPass + '"}';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/login.php", false);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(jsonPayload);

    var jsonObject = JSON.parse( xhr.responseText );
    
    userId = jsonObject.id;
    
    if( userId < 1 )
    {
      // indicates that they are not matches 
      document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
      return;
    }
    else {
      // go back to 
      window.location.href = "http://localhost:8080/contactPage.html";
      return;
    }
  }

