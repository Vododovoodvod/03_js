/**
 * Write a program that will rate a password
 * according to the following rules:
 * 1. At least 8 characters long
 * 2. At least one number
 * 3. At least one uppercase character
 * 4. At least one lowercase character
 * 5. At least one special character: !, #, (, ), ?, _
 * 
 * For every rule that the password passes, give the
 * password 1 point.
 * 
 * Example:
 * 12345678 - 2 points (rules 1 and 2)
 * 1234567 - 1 point (rules 2)
**/

// Test cases
var testCases = [
    {password: "12345678", rating: 2},
    {password: "1234567", rating: 1},
    {password: "ABC34567", rating: 3},
    {password: "Abc34567", rating: 4},
    {password: "Abc3456)", rating: 5}
];

// Password check logic
function checkMinLength(password) {
    return password.length >= 8; // ? 1 : 0;
}
function checkForNumber(password) {
    return /\d/.test(password);
}
function checkForUppercase(password) {
    var pattern = new RegExp("[A-Z]");
    if (pattern.test(password)) {return true;}
}
function checkForLowercase(password) {
    var pattern = new RegExp("[a-z]");
    if (pattern.test(password)) {return true;}
}
function checkForSpecial(password) {
    if (password.includes("!")) {return true;}
    if (password.includes("#")) {return true;}
    if (password.includes(")")) {return true;}
    if (password.includes("(")) {return true;}
    if (password.includes("?")) {return true;}
    if (password.includes("_")) {return true;} 
}

//Check password
function checkPassword(password) {
    var rating = 0;
    if (checkMinLength(password)) {rating++;}
    if (checkForNumber(password)) {rating++;}
    if (checkForUppercase(password)) {rating++;}
    if (checkForLowercase(password)) {rating++;}
    if (checkForSpecial(password)) {rating++;}

    return rating;
}

//Test test cases passwords
for (var i = 0; i < testCases.length; i++) {
    var testCase = testCases[i];
    console.log(testCase, checkPassword(testCase.password));
}