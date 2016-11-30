var env=process.env.NODE_ENV||'dev';
var con='';
if(env=='dev')
{
    con='mongodb://localhost:27017/address';
}
else {


    con = 'mongodb://aashrita:110540asr@ds043694.mlab.com:43694/proj2'

}
console.log(con);
exports.connectionString=con;
