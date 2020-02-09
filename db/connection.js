var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });
}

module.exports = function(){
    return connMySQL;
}   
