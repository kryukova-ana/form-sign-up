<?php
// Файлы phpmailer
require 'src/assets/phpmailer/PHPMailer.php';
require 'src/assets/phpmailer/SMTP.php';
require 'src/assets/phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['user-name'];
$email = $_POST['user-email'];
$pass = $_POST['user-password'];

// Формирование самого письма
$title = "Регистрация на супер-сайте";
$body = "
<h2>Регистрация</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Пароль:</b><br>$pass
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'kryukovaanastasiya13@gmail.com'; // Логин на почте
    $mail->Password   = 'wcmhzcwiinysvdup'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('kryukovaanastasiya13@gmail.com', 'Лучший сайт'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('morinoshika13@gmail.com');
    $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен


// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";}
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);