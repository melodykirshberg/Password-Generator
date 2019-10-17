//<--requirements:

//>8-128 characters
//>lower case/upper case/special characters
//>validate user input to make sure one at least type is selected
//>write the password in the page
//>bOnUs-------------------------
//>button to click to copy password


//-------------------------------------------------global variables

// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"]
// var specialCase = ['"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '{', '}', '|', '`', '~']
// var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

document.getElementById("password-btn").addEventListener("click", function() {
    getPasswordOptions();
  });
  //-------------------------------ask how long they want their password to be
  function getPasswordOptions() {
    var length = parseInt(
      prompt("How many characters would you like your password to contain?")
    );
  
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