<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $myEmail = "pokierock@gmail.com";
    $header = "From: ".$email;
    $subject = "An email from a fan";
    $txt = "You have received an email from ".$name.".\n\n".$message;


    mail($myEmail, $subject, $txt, $header);
    header("Location: index.php?mailsend");
}
