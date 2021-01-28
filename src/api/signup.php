<?php
	$inData = getRequestInfo();

    require_once 'database.php';
	if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
	else
	{
		$sql = "INSERT INTO users (firstName, lastName, dateFirstOn, dateLastOn, username, password) 
            VALUES ('" . $inData["firstName"] . "', '" . $inData["lastName"] . "', '2020-12-12', '2020-12-13', '" . $inData["login"] . "', '" . $inData["password"] . "');";
		if( $result = $conn->query($sql) != TRUE )
		{
			returnWithError( $conn->error );
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