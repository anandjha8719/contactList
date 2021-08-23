const express = require('express');
const path = require('path');
const port = 8000;

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
    res.render('home', {
        title: "Contact List",
        contact_list: contactList
    })
});


app.listen(port, function(err){
    if(err){
        console.log("some error occured");
    }
    console.log(`Running on port: ${port}`);
});