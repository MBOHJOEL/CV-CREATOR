<?php 
if($_POST["email"] && $_POST["password"]){
    header("Location: handlers/handle_login.php?email=".$_POST["email"]."&password=".$_POST["password"]);
}
else{
    header("Location: ../../?message=All fields are requred");
}

?>