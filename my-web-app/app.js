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

//var sec = 10;
var appElement = document.getElementById("app");
var sec = parseInt(appElement.dataset.startTime);
var newElement = document.createElement('div');
newElement.innerText = sec;
appElement.appendChild(newElement);

//dohvačamo computed veličinu fonta
var timerComputedStyle = getComputedStyle(newElement);
var defaultFontSize = parseInt(timerComputedStyle.fontSize)
var fontSize = defaultFontSize;

var timerId = null;

var startButton = document.querySelector('[data-action-start]');
startButton.addEventListener('click',function() {
    clearInterval(timerId)
    sec = parseInt(appElement.dataset.startTime);
    newElement.innerText = sec;
    fontSize = defaultFontSize;
    newElement.style.fontSize = fontSize + 'px';
    newElement.classList.remove('blinking');
    newElement.classList.remove('expired');
    newElement.innerText = sec;
    timerId = setInterval(myTimer, 1000);
});

function myTimer() {
    sec--;
    if (sec == 10){
        newElement.classList.add('blinking');
    }
    if (sec>0){
        newElement.innerText = sec;
        fontSize += 4;
        newElement.style.fontSize = fontSize + 'px';
    }
    else{
        //newElement.remove();
        //newElement.setAttribute('class', 'expired');
        newElement.innerText = sec;
        newElement.classList.remove('blinking');
        newElement.classList.add('expired'); //bolje za koristiti, setAttribute će presnimiti postojeću klasu
        clearInterval(timerId);
        timerId = null;
    }
}