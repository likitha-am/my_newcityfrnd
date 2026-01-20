const users = JSON.parse(localStorage.getItem("mynewfrnd_users")) || [];
const tbody = document.querySelector("#userTable tbody");

if (users.length === 0) {
  tbody.innerHTML = "<tr><td colspan='6'>No users registered yet</td></tr>";
} else {
  users.forEach(user => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.fromCity}</td>
      <td>${user.toCity}</td>
      <td>${user.language}</td>
    `;

    tbody.appendChild(row);
  });
}
