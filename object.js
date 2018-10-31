'use strict';

var _ = require("lodash");
var schemas = require("./schemas.js");

var _Object = {
    data: null,

    get: function (name) {
        return this.data[name];
    },

    set: function (name, value) {
        this.data[name] = value;
    },

    sanitize: function (name, data) {
        // console.log('doing sanitize for', name, 'data is', data);
        data = data || {};
        var result = {};
        var schema = schemas[name];
        // console.log('schema', schema)

        _.mapKeys(schema, function (value, key) {
            if (!value) {
                result[key] = data[key];
            } else if (typeof value === 'string') {
                result[key] = data[value];
            } else if (typeof value === 'function') {
                result[key] = value(data);
            }
        });

        // console.log('result', result);
        return result;
    }
};

module.exports = _Object;
