<?php

// URL: api/editContact.php
// Input: Type JSON {
// 	"firstName" : string,
// 	"lastName" : string,
//  "phone" : string,
//  "email" : string,
//  "id" : string,
// }

// Output: Type JSON {
// 	"status" : string, // should return either error or success
//	"message" : string
// }
	$inData = getRequestInfo();

    require_once 'database.php';
	if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
	else
	{
		$sql = "UPDATE contacts SET (firstName='". $inData["firstName"]. "', lastName='" . $inData["lastName"] ."', phone='". $inData["phone"] ."', email='" . $inData["email"] . "', dateCreated='". date("Y/m/d") ."') WHERE id='". $inData["id"]."';";
        returnWithSuccess();
		$conn->close();
	}
		
	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError()
	{
		$retValue = '{"status":"error", "message" : "error"}';
		sendResultInfoAsJson( $retValue );
	}
	
    function returnWithSuccess( $yes )
	{
		$retValue = '{"status":"success", "message" : ""}';
		sendResultInfoAsJson( $retValue );
	}
	
?>