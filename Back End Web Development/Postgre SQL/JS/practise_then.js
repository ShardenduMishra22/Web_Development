// Simulating a food delivery order with promises
function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your food is delivered! Enjoy your meal.');
        }, 3000); // Simulating a 3-second wait for delivery
    });
}

// Ordering food and handling the promise
console.log('Placing order...');
orderFood()
    .then(message => {
        console.log(message); // This runs when the promise is resolved
    })
    .catch(error => {
        console.error('Something went wrong:', error); // Handle errors if any
    });

console.log('Doing other things while waiting for food...');

// Output:
// Placing order...
// Doing other things while waiting for food...
// Your food is delivered! Enjoy your meal.
