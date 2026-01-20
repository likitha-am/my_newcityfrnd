document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("input[type='text']").value;

  alert("Thanks " + name + "! Your CityMate request has been received.");
});
