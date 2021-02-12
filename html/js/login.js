var form = document.getElementById('loginForm')
// wait untill form is submitted

form.addEventListener('submit', (e) => doLogin(e));

function doLogin(e) {
  // prevent auto-submission 
  e.preventDefault()

  var username = document.getElementById('loginName').value;
  var password = document.getElementById('loginPassword').value;

  login(username, password);

}

async function login(username, password) {
  let response = await fetch('api/login.php', {
    method: 'POST',
    body: JSON.stringify({
      login : username,
      password : password,
    })
  });

  let json = await response.json();

  console.log(json);

  if (json.error != "")
  {
    return;
  }
  
  window.location.href = "contactPage.html";
  saveCookie(json.firstname, json.lastname, json.id);
  
}
  

