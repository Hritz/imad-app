var express = require('express'); //commonly used to create servers
var morgan = require('morgan'); //to help us see logs to our server 
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
  'article-one'  :{ title:'One | Ritu Kashyap',
    heading:'Article One',
    date:'August 15, 2017',
    content:` <p>
                    Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!
                </p>
            </div>
             <div>
                <p>
                    Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!
                </p>
            </div>
             <div>
                <p>
                    Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!Something is going to show up here soon, Relax!
                </p>`},
  
  'article-two' :{ title:'Two | Ritu Kashyap',
    heading:'Article Two',
    date:'August 18, 2017',
    content:`<div>
                <p>
                   Sit back bitches!
                </p>
            </div>`},
  
  'article-three' :{title:'Three | Ritu Kashyap',
    heading:'Article Three',
    date:'August 20, 2017',
    content:`<div>
                <p>
                   How many times do i have to try?!
                </p>
            </div>`}
};



function createTemplate(data){
    var heading = data.heading;
    var title = data.title;
    var date = data.date;
    var content = data.content;
    
    
    var htmlTemplate =`<html>
     <head>
            <title> ${title} </title>
            <meta name="viewport" content="width-device-width,initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
           
            
    </head>
        <body>
        <div class="container">
    
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
         <h3> ${heading} </h3>
        
       
        
                <div>
                   ${date}
                </div>
                <div>
                    ${content}
                </div>
        
        </div>
        </body>
    </html>
    `;
    return htmlTemplate
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  
});

app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
