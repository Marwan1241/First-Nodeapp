var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'sql11.freesqldatabase.com',
   user:'sql11411094',
   password:'zQKDr4FKjT',
   database:'sql11411094'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 
