const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('loginForm');

    // On page load, check for saved credentials
    window.addEventListener('DOMContentLoaded', () => {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingBtn.style.display = 'inline-block';
      }
    });

    // Submit form
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      // Show/hide existing user button based on current storage
      if (localStorage.getItem('username')) {
        existingBtn.style.display = 'inline-block';
      } else {
        existingBtn.style.display = 'none';
      }

      // Optional: Clear inputs
      usernameInput.value = '';
      passwordInput.value = '';
      checkbox.checked = false;
    });

    // Login as existing user
    existingBtn.addEventListener('click', () => {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });