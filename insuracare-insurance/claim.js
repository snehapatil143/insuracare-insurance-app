<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insurance Claim Form</title>
    <link rel="stylesheet" href="styles.css"> <!-- Your external CSS -->
    <script src="script.js" defer></script> <!-- Your external JS -->
    <style>
        /* Add CSS for Modal Popup */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 50%;
            margin: 100px auto;
            text-align: center;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        }

        .modal h2 {
            color: #28a745;
        }

        .modal p {
            font-size: 16px;
            color: #333;
        }

        .close-btn {
            font-size: 28px;
            font-weight: bold;
            color: #000;
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }

        .close-btn:hover {
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Insurance Claim Assistance</h2>
        <form onsubmit="submitClaim(event)">
            <label for="policyNumber">Policy Number:</label>
            <input type="text" id="policyNumber" name="policyNumber" required>

            <label for="claimType">Claim Type:</label>
            <select id="claimType" name="claimType">
                <option value="medical">Medical Expense</option>
                <option value="accident">Accidental Damage</option>
                <option value="property">Property Damage</option>
                <option value="life">Life Insurance Claim</option>
            </select>

            <label for="claimAmount">Claim Amount ($):</label>
            <input type="number" id="claimAmount" name="claimAmount" required>

            <button type="submit">Submit Claim</button>
        </form>

        <!-- Success Modal -->
        <div id="successModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" class="close-btn">&times;</span>
                <h2>✅ Claim Submitted Successfully!</h2>
                <div id="modalMessage"></div>
                <div id="processingTimeMessage"></div>
            </div>
        </div>

        <form action="index.html">
            <button class="back-btn">🏠 Back to Home</button>
        </form>
    </div>
</body>
</html>
