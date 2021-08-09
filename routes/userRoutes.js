const express = require('express');
const router = express.Router();
const db = require('../models/index')


router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username == undefined || username.trim() == null || username.trim() == "" || password == undefined || password.trim() == null || password.trim() == "") {
        res.status(400).json({
            error: "invalid input"
        });
    }
    else {


        try {
            const result = await db.User.findAll({
                raw: true,
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            if (result.length > 0) {
                res.status(200).json({
                    msg: 'user logged in'
                });
            }
            else {
                res.status(404).json({
                    msg: 'user not found'
                });
            }
        }
        catch (error) {
            res.status(404).json({
                error: error
            });
        }
    }
});



module.exports = router;