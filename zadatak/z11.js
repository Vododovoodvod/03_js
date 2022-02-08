/* function printMe() {
    console.log(this.name);
}

var person = {
    name: "Tomislav",
    getInfo: printMe,
}

function runApp(){
    var person = {
    name: "Mladen",
    getInfo: printMe,
    };

    person.getInfo();
}

runApp(); */

//---------------------------------------------------------------------------------------------------------------

/* (function() { // Funkcija bez imena je anonimna - odma se poziva
    console.log("Hello!");
})(); // Umotano u zagradu je čini izoliranom. Drugi par zagrada je poziva - lokalna, ne curi u scope skripte */

//---------------------------------------------------------------------------------------------------------------

(function() {
    
    function getGreetings(name) {
        return {
            sayHello: function sayHello(name) {
                return "Hello " + name;
            },
        
            sayHelloHw: function sayHelloHw(name) {
                return "Aloha " + name;
            },
        
            sayHelloHr: function sayHelloHr(name) {
                return "Pozdrav " + name;
            },
        
            sayHelloFr: function sayHelloFr(name) {
                return "Bonjour " + name;
            }
        }   
    }

    var tomislavGreetings = getGreetings("Tomislav");
    console.log(tomislavGreetings.sayHello());
    console.log(tomislavGreetings.sayHelloHw());
    console.log(tomislavGreetings.sayHelloHr());
    console.log(tomislavGreetings.sayHelloFr());
})();