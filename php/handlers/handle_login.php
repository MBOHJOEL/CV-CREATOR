<?php
    $email = $_GET["email"];
    if($conn = new mysqli("localhost","root","","fexify")){
    
    $query = $conn->query("SELECT * FROM user where email='$email'");
    if($query = mysqli_fetch_assoc($query)){
    var_dump($query);
    if($query["password"]==md5($_GET["password"])){
        header("Location: ../../homepage.html");
    }
    else{
        header("Location: ../../?message=Incorrect Password");
    }
}
else{
    
    header("Location: ../../?message= Incorrect Username");
}}
else{
    header("Location: ../../?message=Site in maintainance");
}


?>