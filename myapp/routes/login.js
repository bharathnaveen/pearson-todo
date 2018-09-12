var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    var { userName, pass } = req.body;
    if (userName === 'test@gmail.com' && pass === "test12") {
        res.status(200).json({ message: 'Successfully Login', success: true });
    } else {
        res.status(200).json({message: 'Invalid login credentials', success: false});
    }
});


module.exports = router;
