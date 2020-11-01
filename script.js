// Assignment Code
var generateBtn = document.querySelector("#generate");

//Event listener that initiates program
generateBtn.addEventListener("click",function generatePassword(){
  //Prompts user for password length and validates
  var passLength = prompt("Please enter the character length you wish your password to be: ");
  while(passLength.length >= 8 && passLength.length <= 128){
    alert("Length must be either a minimum of 8 characters or maximum of 128!");
    var passLength = prompt("Please enter the character length you wish your password to be: ");
  }

  //Prompts user for password criteria and validates
  var characterValid = 0;

  var upperCaseCriteria = confirm("Press 'ok' if you want uppercase characters in your password!");
  if(upperCaseCriteria === true){
    var upperCasePass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    characterValid++;
  }
  else{
    var upperCasePass = '';
  }

  var lowerCaseCriteria = confirm("Press 'ok' if you want lowercase characters in your password!");
  if(lowerCaseCriteria === true){
    var lowerCasePass = "abcedfghijklmnopqrstuvwxyz";
    characterValid++;
  }
  else{
    var lowerCasePass = "";
  }

  var numericCriteria = confirm("Press 'ok' if you want numeric characters in your password!");
  if(numericCriteria === true){
    var numericPass = "1234567890";
    characterValid++;
  }
  else{
    var upperCasePass = "";
  }

  var specialCharCriteria = confirm("Press 'ok' if you want special characters in your password!");
  if(specialCharCriteria === true){
    var specialCharPass = "@#$!";
    characterValid++;
  }
  else{
    var specialCharPass = "";
  }

  while(characterValid === 0){
    alert("Atleast one character type must be selected!");

    var upperCaseCriteria = confirm("Press 'ok' if you want uppercase characters in your password!");
    if(upperCaseCriteria === true){
      var upperCasePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      characterValid++;
    }
    else{
      var upperCasePass = "";
    }

    var lowerCaseCriteria = confirm("Press 'ok' if you want uppercase characters in your password!");
    if(lowerCaseCriteria === true){
      var lowerCasePass = "abcedfghijklmnopqrstuvwxyz";
      characterValid++;
    }
    else{
      var lowerCasePass = "";
    }

    var numericCriteria = confirm("Press 'ok' if you want numeric characters in your password!");
    if(numericCriteria === true){
      var numericPass = "1234567890";
      characterValid++;
    }
    else{
      var numericPass = "";
    }

    var specialCharCriteria = confirm("Press 'ok' if you want special characters in your password!");
    if(specialCharCriteria === true){
      var specialCharPass = "@#$!";
      characterValid++;
    }
    else{
      var specialCharPass = "";
  }
  }

  //Declares password and object used to pass characters to password
  var passGen = upperCasePass + lowerCasePass + numericPass + specialCharPass;
  var password = '';

  //Generates password
  for(var counter = 0; counter < passLength; counter++){
    var char = Math.floor(Math.random() * passGen.length + 1);

    password += passGen[char];
  }

  //Passes password to text in html
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}
)
