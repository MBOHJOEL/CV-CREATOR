<?php 
    echo |"hello";
    $filename = $_FILES['file']['name'];
    $location = "profPics".$filename;
    if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
        echo "SUCCESS";
    }
    else {
        echo "FAILURE";
    }
?>