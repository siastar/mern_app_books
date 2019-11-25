const express = require('express');
const bookRouter = express.Router();
const Book = require('../model/book.js');

// C R U D: Create - Read - Update - Delete 

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in Book, whose instance requires mongoose in the beginning
//(Alice in Objectland)

//Read

bookRouter.get( '/' , (req , res) => {
    Book.find({} , (err , response) => {//.find -> mongoose
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot reach books",
                msgError : true
            }})
        else
            res.status(200).json(response);
    });
});


//Create

bookRouter.post( '/' , (req , res) => {
    const book = new Book(req.body); //new instance of the model Book
    book.save((err, document) => { //.save -> mongoose

        if (err)
            res.status(500).json({message:{
                msgBody : "cannot add book",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "succesfully added book",
                msgError : false
            }});
    });
});

//Delete

bookRouter.delete('/:id' , (req , res) => {
    Book.findByIdAndDelete(req.params.id , err => {
        //.findByIdAndDelete -> mongoose
        // params is in res properties 
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot remove book",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "succesfully removed book",
                msgError : false
            }});
    });
});

//Update

bookRouter.put('/:id' , (req , res) => {
    Book.findOneAndUpdate(req.params.id , // the ele,emt to update
                          req.body , // updated content
                          {runValidators : true},
                          (err , response) => {
                               if (err)
                                   res.status(500).json({message:{
                                       msgBody : "cannot update book",
                                       msgError : true
                                   }})
                              else
                                  res.status(200).json({message:{
                                      msgBody : "successfully updated book",
                                      msgError : false
                                  }});_
                          });
});

module.exports = bookRouter
