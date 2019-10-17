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
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  //-----------------------------verify
  if (isNaN(length)) {
    alert("Password length must be a number");
    return;
  }

  if (length < 8) {
    alert("Password length must be greater than 8");
    return;
  }

  if (length > 128) {
    alert("Password length must be less than 128");
    return;
  }
  
  //-------------------------------ask if they want x,y,z
  var specialChars = confirm("Would you like to use special character?");

  var numericChars = confirm("Would you like to use numeric character?");

  var uppercaseChars = confirm("Would you like to use uppercase character?");

  var lowercaseChars = confirm("Would you like to use lowercase character?");

  //-------------------------------validate must choose one
  if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
    alert("You must choose at least one condition for your password. Please try again");
    return;
  }

  var passwordOptions = {
    specialChars: specialChars,
    numericChars: numericChars,
    uppercaseChars: uppercaseChars,
    lowercaseChars: lowercaseChars
  };

  return passwordOptions;
}

//-------------------------------present password


//-------------------------------copy password