const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const dotenv = require('dotenv');
const connectDB = require('./db');
const path = require('path');
dotenv.config({ path: './config.env' });
const Question = require('./schema');
connectDB();

// IMPORTING ALL THE FILES
const code = require('./api/code/code')

 app.use('/',code);



const port = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV;
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})

// app.post("/submit",(req,res)=>{
//   console.log(req.body);
// })
// app.get('/array/q1',(req,res) => {

//     console.log("hi");
//     Question.find({}, function(err, ques) {
        
//       res.json(ques);  
//       console.log(ques);
//     });
//   });
  
  
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
    
  }