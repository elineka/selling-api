var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    
    res.send('Get the router')
});
router.post('/', (req, res) => {
    let {username, password} = req.body;
    res.send({ username:username,password:password})
});
module.exports = router;