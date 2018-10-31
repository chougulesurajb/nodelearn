const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express()
// var mongo = Promise.promisifyAll(require('mongoskin')).MongoClient;
// 
const router = express.Router();
var db = require('./helpers/db');
var h = require('./helpers');
var addNote = require('./addNote');
var _ = require('lodash');

// MongoClient.connect('mongodb://localhost:27017/test', (er, db) => {
//     if (er) {
//         return console.log("Unableto connect")
//     }
//     db.collection('Todos').find().toArray().then((doc) => {
//         res.send({ a: doc });

//     }, (err) => {
//         console.log("Uerr", err)
//     }
//     );
//     db.close()

// })

// var db = MongoClient.connect('mongodb://localhost:27017/test', 'keepAlive', (er, db) => {
//     if (er) {
//         return console.log("Unableto connect")
//     }
//     console.log("Connected to db");
// })
// var db = mongo.connect('mongodb://localhost:27017/test', { native_parser: true });
// var connection = mongodb.connection;
// connection.on('connected', () => {
// console.log("Connected to db");
// })
app.set('view engine', 'hbs')
router.use('/', function (req, res, next) {
    next();
});

router.get('/', (req, res) => {
    res.send("this is test route")
})
router.put('/', (req, res) => {
    var note = addNote(req.body);
    note
        .insert()
        .then(function (obj) {
            console.log(obj.data._id);
            return h.reply(res, { "success": "note added successfully " + obj.data._id });
        }).catch(function (err) {
            return h.reply(res, { "error": err });
        });

    // res.send("note")
})
router.get('/todos', (req, res) => {
    var user = db.collection('todolist');
    var allUsers = [];
    user
        .find({}).toArrayAsync()
        .then(function (userData) {
            userData.forEach(function (user, index) {
                // to hide current user's data in the service
                allUsers.push(user);
            });
            // get unique carnames and structure response accordingly
            res.status(200);
            return h.reply(res, { allUsers: allUsers });
        });


});
router.get('/citi1', (req, res) => res.send({ name: "dasdf", likes: "ahsfgas" }));
router.get('/citi2', (req, res) => res.send({ name: "gsdfhsdf", likes: "asdgasfga" }));
router.get('/about', (req, res) => res.render("about.hbs"));

module.exports = router;