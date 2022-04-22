<?php
    var_dump($_GET);
    if($_GET){
        // $conn = new mysqli("localhost","root","","fexify");
        if(!$conn = new mysqli("localhost","root","")){
            echo "not connected";
        }
        else{


            if($conn->query("CREATE DATABASE fexify")){
                echo "created...";

            }
            else{
                echo "already created...";
            }
            $conn->close();
            $conn = new mysqli("localhost","root","","fexify");
            // $conn->query("SELECT * FROM user");
            if(!$conn->query("SELECT * FROM user")){


                // echo "<br>nothing";
                $conn->query("CREATE TABLE user(
                    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    email VARCHAR(100) NOT NULL,
                    password VARCHAR(100) NOT NULL,
                    reg_date TIMESTAMP
                )");
                 $name = $_GET["name"];
                 $email = $_GET["email"];
                 $password = md5($_GET["password"]);
                // $check = $conn->query("INSERT INTO user (name, email, password) VALUES (".$_GET["name"].",".$_GET["email"].",".$_GET["password"].")");
                $query = $conn->prepare("INSERT INTO user (name,email,password) VALUES
                ('$name','$email','$password')");
                $check = $query->execute();
                // echo "<marquee>".$check;
                //     echo "</marquee>";
                header("Location: ../../homepage.php");


            }
            else{
                $name = $_GET["name"];
                $email = $_GET["email"];
                $password = md5($_GET["password"]);
                // $stm = $conn->prepare("SELECT * FROM user WHERE email='$email' ");
                // $stm = $stm->execute();
                $go= $conn->query("SELECT * FROM user WHERE email='$email' ");
                if (mysqli_fetch_assoc($go)){
                   
                    var_dump(mysqli_fetch_assoc($go));
                    
                        header("Location: ../../?message=This email is already registered");
                }
                else {
                 $see = "INSERT INTO user (id, name, email, password, reg_date) VALUES ("."'',".$_GET["name"].",".$_GET["email"].",".$_GET["password"].",''".")";
                 $query = $conn->prepare("INSERT INTO user (name,email,password) VALUES
                 ('$name','$email','$password')");
             
                 echo "<br>".$see;
                 if($query->execute()){
                    echo "<br>ALL DONE.........";
                    
                header("Location: ../../homepage.html");
                }



            }
        }
        }
        
    }

?>