var mysql = require('mysql');
const util = require('util');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mihir@1112",
  database:"Employee_management_system"
});

const query = util.promisify(conn.query).bind(conn);

conn.connect((err)=> {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = query;