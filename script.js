// Save user data to localStorage
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value,
        address: document.getElementById('address').value,
      };

      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      form.reset();
      alert('User registered successfully!');
    });
  }

  // Populate table with users
  const userTable = document.querySelector('#userTable tbody');
  if (userTable) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
      const row = `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.contact}</td>
        <td>${user.address}</td>
      </tr>`;
      userTable.innerHTML += row;
    });
  }
});
