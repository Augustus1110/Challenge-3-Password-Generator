// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var numbers = ['1', '2', '3', '4' '5'];

function generatePassword () {
  let index = 0;
  var input = prompt ("Input text here")
}

while (true) {
  yi
}

function generatePassword() {
  var generated = "password";
  var temp = Math.random();
  var generatedIndex = Math.floor (Math.random()*generated.length);
  generated=generated [generatedIndex];
  //return generated;
  //return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
