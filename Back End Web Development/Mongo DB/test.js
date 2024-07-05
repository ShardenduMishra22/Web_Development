// mongosh


// show databases 
// show dbs


// use a database
// use DataBase_name


// show tables 
// show collections


// make a table
// db.createCollection("table_name");


// # Insert a single document
// db.students.insertOne({ name: "Alice", age: 21, major: "Computer Science" })


// # Insert multiple documents
// db.students.insertMany([
//     { name: "Bob", age: 22, major: "Mathematics" },
//     { name: "Charlie", age: 20, major: "Physics" },
//     { name: "David", age: 23, major: "Chemistry" }
// ])


// # Find all documents
// db.students.find()


// # Find documents with a specific condition
// db.students.find({ age: { $gte: 21 } })


// # Find a single document
// db.students.findOne({ name: "Alice" })


// # Find documents and project specific fields
// db.students.find({}, { name: 1, major: 1, _id: 0 })


// # Update a single document
// db.students.updateOne({ name: "Alice" }, { $set: { age: 22 } })


// # Update multiple documents
// db.students.updateMany({ age: { $lt: 22 } }, { $set: { status: "undergraduate" } })


// # Increment a field
// db.students.updateOne({ name: "Bob" }, { $inc: { age: 1 } })


// # Rename a field
// db.students.updateMany({}, { $rename: { "major": "department" } })


// # Delete a single document
// db.students.deleteOne({ name: "Charlie" })


// # Delete multiple documents
// db.students.deleteMany({ age: { $gte: 23 } })