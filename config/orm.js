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
  insertOne: function(vals, cb) {
    let 
      query = `INSERT INTO burgers (burger_name) `;
      query += `VALUES (?)`;

      console.log('query: '+ query);


    connection.query(query, vals, (err, result) => {
      if (err) throw err;

      cb(result);
    });


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