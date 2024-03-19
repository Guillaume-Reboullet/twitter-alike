<?php 

include("../back/hashtag.php");

$db = new Hashtag('twitter');
$db->getHashtag_list();