<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вміст файлу</title>
</head>
<body>
    <h1>Вміст створеного файлу</h1>
    <?php
    $filename = isset($_GET['file']) ? $_GET['file'] : '';

    if ($filename != '') {
        if (file_exists($filename)) {
            // $file_content = file_get_contents($filename);
            // echo "<pre>$file_content<pre>";
            
            if ($file = fopen($filename, "r")) {
                while(!feof($file)) {
                    $line = fgets($file);
                    echo "$line <br>";
                }
                fclose($file);
            }
        } else {
            echo "<p>Файл не знайдено.</p>";
        }
    } else {
        echo "<p>Не вказано файл для відображення.</p>";
    }
    ?>
</body>
</html>