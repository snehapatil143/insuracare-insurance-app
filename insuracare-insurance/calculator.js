function calculatePremium() {
    let age = document.getElementById("age").value;
    let coverage = document.getElementById("coverage").value;
    let result = document.getElementById("result");

    if (age === "" || coverage === "") {
        result.innerHTML = "❌ Please enter all details!";
        result.style.color = "red";
        return;
    }

    age = parseInt(age);
    coverage = parseFloat(coverage);

    if (age < 18 || age > 100) {
        result.innerHTML = "❌ Age must be between 18 and 100!";
        result.style.color = "red";
        return;
    }

    if (coverage <= 0) {
        result.innerHTML = "❌ Coverage must be greater than 0!";
        result.style.color = "red";
        return;
    }

    // Simple premium calculation formula
    let premium = (coverage * 0.05) + (age * 2);

    result.innerHTML = `✅ Estimated Premium: $${premium.toFixed(2)}`;
    result.style.color = "green";
}
