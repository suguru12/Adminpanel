//import connectDB from './model/connect';
var connectDB=require('./model/connect')
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors())
// app.use('/',require('./Route/Userroute'))

// var mongoose = require('mongoose');
//mongoose.connect("mongodb+srv://alliswellya23:LFaVJdsm5MIKxhUu@cluster0.fg8dloe.mongodb.net/?retryWrites=true&w=majority")
// .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(4000, 'localhost', () => {
//       console.log('Server is running on localhost:4000');
//     });
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB:', error);
//   });


//   app.listen(1000,()=>{
//     console.log("the port is running in 1000")
// }
// )


app.get("/",(req,res)=>{
    res.send("entering");
})

const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();