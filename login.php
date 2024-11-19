<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT password FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    if (password_verify($password, $hashed_password)) {
        echo "<script>
                alert('Login successful!');
                window.location.href = 'home.html';
              </script>";
        // You can start a session or set session variables here if needed
    } else {
        echo "<script>
                alert('Invalid username or password!');
                window.history.back();
              </script>";
    }
    $stmt->close();
}
$conn->close();
?>
