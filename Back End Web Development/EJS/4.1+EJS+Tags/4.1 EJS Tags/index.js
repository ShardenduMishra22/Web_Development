import express from "express";
const app = express();
const port = 3000;

app.listen(port,() => {
    console.log(`Server Started on port ${port}`);
})

app.get("/",(req,res)=> {
    const data = {
        seconds : new Date().getSeconds(),
        fruits : ["apple", "banana", "cherry"],
        HtmlContent : "<em>This is some text in italic</em>",
        Title : "<h1>EJS Tags Malum Hai Naaaaaa</h1>",
    }
    res.render("index.ejs",data);
});