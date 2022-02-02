//1
console.log("WIndow width: " + window.innerWidth + ", Height: " + window.innerHeight);

//2
console.log("Domain name: " + window.location.hostname);
//window.location.assign("https://www.google.com")

//3
window.alert("Accept my cookies, my cookies good");

//4
window.setTimeout(testLog(), 2000);

function testLog() {
    console.log("2 sec");
}