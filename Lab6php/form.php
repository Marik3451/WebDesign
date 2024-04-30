<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обробка форми PHP</title>
</head>
<body>
    <h1>Результат обробки форми</h1>
    <?php
    
    function my_func($x, $y, $z, $variant) {
        $result = cos(pow($x + pow(sin(pow(abs($y),0.3)), 2), 2));
        $result /= pow(abs($x), 0.1) / $z - pi() / 6;
        $result += pow(log(pow(abs($z / $x), 0.3)) ,2);

        return $result;
    }

    function mail_results($to, $subject, $message, $headers) {
        if (mail($to, $subject, $message, $headers)) {
            echo "<p>Результати були відправлені на електронну адресу $to</p>";
        } else {
            echo "<p>Помилка при відправленні пошти</p>";
        }
    }
    
    if (isset($_POST['submit'])) {
        $surname = $_POST['surname'];
        $name = $_POST['name'];
        $group = $_POST['group'];
        $variant = $_POST['variant'];

        $X1 = 1.23 * $variant;
        $Y1 = 4.6 * $variant;
        $Z1 = 36.6 / $variant;

        // echo "$line <br>";

        $result = my_func($X1, $Y1, $Z1, $variant);

        echo "<p>Прізвище: $surname</p>";
        echo "<p>Ім'я: $name</p>";
        echo "<p>Група: $group</p>";
        echo "<p>Номер варіанту: $variant</p>";
        echo "\n";
        echo "<p>X1 = $X1</p>";
        echo "<p>Y1 = $Y1</p>";
        echo "<p>Z1 = $Z1</p>";
        echo "<br>";
        // echo '<img src="https://eu-central.storage.cloudconvert.com/tasks/c3e875ca-7bd1-4d96-933c-4351814dbfa6/my_func.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240419%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240419T080104Z&X-Amz-Expires=86400&X-Amz-Signature=66d7707f35735fc0d8411ee9f79afac594795677728399d5c8161f358717c3d0&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22my_func.png%22&response-content-type=image%2Fpng&x-id=GetObject">';

        echo "<p>Результат обчислення функції: f[x, y, z] = $result</p>";

        $to = "m.slavych@nltu.lviv.ua";
        $subject = "Результат обробки форми для лабораторної роботи №6";
        $message = "<p>Прізвище: $surname</p>"
        . "<p>Iм'я: $name</p>"
        . "<p>Група: $group</p>"
        . "<p>Номер варіанту: $variant</p>"
        . "<p>X1 = $X1</p><p>Y1 = $Y1</p><p>Z1 = $Z1</p>"
        . "<p>Результат обчислення функції: f[x, y, z] = $result</p>";
        $headers = "From: m.slavych@nltu.lviv.ua" . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();

        mail_results($to, $subject, $message, $headers);
    } else {
        echo "<p>Форма не була відправлена.</p>";
    }
    ?>
</body>
</html>