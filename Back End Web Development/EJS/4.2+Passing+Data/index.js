import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));

let name;

app.post("/submit", (req, res) => {
    name = `${req.body.Fname}${req.body.Lname}`;
    res.render("index.ejs",{
      Name : name,
    })
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    Name : name
  });
});