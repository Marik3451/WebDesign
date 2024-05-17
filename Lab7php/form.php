<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обробка форми PHP</title>
</head>
<body>
    <?php
    
    function my_func($x, $y, $z, $variant) {
        $result = cos(pow($x + pow(sin(pow(abs($y),0.3)), 2), 2));
        $result /= pow(abs($x), 0.1) / $z - pi() / 6;
        $result += pow(log(pow(abs($z / $x), 0.3)) ,2);

        return $result;
    }

    function write_to_file($surname, $name, $group, $variant) {
        $filename = $surname . ".txt";
        $file = fopen($filename, "w");

        $x_begin = 1.23 * $variant;
        
        $input_file = file("var.txt");
        
        echo $input_file[0], $input_file[1];
        $Y1 = floatval($input_file[0]);
        $Z1 = floatval($input_file[1]);

        fwrite($file, "Surname: $surname\n");
        fwrite($file, "Name: $name\n");
        fwrite($file, "Group: $group\n");
        fwrite($file, "Variant: $variant\n");
        fwrite($file, "Y1 = $Y1\n");
        fwrite($file, "Z1 = $Z1\n");
        fwrite($file, "Results:\n");

        for ($x_step = $x_begin; $x_step <= $x_begin + 10; $x_step++) {
            $result = my_func($x_step, $Y1, $Z1, $variant);

            fwrite($file, "X1 = $x_step; f[x,y,z] = $result\n");
        }
        
        echo '<h1>Результат обробки форми для лабораторної роботи №7</h1>';
        echo "Дані збережені у файлі під назвою $filename.";
        echo '<tr><a href="http://localhost/Lab7php/readFile.php?file=' . $surname . '.txt">Прочитати файл</a>';
    }
    
    if (isset($_POST['submit'])) {
        $surname = $_POST['surname'];
        $name = $_POST['name'];
        $group = $_POST['group'];
        $variant = $_POST['variant'];
        
        write_to_file($surname, $name, $group, $variant);
    } else {
        echo "<p>Форма не була відправлена.</p>";
    }
    ?>
</body>
</html>