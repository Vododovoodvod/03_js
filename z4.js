var text = ' Lorem ipsum dolor sit amet';

var textLength = text.length;
console.log(textLength);

var sit = text.slice(19, 22);
console.log(sit);

var replaced = text.replace("amet", "elit");
console.log(replaced);

var additionalString = "consectetur adipiscing elit";
var concated = text.concat(", ", additionalString);
console.log(concated);

var upperCase = text.toUpperCase();
console.log(upperCase);

var trimed = text.trim();
console.log(trimed);

var char12 = text.charAt(12);
console.log(char12);