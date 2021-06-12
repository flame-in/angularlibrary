const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    name: {type: String},
    author: {type: String},
    isbn:{type:String},
    genre: {type:String}
})

module.exports = { Book };  // Same as { Book : Book } --- ES6 shorthand notation