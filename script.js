document.addEventListener("DOMContentLoaded", () => {
  const passwordField = document.querySelector("#password-field");
  const copyBtn = document.querySelector("#copyBtn");
  const generateBtn = document.querySelector("#generate-password-btn");

  //Password Length
  const passwordLength = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialSymbols = "!@#$%^&*()_<>/";

  const allChars = upperCase + lowerCase + numbers + specialSymbols;

  function generateRandomPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password +=
      specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    while (passwordLength > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordField.value = password;
  }

  copyBtn.addEventListener("click", () => {
    if (passwordField.value.trim() === "") {
      alert("No Password Generated");
	  return;
    }
    navigator.clipboard.writeText(passwordField.value);
    /* NOTE:
		navigator.clipboard

		It’s part of the Clipboard API in JavaScript.

		Lets websites read from and write to the system clipboard (the same clipboard you use when you press Ctrl + C / Ctrl + V).

		Safer and more modern than the old document.execCommand("copy").
	*/
    alert("Password Copied");
    passwordField.value = "";
  });

  generateBtn.addEventListener("click", generateRandomPassword);
});
