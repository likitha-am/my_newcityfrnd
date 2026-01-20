const user = JSON.parse(localStorage.getItem("mynewfrnd_loggedin"));

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("welcomeText").innerText =
  "Welcome, " + user.name + " 👋";

document.getElementById("userDetails").innerHTML = `
  <strong>Email:</strong> ${user.email}<br>
  <strong>Phone:</strong> ${user.phone}<br>
  <strong>From:</strong> ${user.fromCity}<br>
  <strong>To:</strong> ${user.toCity}<br>
  <strong>Language:</strong> ${user.language}
`;

// same CityMate data
const cityMates = [
  { name: "Ananya", city: "Bangalore", language: "English", rating: 4.5 },
  { name: "Rahul", city: "Hyderabad", language: "Telugu", rating: 5 },
  { name: "Sneha", city: "Chennai", language: "English", rating: 4.2 }
];

const match = cityMates.find(
  cm =>
    cm.city.toLowerCase() === user.toCity.toLowerCase().trim() &&
    cm.language.toLowerCase() === user.language.toLowerCase().trim()
);

const citymateDiv = document.getElementById("citymateDetails");

if (match) {
  citymateDiv.innerHTML = `
    <h3>${match.name}</h3>
    <p><strong>City:</strong> ${match.city}</p>
    <p><strong>Language:</strong> ${match.language}</p>
    <p><strong>Rating:</strong> ⭐ ${match.rating}</p>
  `;
} else {
  citymateDiv.innerHTML = `
    <p>No CityMate assigned yet.</p>
  `;
}
function logout() {
  localStorage.removeItem("mynewfrnd_loggedin");
  window.location.href = "login.html";
}
function contactCityMate(name) {
  localStorage.setItem("selectedCityMate", name);
  window.location.href = "citymate-chat.html";
}

