const connection = require('./connection');

/*Helper Functions*/

const orm = {
  selectAll: function() {
    let query = 'SELECT'

  },
  insertOne: function() {
    let query = 'INSERT INTO'

  },
  updateOne: function() {
    let query = 'UPDATE'

  }

}


module.exports = orm;