var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'dqbp' });
});

router.get('/wel', function(req, res) {
  res.render('index', { title: 'wel' });
});

router.get('/:msg', function(req, res, next){
    var theMsg = req.params.msg,
        query = req.query;
    console.log(theMsg, query);
    res.json({theMsg: theMsg, query: query});
});

router.get('/niet', function(req, res) {
  res.render('index', { title: 'niet' });
});

router.get('/plain/text', function(req, res){
  res.send(200, 'plaintextfoyomama'); 
})

module.exports = router;
