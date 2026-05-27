<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "insurance";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
  die("❌ Database connection failed: " . $conn->connect_error);
}

$policyNumber = $_POST['policyNumber'];
$claimType = $_POST['claimType'];
$claimAmount = $_POST['claimAmount'];

$sql = "INSERT INTO claims (policy_number, claim_type, claim_amount) 
        VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssd", $policyNumber, $claimType, $claimAmount);

if ($stmt->execute()) {
  echo "✅ Claim submitted successfully!";
} else {
  echo "❌ Failed to submit claim!";
}

$stmt->close();
$conn->close();
?>
