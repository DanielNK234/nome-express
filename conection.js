const mysql = require("mysql");

const connect = () => {
    return mysql.createConnection({
        host: 'localhost',
        database: 'daniel',
        user: 'root',
        password: 'root'
    });
}

exports.connect = connect;