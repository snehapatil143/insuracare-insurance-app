document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            let answer = this.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                document.querySelectorAll(".faq-answer").forEach((item) => {
                    item.style.display = "none";
                });
                answer.style.display = "block";
            }
        });
    });
});

function goBack() {
    window.location.href = "index.html"; // Change this to your home page filename
}
