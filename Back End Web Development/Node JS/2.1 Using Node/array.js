const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInputArray() {
    return new Promise((resolve) => {
        rl.question('Enter the number of elements in the array: ', (size) => {
            size = parseInt(size, 10);
            let array = [];
            let count = 0;

            function askElement() {
                if (count < size) {
                    rl.question(`Enter element ${count + 1}: `, (element) => {
                        array.push(element);
                        count++;
                        askElement();
                    });
                } else {
                    resolve(array);
                }
            }

            askElement();
        });
    });
}

getInputArray().then((userArray) => {
    console.log("The input array is:", userArray);
    rl.close();
});

