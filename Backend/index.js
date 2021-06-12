const express = require('express');
const cors = require('cors');

const { mongoose } = require('./db.js')
var bookController = require('./controllers/bookController.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors( {origin: 'http://localhost:4200'}));

app.listen(3000, () => {
    console.log('NodeJS listening at port: 3000');
})

app.use('/books',bookController);