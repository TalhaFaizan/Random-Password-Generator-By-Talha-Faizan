const passwordLengthInput = document.getElementById('passwordLength');
const passwordLengthValue = document.getElementById('passwordLengthValue');
const generatePasswordButton = document.getElementById('generatePassword');
const generatedPasswordInput = document.getElementById('generatedPassword');
const copyPasswordButton = document.getElementById('copyPassword');

function generatePassword() {
const length = passwordLengthInput.value;
const charset = [];
if (document.getElementById('includeUppercase').checked) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
if (document.getElementById('includeLowercase').checked) charset.push('abcdefghijklmnopqrstuvwxyz');
if (document.getElementById('includeNumbers').checked) charset.push('0123456789');
if (document.getElementById('includeSpecialCharacters').checked) charset.push('!@#$%^&*()_+[]{}|;:,.<>?');
if (charset.length === 0) {
    alert('Please select at least one character type.');
    return;
}
const passwordArray = [];
for (let i = 0; i < length; i++) {
    const randomCharset = charset[Math.floor(Math.random() * charset.length)];
    const randomCharacter = randomCharset[Math.floor(Math.random() * randomCharset.length)];
    passwordArray.push(randomCharacter);
}
const password = passwordArray.join('');
generatedPasswordInput.value = password;
}

passwordLengthInput.addEventListener('input', () => {
    passwordLengthValue.textContent = passwordLengthInput.value;
});

function copyToClipboard() {
const copyPassword = generatedPasswordInput.value;
const passwordArea = document.createElement("textarea");
passwordArea.value = copyPassword;
document.body.appendChild(passwordArea);
passwordArea.select();
document.execCommand('copy');
document.body.removeChild(passwordArea);
alert('Password copied to clipboard');
}

passwordLengthInput.addEventListener('input', () => {
    passwordLengthValue.textContent = passwordLengthInput.value;
});

generatePasswordButton.addEventListener('click', generatePassword);
copyPasswordButton.addEventListener('click', copyToClipboard);