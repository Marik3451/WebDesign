<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма з введенням даних</title>
</head>
<body>
    <h1>Лабораторні роботи №8</h1>
    <h3>Введіть ваші дані та номер варіанту</h3>
    <form action="add.php" method="post">
        <label for="surname">Прізвище:</label>
        <input type="text" id="surname" name="surname" required><br><br>
        
        <label for="name">Ім'я:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="group">Група:</label>
        <input type="text" id="group" name="group" required><br><br>
        
        <label for="variant">Номер варіанту:</label>
        <input type="number" id="variant" name="variant" required><br><br>
        
        <button type="submit" name="submit">Відправити</button>
    </form>
</body>
</html>