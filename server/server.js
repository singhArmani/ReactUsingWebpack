/**
 * Created by singh on 8/07/2016.
 */
//Creating a simple node server using express- a node.js framework

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));

app.use('/', (req,res)=>{
   res.sendFile(path.resolve('client/index.html')); 
});

var port = 3000;

app.listen(port, error =>{
    if(error) throw error;
    console.log("Express sever is listening on port", port);
})