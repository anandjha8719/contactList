const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "Name1",
        phone: 9187311
    },
    {
        name: "Name2",
        phone: 1234545
    }
]


app.get('/', function(req, res){

    Contact.find({}, function(err, myContacts){
        if(err){
            console.log('Error in fetching data from DB');
            return;
        }
        return res.render('home', {
            title: "Contact List",
            contact_list: myContacts
        });
    });


});


app.post('/create-contact', function(req, res){

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('some error occured in creating the contact');
            return;
        }
        console.log('*****', newContact);
        return res.redirect('back');
    });

});

app.get('/delete-contact', function(req, res){
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error occured in deleting from DB');
            return;
        }
        return res.redirect('back');
    });
});


app.listen(port, function(err){
    if(err){
        console.log("some error occured");
    }
    console.log(`Running on port: ${port}`);
});