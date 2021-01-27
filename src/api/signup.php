<?php

if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $password2 = $_POST["password2"];

    require_once 'database.php';
    require_once 'functions.php';

    if (emptyInputSignup($username, $password, $password2) !== false) {
        header("location : ../signup.php?error=emptyinput");
        exit();
    }

    if (invalidUid($username) !== false) {
        header("location : ../signup.php?error=invalidUid");
        exit();
    }

    if (pwdMatch($password, $password2) !== false) {
        header("location : ../signup.php?error=passwordsnomatch");
        exit();
    }

    if (uidExists($conn, $username) !== false) {
        header("location : ../signup.php?error=usernametaken");
        exit();
    }

    createUser($conn, $username, $password);
}

else {
    header("location : ../index.html");
    exit();
}