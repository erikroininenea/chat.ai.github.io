<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Lagra användarinformationen och generera en unik kod
    $verificationCode = generateVerificationCode();
    // Spara $verificationCode och andra användaruppgifter i en databas eller fil

    // Skicka e-post med verifikationskoden
    $subject = "Verifikationskod för registrering";
    $message = "Din verifikationskod är: $verificationCode";
    mail($email, $subject, $message);

    // Omdirigera till sidan för att ange verifikationskoden
    header("Location: verification.php");
}

function generateVerificationCode() {
    // Generera och returnera en unik verifikationskod
    // Till exempel, returnera substr(md5(uniqid(mt_rand(), true)), 0, 6);
}
?>
