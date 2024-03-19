<?php
class Comments
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
    public function addComment_db($userId, $content, $id_response)
    {
        try {
            $sql = "INSERT INTO tweet (id_user, content, id_response) VALUES (:id_user, :content, :id_response)";
            $statement = $this->getPDO()->prepare($sql);
            $statement->bindParam(':id_user', $userId);
            $statement->bindParam(':content', $content);
            $statement->bindParam(':id_response', $id_response);
            $statement->execute();
        } catch (PDOException $e) {
            throw new InvalidArgumentException("Query error: " . $e->getMessage());
        }
    }

    public function getComments(){
            try {
                $sql = "SELECT tweet.id, username, at_user_name, time, content, profile_picture, id_response FROM tweet INNER JOIN user ON tweet.id_user = user.id ORDER BY tweet.id DESC;";
                $statement = $this->getPDO()->prepare($sql);
                $statement->execute();
                $result = $statement->fetchAll();
                echo json_encode($result);
            } catch (PDOException $e) {
                throw new InvalidArgumentException("Query error: " . $e->getMessage());
            }
    }
}