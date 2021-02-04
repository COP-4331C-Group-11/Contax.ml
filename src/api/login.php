<?php

# If we don't get to this file from a submit button
// if (empty($_POST["submit"])) {
//   header("location: /index.html");
//   exit();
// }

// $username = $_POST["username"];
// $password = $_POST["password"];

// require_once 'database.php';

// $user = getUser($conn, $username);

// echo $user["password"];

// function getUser($conn, $username) {
//   $sql = "SELECT * FROM users WHERE username = ?";
//   $stmt = mysqli_stmt_init($conn);
//   if (!mysqli_stmt_prepare($stmt, $sql)) {
//     header("location: ../index.html?error=stmtfailed");
//     exit();
//   }

//   mysqli_stmt_bind_param($stmt, "s", $username);
//   mysqli_stmt_execute($stmt);
//   $result = mysqli_stmt_get_result($stmt);
//   error_log(print_r($result, TRUE));

//   $user = mysqli_fetch_assoc($result);
//   if (!$user) {
//     return NULL;
//   }

//   mysqli_stmt_close($stmt);
//   return $user;
// }

$inData = getRequestInfo();
	
$id = 0;
$firstName = "";
$lastName = "";
require_once 'database.php';
$sql = "SELECT id,firstName,lastName FROM users where username='" . $inData["username"] . "' and password='" . $inData["pass"] . "'";
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
	$retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
	sendResultInfoAsJson( $retValue );
}

function returnWithInfo( $firstName, $lastName, $id )
{
	$retValue = '{"id":"'. $id .'","firstName":"'. $firstName .'","lastName":"'. $lastName .'"}';
	sendResultInfoAsJson( $retValue );
}
