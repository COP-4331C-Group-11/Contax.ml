<?php

// URL: api/editContact.php
// Input: Type JSON {
// 	"firstName" : string,
// 	"lastName" : string,
//  "phone" : string,
//  "email" : string,
//  "id" : int
// }

// Output: Type JSON {
// 	"status" : string, // should return either error or success
//	"message" : string // empty if success, error if error
// }
	$inData = getRequestInfo();
	date_default_timezone_set('EST');

    require_once 'database.php';
	if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
		returnWithError("Connection Failed");
    }
	else
	{
		$sql = "UPDATE contacts SET firstName='". $inData["firstName"] . "', lastName='" . $inData["lastName"] ."', phone='". $inData["phone"] ."', email='" . $inData["email"] . "', dateCreated='". date("Y/m/d") ."' WHERE id= ". intval($inData["id"]);
		if( $result = $conn->query($sql) != TRUE )
		{
			returnWithError( $conn->error );
		}
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
	
	function returnWithError( $error )
	{
		$retValue = '{"status":"error", "message" : "'.$error.'"}';
		sendResultInfoAsJson( $retValue );
	}
	
    function returnWithSuccess()
	{
		$retValue = '{"status":"success", "message" : ""}';
		sendResultInfoAsJson( $retValue );
	}
	
?>