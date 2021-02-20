// The Cookie
//JSON {
//	"userId" : string,
//	"firstName" : string,
//	"lastName" : string,
//	"expDate" : string,
//}

function saveCookie(firstName, lastName, userId) {
  // gets exp date
  var minutes = 20;
  var date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  // creates cookie
  let data = "userInfo=";
  data += JSON.stringify({
    userId: userId,
    firstName: firstName,
    lastName: lastName
  });
  data += `;expires=${date.toUTCString};`;
  document.cookie = data;
}

function readCookie() {
  // parses JSON
  try {
    let jsonStr = document.cookie.match(/\{.*\}/g)[0];
    return JSON.parse(jsonStr);
  } catch (error) {
    return null;
  }
}

function doLogout() {
  // resets variable back to their original values
  userId = 0;
  firstName = "";
  lastName = "";
  // removes cookie
  document.cookie = "userInfo= ; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  // returns back to homepage
  window.location.href = "index.html";
}
