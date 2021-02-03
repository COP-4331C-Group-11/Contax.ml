<?php
// Specs
// URL: api/search.api
// Input:
//   Type: JSON
//   {
//     "userId": int,
//     "searchStr": string,
//   }
// Output:
//   Type: JSON
//   {
//     "table": [
//       "id": int,
//       "userId": int,
//       "firstName": string,
//       "lastName": string,
//       "phone": string,
//       "email": string,
//       "dateCreated": string
//     ]
//   }

$json = file_get_contents('php://input');
$data = json_decode($json);

$userId = $data->userId;
$searchStr = $data->searchStr;

require_once 'database.php';

$contactTableSQL = getContactTable($conn, $userId);
$contactTable = sqlTableToArray($contactTableSQL);
$filteredTable = searchByString($contactTable, $searchStr);

// printTable($filteredTable);
returnWithTable($filteredTable);

function getContactTable($conn, $userId) {
  $sql = "SELECT * FROM contacts WHERE userId = ". $userId;
  return $conn->query($sql);
}

function sqlTableToArray($table) {
  $retval = array();

  if ($table->num_rows > 0)
    while($row = $table->fetch_assoc())
      array_push($retval, $row);

  return $retval;
}

function printTable($table) {
  echo "<table>";
  echo "<tr><th>id</th><th>user id</th><th>first name</th><th>last name</th><th>phone</th><th>email</th><th>date created</th>";
  // output data of each row
  foreach($table as $row) {
    echo "<tr>";
    foreach ($row as $key => $value) {
      echo "<td>".$value."</td>";
    }
    echo "</tr>";
  }
  echo "</table>";
}

function searchByString($table, $searchStr) {
  $result = array();

  foreach($table as $row)
    if (str_contains($row["firstName"], $searchStr) || str_contains($row["lastName"], $searchStr))
      array_push($result, $row);

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
  $json->error = "";

  // Specify response type
  header('Content-type: application/json');
	echo json_encode($json);
}

function returnWithError($err) {
  // Creates empty object
  $json = new \stdClass();
  $json->error = $err;
  header('Content-type: application/json');
  echo $json;
  exit();
}
