// relates to the database ORM
// commicates with the controller
const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res)
    });

  },
  insertOne: function(burger_name, cb) {
    orm.insertOne('burgers',[burger_name, false], function(res){
      cb(res);
    });

  },
  updateOne: function(condition, cb) {
    orm.updateOne('burgers', condition, function(res) {
      cb(res);
    });
  }
};




module.exports = burger;

