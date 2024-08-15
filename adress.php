<?php
  include 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>adress</title>
    <link rel="stylesheet" href="style1.css"></link>

</head>
<body>
    <div class="container">
        <div style="text-align:center">
            <h2>Contact Us</h2>
            <p>or leave us a message:@www.amazon.in</p>
        </div>
        <div class="row">
            <div class="column">
                <div style="text-align:center">
                <img src="./assest/amazoni1.png" style="width:30%" >
                </div>
            </div>
            <div class="column">
                <!-- Add your form fields here (e.g., name, email, message) -->
                <form action="adress.php" method="post" style="text-align:center">
                    
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." required>
                    <br>
                    <br>
                    <label for="fname">last Name</label>
                    <input type="text" id="fname" name="lastname" placeholder="Your surname.." required>
                    <br>
                    <br>
                    <label for="faddress">address</label>
                    <input type="text" id="faddress" name="address" placeholder="Your address.." required>
                    <br>
                    <br>
                    <label for="fnumber">contact number</label>
                    <input type="text" id="fnumber" name="number" placeholder="Your contact no." required>
                     <br>
                     <br>
                    <!-- Add other input fields as needed -->
                    <input name="submit" type="submit" id="button" value="submit">
                    </input>
                    <a href="index.html"><input name="back" type="button" id="button" value="BACK TO LOGIN">
                    </input>

                    
                </form>

               
                <?php
                    if (isset($_POST['submit'])) {
                        // Get the form data
                        $firstname = mysqli_real_escape_string($con, $_POST['firstname']);
                        $lastname = mysqli_real_escape_string($con, $_POST['lastname']);
                        $address = mysqli_real_escape_string($con, $_POST['address']);
                        $number = mysqli_real_escape_string($con, $_POST['number']);
                        
                        // Insert the data into the database
                        $insertion = "INSERT INTO user1 (firstname, lastname, address, number) VALUES ('$firstname', '$lastname', '$address', '$number')";
                        $insertion_run = mysqli_query($con, $insertion);
                        
                        if ($insertion_run) {
                            echo "<script>
                                    alert('Data Saved Successfully');
                                    window.location.href='index.html';
                                  </script>";
                        } else {
                            echo "<script>
                                    alert('Data Saving Failed');
                                    window.location.href='form.html';
                                  </script>";
                        }
                    }
                    
                    // Close the database connection
                    mysqli_close($con);
                ?>
                



            </div>
        </div>
    </div>
</body>
</html>