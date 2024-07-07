// match
// db.user.aggregate([{$match : {gender : "Male"}}]);

// group
// db.user.aggregate([{$group : {_id : "$age"}}]);

// add 1 when Male and of same age is found
// db.user.aggregate([{$match : {gender : "Male"}},{$group : {_id : "$age",NumberOfTeacherOfThisAgeGroup : {$sum : 1}}}]);

// add 1 when age is found
// db.user.aggregate([{$group: {_id: "$age",SumGroup: { $sum: { $toDouble: 1 } }}}]);

// using filter
// db.students.aggregate([{$match: { _id: 1 }},{$project: {filteredScores: {$filter: {input: "$scores",as: "score",cond: { $gte: ["$$score", 80] }}}}}]);