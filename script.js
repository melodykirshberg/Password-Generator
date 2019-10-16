//-------------------------------------------------outside variables

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"]
var specialCase = ['"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '{', '}', '|', '`', '~']
var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


//-------------------------------ask how long they want their password to be
//-----------getLength function
function getLength() {
    var length = parseInt(prompt("How long do you want your password to be? (Enter a number between 8-128"));
    if (
        isNaN(length) === true || 
        length < 8 || 
        length > 128)
        else (){
        alert("You must enter a number between 8-128. Please try again.")
        getLength();}
        return length;
    }


//-------------------------------ask if they want x,y,z
function userChoice (){
    var passL = getLength();
    var passUp = confirm("Do you want uppercase letters in your password?");
    var passLow = confirm("Do you want lowercase letters in your password?");
    var passSpec = confirm("Do you want special characters in your password?");
    var passNum = confirm("Do you want numbers in your password?");

    //-------------------------------validate must choose one
    if (
        passUp === false &&
        passLow === false &&
        passSpec == false &&
        passNum === false){
            alert("You must select one option for your password. Please try again.");
            userChoice();
        }
}
//-------------------------------present password

//-------------------------------copy password