var express = require("express");
var app = express();

app.use (function(req, res, next){
  console.log("A new request");
  next();
})
app.listen(8000);
// app.get('/:name/:id', function(req,res){
//   res.send('id: ' + req.params.id + ' and name: ' +req.params.name);
// });
//
// app.listen(8000);

// app.get('/', function(req,res){
//   console.log("Got a GET request for Homepage")
//   res.send("Hello Home");
// });

// app.get('/users', function(req,res){
//   console.log("Got a GET request for users page")
//   res.send("Users page");
// });
//
// app.get('/list', function(req,res){
//   console.log("Got a GET request for list")
//   res.send("Page listing");
// });
//
//
// var server = app.listen(8000, function(){
//   console.log("server started...");
// });
