const mysql = require('mysql');



if(process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.jaws_db);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burger_db'
});
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;