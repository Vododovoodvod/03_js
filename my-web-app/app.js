/*
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
*/

/*
var appElement = document.getElementById("app");
console.log(appElement);

setTimeout(function() {
    var newElement = document.createElement('div');
    newElement.innerText = "Hello!";

    appElement.appendChild(newElement);
}, 2000)

setTimeout(function() {
    appElement.remove();
}, 4000)
*/

var sec = 10;
var appElement = document.getElementById("app");
var newElement = document.createElement('div');
newElement.innerText = sec;
appElement.appendChild(newElement);

var timer = setInterval(myTimer, 1000);

function myTimer() {
    sec--;
    if (sec>=0){
        newElement.innerText = sec;
    }
    else{
        newElement.remove();
        clearInterval(timer);
    }
}