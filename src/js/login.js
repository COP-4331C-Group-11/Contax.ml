
  // start by getting a button that when clicked executes 
  document.getElementById('logbutton').addEventListener('click',doLogin);
  function doLogin()
  {
    //Acess the text fields
    let tempUser = document.getElementById('logUsername').value;
    let tempPass = document.getElementById('logPass').value;

    // creating the json objects
    let myObject = JSON.stringify({"username":tempUser,"pass":tempPass});
    // ********************************************************************

    localStorage.setItem('tester',myObject);   
    let tempHolder = localStorage.getItem('tester');
    console.log(JSON.parse(tempHolder));

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
      
      userId = jsonObject.id;
      
      if( userId < 1 )
      {
        // indicates that they are not matches 
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

