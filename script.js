//This is the event listener for the red button that was present in the code downloaded from the class repo 

var generateBtn = document.querySelector("#generate");

//Defined characters that will be used to generate password

var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = ['1', '2', '3', '4' '5', '6', '7', '8', '9', '0'];

var specialCharacters = '~`!@#$%^&*()_+={}[]|\\'.split('');


//Created function to generate password
//password length is a string
function generatePassword(passwordLength) {
  var passwordLength = prompt ('How long would you like your password to be? Choose from 8 to 128 characters');
  

  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert('You must type a number from 8 to 128.');
    return null;
  }
  //alert will create a pop up alerting user about something, confirm is a true/false boolean, prompt returns a prompt for user 
  
  var choseLowercase = confirm('Would you like to use lowercase letters in your password?');
  var choseUppercase = confirm('Would you like to use uppercase letters in your password?');
  var choseNumbers = confirm('Would you like to use numbers in your password?');
  var choseSpecialCharacters = confirm('Would you like to use special characters in your password?')

  //each true response will redefine the value of 
  var allCharacters = [];
  
  var password ='';
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
  }
  
  return writePassword(password);
}

//This calls the function to generate the password 

var passwordLength = ();  // Choose your password length
var password = generatePassword(passwordLength);
console.log(password);


// Write password to the #password input
function writePassword() {
  var passwordText = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






