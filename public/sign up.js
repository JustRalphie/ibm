document.addEventListener("DOMContentLoaded", function() {
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm_password").value.trim();
  
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert("Please fill out all fields before submitting.");
      return; 
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return; 
    }
  
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    window.location.href = "logon.html";
  });  
});
