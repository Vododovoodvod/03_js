/* for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, i * 1000);
}
 */
const names = ["a", "b", "c"];

function sayHello(a, ...others) {
    console.log(others);
    console.log("Hi", a);
}

sayHello(...names)