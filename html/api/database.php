<?php

$server = "mariadb-server";
$dbUsername = "root";
$dbPassword = "password";
$dbName = "Contax";

$envFile = "../.env.json";

// This is for the actual server
if (file_exists($envFile)) {
  $creds = json_decode(file_get_contents($envFile));
  $server = $creds->host;
  $dbUsername = $creds->username;
  $dbPassword = $creds->password;
}

$conn = mysqli_connect($server, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
