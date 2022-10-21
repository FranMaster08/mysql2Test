// get the client
const { dbhost, dbname, dbpass, dbuser, dbport } = require("../config");
const mysql = require("mysql2/promise");

// create the connection to database
const connection = async () => {
  return await mysql.createConnection({
    host: dbhost,
    user: dbuser,
    database: dbname,
    port: dbport,
    password: dbpass,
  });
};

module.exports = connection;
