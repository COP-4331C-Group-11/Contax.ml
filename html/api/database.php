<?php

$server = "mariadb-server";
$dbUsername = "root";
$dbPassword = "password";
$dbName = "Contax";

// This is for the actual server
if (isset($_ENV["DB_HOST"]))
  $server = $_ENV["DB_HOST"];
if (isset($_ENV["DB_PASSWORD"]))
  $dbPassword = $_ENV["DB_PASSWORD"];

$conn = mysqli_connect($server, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
