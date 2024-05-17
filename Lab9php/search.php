<?php
include "database.php";
header('Content-Type: application/xml; charset=utf-8');

if (isset($_POST["query"]) && !empty($_POST["query"])) {
    $searchQuery = $_POST['query'];

    $sql = "SELECT * FROM teams WHERE 
            name LIKE :search OR 
            country LIKE :search OR 
            manager LIKE :search OR 
            stadium LIKE :search";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['search' => "%$searchQuery%"]);
    $results = $stmt->fetchAll();

    $xml = new SimpleXMLElement('<teams/>');

    if ($stmt->rowCount() > 0) {
        foreach ($results as $row) {
            $team = $xml->addChild('team');
            $team->addChild('name', htmlspecialchars($row['name']));
            $team->addChild('country', htmlspecialchars($row['country']));
            $team->addChild('manager', htmlspecialchars($row['manager']));
            $team->addChild('stadium', htmlspecialchars($row['stadium']));
        }
    } else {
        $xml->addChild('message', 'No teams found.');
    }

    echo $xml->asXML();
} else {
    $xml = new SimpleXMLElement('<teams/>');
    $xml->addChild('message', 'Invalid search query.');
    echo $xml->asXML();
}
?>
