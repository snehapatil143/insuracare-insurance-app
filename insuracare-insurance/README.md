# Insuracare – Smart Insurance Web Assistant 🛡️

**Insuracare** is a full-stack insurance support web application designed to streamline the experience of users seeking insurance services. It includes interactive modules like a chatbot, premium calculator, claim submission form, FAQs, and more. Built using HTML, CSS, JavaScript for the frontend, and PHP with MySQL for backend operations.

---

## 📌 Features

- 🤖 **Chatbot Interface**: Simulates an AI assistant to answer user queries about insurance.
- 🧮 **Premium Calculator**: Interactive page to estimate insurance policy premiums based on user input.
- 📝 **Online Claim Submission**: Secure form where users can file insurance claims.
- ❓ **FAQ Section**: Frequently Asked Questions to resolve user doubts.
- 📞 **Contact & About Pages**: Informative pages for user engagement and details.
- 🗂️ **Modular Design**: Clean separation of features into their respective files for maintainability.
- 🧩 **Database Connectivity**: PHP and MySQL integration for dynamic content and storing claim requests.

---

## 🛠️ Tech Stack

| Layer     | Technologies                  |
|-----------|-------------------------------|
| Frontend  | HTML, CSS, JavaScript         |
| Backend   | PHP                           |
| Database  | MySQL                         |
| Tools     | VS Code, GitHub, XAMPP        |

---

## 📂 Project Folder Structure

insuracare-insurance-app/
├── about.html
├── calculator.html / calculator.js / calculator.css
├── chatbot.html / chatbot.js / chatbot.css / chatbotimage.jpg
├── claim.html / claim.php / claims.php
├── contact.html
├── db_config.php
├── faq.html / faq.js / faq.css
├── features.html
├── README.md ← This file


## 🚀 Getting Started

### 🖥️ Run Locally (Using XAMPP)
1. Download and install [XAMPP](https://www.apachefriends.org/index.html).
2. Copy this project folder (`insuracare-insurance-app/`) into:C:/xampp/htdocs/
3. Launch **XAMPP Control Panel** and start:
- Apache
- MySQL
4. Open a browser and navigate to:
http://localhost/insuracare-insurance/


### 💽 Setup MySQL Database
1. Open [phpMyAdmin](http://localhost/phpmyadmin).
2. Create a new database (e.g., `insuracare`).
3. Create necessary tables based on your `claim.php` structure.
4. Update the `db_config.php` file with correct DB credentials:
```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "insuracare";