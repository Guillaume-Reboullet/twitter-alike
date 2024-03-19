<?php
$user = 'guillaume';
$password = 'Loulou97133';
$dsn = 'mysql:dbname=twitter;host=localhost';

try {
    $db = new PDO($dsn, $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
    die;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['search']) && !empty($_POST['search'])) {
        $search = $_POST['search'];
        $s = $db->query("SELECT id, at_user_name FROM user LEFT JOIN follow ON follow.id_user = user.id WHERE at_user_name LIKE '$search%'");
        $res = $s->fetchAll(PDO::FETCH_ASSOC);
    } else {
        echo "Veuillez renseigner un nom";
    }
}