var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'caio',
        password: '1234',
        database: 'noticiais'
    });
}

module.exports = function(){
    return connMySQL;
}   