<?php

   $name = $_REQUEST['name'];
   $phone = $_REQUEST['phone'];
   $street = $_REQUEST['street'];
   $home = $_REQUEST['home'];
   $building = $_REQUEST['building'];
   $flat = $_REQUEST['flat'];
   $stage = $_REQUEST['stage'];
   $comment = $_REQUEST['comment'];
   $payment = $_REQUEST['payment'];


   $noring = $_REQUEST['noring'];
   $noring = isset($noring)?'ДА':'НЕТ';

   $mail_message = '
   <html>
        <head>
        <meta charset="UTF-8">
        <title>Заказы</title>           
        </head>
        <body>
            <h1>Заказ</h1>
            <ul>
                <li>Имя: '. $name .'</li>
                <li>Телефон: '. $phone .'</li>
                <li>Улица: '. $street .'</li>
                <li>Дом: '. $home .'</li>
                <li>Корпус: '. $building .'</li>
                <li>Квартира: '. $flat .'</li>
                <li>Этаж: '. $stage .'</li>
                <li>Комментарий: '. $comment .'</li>
                <li>Способ оплаты: '. $payment .'</li>
                <li>Перезвонить клиенту: '. $noring .'</li>
            </ul>
        </body>
    </html>
   ';


   $headers = //"From:Админимтратор сайта <admin@loftschool.com>"."\r\n".
                "MIME-Version:1.0"."\r\n".
                "Content-type:text/html; charset=UTF-8"."\r\n";

    

    $mail = mail('ya.o.bar@yandex.ru','Заказ', $mail_message, $headers);

    $data=[];
   if($mail){
      $data['status'] = 'OK';
      $data['mes'] = "Сообщение отправлено";
   }else{
      $data['status'] = 'NO';
      $data['mes'] = 'Сообщение не отправлено';
   }

    echo json_encode($data);

    ?>