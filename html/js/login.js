var form = document.getElementById("loginForm");
// wait untill form is submitted

form.addEventListener("submit", (e) => doLogin(e));

// Check cookie
if (readCookie() !== null)
  document.location.href = "contactPage.html";

function doLogin(e) {
  // prevent auto-submission
  e.preventDefault();

  var username = document.getElementById("loginName").value;
  var password = document.getElementById("loginPassword").value;

  login(username, password);
}

// trys to login
async function login(username, password) {
  let response = await fetch("api/login.php", {
    method: "POST",
    body: JSON.stringify({
      login: username,
      password: sha256(password)
    })
  });

  let json = await response.json();

  console.log(json);

  if (readCookie() !== null) {
    window.location.href = "contactPage.html";
    return;
  }

  if (json.status != "success") {
    // if failed it will display a message and return out of this function
    const message = document.getElementById("message");
    message.style.display = "block";
    return;
  }
  // if successful will redirect to contact page and make a cookie with the user data
  saveCookie(json.firstName, json.lastName, json.id);
  window.location.href = "contactPage.html";
}
