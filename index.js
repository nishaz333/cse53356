var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://manu:manubhat@ds023540.mlab.com:23540/heroku_c9qlr3x8', 
	function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
  }
});

var schema = {
      "fields":{
         "directors":[{"type":"String"}],
         "release_date":{"type":"String"},
         "rating":{"type":"Number"},
         "genres":[{"type":"String"}],
         "image_url":{"type":"String"},
         "plot":{"type":"String"},
         "title":{"type":"String"},
         "rank":{"type":"Number"},
         "running_time_secs":{"type":"Number"},
         "actors":[{"type":"String"}],
         "year":{"type":"Number"}
      },
      "id":{"type":"Number"},
      "type":{"type":"Number"}
      };

var projSchema = mongoose.model('movies',schema);

app.get('/', function(request, response) {
  response.render('index');
});
id_temp = 0;

app.get("/movieObject",function(req,res)
{  
//Extracting rank from get request
  rank = req.query.rank;

  var query = projSchema.find({'fields.rating':{$exists:true},
    'fields.year':{$exists:true}, 'fields.rank': {$gt: rank}});
  query.sort([['fields.rank', 1]]);
  query.limit(1);
  query.exec(function(err,mov)
    {
        if(err)
        {
            console.log("Failed to retrieve the data");
        }else
        {
            console.log("Fetched the data");
        }
        res.json(mov);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
