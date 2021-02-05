// Event Listeners
document.getElementById("contact-search")
  .addEventListener("keyup", (e) => {
    console.log(e);
    updateTable(e.target.value);
  });

// Script start
updateTable("");

async function getContacts(searchStr) {
  // Wait for response
  const apiUrl="http://localhost:8080/api/search.php";
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      searchStr: searchStr
    })
  });

  // Convert response to string
  // Note: response.text() gives back a string
  const obj = await response.json();
  
  return obj.table;
}

// Just creates table from js object
function tableToHTML(table) {
  let html = "<table>";
  html += "<tr><th>id</th><th>user id</th><th>first name</th><th>last name</th><th>phone</th><th>email</th><th>date created</th>";
  // output data of each row
  for(let row of table) {
    html += "<tr>";
    for (const key in row) {
      html += `<td>${row[key]}</td>`;
    }
    html += "</tr>";
  }
  html += "</table>";

  return html;
}

async function updateTable(searchStr) {
  const contactTable = await getContacts(searchStr);
  const html = tableToHTML(contactTable);
  document.getElementById("contact-table").innerHTML = html;
}

async function deleteContact(phone) {
  const apiUrl="http://localhost:8080/api/deleteContact.php";
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      phone: phone
    })
  });
}
