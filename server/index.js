const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    // password: '',
    database: 'productlist',
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