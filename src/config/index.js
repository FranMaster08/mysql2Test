require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  dbname: process.env.DB_NAME,
  dbpass: process.env.DB_PASS,
  dbhost: process.env.DB_HOST,
  dbuser: process.env.DB_USER,
  dbport: process.env.DB_PORT,
};
