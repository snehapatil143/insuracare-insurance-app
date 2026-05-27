document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        fetch("submit.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            if (data.status === "success") {
                alert("✅ Message sent successfully!"); // Show success alert
                form.reset(); // Reset form fields
            } else {
                alert("❌ " + data.message); // Show error message
            }
        })
        .catch(error => alert("❌ Error: Could not send message. Try again!"));
    });
});
