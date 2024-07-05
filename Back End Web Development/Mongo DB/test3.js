// Find books where the price is greater than 12
db.books.find({$expr: { $gt: ["$price", 12] }});

// Find books where the _id is divisible by 3
db.books.find({ _id: { $mod: [3, 0] } });

// Find books where the title contains "Potter"
db.books.find({ title: { $regex: /Potter/ } });

// Perform full-text search for books containing "New" in the title
db.books.find({ $text: { $search: "New" } });