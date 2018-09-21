const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://username:password@10.8.3.86/test',['heroes']);

router.get('/', (req, res, next) => {
    res.send('api works');
    netx();
});

router.get('/heroes', function(req, res, next) {
    db.heroes.find(function(err, hero) {
        if(err) {
           res.send(err);
        } else {
           res.json(hero);
        }
    });
});

router.get('/user/:id', (req, res, next) => {
    res.send('user: ' + req.params.id);
});
 
module.exports = router;
