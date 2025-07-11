<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "natalienogebremichael@gmail.com"; // Replace with your Gmail
    $subject = "New Auto Repair Appointment Request";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $vehicle = htmlspecialchars($_POST['vehicle']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    $body = "Auto Repair Appointment Request:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Vehicle: $vehicle\n";
    $body .= "Service: $service\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                alert('Appointment sent successfully!');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Error sending your request. Please try again.');
                window.history.back();
              </script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
