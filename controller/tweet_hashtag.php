<?php

include("../back/displayHashtag.php");

$db = new displayHashtag('twitter');
$db->getTweet();