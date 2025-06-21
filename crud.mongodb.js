use("crudDb")
db.createCollection("mymongo")

// db.mymongo.insertOne({
//     name: "sufiyan web dev free course",
//     price: 0,
//     assignment: 12,
//     projects: 45

// })

// db.mymongo.insertMany([

//     {
//         "name": "Sufiyan Web Dev Free Course",
//         "price": 0,
//         "assignments": 12,
//         "projects": 45
//     },
//     {
//         "name": "Frontend Mastery Bootcamp",
//         "price": 0,
//         "assignments": 10,
//         "projects": 38
//     },
//     {
//         "name": "Full Stack Beginner Track",
//         "price": 0,
//         "assignments": 15,
//         "projects": 50
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 0,
//         "assignments": 8,
//         "projects": 30
//     },
//     {
//         "name": "React.js Free Workshop",
//         "price": 0,
//         "assignments": 9,
//         "projects": 25
//     },
//     {
//         "name": "HTML & CSS Crash Course",
//         "price": 0,
//         "assignments": 6,
//         "projects": 20
//     },
//     {
//         "name": "Backend Basics with Node.js",
//         "price": 0,
//         "assignments": 11,
//         "projects": 40
//     },
//     {
//         "name": "Advanced Web Development",
//         "price": 0,
//         "assignments": 14,
//         "projects": 55
//     },
//     {
//         "name": "Sufiyan's Coding Challenge Series",
//         "price": 0,
//         "assignments": 13,
//         "projects": 35
//     },
//     {
//         "name": "Web Dev Career Starter",
//         "price": 0,
//         "assignments": 10,
//         "projects": 28
//     }
// ])

// READ operation....................

// let mongo = db.mymongo.find({ price: 0 })
// console.log(mongo)............return jiska bhi price 0 ho.....
// console.log(mongo.count())....return no.of dababase
// console.log(mongo.toArray())...return all array

// let mongo1 = db.mymongo.findOne({price:0})   
// console.log(mongo1)


// UPDATE operation.................
// db.mymongo.updateOne({price:0}, {$set:{price:100}})
// db.mymongo.updateMany({price:0}, {$set:{price:300}})


// DELETE opertaion..................
// db.mymongo.deleteOne({price:100})
// db.mymongo.deleteOne({price:300})
// db.mymongo.deleteMany({price:300})
