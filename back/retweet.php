<?php
class Retweet
{
    private $db_host;
    private $db_user;
    private $db_pass;
    private $db_name;
    private $pdo;
    public function __construct($db_name, $db_host = "localhost", $db_user = "guillaume", $db_pass = "Loulou97133")
    {
        $this->db_host = $db_host;
        $this->db_name = $db_name;
        $this->db_user = $db_user;
        $this->db_pass = $db_pass;
    }

    private function getPDO()
    {
        if ($this->pdo === NULL) {
            try {
                $dsn = "mysql:host=$this->db_host;dbname=$this->db_name";
                $this->pdo = new PDO($dsn, $this->db_user, $this->db_pass);
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                throw new InvalidArgumentException("Database error: " . $e->getMessage());

            }
        }
        return $this->pdo;
    }
    public function addRetweet_db($userId, $content, $id_quoted_tweet)
    {
        try {
            $sql = "INSERT INTO tweet (id_user, content, id_quoted_tweet) VALUES (:id_user, :content, :id_quoted_tweet)";
            $statement = $this->getPDO()->prepare($sql);
            $statement->bindParam(':id_user', $userId);
            $statement->bindParam(':content', $content);
            $statement->bindParam(':id_quoted_tweet', $id_quoted_tweet);
            $statement->execute();
        } catch (PDOException $e) {
            throw new InvalidArgumentException("Query error: " . $e->getMessage());
        }
    }
}