const express = require('express');
var router = express.Router();
var ObjectId  = require('mongoose').Types.ObjectId;

var { Book } = require('../models/books');

//Home router
router.get('/', (req,res) => {
    Book.find((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in retrieving Books : '+ JSON.stringify(err, undefined, 2)); }
    });
});

//Single Book details
router.get(':/id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id} `);
    
    Book.findById(req.params.id, (err,docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in finding book : '+ JSON.stringify(err, undefined, 2)); }
    })
})

//Add new book
router.post('/', (req,res) => {
    var book = new Book ({
        name: req.body.name,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
    });
    book.save((err, doc) => {
        if (!err) {  res.send(doc); }
        else { console.log('Error in saving book details : '+ JSON.stringify(err, undefined, 2)); }
    })
}); 


router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id} `);
    
    var book = {
        name: req.body.name,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
     };
     Book.findByIdAndUpdate(req.params.id, { $set: emp}, {new: true}, (err,doc) => {
        if (!err) {  res.send(doc); }
        else { console.log('Error in updating book details : '+ JSON.stringify(err, undefined, 2)); }
     });
})

router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id} `);

    Book.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) {  res.send(doc); }
        else { console.log('Error in updating book details : '+ JSON.stringify(err, undefined, 2)); }
     });
})


module.exports = router;