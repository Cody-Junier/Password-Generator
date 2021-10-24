// @ts-check
// Assignment Code
var generateBtn = document.querySelector("#generate");


const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const uppercase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const special = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}","[","]","|","/","?","<",">",".",":",";","~","`"]

console.log (lowercase);
console.log(uppercase)
console.log(numbers)
console.log(special)


//Generate the password
function generatePassword(x,y){
// Prompt the user to give password length
let passwordLength = prompt('How long would you like your password to be?')


// Prompt the user to have lower/upper case, numbers, special or combination
let useLowercase = confirm("Would you like to use lower-case letters in your password?")
let useUppercase = confirm ("How about UPPER-CASE letters?")
let useNumbers = confirm("Do we want to include numbers as well?")
let useSpecial = confirm ("Finally, should we add special characters to the mix?")
// Store the selection into an array

let possibleCharacters = []
if (useLowercase){
  possibleCharacters=
}
if (useUppercase){
  possibleCharacters =
}
if (useNumbers) {
  possibleCharacters=
}
if (useSpecial){
  possibleCharacters=
}
// Loop through the array and get random value and build the ID
}






// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





