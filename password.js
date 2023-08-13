// Wait for the DOM to be loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const lengthInput = document.querySelector('.length-input');
    const uppercaseInput = document.querySelector('.uppercase-input');
    const lowercaseInput = document.querySelector('.lowercase-input');
    const numbersInput = document.querySelector('.numbers-input');
    const symbolsInput = document.querySelector('.symbols-input');
    const generateButton = document.querySelector('.generate');
    const outputInput = document.querySelector('.output');
    const copyButton = document.querySelector('.copy');
  
    // Password settings
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/{}~';
  
    // Function to generate a random password
    function generatePassword() {
      const length = lengthInput.value;
      const includeUppercase = uppercaseInput.checked;
      const includeLowercase = lowercaseInput.checked;
      const includeNumbers = numbersInput.checked;
      const includeSymbols = symbolsInput.checked;
  
      // Create a pool of characters based on selected settings
      let chars = '';
      if (includeUppercase) chars += uppercaseChars;
      if (includeLowercase) chars += lowercaseChars;
      if (includeNumbers) chars += numberChars;
      if (includeSymbols) chars += symbolChars;
  
      // Check if at least one option is selected
      if (!chars) {
        alert('Please select at least one character set.');
        return;
      }
  
      // Generate the password
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
  
      return password;
    }
  
    // Event listener for the "Generate" button
    generateButton.addEventListener('click', function () {
      const password = generatePassword();
      outputInput.value = password;
    });
  
  // Event listener for the "Copy" button
  copyButton.addEventListener('click', function () {
    if (outputInput.value) {
      outputInput.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    }
  });
  });
  