<?php

if (empty($_POST["submit"])) {
  header("location: /index.html");
  exit();
}

$username = $_POST["username"];
$password = $_POST["password"];

require_once 'database.php';

$user = getUser($conn, $username);

echo $user["password"];

function getUser($conn, $username) {
  $sql = "SELECT * FROM users WHERE username = ?";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../index.html?error=stmtfailed");
    exit();
  }

  mysqli_stmt_bind_param($stmt, "s", $username);
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);
  error_log(print_r($result, TRUE));

  $user = mysqli_fetch_assoc($result);
  if (!$user) {
    return NULL;
  }

  mysqli_stmt_close($stmt);
  return $user;
}
