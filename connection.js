var env=process.env.NODE_ENV||3000;
var con='';
if(env==3000)
{
    con='mongodb://localhost:27017/address';
}
else {


    con = 'mongodb://aashrita:aashrita@ds115738.mlab.com:15738/heroku_clk1szqv'

}
console.log(con);
exports.connectionString=con;
