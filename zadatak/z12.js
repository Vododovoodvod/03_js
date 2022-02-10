var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

var quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin.",
];

proto1 = Object.getPrototypeOf(character)

proto1.randomQuote = function(){
    return quotes[Math.floor(Math.random() * 4)];
}

console.log(character.randomQuote)

//nest ne valja