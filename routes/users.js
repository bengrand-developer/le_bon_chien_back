const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
    connection.query("SELECT * FROM user", (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
    })
})


module.exports = router;