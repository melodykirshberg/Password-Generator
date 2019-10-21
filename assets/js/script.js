//-------------------------------string variables
var specialChars = "!#$%&\()*+,-./:;<=>?@[\]^_`{|}~";
var numericChars = "0123456789";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//-------------------------------empty string
var password = "";
var chars = "";

//------------------------------generate password
function getPasswordOptions() {
  password = "";

  //-------------------------ask how long they want their password to be
  var length = parseInt(prompt("How many characters would you like your password to contain? (8 --- 128)")
  );
  //-----------------------------verify length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number. Please try again.");
    return;
  }
  //-------------------------------ask what they want 
  var conspecialChars = confirm("Would you like to use special character?");
  var connumericChars = confirm("Would you like to use numeric character?");
  var conuppercaseChars = confirm("Would you like to use uppercase character?");
  var conlowercaseChars = confirm("Would you like to use lowercase character?");
  //-------------------------------validate must choose one
  if (!conspecialChars && !connumericChars && !conuppercaseChars && !conlowercaseChars) {
    alert("At least one condition must be chosen for your password. Please try again");
    return;
  }
  //--------------------------------add choice to password
  
  if (conspecialChars) {
    password = password + (specialChars.charAt(Math.floor(Math.random() * specialChars.length)));
    length--;
    chars = chars + specialChars;
  }
  
  if (connumericChars) {
    password = password + (numericChars.charAt(Math.floor(Math.random() * numericChars.length)));
    length--;
    chars = chars + numericChars;
  }
  if (conuppercaseChars) {
    password = password + (upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length)));
    length--;
    chars = chars + upperCaseChars;
  }
  if (conlowercaseChars) {
    password = password + (lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length)));
    length--;
    chars = chars + lowerCaseChars;
  }
  
  //-------------------------------4loop
  for ( var i = 0; i < length; i++) {
    password = password + (chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  //-------------------------------return password
  return password;
}
//----------------------------------buttons
document.querySelector("#password-btn").addEventListener("click", function () {
  password = getPasswordOptions();
  document.querySelector("#passwordtext").value = "";
  document.querySelector("#passwordtext").value = password;

});  
//-------------------------------copy password
var cBtn = document.querySelector("#copy-btn");
cBtn.addEventListener("click", function () {
  copyPassword();
});  

function copyPassword() {
  var copied = document.querySelector("#passwordtext");
  copied.select();
  document.execCommand("copy");
}






