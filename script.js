//This is the event listener for the red button that was present in the code downloaded from the class repo 

var generateBtn = document.querySelector("#generate");

//Defined characters that will be used to generate password

var lowercaseLetters = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

var uppercaseLetters = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

var numbers = ('1', '2', '3', '4' '5', '6', '7', '8', '9', '0');

var specialCharacters = ('!@#$%^&*()_+=');


//Created function to generate password
function generatePassword(passwordLength) {
  var allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
  var password = '';
  
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
  }
  
  return password;
}

//This calls the function to generate the password 

var passwordLength = ();  // Choose your password length
var password = generatePassword(passwordLength);
console.log(password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






