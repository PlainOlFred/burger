// relates to the database 
// commicates with the controller
const orm = require('../config/orm');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res)
    });

  },
  // insertOne: function(vals, cb) {
  //   orm.insertOne(vals, function(res){
  //     cb(res);
  //   });

  // },
  updateOne: function(condition, cb) {
    orm.updateOne(condition, function(res) {
      cd(res);
    });
  }
};




module.exports = burger;

