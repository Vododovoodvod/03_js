var kebabCase = ["first-name", "second-name", "name-after-second", "very-last-name"];

console.log("Before:");
console.log(kebabCase);

console.log("After:");
console.log(convertToCamel(kebabCase));

function convertToCamel(names) {
    var converted = [];

    for (var i = 0; i < names.length; i++){
        var splited = names[i].split("-");
        var joined = "";
        for (var j = 0; j < splited.length; j++){
            if (j === 0){
                joined += splited[j];
            }
            else {
                var toUpper = splited[j].charAt(0).toUpperCase() + splited[j].slice(1);
                joined += toUpper;
            }
        }
        converted.push(joined);
    }

    return converted;
}