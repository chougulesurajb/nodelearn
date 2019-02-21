console.log("starting app");

const fs = require('fs');
const express = require('express');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const request = require('request');
const notes = require('./notes.js');
const path = require("path");

const routeTest = require('./routes');
const frontEnd = require('./frontEnd');

const app = express();
const port = process.env.PORT || 3001

// app.set('view engine', 'html');

// app.get('/', function (req, res) {
//     console.log("Path", path.join(__dirname + '/app/public/index.html'));
//     res.sendFile(path.join(__dirname + '/app/public/index.html'));
// });
app.get('/about', (req, res) => res.send('i am Soft dev'))
app.use('/app', routeTest);
app.use('/', frontEnd);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// const user = os.userInfo();
// const command = process.argv[2];

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: "fetch data for weather",
//             string: true

//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv

// console.log("argvs", argv);

// if (command === "add") {
//     console.log("adding new command")
// } else if (command === "list") {
//     console.log("listing all commands")
// } else {
//     console.log("Command not valid")
// }

// fs.appendFile("greeting.txt",`hello ${user.username}`, (err)=>{
//     // console.log("not able to write1");
// });

// fs.appendFileSync("greeting.txt",`hello ${user.username}`, (err)=>{
//     console.log("not able to write");
// });
// var encodedAddress = encodeURIComponent(argv.a)

// request({

//     url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU',
//     json: true
// },
//     (error, response, body) => {
//         // console.log('error:', error); // Print the error if one occurred
//         // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('lat:', body.results[0].geometry.location.lat) // Print the HTML for the Google homepage.
//         console.log('lng:', body.results[0].geometry.location.lng)


//         request({

//             url: 'https://api.darksky.net/forecast/5a75a7f91948ec4ff65b1dde478f09da/' + body.results[0].geometry.location.lat + ',' + body.results[0].geometry.location.lng,
//             json: true
//         },
//             (error, response, body) => {
//                 // console.log('error:', error); // Print the error if one occurred
//                 // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//                 console.log('lat:', body.currently) // Print the HTML for the Google homepage.

//             })

//     })


// var somePromise = (encodedAddress) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             request({

//                 url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU',
//                 json: true
//             },
//                 (error, response, body) => {
//                     if (body.status!=="OK") {

//                         reject("loction not getting")
//                     } else {
//                         // console.log('lat:', body.results[0].geometry.location.lat) // Print the HTML for the Google homepage.
//                         // console.log('response:', response)


//                         request({

//                             url: 'https://api.darksky.net/forecast/5a75a7f91948ec4ff65b1dde478f09da/' + body.results[0].geometry.location.lat+ ',' + body.results[0].geometry.location.lng,
//                             json: true
//                         },
//                             (error, response, body) => {
//                                 if (body.code===400) {

//                                     reject("Dark sky not getting")
//                                 } else {
//                                     resolve(body.currently)
//                                 }
//                                 // console.log('error:', error); // Print the error if one occurred
//                                 // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//                                 // console.log('lat:', body.currently) // Print the HTML for the Google homepage.

//                             })
//                     }
//                     // console.log('error:', error); // Print the error if one occurred
//                     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


//                 })
//         }, 2000);
//     })
// }

// somePromise("delhi").then((success) => {
//     console.log("this is success: ", success)
// },
//     (error) => {
//         console.log("this is error: ", error)
//     }
// );

