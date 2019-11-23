const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title:{
        type: String,
        required: true
    },
     author:{
        type: String,
        required: true
     },
     year:{
        type: String,
        required: Number
     },
     price:{
        type: String,
        required: Number
    }
    
})

module.exports = mongoose.model('Book' , BookSchema);



