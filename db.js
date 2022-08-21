const mysql = require('mysql2');

const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'dummy',
    password:''
});

pool.connect(function(err){
    if(err) throw err;
    console.log('Connection works');
});

module.exports = pool;