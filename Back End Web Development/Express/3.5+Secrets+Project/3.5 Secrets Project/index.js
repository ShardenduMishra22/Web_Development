//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var user = false;

app.use(bodyParser.urlencoded({extended:true}));

function passcheck(req,res,next){
    const pass = req.body["password"];
    if(pass === 'ILoveProgramming'){
        user = true;
    }
    next();
}

app.use(passcheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {
    if(user) {
        res.sendFile(__dirname + "/public/secret.html");
    }else {
        // res.sendFile(__dirname + "/public/index.html");
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});