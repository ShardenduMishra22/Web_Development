import express from "express"
const port = 3000;
const app = express();

app.listen(port , () => {
    console.log("Hey What's up Server Started!!");
})

// app.get("/" , (req,res) => {
//     console.log(req.rawHeaders);
// })

// app.get("/" , (req,res) => {
//     res.send("KRSNA Malum h Naa");
// })

// app.get("/" , (req,res) => {
//     res.send("<h1>Hello World I am Shardendu Mishra</h1>");
// })

app.get("/", (req,res) => {
    res.send("<h1>This is home Page</h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>This is Contact Page</h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>This is About Page</h1>");
})