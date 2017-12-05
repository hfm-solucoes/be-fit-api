var mysql = require("mysql");

function createDbConnection() {
    
    return mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "12345",
        database: "db_befit"
    });
}

module.exports = function() {
    return createDbConnection;
}