<?php
// Include database connection file
include('db_config.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $policyNumber = $_POST['policyNumber'];
    $claimType = $_POST['claimType'];
    $claimAmount = $_POST['claimAmount'];

    // Prepare and bind the SQL query
    $stmt = $conn->prepare("INSERT INTO claims (policy_number, claim_type, claim_amount) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $policyNumber, $claimType, $claimAmount); // "ssd" means string, string, decimal

    // Execute the query
    if ($stmt->execute()) {
        echo "Claim submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
