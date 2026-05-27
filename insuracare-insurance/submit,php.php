<?php
$servername = "localhost";
$username = "root";  // Change this if needed
$password = "";  // Change this if needed
$dbname = "contact_db"; // Your database name

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert data into database
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Your message has been saved!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
