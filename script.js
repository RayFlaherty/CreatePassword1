// Assignment code here
const upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
const symbolsChar = "`~!@#$%^&*()_-+={[}]|\;:'/?.>,<";
const numbersChar = "1234567890";
const len = document.querySelector("#length");
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
   
    var passwordLength = len.value;
    var chars=characters; 
    var password="";
    console.log(passwordLength);
    console.log(chars.length);
   


    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
        
    };
      
    
    return password; 
    
  };

  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#passwordTXT");
  passwordText.value = password;
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

