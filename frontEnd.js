const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express()
// var mongo = Promise.promisifyAll(require('mongoskin')).MongoClient;
// 
const router = express.Router();
var db = require('./helpers/db');
var h = require('./helpers');
var _ = require('lodash');
const path = require("path");

// router.use(express.static(path.join(__dirname, 'app', 'build')));

// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
// });
router.use(express.static(path.join(__dirname, 'app', 'build')));

//production mode
if (process.env.NODE_ENV === 'production') {
    router.use(express.static(path.join(__dirname, 'app', 'build')));
    //
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
    })
} else {
    //build mode

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
    })
}

// router.use('*', function (req, res, next) {

//     console.log("Path", path.join(__dirname, 'app', 'public', 'index.html'));
//     return res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
// });


module.exports = router;