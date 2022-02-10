function Dog(name = "Rex"){
    this.name = name;
}

var hera = new Dog("Hera");

Dog.prototype.returnName = function(){
    return this.name;
}

console.log(hera.returnName());

Dog.prototype.bark = function(){
    return "Wuf ".repeat((Math.ceil(Math.random() * 3)));
}

console.log(hera.bark());