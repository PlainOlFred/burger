const connection = require('./connection');

/*Helper Functions*/

const orm = {
   selectAll: function(table, cb) {
    let query = `SELECT burger_name, devoured FROM ${table};`;

    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },


  insertOne: function(table, vals, cb) {
    let 
      query = `INSERT INTO ${table} (burger_name, devoured) `;
      query += `VALUES (?, ?)`;


    connection.query(query, vals, (err, result) => {
      if (err) throw err;

      cb(result);
    });


  },
  updateOne: function(table, condition, cb) {
    let 
      query = `UPDATE burgers SET devoured`;
      query += `= ? `
      query += `WHERE ${condition}`;

    connection.query(query, (err, result) => {
      if (err) throw err;

      cb(result)

    });
  }   
}
  


module.exports = orm;