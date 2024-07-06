// // reanmae collection first way 
// db.User.renameCollection("user")

// // reanmae collection second way
// use admin
// db.runCommand({renameCollection : "ShardenduMishraDataBase.User",to : "ShardenduMishraDataBase.user"})

// // explain 
// db.user.find({age : {$lte : 30}}).explain();
// db.user.find({age : {$lte : 30}}).explain('executionStats')

// // make index
// db.user.createIndex({"age" : 1})
// age : 1 -> ascending 
// age : -1 -> descending

// // view indexes
// db.user.getIndexes()

// // delete index
// db.user.dropIndex("_id")
// db.user.dropIndex({age : 1})

// without index - colscan
// with index - ixscan

// // making compound idnex
// the order of field matters so first it will sort via age 
// if age is same then only it sort by gender (female > male)
// db.user.createIndex({"age" : 1, "gender" : 1})


// // help in searching too
// db.user.find({age : {$gte : 15}, gender : "male"}).explain('executionStats')

// // it also helps in sorting 
// db.user.createIndex({name : 1},{unique : true})

// // partial filters 
// db.user.createIndex({age : 1},{partailFilterExpression : {age : {$gte : 22}}})

// // we can also make temporary index
// db.user.createIndex({expires : 1},{expiresAfterSeconds : 3600});

