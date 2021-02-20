// Event Listeners
const searchInput = document.querySelector("#contact-search-input");
searchInput.addEventListener("keyup", (e) => updateTable(e.target.value));

// Speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = () => console.log("Voice recording...");
recognition.onresult = (event) => {
  searchInput.value = event.results[event.resultIndex][0].transcript
  updateTable(searchInput.value);
};

function main() {
  if (readCookie() == null)
    document.location.href = "index.html";

  updateTable("");
}

function startSpeechRec() {
  recognition.start();
}

async function getContacts(searchStr) {
  // Wait for response
  const apiUrl="api/search.php";
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      userId: readCookie().userId,
      searchStr: searchStr
    })
  });

  // Convert response to string
  // Note: response.text() gives back a string
  const obj = await response.json();
  
  return obj.table;
}

// Just creates table from js object
function updateContactList(table) {
  const tableEl = document.querySelector("#contact-table");
  // output data of each row
  for(const row of table) {
    let phoneNumber;
    const tableRow = tableEl.insertRow();
    tableRow.classList.add("data-row");
    for (const key in row) {
      // Save phone number for delete
      if (key == "phone")
        phoneNumber = row[key];

      tableRow.insertCell().innerHTML = row[key];
    }
    // Add edit and delete buttons
    const editBttn = document.createElement("BUTTON");
    editBttn.classList.add("edit-button");
    editBttn.innerHTML = "EDIT";
    const deleteBttn = document.createElement("BUTTON");
    deleteBttn.classList.add("delete-button");
    deleteBttn.innerHTML = "DELETE";
    // Add event listeners
    editBttn.addEventListener("click", (e) => editContact(tableRow, editBttn, phoneNumber));
    deleteBttn.addEventListener("click", (e) => deleteContact(phoneNumber));
    // Insert into html table
    bttnCell = tableRow.insertCell();
    bttnCell.appendChild(editBttn);
    bttnCell.appendChild(deleteBttn);
  }
}

async function updateTable(searchStr) {
  const contactTable = await getContacts(searchStr);

  // Delete old data
  for (let row of document.querySelectorAll(".data-row"))
    row.remove();

  const html = updateContactList(contactTable);
}

async function deleteContact(phoneNumber) {
  const apiUrl="api/deleteContact.php";
  const cookie = readCookie();
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      userId: cookie.userId,
      firstName: cookie.firstName,
      lastName: cookie.lastName,
      phone: phoneNumber
    })
  });

  updateTable(searchInput.value);
}

function editContact(tableRow, editBttn, phoneNumber) {
  tableRow.style.outline = "2px solid black";
  // Make cells editable
  for (let i = 0; i < tableRow.cells.length-1; i++)
    tableRow.cells[i].contentEditable = "true";

  // Create confirm button
  const confirmBttn = document.createElement("BUTTON");
  confirmBttn.classList.add("confirm-button");
  confirmBttn.innerHTML = "CONFIRM";
  confirmBttn.addEventListener("click", () => confirmEdit(tableRow, editBttn, confirmBttn, phoneNumber));

  // Replace edit button with confirm button
  editBttn.replaceWith(confirmBttn);
}

async function confirmEdit(tableRow, editBttn, confirmBttn, phoneNumber) {
  let json = {
    userId: readCookie().userId,
    firstName: "",
    lastName: "",
    oldPhone: "",
    newPhone: "",
    email: "",
  }

  // Add edited data to object
  json.firstName = tableRow.cells[0].innerText;
  json.lastName = tableRow.cells[1].innerText;
  json.newPhone = tableRow.cells[2].innerText;
  json.email = tableRow.cells[3].innerText;
  json.oldPhone = phoneNumber;
  console.log(json);

  const apiUrl="api/editcontact.php";
  let response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(json)
  });

  // Restore edit button
  confirmBttn.replaceWith(editBttn);
  updateTable(searchInput.value);
}

main();
