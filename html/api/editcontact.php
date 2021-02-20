<?php

// URL: api/editContact.php
// Input: Type JSON {
// 	"firstName" : string,
// 	"lastName" : string,
//  "oldPhone" : string,
//  "newPhone" : string,
//  "email" : string,
//  "userId" : string
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
		$sql = "UPDATE contacts SET firstName='". $inData["firstName"] . "', lastName='" . $inData["lastName"] ."', phone='". $inData["newPhone"] ."', email='" . $inData["email"] . "', dateCreated='". date("Y-m-d") ."' WHERE phone= '" . $inData["oldPhone"] . "' AND userId = '" . $inData["userId"] . "'";
		if( $result = $conn->query($sql) != TRUE )
		{
			returnWithError( $conn->error );
			return;
		}
        returnWithSuccess();
		$conn->close();
		return;
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