
var _Object = require("./object.js");

var todoCollection = db.collection('todos');

var todoPrototype = {

    insert: function insert() {
        var that = this;
        console.log('Saving todo', this.data);
        return new Promise(function (resolve, reject) {
            todoCollection
                .insertOneAsync(that.data)
                .then(function (r) {
                    console.log('Inserted count', r.insertedCount, 'id', r.insertedId);
                    that.set('_id', r.insertedId);
                    return resolve(that);
                })
                .catch(function (err) {
                    return reject(err);
                });
        });
    }
};
var addNote = function User(data) {
    var obj;
    obj = Object.assign(Object.create(_Object), todoPrototype);
    obj.data = obj.sanitize('User', data);
    return obj;
};


module.exports = {
    addNote: addNote
};