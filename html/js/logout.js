// all this file will do is clear the cookies currently created by the log in
function doLogout()
{
    userId = 0;
	firstName = "";
    lastName = "";
    // the expire date is updated to a date in the past to remove the cookie
    document.cookie = "firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    // this will return back to the log in page once the LogOut button is clicked
	window.location.href = "index.html";
}
