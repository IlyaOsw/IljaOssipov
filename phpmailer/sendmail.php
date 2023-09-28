<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        try {
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'ossipov96@gmail.com';
            $mail->Password   = 'hjqhjluknqgqxgyj';
            $mail->SMTPSecure =  PHPMailer::ENCRYPTION_SMTPS;  
            $mail->Port       = 587;
            $mail->CharSet    = 'UTF-8';

            $mail->setFrom('ossipov96@gmail.com');
            $mail->addAddress($_POST['email']);

            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            $mail->isHTML(true);
            $mail->Subject = '=?utf-8?B?' . base64_encode('Message from Resume') . '?=';
            $mail->Body = 'Name: ' . $name . '<br />
                            Email: ' . $email . '<br />
                                <b>Message:</b> ' . $message;
            
            
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
?>