const fs = require("fs")

// fs.writeFile("New.txt","I Am Shardendu Mishra", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

fs.readFile("New.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});