var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var con=require('./connection');
var model1=require('./model');

var Add=mongoose.model('add',model1,'address');

mongoose.connect(con.connectionString);
var app=express();
app.use(bodyparser.json());
app.use(express.static(__dirname+'/public'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));

app.get('/getAddress',function(req,res){
    Add.find(function(err,docs){
        if(err){
            console.log(err);
        }
        res.json(docs);
    })

});

//app.delete('/getAddress:id',function(req,res)
//{
  //  console.log(req.param.id);
//})



var port=3000;

app.listen(port,function(){
    console.log("server running on port number:"+port);
});
