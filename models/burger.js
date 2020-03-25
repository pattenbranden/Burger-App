const orm = require("../config/orm")

// orm.selectAll(burgers)

// orm.insertOne(burgers)

// orm.updateOne(burgers, { burger_name: newBurgerName }, id)

var burger = {
    selectAll: function (cb) {

        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },

    insertOne: function (columns, values, cb) {

        orm.insertOne("burgers", columns, values, function (res) {
            cb(res)
        })
    },

    updateOne: function (object, id, cb) {

        orm.updateOne("burgers", object, id, function (res) {
            cb(res)
        })
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }

}
module.exports = burger