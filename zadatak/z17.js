// Funkcije
/* function User(username) {
    this.username = username;
    this.greet = function(){return "Hi!"}
}

const user = new User("Tomislav");

console.log(user)
 */


// Klase

class User {
    constructor(username) {
        this.username = username;
    }

    greet = () => {
        console.log(this)
        console.log(`Hi, I'm ${this.username}!`);
    }
}

const user = new User("Tomislav");

setTimeout(user.greet, 1000);

user.greet();

//---------------------------------------------------

const coinTossPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const coin = Math.round(Math.random);

        if (coin === 1) {
            resolve();
        } else {
            reject();
        }
    }, 3000)
})

Promise.resolve(coinTossPromise)
.then(() => console.log("Successful coin toss!"))
.catch(() => console.log("Unsuccessful coin toss!"));

//git test