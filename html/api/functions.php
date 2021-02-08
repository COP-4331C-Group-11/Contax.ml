<?php

function emptyInputSignup($username, $password, $password2) {
    $result;

    if (empty($username) || empty($password) || empty($password2)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function invalidUid($username) {
    $result;

    if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        $result = true;
    }
    else {
        $result = false;
    }
    return $result;
}

function uidExists($conn, $username) {
    $sql = "SELECT * FROM users WHERE username = ?;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location : ../signup.php?error=stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    }

    else {
        $result = false;
        return $result;
    }

    mysqli_stmt_close($stmt);
}

function createUser($conn, $username, $password) {
    $sql = "INSERT INTO users (username, password) VALUES (?, ?) ;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location : ../signup.php?error=stmtfailed");
        exit();
    }

    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "ss", $username, $hashedPwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location : ../signup.php?error=none");
    exit();
<<<<<<< Updated upstream
<<<<<<< HEAD
=======

>>>>>>> Stashed changes
}
/* --- Sign-up Functions --- */

/* --- Search Functions --- */
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

function searchByString($table, $searchStr) {
    $result = array();
  
    foreach($table as $row)
      if (str_contains($row["firstName"], $searchStr) || str_contains($row["lastName"], $searchStr))
        array_push($result, $row);
  
    return $result;
}

/* --- Search Functions --- */

/* --- Add Contact Functions --- */
function hasName($fname, $lname){
    
    $result;

    if(empty($fname) && empty($lname))
    {
       $result = false;
    }
    else
    {
       $result = true;
    }

    return $result;
}

function searchTable($table, $fname, $lname, $phone)
{
   
    foreach($table as $row)
     {
        if( (strcmp(strtolower($row["firstName"]), strtolower($fname)) == 0) && (strcmp(strtolower($row["last"]), strtolower($lname)) ==0))
        {
            return 1;
        }  
        if( !empty($phone) && (strcmp($row["phone"],$phone) ==0))
        {
            return 2;
        }
    }

    return 0;
}

function validEmail($email)
{
    $pattern1 = "/^([[:alnum:]]+)@([[:alnum:]])+.([[:alnum:]])+$/i";

    if(preg_match($pattern1, $email) == 1)
        return true;
    else    
        return false;
}

function validPhone($phonenum)
{
    #5582345, 5615582345, 561-558-2345,
    $pattern1 = "/^(([0-9]{3})?[0-9]{7}$)/";
    $pattern2 = "/^(([0-9]{3}-)?[0-9]{3}-[0-9]{4}$)/";

    if(preg_match($pattern1, $phonenum) || preg_match($pattern2, $phonenum))
    {    return true;}
    else    
    {    return false;}
}
function sanitizePhone($phonenum)
{
    $phone = "";
    $pattern1 = "/^(([0-9]{3})?[0-9]{7}$)/";
    $pattern2 = "/^(([0-9]{3}-)?[0-9]{3}-[0-9]{4}$)/";
    if (preg_match($pattern1, $phonenum))
        return $phonenum;
    elseif (preg_match($pattern2, $phonenum))
    {
        $phone = preg_replace("/-/","",$phonenum);
        return $phone;
    }
}

function createContact($conn,$userId,$fname,$lname,$phonenum,$email,$date) {
    $sql = "INSERT INTO contacts (userid, firstName, lastName, phone, email, dateCreated) VALUES (?, ?, ?, ?, ?, ?);";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        returnMessage("error", "Error: ".mysqli_error($conn));
        exit();
    }


    #leaving phone number as a string incase given an empty string
    mysqli_stmt_bind_param($stmt, "isssss", $userId, $fname, $lname, $phonenum, $email, $date);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    returnMessage("success","");
}
/* --- Add Contact Functions --- */
=======
}
>>>>>>> 5c59292b77d0d5a0a43c11f09228e0f5d54d399d
