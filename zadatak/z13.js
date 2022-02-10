function Character(name = "", home = "", oib = "") {
    var _oib = oib;
    this.name = name;
    this.home = home;
    this.getOib = function(){return oib};
}

Character.prototype.getInfo = function(){
    return `${this.name} (${this.getOib()}) is from ${this.home}`;
}

var spongeBob = new Character("SpongeBob", "Bikini Bottom", "12345678901");
var homer = new Character("Homer", "Springfield", "12345678902");

console.log(spongeBob.getInfo());