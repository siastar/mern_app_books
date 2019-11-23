const express = require('express');
const bookRouter = express.Router();
const Book = require('../model/book.js');

// C R U D

//Read

bookRouter.get( '/' , (req , res) => {
    Book.find({} , (err , response) => {
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot reach books",
                msgError : true
            }})
        else
            res.status(200).json(response);
    });
});

