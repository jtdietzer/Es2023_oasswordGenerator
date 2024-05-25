const generatePassword = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
    };

 const lengthInput = document.getElementById(`lengthInput`);
const generateButton = document.getElementById(`generateButton`);
const passwordDisplay = document.getElementById(`passwordDisplay`);
generateButton.addEventListener(`click`, () => {
    const length = parseInt(lengthInput.value, 10);
    if (isNaN(length) || length < 1) {
        passwordDisplay.textContent = `Please enter a valid length.`;
    } else {
        passwordDisplay.textContent = generatePassword(length);
    }
});



// // script.js
// const generatePassword = (length) => {
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
//     return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
//   };
  
//   const lengthInput = document.getElementById('lengthInput');
//   const generateButton = document.getElementById('generateButton');
//   const passwordDisplay = document.getElementById('passwordDisplay');
  
//   generateButton.addEventListener('click', () => {
//     const length = parseInt(lengthInput.value, 10);
//     if (isNaN(length) || length < 1) {
//       passwordDisplay.textContent = 'Please enter a valid length.';
//     } else {
//       passwordDisplay.textContent = generatePassword(length);
//     }
//   });
  