var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var series={

 first : {
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
},
 second:{
      title: 'second',
    heading: 'second file',
    date :'aug 10 2017',
    content: 
          `<div> aug 10 2017</div>
     <div>
        <p> This is my second web page  This is my second web page  This is my second web page </p>
        <p> This is my second web page  This is my second web page  This is my second web page </p> 
       <h1> This is my second web page </h1>
        
     </div>`
 },
 third:{
      title: 'third',
    heading: 'third file',
    date :'aug 10 2017',
    content: 
          `<div> aug 10 2017</div>
     <div>
        <p> This is my third web page  This is my third web page  This is my third web page </p>
        <p> This is my third web page  This is my third web page  This is my third web page </p> 
       <h1> This is my third web page </h1>
        
     </div>`
 }
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName' , function(req,res)  {
    var articleName=req.params.articleName;
    res.send(createtemplate(series[articleName]));
    
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

 app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
   });
 var counter=0;
 app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString())});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading =data.heading;
    var content=data.content;

var htmltemplate=`<html>
<head>
   <title>${title}</title>
   <meta name="viewport" content="width:device-width,  initial-scale:1">
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
 <body>
     <div class="container">
     <div><a href="/">Home</a></div>
     <hr/>
     <div> ${date}</div>
     <div>
        ${content}
        
     </div>
     </div>
     </body>
 </html>`;
 return htmltemplate;
}
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
