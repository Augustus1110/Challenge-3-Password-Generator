//This is the event listener for the red button that was present in the code downloaded from the class repo
//The # links this button to the html

var generateBtn = document.querySelector("#generate");

//These variables define the characters that will be used to generate password

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '1234567890'.split('');
var specialCharacters = '~`!@#$%^&*()_+={}[]|\\'.split('');


//password length is a string

function generatePassword(passwordLength) {
  var passwordLength = prompt ('Choose a password length from 8 to 128 characters');
  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert('You must type a number from 8 to 128.');
    return null;
  }
  //alert will create a pop up alerting user about something, confirm is a true/false boolean, prompt returns a prompt for user 
  
  var choseLowercase = confirm('Would you like to use lowercase letters in your password?');
  var choseUppercase = confirm('Would you like to use uppercase letters in your password?');
  var choseNumbers = confirm('Would you like to use numbers in your password?');
  var choseSpecialCharacters = confirm('Would you like to use special characters in your password?');

  var allCharacters = [];
  
  if (wantsLowercase) {
    allCharacters = allCharacters.concat(lowercaseLetters);
  }
  
  if (wantsUppercase) {
    allCharacters = allCharacters.concat(uppercaseLetters);
  }

  if (wantsNumbers) {
    allCharacters = allCharacters.concat(numbers);
  }

  if (wantsLowercase) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  var password ='';
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
  }
  return writePassword(password);
}


function writePassword(pw) {
  var passwordText = document.querySelector('#password');
  passwordText.value = pw;
}


// Add event listener to generate button
//This line tells the program to run the writePassword function when the button is clicked
generateBtn.addEventListener("click", generatePassword);






