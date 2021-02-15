<?php
// Specs
// URL: api/search.api
// Input:
//   Type: JSON
//   {
//     "userId": int,
//     "phone": string,
//   }
// Output:
//   Type: JSON
//   {
//     "status": string,
//     "message": string
//   }

$json = file_get_contents('php://input');
$data = json_decode($json);

// Validate JSON
if ($data == null || $data->$userId == null || $data->$phone == null)
  returnWithError("Input invalid");
// Validate JSON schema
if (!property_exists($data, "userId") || !property_exists($data, "phone"))
  returnWithError("Input invalid");

$userId = $data->userId;
$phone = $data->phone;

require_once 'database.php';

deleteRecord($conn, $userId, $phone);

function deleteRecord($conn, $userId, $phone) {
  $sql = "DELETE FROM contacts WHERE userId = ".$userId." AND phone = ".$phone;
  $retObj;

  // Check for errors
  if ($conn->query($sql) === TRUE)
    returnMessage("success", "");
  else
    returnMessage("error", "Error deleting record: ".mysqli_error($conn));
}

function returnMessage($status, $message) {
  $retObj = new \stdClass();
  $retObj->status = $status;
  $retObj->message = $message;
  echo json_encode($retObj);
}

function returnWithError($err) {
  // Creates empty object
  $json = new \stdClass();
  $json->status = "error";
  $json->message = $err;
  header('Content-type: application/json');
  echo json_encode($json);
  exit();
}
