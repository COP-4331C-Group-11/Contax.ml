// The Cookie
//JSON {
//	"userId" : string,
//	"firstname" : string,
//	"lastname" : string,
//	"expdate" : string,
//}

function saveCookie(firstName, lastName, userId)
{
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	document.cookie = JSON.stringify({
		userId: userId,
		firstName: firstName,
		lastName: lastName,
		expDate: date,
	});
}

function readCookie()
{

	try {
		return JSON.parse(document.cookie);

	} catch (error) {
		document.lolcation.href = "index.html";
		return null;
	}
	
}

function doLogout()
{
	userId = 0;
	firstName = "";
	lastName = "";
	document.cookie = "firstName= ; expires = Thu, 01 Jan 2022 00:00:00 GMT";
	window.location.href = "index.html";
}
