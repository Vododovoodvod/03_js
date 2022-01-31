var names = ['John', 'Jane', 'Bob',, 'Mike'];

//1
for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

//2
names.push('Tomislav');

//3
for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Jane') {break;}
}

//4
var final = names.filter(checkBlank);

function checkBlank(value) {
    return typeof value == 'string';
}

console.log("final: " + final);