import express from "express";  // Importing the express module
const app = express();  // Creating an instance of express
const port = 3000;  // Defining the port number

app.listen(port, () => {
    console.log(`The server was started on ${port}`);  // Corrected: Added backticks for string interpolation
});

app.get("/", (req, res) => {
    let date = new Date();  // Creating a new Date object
    // 0 = Sunday, 1 = Monday, 2 = Tuesday, and so on...
    let day = date.getDay();  // Getting the current day of the week

    let type;
    let advs;

    if (day === 0 || day === 6) {  // Checking if the day is Saturday or Sunday
        type = "WeekEnd";  // Setting type to "WeekEnd"
        advs = "It's the weekend but keep working, stay hard";  // Corrected: Fixed the message for better grammar
    } else {
        type = "WeekDay";  // Setting type to "WeekDay"
        advs = "Weekdays are meant for you to work, stay hard";  // Corrected: Fixed the message for better grammar
    }

    res.render("index.ejs",{  // Rendering the "index.ejs" view without file extension
        dayType: type,  // Passing the type variable to the view
        advice: advs,  // Passing the advs variable to the view
    });
});
