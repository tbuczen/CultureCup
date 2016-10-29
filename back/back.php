<?php
require_once "Db.php";
//get DB
$host = 'localhost';
$db   = 'urias_cdate';
$charset = 'utf8';
define("DB_DSN", "mysql:host=$host;dbname=$db;charset=$charset");
define("DB_USER", 'urias_cdate');
define("DB_PASS", 'cdate_hack');

$db = new Db();

$types = ["film","cafe","theater","museum","food","event","plener"];
// list types

//
