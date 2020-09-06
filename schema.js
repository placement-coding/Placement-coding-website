const mongoose = require('mongoose');


const Question = new mongoose.Schema({
  
  Name:{
    type: String,
    
  },
  q1:{
    type: String,
    
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




module.exports = mongoose.model('Question', Question);
