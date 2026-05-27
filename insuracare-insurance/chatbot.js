const chatBox = document.getElementById("chat-box");

// Knowledge Base: Questions and Answers
const botKnowledge = {
    "insurance_coverage": {
        text: "Our standard policy covers general physician visits, hospitalization, prescribed medication, and emergency services. Do you need details on specific plans?",
        nextOptions: [
            { text: "View Gold Plan", action: "gold_plan" },
            { text: "View Silver Plan", action: "silver_plan" },
            { text: "Back to Main Menu", action: "main_menu" }
        ]
    },
    "gold_plan": {
        text: "The Gold Plan offers 100% coverage on hospitalization and zero copay on diagnostics. Premium starts at $50/month.",
        nextOptions: [{ text: "Back to Main Menu", action: "main_menu" }]
    },
    "silver_plan": {
        text: "The Silver Plan covers 80% of hospitalization costs with a small copay. Premium starts at $30/month.",
        nextOptions: [{ text: "Back to Main Menu", action: "main_menu" }]
    },
    "file_claim": {
        text: "To file a claim, you can upload your documents through the 'Claims' section of this portal or call our hotline. Would you like the hotline number?",
        nextOptions: [
            { text: "Yes, give me the number", action: "hotline_number" },
            { text: "No, thanks", action: "main_menu" }
        ]
    },
    "hotline_number": {
        text: "Our 24/7 Claims Hotline is 1-800-INSURA-HELP (1-800-467-8724).",
        nextOptions: [{ text: "Back to Main Menu", action: "main_menu" }]
    },
    "check_status": {
        text: "You can check your claim status by entering your Claim ID in the 'Track Claim' page.",
        nextOptions: [{ text: "Back to Main Menu", action: "main_menu" }]
    },
    "password_reset": {
        text: "To reset your password, click the 'Forgot Password' link on the login page and follow the email instructions.",
        nextOptions: [{ text: "Back to Main Menu", action: "main_menu" }]
    },
    "main_menu": {
        text: "How else can I assist you today?",
        nextOptions: [
            { text: "Insurance Coverage", action: "insurance_coverage" },
            { text: "File a Claim", action: "file_claim" },
            { text: "Check Claim Status", action: "check_status" },
            { text: "Reset Password", action: "password_reset" }
        ]
    }
};

const initialOptions = [
    { text: "Insurance Coverage", action: "insurance_coverage" },
    { text: "File a Claim", action: "file_claim" },
    { text: "Check Claim Status", action: "check_status" },
    { text: "Reset Password", action: "password_reset" }
];

// Start the chat
function startChat() {
    chatBox.innerHTML = ""; // Clear chat
    addBotMessage("Hello! I'm the InsuraCare Health Bot. How can I help you today?");
    showOptions(initialOptions);
}

// Add a message from the Bot (Left side)
function addBotMessage(text) {
    const div = document.createElement("div");
    div.classList.add("message", "bot-message");
    div.textContent = text;
    chatBox.appendChild(div);
    scrollToBottom();
}

// Add a message from the User (Right side)
function addUserMessage(text) {
    const div = document.createElement("div");
    div.classList.add("message", "user-message");
    div.textContent = text;
    chatBox.appendChild(div);
    scrollToBottom();
}

// Show Typing Indicator
function showTypingIndicator() {
    const div = document.createElement("div");
    div.classList.add("message", "bot-message", "typing-indicator");
    div.id = "typing-indicator";
    div.innerHTML = "<span></span><span></span><span></span>"; // Dots
    chatBox.appendChild(div);
    scrollToBottom();
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typingDiv = document.getElementById("typing-indicator");
    if (typingDiv) typingDiv.remove();
}

// Display clickable options
function showOptions(options) {
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options-container");

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("option-button");
        btn.textContent = opt.text;
        btn.onclick = () => handleUserSelection(opt.text, opt.action, optionsDiv);
        optionsDiv.appendChild(btn);
    });

    chatBox.appendChild(optionsDiv);
    scrollToBottom();
}

// Handle User Selection
function handleUserSelection(featureText, actionKey, optionsDiv) {
    // 1. Remove the options buttons (cleanup)
    optionsDiv.remove();

    // 2. Show User's choice as a message
    addUserMessage(featureText);

    // 3. Show typing indicator
    showTypingIndicator();

    // 4. Simulate delay, then show Bot's response
    setTimeout(() => {
        removeTypingIndicator();

        const responseObj = botKnowledge[actionKey];
        if (responseObj) {
            addBotMessage(responseObj.text);
            
            // 5. Show next options (if any) or loop back to main menu logic
            if (responseObj.nextOptions) {
                setTimeout(() => showOptions(responseObj.nextOptions), 500); 
            }
        } else {
            addBotMessage("I'm sorry, I didn't understand that context. Let's start over.");
            showOptions(initialOptions);
        }

    }, 1500); // 1.5s simulated delay
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initialize
document.addEventListener("DOMContentLoaded", startChat);
