document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const users = JSON.parse(localStorage.getItem("mynewfrnd_users")) || [];

  const user = users.find(u => u.email === email && u.phone === phone);

  if (user) {
    localStorage.setItem("mynewfrnd_loggedin", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login details");
  }
});

// THEME TOGGLE
window.toggleTheme = function () {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const toggle = document.querySelector(".theme-toggle");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};
