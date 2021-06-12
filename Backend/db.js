const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mylib', (err) => {
    if(!err)
        console.log('MongoDB connection established.');
    else    
        console.log('Errpr in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;