var express = require('express');
var router = express.Router();
var db = require('../lib/db');
router.get('/form', function(req, res, next) { 
res.render('index'); 
});
router.get('/thanks', function(req, res, next) { 
  res.render('thanks'); 
  });
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  
 
  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });

 res.redirect('/users/thanks');  // redirect to user form page after inserting the data
}); 

router.get('/done', function(req, res, next) {
  var sql ="SELECT `day` , `time` FROM users WHERE `day` LIKE '%"+req.query.day+"%'";
  db.query(sql,function (err, data) { 
    res.send(data);
      if (err) throw err;
         console.log("User info is available "); 
  });
}); 
module.exports = router;
