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
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;
            $mail->CharSet    = 'UTF-8';

            $mail->setFrom('ossipov96@gmail.com');
            $mail->addAddress($_POST['email']);

            $mail->isHTML(true);
            $mail->Subject = 'Message from Resume';
            $mail->Body = $_POST['message'];
            
            $body = '';

            if (!empty($_POST['name'])) {
                $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
            }
            if (!empty($_POST['email'])) {
                $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
            }
            if (!empty($_POST['message'])) {
                $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
            }

            $mail->Body = $body;

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
?>