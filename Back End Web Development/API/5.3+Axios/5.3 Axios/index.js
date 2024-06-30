import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const type = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(`
      https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    res.render('index.ejs', {
      data : result[(Math.floor(Math.random()*result.length))]
    });

  }catch(error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

// [
//   {
//     "activity": "Go for a walk in a park",
//     "type": "recreational",
//     "participants": 2,
//     "price": 0.1,
//     "link": "",
//     "key": "1234567",
//     "accessibility": 0.1
//   },
//   {
//     "activity": "Play a board game",
//     "type": "recreational",
//     "participants": 2,
//     "price": 0.2,
//     "link": "",
//     "key": "2345678",
//     "accessibility": 0.2
//   }
// ]