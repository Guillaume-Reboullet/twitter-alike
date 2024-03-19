<?php
class Connexion
{

    private $db_host;
    private $db_user;
    private $db_pass;
    private $db_name;
    private $pdo;
    private $salt = "vive le projet tweet_academy";

    public function __construct($db_name, $db_host = "localhost", $db_user = "guillaume", $db_pass = "Loulou97133")
    {
        $this->db_host = $db_host;
        $this->db_name = $db_name;
        $this->db_user = $db_user;
        $this->db_pass = $db_pass;
    }

    function getPDO()
    {
        if ($this->pdo === NULL) {
            try {
                $dsn = "mysql:host=$this->db_host;dbname=$this->db_name";
                $this->pdo = new PDO($dsn, $this->db_user, $this->db_pass);
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                throw new InvalidArgumentException("Datapdo error: " . $e->getMessage());

            }
        }
        return $this->pdo;
    }

    
    function register($nom, $pseudo, $email, $mdp, $jour, $mois, $annee) {
        $date = "$annee-$mois-$jour";
        if ($nom != "" && $pseudo != "" && $email != "" && $mdp != "" && $date != "") {
            $hash = hash('ripemd160', $this->salt . $mdp);
            try {
                $con = $this->getPDO()->prepare("INSERT INTO user (username, at_user_name, profile_picture, banner, mail, password, birthdate) VALUES (:nom, :pseudo,'flemme', 'reflemme', :email, :mdp, :date)");
                $con->bindParam(':nom', $nom);
                $con->bindParam(':pseudo', $pseudo);
                $con->bindParam(':email', $email);
                $con->bindParam(':mdp', $hash);
                $con->bindParam(':date', $date);
                if($con->execute()) {
                    session_start();
                    $_SESSION['mail'] = $email;
                    header("Location: profile.php");
                }

            } catch (Exception $e) {
                echo "Erreur lors de l'insertion de l'utilisateur : " . $e->getMessage();
            }
        }
    }

    function logIn($email, $mdp) {
        if ($email != "" && $mdp != "") {
            try {
                $con = $this->getPDO()->prepare("SELECT * FROM user WHERE mail = :email");
                $hash = hash('ripemd160', $this->salt . $mdp);
                $con->bindParam(':email', $email);
                $con->execute();
                $user = $con->fetch(PDO::FETCH_ASSOC);
                if ($user) {
                    if ($hash === $user['password']) {
                        session_start();
                        $_SESSION['mail'] = $user['mail'];
                        header("Location: profile.php");
                    } else {
                        echo 'Mot de passe incorrect.';
                    }
                } else {
                    echo "Le compte n'existe pas.";
                }
            } catch (Exception $e) {
                echo "Erreur lors de la connexion : " . $e->getMessage();
            }
        }
    }
}