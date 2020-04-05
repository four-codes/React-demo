var express = require('express');
var router = express.Router();
var _ = require('underscore');
// var users = require('../module/user');
var q = require('q');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/', function(req, res, next) {
//     res.locals.connection.query('select * from members', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });


// router.post('/new', function(req, res, next) {
// 	q.all([users.formulateInsertQuery(req.body, 'users')]).then(function(queryRes){
// 		if(queryRes[0]){
// 			q.all([users.insertFunction(req, res.locals.connection, q, queryRes[0])]).then(function(insertRes){
// 				if(insertRes[0][0].insertId > 0){
// 					res.json("success")
// 				} else {
// 					res.json("error")
// 				}
// 			}).fail(function(err){
// 				console.log(err.stack)
// 			})			
// 		}
// 	}).fail(function(err){
// 		console.log(err.stack)
// 	})
// });


router.post('/new', function(req, res, next) {
    console.log(req.body);
    res.locals.connection.query(`insert into register(firstname,lastname,username,city,state,zip)
     values('${req.body.FirstName}','${req.body.LastName}','${req.body.Username}','${req.body.City}','${req.body.State}','${req.body.Zip}')`, (error, results, fields) => {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});


router.get('/users', function(req, res, next) {
    res.locals.connection.query('SELECT firstname,username,city,state,zip FROM register', (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});


router.get('/edit', function(req, res, next) {
    res.locals.connection.query(`update members set name = '${req.body.name}', email = '${req.body.bloodGroup}' where id = '${req.body.id}')`, (error, results, fields)  => {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
