var express = require('express');
var router = express.Router();
var User = require('../models/users');

// Posting User Details
router.post('/', function (req, res) {
  var reqUser = {
    name: req.body.first,
    email: req.body.last,
    userStatus: req.body.username
  };

  var user = new User(reqUser);

  user.save(function (err, res) {
    if (err) res.status(500).json({ message: 'SomeThing went worng', success: false });
    res.status(200).json({ message: 'Successfully created', success: true });
  });
});


module.exports = router;
