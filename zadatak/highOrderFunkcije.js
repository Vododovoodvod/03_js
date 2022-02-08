(function(){

function getDiscount(discount) {
    return function (price) {
        return price - discount;
    }
}

var getFixed10Discount = getDiscount(10);
var getFixed20Discount = getDiscount(20);


console.log(getFixed10Discount(123));
console.log(getFixed20Discount(123));

})();