//1
var auto = {
    manufacturer: "Ford",
    model: "Focus",
    productionYear: 2004,
    color: "Light blue",
    openDoor: function (num) {
        switch(num) {
            case 1: return "Front " + this.color + " left door opened";
            case 2: return "Front " + this.color + " right door opened";
            case 3: return "Back " + this.color + " left door opened";
            case 4: return "Back " + this.color + " right door opened";
            case 5: return this.color + " trunk opened";
            default: return "ERROR: Must be number 1 - 5";
        }
    },
    honk: function (num) {
        if (num < 4){
            return "BEEP ".repeat(num);
        } else {
            return "Calm down";
        }
    },
    turnOnStation: function (num) {
        switch(num) {
            case 1: return "Radio Slavonija";
            case 2: return "Narodni";
            case 3: return "Otvoreni";
            case 4: return "Radio 92";
            case 5: return "HRT 2";
            default: return "ERROR: Must be number 1 - 5";
        }
    },
    fluids: {
        oil: "Full",
        whiper: "Half",
        servo: "Full"
    }
}

//2
console.log(auto.openDoor(3));
console.log(auto.honk(3));
console.log(auto.turnOnStation(4));

//3
for (key in auto) {
    if (auto.propertyIsEnumerable(key)) {
        console.log(auto[key]);
    }
}

//4
console.log("My car is " + auto.manufacturer + " " + auto.model + ". It's " + auto.color + ". Every time something breakes I have to " + auto.honk(10));

//5
console.log(JSON.stringify(auto));