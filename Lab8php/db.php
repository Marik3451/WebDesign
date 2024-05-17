<?php
function connect_to_db() {
    $con = mysqli_connect("127.0.0.1", "user", "hIVim_]c4ZPfY*J4", "lab8web");
    if (!$con) {
        exit("Помилка з'єднання: (".mysqli_connect_errno().")".mysqli_connect_error());
    }
    mysqli_select_db($con, "lab8web");
    return $con;
}
?>