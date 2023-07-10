<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$response = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;

echo $response;
?>