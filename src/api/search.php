<?php

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
  $json = "{\"table\": [ ";

  foreach ($table as $row) {
    $json .= "{";
    foreach ($row as $key => $value) {
      if (!is_numeric($value))
        $json .= "\"".$key."\":\"".$value."\",";
      else
        $json .= "\"".$key."\":".$value.",";
    }
    $json = substr($json, 0, -1);
    $json .= "},";
  }
  $json = substr($json, 0, -1);
  $json .= "]";

  // Add empty error
  $json .= ",\"error\": \"\"}";

  header('Content-type: application/json');
	echo $json;
}

function returnWithError($err) {
  $json = "{\"error\":\"".$err."\"}";
  header('Content-type: application/json');
  echo $json;
  exit();
}
