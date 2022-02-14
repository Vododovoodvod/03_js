const getNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.ceil(Math.random() * 6);

        if (number >= 3) {
            resolve(number);
        } else {
            reject(number);
        }
    }, 5000)
})

Promise.resolve(getNumber)
.then((number) => console.log(`Success! Number is ${number}`))
.catch((number) => {
    const fali = 3 - number; 
    console.log(`Number ${number} had to be bigger by ${fali} :(`);
    Promise.resolve(getNumber)
    .then(console.log)
    .catch(console.log);
});