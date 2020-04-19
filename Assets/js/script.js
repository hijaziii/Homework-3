var welcome = confirm ("Welcome, To Start Please Press On The Generate Password Button");

document.querySelector("#generate").addEventListener("click", createPassword);

function createPassword() {
var confirmLength = prompt ("Choose How Many Charaters In Your Password?");
if (confirmLength === null){ return ;}
  validateLength(confirmLength);
  
  }

function validateLength(confirmLength) {
if (confirmLength >=8 && confirmLength <=128){
    alert ("Please Procced");
    validateChoice(confirmLength);
   }
   
else {
  alert (" Password Length Must Be (Numeric) Between 8 & 128 Charaters");
  createPassword();

  }
}

function validateChoice(confirmLength) {
var confirmNumber = confirm ("Click Ok To Include Numbers");
var confirmUpperCase = confirm ("Click Ok To Include Upper Case");
var confirmLowerCase = confirm ("Click Ok To Include Lower Case");
var confirmSpecailCharacter = confirm ("Click Ok To Include Specail Charater");

startGenerating(confirmNumber,confirmUpperCase,confirmLowerCase,confirmSpecailCharacter,confirmLength);
}

function startGenerating(confirmNumber,confirmUpperCase,confirmLowerCase,confirmSpecailCharacter,confirmLength) {
var lowerFlag = false;
var upperFlag = false;
var specialFlag = false;
var numberFlag = false;

if (confirmNumber == true){
  numberFlag = true; 
  }

if (confirmUpperCase == true  ){
  upperFlag = true;
  }

if (confirmLowerCase == true   ){
  lowerFlag = true; 
  }

if (confirmSpecailCharacter == true ){
  specialFlag = true;

  }
 
if (confirmNumber == false && confirmUpperCase == false && confirmLowerCase == false  && confirmSpecailCharacter == false ) {
  alert("Please choose At Least one Character Type");
  createPassword();
  }
  // This code will look for the password and printed out in the passwored generator.
  document.querySelector("#password").value = checkSelection(numberFlag, upperFlag, lowerFlag, specialFlag, confirmLength);

}
  


// I Used ascii table to make my code nice and clean.

function checkSelection(numbersFlag,upperFlag,lowerFlag,specialFlag,confirmLength) {   
var chars="";
  // I used this code to lower the use of ( if else statment) and hard coded the character types. 
  chars += (numbersFlag ?  random (confirmLength,57,48) : '');
  chars += (upperFlag   ?  random (confirmLength,90,65) : '');
  chars += (lowerFlag   ?  random (confirmLength,122,97) : '');
  chars += (specialFlag ?  random (confirmLength,47,33) : '');

return shuffling(confirmLength, chars);
}
  
function shuffling(length,chars) {
var charPass = "";
for(var i = 0; i<length;i++) {
  charPass += chars[Math.floor(Math.random()*chars.length)];
  }
return  charPass;
}

//Convert from ascii code to charachter//
function random (confirmLength,max,min) {
var random = "";
var ascii;
//Getting ramndom charachters from the ascii  (It is will give us one more security layer to protect our password from hackers)
for(var i = 0; i<confirmLength; i++) {
  ascii= Math.floor((Math.random()*(max-min) + min));
  random += String.fromCharCode(ascii);          
  }
return random;   
}

