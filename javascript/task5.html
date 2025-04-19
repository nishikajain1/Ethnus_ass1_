<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>
  <style>
    .error {
      border: 2px solid red;
    }

    .error-message {
      color: red;
      font-size: 14px;
      margin-left: 10px;
    }

    label {
      display: inline-block;
      width: 70px;
    }

    .form-group {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <form id="contactForm" onsubmit="return validateForm()">
    
    <div class="form-group">
      <label>Name:</label>
      <input type="text" id="name">
      <span class="error-message" id="nameError"></span>
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input type="text" id="email">
      <span class="error-message" id="emailError"></span>
    </div>

    <div class="form-group">
      <label>Website:</label>
      <input type="text" id="website">
      <span class="error-message" id="websiteError"></span>
    </div>

    <div class="form-group">
      <label>Message:</label>
      <textarea id="message"></textarea>
      <span class="error-message" id="messageError"></span>
    </div>

    <button type="submit">Submit</button>
  </form>

  <script>
    function validateForm() {
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.innerText = '');
      document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const website = document.getElementById('website');
      const message = document.getElementById('message');

      // Name validation
      if (name.value.trim() === '') {
        name.classList.add('error');
        document.getElementById('nameError').innerText = 'This field is required';
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        document.getElementById('emailError').innerText = 'A valid email address is required';
        isValid = false;
      }

      // Website validation
      const urlPattern = /^(https?:\/\/)?([\w\d-]+\.){1,}[a-zA-Z]{2,}([\/\w\d.-]*)*\/?$/;
      if (!urlPattern.test(website.value.trim())) {
        website.classList.add('error');
        document.getElementById('websiteError').innerText = 'A valid url is required';
        isValid = false;
      }

      // Message validation
      if (message.value.trim() === '') {
        message.classList.add('error');
        document.getElementById('messageError').innerText = 'This field is required';
        isValid = false;
      }

      return isValid;
    }
  </script>

</body>
</html>
