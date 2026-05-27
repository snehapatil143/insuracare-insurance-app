// Auto-select health condition based on age input
document.getElementById("age").addEventListener("input", function () {
    const age = parseInt(this.value.trim());
    const healthSelect = document.getElementById("health");

    if (isNaN(age)) return;

    if (age >= 60) {
        healthSelect.value = "senior";
    } else if (age >= 40) {
        healthSelect.value = "pre-existing";
    } else {
        healthSelect.value = "healthy";
    }
});

function suggestPolicy() {
    let age = document.getElementById("age").value.trim();
    let budget = document.getElementById("budget").value.trim();
    let health = document.getElementById("health").value;
    let result = document.getElementById("result");

    if (age === "" || budget === "") {
        result.innerHTML = "❌ Please enter all details!";
        result.style.color = "red";
        return;
    }

    age = parseInt(age);
    budget = parseInt(budget);

    if (isNaN(age) || isNaN(budget)) {
        result.innerHTML = "❌ Please enter valid numeric values!";
        result.style.color = "red";
        return;
    }

    if (age < 18) {
        result.innerHTML = "❌ You must be at least 18 to get a policy!";
        result.style.color = "red";
        return;
    }

    let suggestion = "";

    if (health === "healthy") {
        suggestion = budget < 50
            ? "✅ Basic Health Policy (Affordable & Covers Essentials)"
            : "✅ Premium Health Plan (Covers Everything with Extra Benefits)";
    } else if (health === "pre-existing") {
        suggestion = budget < 100
            ? "✅ Pre-Existing Condition Plan (Covers Basic Treatments)"
            : "✅ Comprehensive Pre-Existing Plan (Covers All Treatments)";
    } else if (health === "senior") {
        suggestion = budget < 150
            ? "✅ Senior Citizen Essential Plan"
            : "✅ Senior Citizen Premium Plan (Covers All Health Costs)";
    }

    result.innerHTML = `🎯 Based on your age (${age}), condition (${health}), and budget ($${budget}/mo), we recommend:<br><strong>${suggestion}</strong>`;
    result.style.color = "green";
}

function goBack() {
    window.history.length > 1 ? window.history.back() : window.location.href = "index.html";
}
