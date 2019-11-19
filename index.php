<?php
/**
 * PHP Endpoint to handle all POST data and insertions.
 */
// Grab the contents of the request
$post = file_get_contents('php://input');
$data = json_decode($post);

// Set our header
header('Content-Type: application/json');

// Lets make sure we have values for all the required fields.
if(isset($data->phone) AND isset($data->fullName) AND isset($data->reason) AND isset($data->workEmail)) {
    $phone = $data->phone;
    $full_name = $data->fullName;
    $reason = $data->reason;
    $work_email = $data->workEmail;

    // Lets validate and sanitize all of our data
    $full_name = filter_var($full_name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $reason = filter_var($reason, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $work_email = filter_var($work_email, FILTER_SANITIZE_EMAIL);

    // Validate that the phone number is an INT
    if (filter_var($phone, FILTER_VALIDATE_INT) === false) {
        http_response_code(400);
        die(json_encode(array( error => "Invalid phone number.")));
    }

    // Validate e-mail
    if (filter_var($work_email, FILTER_VALIDATE_EMAIL) === false) {
        http_response_code(400);
        die(json_encode( array( error => "Invalid email address.")));
    }
    
    // Validate Name
    $name_regex = "/([^a-zA-Z0 ])/";
    $is_invalid_name = preg_match($name_regex, $full_name);
    if( $is_invalid_name ) {
        http_response_code(400);
        die(json_encode( array(error => "Invalid name.")));
    }

    // Create our MYSQL Connection
    $server = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "pm_practical_test";

    // Init connection
    $conn = new mysqli($server, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode(array( error => "Please check MYSQL connection.")));
    }

    // Create the query
    $query = "INSERT INTO leads (phone, full_name, work_email, reason) VALUES (${phone}, '${full_name}', '${work_email}', '${reason}')";

    // Make the query and send a response
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(array( status => 'success'));
    } else {
        http_response_code(400);
        echo json_encode(array(error => mysqli_error($conn)));
    }

    // Close our connection
    $conn->close();
} else {
    http_response_code(400);
    die(json_encode(array( error => 'Check form and please try again.')));
}
?>