

var reply = function (res, obj) {
    res.json(obj ? obj : '{}');
    return res.end();
};

module.exports = {
    reply
};
