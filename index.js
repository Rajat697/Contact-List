const express = require('express');                             // to include the File System module, use the require() method
const path = require('path');
const port = 8080;


const db = require('./config/mongoose');

const app = express();


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views')); // path of views

app.use(express.urlencoded()); // signifies middleware// we added a parser  = read the data and encodes it // reads the form data,  not the params

    app.use(express.static('assets'));
    // Middleware 1

    // app.use(function(req, res, next){
    //     req.name= 'Rajataaa' // you can  manipulate the data 
        
    //     // console.log('Midlleware 1 called')
    //     next(); // so it can go to next step
    // });

    // // Middleware 2
    // app.use(function(req, res, next){
    //     console.log('My name Is' , req.name);
    //     next();
    // });



 var contactList = [
    {
        name : 'Rajat',
        mobile : '8840653669'
    },
    {
        name : "Chris",
        mobile : '0123456789'
    },
    {
        name : "Krishna",
        mobile : "7894561230"
    }
]

app.get('/' , function(req, res){               // ('/') = rout , function(req, res) = Controler Function
    //  console.log(__dirname);                 // This will show the directory from where server has started.
    // res.send("contact.html");
    return res.render('home' , {                // use to render a view and sends the rendred HTML
        title : "Contact List",
        contact_List : contactList
    } );
});


//     app.get('/practice' ,function(req, res){    // for going to practice page
//     return res.render('practice', {
//         title: "Shaktiman"
//     });
// });

    app.post('/create-contact', function(req, res){
        // return res.redirect('/practice')        // use to take u that url
       contactList.push({                           // made a controller
           name: req.body.name,                     // we added parse data in our contact list
           mobile: req.body.mobile
       });

    //    contactList.push(req.body); we can use it too

       return res.redirect('/');
       // console.log(req.body);
        // console.log(rq.body.name);
        // console.log(req.body.mobile);
    });

        app.get('/delete-contact', function(req, res){              // for deleting  a contact
            //console.log(req.query)
            let mobile = req.query.mobile;                          //get the query from URL
            let contactIndex = contactList.findIndex(contact => contact.mobile == mobile);   //find the index

            if(contactIndex != -1){
                contactList.splice(contactIndex,1);                 // add or remove array elements
            }
             return res.redirect('/');
        });



app.listen(port, function(err){
    if(err){
        console.log('Error occurs', err);
    }
    console.log('Express Is Running',port);
});