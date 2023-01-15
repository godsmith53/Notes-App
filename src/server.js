const express=require('express');//using express for server
const app= express();


const mongoose=require('mongoose');
const Note=require('./models/note');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
const mongoDBPath="mongodb+srv://godsmith:godsmith@cluster0.dbnfeb3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBPath).then(function(){
//home route
app.get("/", function(req, res){
  const response={message:"API Works"};
  res.json(response);
});
//notes route
const noteRouter = require('./routes/Note');
app.use("/notes", noteRouter);

});


const PORT=process.env.PORT || 5000;
app.listen(PORT,function () {
console.log("Server listening on port "+PORT);
}); //running server at port 5000