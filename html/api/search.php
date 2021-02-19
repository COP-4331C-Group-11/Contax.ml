<?php
// Specs
// URL: api/search.api
// Input:
//   Type: JSON
//   {
//     "userId": int,
//     "firstName": string,
//     "lastName": string,
//     "searchStr": string,
//   }
// Output:
//   Type: JSON
//     {
//       "status": string,
//       "message": string,
//       "table": [
//         "firstName": string,
//         "lastName": string,
//         "phone": string,
//         "email": string,
//         "dateCreated": string
//       ]
//     }

$json = file_get_contents('php://input');
$data = json_decode($json);

// Validate JSON
if (is_null($data) || is_null($data->userId) || is_null($data->searchStr))
  returnWithError("Input invalid");
// Validate JSON schema
if (!property_exists($data, "userId") || !property_exists($data, "searchStr"))
  returnWithError("Input invalid");

$userId = $data->userId;
$searchStr = $data->searchStr;

require_once 'database.php';

$contactTableSQL = getContactTable($conn, $userId);
$contactTable = sqlTableToArray($contactTableSQL);
$filteredTable = searchByString($contactTable, $searchStr);

returnWithTable($filteredTable);

function getContactTable($conn, $userId) {
  $sql = "SELECT * FROM contacts WHERE userId = ". $userId;
  return $conn->query($sql);
}

function sqlTableToArray($table) {
  $retval = array();

  if ($table->num_rows > 0) {
    while($row = $table->fetch_assoc()) {
      // Remove sensitive information
      unset($row["id"]);
      unset($row["userId"]);
      array_push($retval, $row);
    }
  }

  return $retval;
}

function searchByString($table, $searchStr) {
  $result = array();

  foreach($table as $row){
    if (str_contains(strtolower($row["firstName"]), $searchStr))
      array_push($result, $row);
    else if (str_contains(strtolower($row["lastName"]), $searchStr))
      array_push($result, $row);
  }

  return $result;
}

function returnWithTable($table) {
  // Creates empty object
  $json = new \stdClass();
  $json->table = array();

  foreach ($table as $row) {
    $jsonRow = new \stdClass();
    foreach ($row as $key => $value)
      $jsonRow->$key = $value;
    
    array_push($json->table, $jsonRow);
  }

  // Add empty error
  $json->status = "success";
  $json->message = "";

  // Specify response type
  header('Content-type: application/json');
	echo json_encode($json);
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
