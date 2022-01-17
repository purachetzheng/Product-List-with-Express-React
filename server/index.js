const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result)
        };
    })
})

app.listen('3001', () => {
    console.log('Server is running (port: 3001)');
});