var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT||3000;
var hostname = 'localhost';

app.use(express.static(__dirname+"/public"));
app.use(morgan('dev'));
app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1>heyy there I have created a server</h1></body></html>");
})

const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server started');
})

