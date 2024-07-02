import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
})

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "Iamshardendumishra@2244",
  port : "5432"
});

db.connect();

app.get("/",async (req,res) => {
  const result = await db.query("SELECT country_code FROM  visited_country");
  let countries = [];
  result.rows.forEach( (i) => {
    countries.push(i.country_code);
  });  
  console.log(result.rows);
  res.render("index.ejs", {
    countries : countries,
    total : countries.length,
  });
  db.end();
});