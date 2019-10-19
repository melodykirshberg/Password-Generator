//----------------------------------buttons
document.getElementById("password-btn").addEventListener("click", function () {
  getPasswordOptions();
});

document.getElementById("copy-btn").addEventListener("click", function () {
  copyPassword();
});

//-------------------------------variables
var specialChars = ['!', '"', '#', '$', '%', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//-------------------------------ask how long they want their password to be
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?")
  );

  //-----------------------------verify
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number. Please try again.");
    return;
  }

  //-------------------------------ask what they want 
  var specialChars = confirm("Would you like to use special character?");
  var numericChars = confirm("Would you like to use numeric character?");
  var uppercaseChars = confirm("Would you like to use uppercase character?");
  var lowercaseChars = confirm("Would you like to use lowercase character?");

  //-------------------------------validate must choose one
  if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
    alert("At least one condition must be chosen for your password. Please try again");
    return;
  }
}

//------------------------------generate password


//-------------------------------present password








//-------------------------------copy password