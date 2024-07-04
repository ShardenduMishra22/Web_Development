import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`The server was started on port ${port}`);
});

const db = new pg.Client({
  password: "Iamshardendumishra@2244",
  database: "permalist",
  host: "localhost",
  user: "postgres",
  port: 5432
});
db.connect();

let items = [
  { id: 1, title: "Buy Milk" },
  { id: 2, title: "Finish Homework" },
];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items
    });
  } catch (error) {
    console.error("There was an error in receiving the page:", error);
    res.status(500).send("An error occurred while fetching the items.");
  }
});

app.post("/add", async (req, res) => {
  // Corrected to req.body.newItem
  const item = req.body.newItem;
  try {
    // Changed to INSERT INTO for adding new items
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (error) {
    console.error("There was an error in adding the item to the page:", error);
    res.status(500).send("An error occurred while adding the item.");
  }
});

app.post("/edit", async (req, res) => {
  // Corrected to req.body.updatedItemTitle
  const item = req.body.updatedItemTitle;
  // Corrected to req.body.updatedItemId
  const id = req.body.updatedItemId;
  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (error) {
    console.error("There was an error in updating the item:", error);
    res.status(500).send("An error occurred while updating the item.");
  }
});

app.post("/delete", async (req, res) => {
  // Corrected to req.body.deleteItemId
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (error) {
    console.error("There was an error in deleting the item:", error);
    res.status(500).send("An error occurred while deleting the item.");
  }
});
