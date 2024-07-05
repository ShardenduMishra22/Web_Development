db.createCollection("Nonfiction",{
    validator : {
        $jsonSchema : { 
            required : ["name","price"],
            properties : {
                name : {
                    bsonType : 'string',
                    description : "Must be a string!!",
                },
                price : {
                    bsonType : 'number',
                    description : "Must be a number!!",
                },
            },
        },
    },
    validationAction : 'error' 
});

// warn is also possible but dy default its om error 
// validationAction : 'warn'

db.Nonfiction.insertMany([{
    name : "Book 1",price : 2000},{name : "Book 2",price : '5000'},{name : "Shardendu Mishra's Book", price : 4000}],{ordered : false});

// to edit / modify existing collection

db.runCommand({
    collMod : "Nonfiction",
    validator : {
        $jsonSchema : {
            required : ['name','price','author'],
            properties : {
                name : {
                    bsonType : 'string',
                    description : "Input a String only!!",
                },
                price : {
                    bsonType : 'number',
                    description : "Input a Number only!!",
                },
                author : {
                    bsonType : 'string',
                    description : "Input a String only!!",
                    items : {
                        bsonType : 'object',
                        required : ['Name','Gmail'],
                        properties : {
                            name : {
                                bsonType : 'string',
                            },
                            gmail : {
                                bsonType : 'string'
                            },
                        },
                    },
                },
            },
        },
    },
});


// Insert Many 
// db.Nonfiction.insertMany([
//          { name: 'Book Number 1', price: 5000, author: { name: 'Shardendu Mishra 1', gmail: 'abc@gmail.com' } }, 
//          { name: 'Book Number 2', price: "5000", author: { name: 'Shardendu Mishra 2', gmail: 'abc@gmail.com' } },
//          { name: 'Book Number 3', price: 8000, author: { name: 'Shardendu Mishra 3', gmail: 'abcdef@gmail.com' } }], 
//          { ordered: false }
// );


// Write Concern
// db.Table.insertOne({name : "Shardendu Mishra", price : 1000, age : 21},{writeConcern : {w:0,j:0,wtimeout:5000}});

