var express = require('express');
var router = express.Router();
const { register, login} = require('../controller/user.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',register)
router.post('/login',login)

module.exports = router;
