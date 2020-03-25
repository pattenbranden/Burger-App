var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'D5n6sa4R2211',
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err){
        console.error("Error connectiong: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
})

module.exports = connection;