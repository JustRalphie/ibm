document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      redirectToDestination();
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  function redirectToDestination() {
    var destinationURL = 'idk.html';
    window.location.href = destinationURL;
  }
});
