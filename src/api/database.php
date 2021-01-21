<?php

$server = "mariadb-server";
$dbUsername = "root";
$dbPassword = "password";
$dbName = "Contax";

$conn = mysqli_connect($server, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
