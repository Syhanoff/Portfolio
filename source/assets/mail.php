<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема письма";

$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username   = 's.syhanoff@yandex.ru'; // Логин на почте
  $mail->Password   = 'vzpxshdvzepftbzm'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('s.syhanoff@yandex.ru', 'Сообщение с моего сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('s.syhanoff@yandex.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


$captcha;
if(isset($_POST['token'])){
  $captcha=$_POST['token'];
}

$secretKey = "6LdcJogfAAAAADh1Y0KgblvzIInTsF7MLxEHV3-E";
$ip = $_SERVER['REMOTE_ADDR'];

// post request to server

$url =  'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey .  '&response=' . $_POST['token'];
$response = file_get_contents($url);
$responseKeys = json_decode($response,true);
header('Content-type: application/json');
if($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
  echo json_encode(array('success' => 'true', 'om_score' => $responseKeys["score"], 'token' => $_POST['token']));
} else {
  echo json_encode(array('success' => 'false', 'om_score' => $responseKeys["score"], 'token' => $_POST['token']));
}
