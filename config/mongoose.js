// const mongoose = require('mongoose');                       // require the libarary

// mongoose.connect('mongodb://loclahost/contactsList_db');  // connected to the database

// const db = mongoose.connection;                          // db is going to use for accesing the data base or checking we are connected or not

// db.on('error', console.error.bind(console, 'error Connecting to Db'));     // for printing error

// db.once('open', function(){
//     console.log('Successfully connected to the datbase');    //up and running then print the message
// });





const mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/contact-list-db',
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
    
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting mongodb'));

db.once('open', function(){
    console.log("Connected to Mongodb");
});

module.exports = db; 
