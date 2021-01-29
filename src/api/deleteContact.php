<?php

$json = file_get_contents('php://input');
$data = json_decode($json);

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
