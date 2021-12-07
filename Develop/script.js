// Assignment code here
const upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
const symbolsChar = "`~!@#$%^&*()_-+={[}]|\;:'/?.>,<";
const numbersChar = "1234567890";
const length = document.getElementById("length");
const upperCase= document.getElementById("uppercase");
const lowerCase= document.getElementById("lowercase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");



  function generatePassword() {

    let characters = "";
    upperCase.checked ? (characters += upperCaseChar) : "";
    lowerCase.checked ? (characters += lowerCaseChar) : "";
    symbols.checked ? (characters += symbolsChar) : "";
    numbers.checked ? (characters += numbersChar) : "";
   passwordText.value = generatePassword(length.value, characters);
 //for (var i = 0; i <= length; i++) {
   //var randomNumber = Math.floor(Math.random() * chars.length);
  // password += chars.substring(randomNumber, randomNumber +1);
 
  //return characters;
 const generatePassword =(length,characters) => {
    var password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)

        
      );
    }
  }
  };
  
  

   
  // return password;    
 //}
 

document.getElementById("password").value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

