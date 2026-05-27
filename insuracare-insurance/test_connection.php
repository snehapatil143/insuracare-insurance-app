<?php
include('db_config.php');  // Include the database configuration file

if ($conn) {
    echo "Successfully connected to the database!";
} else {
    echo "Connection failed: " . $conn->connect_error;
}
?>
