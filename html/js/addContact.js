var form = document.getElementById('add-contact-modal')

// wait until form is submitted
form.addEventListener('submit', (e) => addContact(e))

document.querySelector("#new-contact-button").addEventListener("click", (e) => {
  modal = document.querySelector("#modal-container");
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
});

document.querySelector(".close-button").addEventListener("click", (e) => {
  e.preventDefault();
  modal = document.querySelector("#modal-container");
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
});

async function addContact(e) {
  // prevent auto-submission 
  e.preventDefault()

  var firstName = document.getElementById('fname-input').value;
  var lastName = document.getElementById('lname-input').value;
  var email = document.getElementById('email-input').value;
  var phone = document.getElementById('phone-input').value;

  const currDate = (new Date()).toISOString().split("T")[0];
  console.log(currDate);

  // fetch post request
  let response = await fetch('api/addcontact.php', {
    method:'POST',
    body: JSON.stringify({
      userId: readCookie().userId,
      firstname: firstName,
      lastname: lastName,
      phonenumber: phone,
      email: email,
      date: currDate
    })
  });

  let json = await response.json();

  if (json.status === "error")
    console.log(json.message);

  // Close modal
  modal = document.querySelector("#modal-container");
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";

  // Update Table
  updateTable(searchInput.value);
}
