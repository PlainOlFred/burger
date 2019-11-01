const connection = require('./connection');

/*Helper Functions*/

const orm = {
   selectAll: function(table, cb) {
    let query = `SELECT * FROM ${table};`;

    connection.query(query, (err, result) => {
      if (err) throw err;

      cb(result);
    })

  },
  insertOne: function(table, col, val, cb) {
    let query = `INSERT INTO ${table}`;

    connection.query(query, (err, result) => {
      if (err) throw err;

      cb(result);
    })


  },
  updateOne: function(table, cb) {
    let query = `UPDATE ${table} SET `;

    connection.query(query, (err, result) => {
      if (err) throw err;

      cb(result)

    })

    

  }

    
}
  


module.exports = orm;