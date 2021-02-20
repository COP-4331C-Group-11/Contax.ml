var form = document.getElementById("reg");
// wait untill form is submitted
form.addEventListener("submit", function (e) {
  // prevent auto-submission
  e.preventDefault();

  var login = document.getElementById("logUsername").value;
  var password = document.getElementById("logPass").value;
  var firstName = document.getElementById("firstNameReg").value;
  var lastName = document.getElementById("lastNameReg").value;

  // fetch post request
  fetch("api/signup.php", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      login: login,
      password: sha256(password)
    }),
    // adding xml headers
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    //getting the promise
    .then((res) => res.json())
    .then((json) => {
      if (json.status != "success") {
        // if failed it will display a message and return out of this function
        const message = document.getElementById("message");
        message.innerText = json.message;
        return;
      }
      // if successful will redirect to contact page and make a cookie with the user data
      saveCookie(json.firstName, json.lastName, json.id);
      window.location.href = "index.html";
    });
});
