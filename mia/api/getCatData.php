<?php

$con = mysqli_connect("127.0.0.1", "root", "", "mia");
$sql = "SELECT * FROM cart";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>