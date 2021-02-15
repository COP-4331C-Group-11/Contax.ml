// The Cookie
//JSON {
//	"userId" : string,
//	"firstName" : string,
//	"lastName" : string,
//	"expDate" : string,
//}

function saveCookie(firstName, lastName, userId)
{
	// gets exp date
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	// creates cookie
	document.cookie = JSON.stringify({
		userId: userId,
		firstName: firstName,
		lastName: lastName,
		expDate: date,
	});
}

function readCookie()
{
	// parses JSON
	try {
		return JSON.parse(document.cookie);

	} catch (error) {
		// returns back to homepage if there was no JSON
		document.location.href = "index.html";
		return null;
	}
	
}

function doLogout()
{
	// resets variable back to their original values
	userId = 0;
	firstName = "";
	lastName = "";
	// removes cookie
	document.cookie = "firstName= ; expires = Thu, 01 Jan 2022 00:00:00 GMT";
	// returns back to homepage
	window.location.href = "index.html";
}
