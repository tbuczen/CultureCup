<?php

//get DB
$host = 'localhost';
$db   = 'urias_cdate';
$charset = 'utf8';
define("DB_DSN", "mysql:host=$host;dbname=$db;charset=$charset");
define("DB_USER", 'urias_cdate');
define("DB_PASS", 'cdate_hack');

$driver_options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = new PDO(DB_DSN, DB_USER, DB_PASS, $driver_options);

$types = ["film","cafe","theater","museum","food","event","plener"];
// list types

//
