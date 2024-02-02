<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $telephone = $_POST["telephone"];
        $message = $_POST["message"];

        // Set the recipient email address
        $to = "vidahoro@gmail.com";

        // Set the subject of the email
        $subject = "New Contact Form Submission";

        // Compose the email message
        $email_message = "Name: $name\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Telephone: $telephone\n";
        $email_message .= "Message:\n$message";

        // Additional headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Send the email
        $mail_success = mail($to, $subject, $email_message, $headers);

        if ($mail_success) {
            http_response_code(200);
            // $response = array(
            //     'isSuccessful' => true,
            //     'message' => "Email Sent Successfully"
            // );
            echo ("Email Sent Successfully");
        } else {
            http_response_code(500);
            // $response = array(
            //     'isSuccessful' => false,
            //     'message' => "Internal Server Error"
            // );
            echo ("Internal Server Error");
        }
    } else {
        http_response_code(400);
        // $response = array(
        //     'isSuccessful' => false,
        //     'message' => "Bad Request"
        // );
        echo ("Bad Request");
    }
?>
