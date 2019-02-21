'use strict';

/* Schemas for all the tables from APP Database */
var _ = require('lodash');
var moment = require('moment');

var schemas = {
    brand: {
        name: null
    },
    todo: function (object) {
        return object._links.model._id;
    },
    creationTimeStamp: function () {
        return moment().unix();
    },
};

module.exports = schemas;