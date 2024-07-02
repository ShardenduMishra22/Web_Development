function orderFoodAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your food is delivered! Enjoy your meal.');
        }, 3000); // Simulating a 3-second wait for delivery
    });
}

async function orderAndDeliverFood() {
    console.log('Placing order...');
    try {
        let message = await orderFoodAsync();
        console.log(message); // This runs when the promise is resolved
    } catch (error) {
        console.error('Something went wrong:', error); // Handle errors if any
    }
    console.log('Doing other things while waiting for food...');
}

orderAndDeliverFood();

// Output:
// Placing order...
// Your food is delivered! Enjoy your meal.
// Doing other things while waiting for food...