<?php

$servername = "localhost";
$username = "dbuser";
$password = "EPmV]Q!vFVw(E4-b";
$dbname = "random_projects";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function addwebsite() {
    $username = $_GET["input_user"];
    $name = $_GET["input_name"];
    $link = $_GET["input_link"];
    $add = "INSERT INTO shortcuts (ID primary, user, name, link) VALUES (auto, $username, $name, $link)";

    $add_data = $conn->query($add);
}

?>