<?php
require_once "database.php";
require_once "functions.php";
$json = file_get_contents('php://input');
$json = rtrim($json,"\0");
$data = json_decode($json);

$userId = $data->userId;
$fname = $data->firstname;
$lname = $data->lastname;
$phonenum = $data->phonenumber;
$email = $data->email;
$date = $data->date;
$phone = "";

if(!hasName($fname, $lname))
{
    returnMessage("error", "Error: No name for contact.");
    exit();
}

#If phone number isn't left blank, it's checked to see if it's in a valid format. If not, gives error, if has hyphens, they're removed. 
#Only accepts 7 and 10 digit phone numbers.
if (!empty($phonenum) && !validPhone($phonenum))
{
    returnMessage("error","Error: ".$phonenum." is not a properly formatted phone number");
    exit();
}

#removes hyphens if necessary
$phone = sanitizePhone($phonenum);

#If email was provided confirms it's properly formatted in a name@host.something
if (!empty($email) && !validEmail($email))
{
    returnMessage("error","Error: ".$email." is not a proper email.");
    exit();
}

$contactTableSql = getContactTable($conn, $userId);
$contactTable    = sqlTableToArray($contactTableSql);
$errorCount   = searchTable($contactTable,$fname,$lname,$phone);

if ($errorCount == 1)
{
    returnMessage("error", "Error: Contact already exists.");
    exit();
}
elseif($errorCount == 2)
{
    returnMessage("error", "Error: Phone number already in use.");
    exit();
}
createContact($conn,$userId,$fname,$lname,$phone,$email, $date);

#######################################################################
function returnMessage($status, $message)
{
    $retObj = new \stdClass();
    $retObj->status = $status;
    $retObj->message = $message;
    header("Content-Type: application/json");
    echo json_encode($retObj);
}