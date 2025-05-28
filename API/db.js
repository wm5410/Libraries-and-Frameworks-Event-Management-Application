const mysql = require('mysql2');

// DB Connection
const dbConfig = {
  host: 'learn-mysql.cms.waikato.ac.nz',
  database: 'wm83',
  user: 'wm83',
  password: 'my223571sql'
};

const db = mysql.createConnection(dbConfig);
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Successfully connected to the db');
});

module.exports = db;