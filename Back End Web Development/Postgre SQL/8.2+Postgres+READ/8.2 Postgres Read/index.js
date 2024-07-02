import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Iamshardendumishra@2244",
  port: 5432,
});


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// quix strores data retrived from flag.csv so it can be used
let quiz = [];
db.connect();

db.query("SELECT * FROM flag",(err,res) => {
  if(err){
    console.error("There has been an error in fetching the data",error);
  }else{
    quiz = res.rows;
  }
  db.end();
});

let curr_question = {};
let TotalScore = 0;


app.get("/",async (req,res) => {
  TotalScore = 0;
  await nextQuestion();
  res.render("index.ejs",{
    question : curr_question
  });
});


app.post("/submit",(req,res) => {
  let answer = req.body.answer.trim();
  let IsCorrect = false;
  if(curr_question.name.toLowerCase() == answer.toLowerCase()){
    TotalScore += 1;
    IsCorrect = true;
  }
  nextQuestion();

  res.render("index.ejs",{
    question:curr_question,
    wasCorrect : IsCorrect,
    totalScore : TotalScore 
  })
})

async function nextQuestion(){
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  curr_question = randomCountry;
}