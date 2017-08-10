var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'first',
    heading: 'first file',
    date :'aug 10 2017',
    content: 
          `<div> aug 10 2017</div>
     <div>
        <p> This is my first web page  This is my first web page  This is my first web page </p>
        <p> This is my first web page  This is my first web page  This is my first web page </p> 
       <h1> This is my first web page </h1>
        
     </div>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/first', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'first.html'));
    
});
app.get('/second', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'second.html')); 
    
});
app.get('/third', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'third.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
