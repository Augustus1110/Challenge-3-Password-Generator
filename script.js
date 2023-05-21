//This is the event listener for the red button that was present in the code downloaded from the class repo
//This is assigning the HTML element with ID "generate" (line 28) to the variable generateBtn, so that the program can access its properties

var generateBtn = document.querySelector("#generate");

//These variables are 4 arrays that will define the keyboard characters that can be used to generate the random passwords
//.split is being used to split each string of characters below into an array

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "~`!@#$%^&*()_+={}[]|\\".split("");


  //alert creates a pop-up alerting user that they must choose character length from 8 to 128
function generatePassword(passwordLength) {
  var passwordLength = prompt ("Choose a password length from 8 to 128 characters");
  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert("You must type a number from 8 to 128.");
    return null;
  }
  
  var choseUppercase = confirm("Would you like your password to include uppercase letters?");
  var choseLowercase = confirm("Would you like your password to include lowercase letters?");
  var choseNumbers = confirm("Would you like your password to include numbers?");
  var choseSpecial = confirm("Would you like your password to include special characters?");

  var allCharacters = [];
  
  if (choseUppercase) {
    allCharacters = allCharacters.concat(uppercaseLetters);
  }
  
  if (choseLowercase) {
    allCharacters = allCharacters.concat(lowercaseLetters);

  }

  if (choseNumbers) {
    allCharacters = allCharacters.concat(numbers);
  }

  if (choseSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  var password ="";
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
  }
  return writePassword(password);
}


function writePassword(pw) {
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
}

// This adds an event listener to the generateBtn button. When button is clicked, generatePassword function is called
generateBtn.addEventListener("click", generatePassword);






