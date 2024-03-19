<?php

include("../back/comms.php");

$exec = new Comments('twitter');
$exec->getComments();