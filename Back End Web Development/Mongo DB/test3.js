// // Find books where the price is greater than 12
// db.Table_3.find({$expr: { $gt: ["$price", 12] }});

// // Find books where the _id is divisible by 3
// db.Table_3.find({ _id: { $mod: [3, 0] } });

// // Find books where the title contains "Potter"
// db.Table_3.find({ title: { $regex: /Potter/ } });

// // Perform full-text search for books containing "New" in the title
// db.Table_3.find({ $text: { $search: "New" } });

// // index
// db.collection.createIndex({ "name": "text" })

// // min
// db.products.aggregate([{ $group: {_id: null,minPrice: { $min: "$price" }}}])
  
