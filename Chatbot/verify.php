<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $verificationCode = $_POST["verificationCode"];

    // Hämta den sparade verifikationskoden från databasen eller filen
    // Jämför den angivna koden med den sparade koden

    // Om koden är korrekt, omdirigera till inloggningsformuläret
    if ($verificationCode == $savedVerificationCode) {
        header("Location: verification.php");
    } else {
        // Om koden är fel, visa ett felmeddelande
        echo "Felaktig verifikationskod. Försök igen.";
    }
}
?>
