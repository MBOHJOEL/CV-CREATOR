<?php 
echo "<h1>";
var_dump($_POST);
echo "</h1><br><br>";
if($_POST["cpassword"] === $_POST["password"] && $_POST["password"]!= ""){
    echo "pass";
    if($_POST["name"] && $_POST["name"]!=" "){

    }
    else{
        header("Location: ../?message=Enter name");

    }
    if($_POST["email"]){

    }
    else{
        header("Location: ../?message=Enter email");

    }
    if($_POST["name"] && $_POST["email"]){
        header("Location: handlers/handle_signup.php?name=".$_POST["name"]."&email=".$_POST["email"]."&password=".$_POST["password"]);

    }
    
}
else{
    header("Location: ../?message=passwords donot matc");
}
// echo "<br>pass word: ".str_word_count($_POST["password"])."<br>";

?>