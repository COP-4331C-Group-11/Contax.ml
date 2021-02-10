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
			returnUsernameTaken();
		}
		else {
			$date = date("Y/m/d");
			$sql = "INSERT INTO users (firstName, lastName, dateFirstOn, dateLastOn, username, password) 
				VALUES ('" . $inData["firstName"] . "', '" . $inData["lastName"] . "', '". $date . "', '". $date . "', '" . $inData["login"] . "', '" . $inData["password"] . "');";
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
	
	function returnUsernameTaken()
	{
		$retValue = '{"error":"taken"}';
		sendResultInfoAsJson( $retValue );
	}

	function returnWithError( $err )
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>