document.addEventListener("DOMContentLoaded", function () {

  const cityMates = [
    { name: "Ananya", city: "Bangalore", language: "English", rating: 4.5 },
    { name: "Rahul", city: "Hyderabad", language: "Telugu", rating: 5 },
    { name: "Sneha", city: "Chennai", language: "English", rating: 4.2 }
  ];

  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      fromCity: document.getElementById("fromCity").value,
      toCity: document.getElementById("toCity").value,
      language: document.getElementById("language").value,
      age: document.getElementById("age").value
    };

    // Save user
    let users = JSON.parse(localStorage.getItem("mynewfrnd_users")) || [];
    users.push(user);
    localStorage.setItem("mynewfrnd_users", JSON.stringify(users));

    // Match CityMate
    const match = cityMates.find(
      cm =>
        cm.city.toLowerCase() === user.toCity.toLowerCase().trim() &&
        cm.language.toLowerCase() === user.language.toLowerCase().trim()
    );

    if (match) {
      alert(
        "🎉 Registration Successful!\n\n" +
        "Your CityMate:\n" +
        match.name + " (" + match.city + ")"
      );
    } else {
      alert("🎉 Registration Successful!\nCityMate will be assigned soon.");
    }

    form.reset();
  });

});
