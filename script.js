//This is the event listener for the red button that was present in the code downloaded from the class repo
//This is assigning the HTML element with ID "generate" (line 28) to the variable generateBtn, so that the program can access its properties

var generateBtn = document.querySelector("#generate");

//These variables are 4 arrays that will define the keyboard characters that can be used to generate the random passwords
//.split is being used to split each string of characters below into an array

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "~`!@#$%^&*()_+={}[]|\\".split("");


//Declares generatePassword function with passwordLength parameter
function generatePassword(passwordLength) {
  //Prompts user to enter password length and assigns that value to the passwordLength variable
  var passwordLength = prompt ("Choose a password length from 8 to 128 characters");
  //Checks to see if parsed integer value of passwordLength is less than 8 and greater than 128
  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
  //Creates a pop-up alerting user that they must choose character length from 8 to 128
    alert("You must type a number from 8 to 128.");
    //This line returns "null" to exit the function if value user types is invalid length
    return null;
  }
  
  //Next 4 lines display each prompt to user asking for true/false input. User choice is stored in each variable 
  var choseUppercase = confirm("Would you like your password to include uppercase letters?");
  var choseLowercase = confirm("Would you like your password to include lowercase letters?");
  var choseNumbers = confirm("Would you like your password to include numbers?");
  var choseSpecial = confirm("Would you like your password to include special characters?");

  //Initializes an empty array called allCharacters that will store all the characters, based on the user's choices above
  var allCharacters = [];

  //The 4 "if" statements below will check if user chose each type of specified character
  /* Any time one of the conditions is true, second line of each "if" statement concatenates each array (uppercaseLetters, etc.) with the allCharacters array using the concat method. The resulting array will contain all the characters chosen so far */

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

  //Initializes the empty string variable (called "password") that will store the generated password
  var password ="";
  
  //for sets up loop that repeats the code a specified number of times (passwordLength number of times)
  //var i = 0 initializes a variable i, and sets its value to 0
  //i < passwordLength means that as long as the value of i is less than the passwordLength, the loop will keep running
  //i++ increases value of i by 1 after each iteration of the loop
  for (var i = 0; i < passwordLength; i++) {
      //Creates a random index by multiplying a random decimal value between 0 and 1 (from Math.random) with the length of the allCharacters array
      //Math.floor rounds down the result to the nearest integer
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      //Appends the character at the randomly generated index from the allCharacters array to the password string
      password += allCharacters[randomIndex];
  }
  //Calls writePassword function, passes in generated "password" as an argument, then returns result of of this function 
  return writePassword(password);
}

//Declares writePassword function which has pw as a parameter. pw represents generated password
function writePassword(pw) {
  //Selects element with ID "password" and assigns it to brandNew variable
  var brandNew = document.querySelector("#password");
  //Sets the value property of the brandNew element to the generated password (pw)
  brandNew.value = pw;
}

//Adds an event listener to the generateBtn button that listens for a click event
//When button is clicked, generatePassword function is called
generateBtn.addEventListener("click", generatePassword);






