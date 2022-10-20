var conn = require('./../icn/db')
var express = require('express')
var router = express.router()

router.get('/', function(req, res, next){
    conn.query("SELECT * FROM tb_users ORDER BY name", (err, results) => {

        if (err) {
            res.send(err);
        }else{
            res.send(results)
        }
        });
    
});

module.exports = router;