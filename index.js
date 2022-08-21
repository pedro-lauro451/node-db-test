const db = require('./db');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    db.query('SELECT * FROM dummydata', (error, results, fields) => {
        if(error)
             throw error;
        results.forEach(result => {
            console.log(result);
        })
    });
});

app.listen(3000);