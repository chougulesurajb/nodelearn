'use strict';
var Promise = require("bluebird");
var mongo = Promise.promisifyAll(require('mongoskin')).MongoClient;
var config = require('../config');
console.log("DAPP Database: " + config.database);
var db = mongo.connect(config.database, { native_parser: true });

module.exports = db;
