const Pool = require('pg').Pool;
const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Electronic",
    password: "root",
    port: 5432
});

module.exports = db;