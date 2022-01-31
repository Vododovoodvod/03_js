var bicycle = {
    manufacturer: "Trek",
    model: "Marlin 5",
    price: 3000,
    getSalesText: function () {
        return "Buy a " + this.manufacturer + " for " + this.price;
    }
};

console.log(bicycle.getSalesText());

for (key in bicycle) {
    if (typeof bicycle[key] !== 'function') {
        console.log(key, bicycle[key]);
    }
}