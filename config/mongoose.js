const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts_v2_db');

const db = mongoose.connection;

db.once('open', function(){
    console.log('successfully connected to our DB');
});