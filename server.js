const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.json());

const book = require ('./routes/book');
app.use('/book' , book);

const dbPath = 'mongodb://localhost:27017/booksdb'

mongoose.connect(dbPath,
                 {   
                     useNewUrlParser: true,
                     useFindAndModify: false
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

