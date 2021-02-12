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
// 	"message" : string // should return either error or success
// }
	$inData = getRequestInfo();

    require_once 'database.php';
	if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
	else
	{
		$sql = "UPDATE contacts SET (firstName='". $inData["firstName"]. "', lastName='" . $inData["lastName"] ."', phone='". $inData["phone"] ."', email='" . $inData["email"] . "', dateCreated='". date("Y/m/d") ."') WHERE id='". $inData["id"]."';";
		$result = $conn->query($sql);
		if ($result->num_rows > 0)
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
	
	function returnWithError( $err )
	{
		$retValue = '{"message":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
    function returnWithSuccess( $yes )
	{
		$retValue = '{"message":"Success!"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>