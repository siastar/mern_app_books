const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.json());

const book = require ('./routes/bookRoutes.js');
app.use('/books' , book); //localhost:5000/books - books is the name of the collection inside booksdb

const dbPath = 'mongodb://localhost:27017/booksdb'

mongoose.connect(dbPath,
                 {   
                     useNewUrlParser: true,
                     useFindAndModify: false,
                     useUnifiedTopology: true 
                     //avoid deprecation warning
                 },

                 (err) => {
                     if (err) {
                         process.exit(1);
                         console.log('unable to connect to ', dbPath)
                     }
                     else console.log('succesfully connected to ', dbPath)
                 }
                 
                );

const port = process.env.PORT || 5000; //in cased deployed in environment with own vars

app.listen( port, () => {
    console.log('app is running');
    console.log('listening on port' , port);
});

