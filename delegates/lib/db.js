var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   user:'superuser',
   password:'AWSRQOAdfh9Mmprf',
   database:'delegates'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 
