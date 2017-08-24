const mysql = require('mysql');
const config = require('../config');

let mysqlDbConfig = config.mysqlDbConfig;
let mysqlConnection = mysql.createConnection(mysqlDbConfig);
mysqlConnection.connect();

module.exports = mysqlConnection;