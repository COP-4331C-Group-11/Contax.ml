<?php

// URL: api/signup.php
// Input: Type JSON {
// 	"firstName" : string,
// 	"lastName" : string,
//  "login" : string,
//  "password" : string,
// }

// Output: Type JSON {
// 	"id" : string,
// 	"firstName" : string,
// 	"lastName" : string,
//  "status" : string, // Returns the error or success
//  "message" : string // returns the actual error or nothing if success
// }
	$inData = getRequestInfo();
	date_default_timezone_set('EST');

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
			returnWithError("Username Taken");
		}
		else {
			$date = date("Y/m/d");
			$sql = "INSERT INTO users (firstName, lastName, dateFirstOn, dateLastOn, username, password) 
				VALUES ('" . $inData["firstName"] . "', '" . $inData["lastName"] . "', '". $date . "', '". $date . "', '" . $inData["login"] . "', '" . $inData["password"] . "');";
			if( $result = $conn->query($sql) != TRUE )
			{
				returnWithError( $conn->error );
			}
			$sql = "SELECT id,firstName,lastName FROM users where username='" . $inData["login"] . "' and password='" . $inData["password"] . "'";
			$result = $conn->query($sql);
			if ($result->num_rows > 0)
			{
				$row = $result->fetch_assoc();
				$firstName = $row["firstName"];
				$lastName = $row["lastName"];
				$id = $row["id"];
				
				returnWithInfo($firstName, $lastName, $id );
			}
			else
			{
				returnWithError( "No Records Found" );
			}
			$conn->close();
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
		$retValue = '{"id":0,"firstName":"","lastName":"","status": "error", "message" : "' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}

	function returnWithInfo( $firstName, $lastName, $id )
	{
		$retValue = '{"id":' . $id . ',"firstName":"' . $firstName . '","lastName":"' . $lastName . '","status":"success", "message" : ""}';
		sendResultInfoAsJson( $retValue );
	}
?>