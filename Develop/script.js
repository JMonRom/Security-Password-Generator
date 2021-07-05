// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase, uppercase, numbers and special characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ['!', '"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\.', ']', '^', '_', '`', '{', '|', '}', '~'];


var passwordLength;
var useLower;
var useUpper;
var useNumeric;
var useSpecialCharacters;
var userSelections;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Starts the function to prompt first question for password length
function generatePassword() {
  passwordLength = prompt('How many characters would you like your password to be? Must be between 8 and 128 charcters.');
  console.log('Password Length: ' + passwordLength)

// Returns a message if the pop up is cancelled
  if(!passwordLength) {
    alert('Not a valid value');

  // if value choosen does not fit criteria a prompt will show
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('Password must be between 8 and 128 characters');
    console.log('Password Length: ' + passwordLength)
  
  // Logs whether true or false depending on user selection for character types
  } else {
    useLower = confirm('Do you want to use lower case letters?');
      console.log('Use lower case: ' + useLower)
    useUpper = confirm('Do you want to use upper case letters?')
      console.log('Use upper case: ' + useUpper)
    useNumeric = confirm('Do you want to use numeric values?')
      console.log('Use numbers: ' + useNumeric)
    useSpecialCharacters = confirm('Do you want to use special characters?')
      console.log('Use special characters: ' + useSpecialCharacters)
  };

  // If user does not choose at least one character selection a message will display to prompt them to pick at least one
    if (!useLower && !useUpper && !useNumeric && !useSpecialCharacters) {
      userSelections = alert('At least one character type must be selected!');

  // If the 4 character types picked
  } else if (useLower && useUpper && useNumeric && useSpecialCharacters) {
      userSelections = lowerCase.concat(upperCase, numbers, symbols);
      console.log(userSelections);

  // If only 3 character types picked
  } else if (useLower && useUpper && useNumeric) {
    userSelections = lowerCase.concat(upperCase, numbers);
    console.log(userSelections);
  
  } else if (useLower && useUpper && useSpecialCharacters) {
    userSelections = lowerCase.concat(upperCase, symbols);
    console.log(userSelections);
  
  } else if (useLower && useNumeric && useSpecialCharacters ) {
      userSelections = lowerCase.concat(numbers, symbols);
      console.log(userSelections);

  } else if (useUpper && useNumeric && useSpecialCharacters) {
    userSelections = upperCase.concat(numbers, symbols);
    console.log(userSelections);
  }

  // If only 2 character types selected
  else if (useLower && useUpper) {
    userSelections = lowerCase.concat(upperCase);
    console.log(userSelections);
  }

  else if (useLower && useNumeric) {
    userSelections = lowerCase.concat(numbers);
    console.log(userSelections);
  }

  else if (useLower && useSpecialCharacters) {
    userSelections = lowerCase.concat(symbols);
    console.log(userSelections);
  }

  else if (useUpper && useNumeric) {
    userSelections = upperCase.concat(numbers);
    console.log(userSelections);
  }

  else if (useUpper && useSpecialCharacters) {
    userSelections = upperCase.concat(symbols);
    console.log(userSelections);
  }

  // If only 1 character type selected
  else if (useLower) {
    userSelections = lowerCase
    console.log(userSelections);
  }

  else if (useUpper) {
    userSelections = upperCase
    console.log(userSelections);
  }

  else if (useNumeric) {
    userSelections = numbers
    console.log(userSelections);
  }

  else if (useSpecialCharacters) {
    userSelections = symbols
    console.log(userSelections);
  }
}
