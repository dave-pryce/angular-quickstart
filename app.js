var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../dist") );

app.get('/languages', function(req,res) {
  //  res.send ('hello world')
  res.json(
        [{"id" : 1,"name" : "Java"},
        {"id" : 2,"name" : "HTML"},
        {"id" : 3,"name" : "Ruby On Rails"},
        {"id" : 4,"name" : "CSS"},
        {"id" : 5,"name" : "Angular 2"},
        {"id" : 6,"name" : "Node"},
        {"id" : 7,"name" : "Express"},
        {"id" : 8,"name" : "MongoDB"},
        {"id" : 9,"name" : "React"}]
  )
});

app.listen(8000, function () {
  console.log('Languages back end listening on port 8000!')
});
