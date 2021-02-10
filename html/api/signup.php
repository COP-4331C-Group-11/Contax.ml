<?php

// URL: api/signup.php
// Input: Type JSON {
// 	"firstName" : string,
// 	"lastName" : string,
//  "login" : string,
//  "password" : string,
// }
	$inData = getRequestInfo();

    require_once 'database.php';
	if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
	else
	{
		$sql = "SELECT id,firstName,lastName FROM users where username='" . $inData["login"] . "'";
		$result = $conn->query($sql);
		if ($result->num_rows > 0)
		{
			returnWithError( $conn->error );
		}
		else {
			$date = date("Y/m/d");
			$sql = "INSERT INTO users (firstName, lastName, dateFirstOn, dateLastOn, username, password) 
				VALUES ('" . $inData["firstName"] . "', '" . $inData["lastName"] . "', '" . $date  . "', '" . date("Y/m/d")  . "', '" . $date . "', '" . $inData["password"] . "');";
			if( $result = $conn->query($sql) != TRUE )
			{
				returnWithError( $conn->error );
			}
		}
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
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>