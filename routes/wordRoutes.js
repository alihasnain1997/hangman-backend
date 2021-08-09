const express = require('express');
const router = express.Router();
const db = require('../models/index')


router.get('/', async (req, res) => {
    try {
        const result = await db.Word.findAll({ raw: true })
        if (result.length > 0) {
            res.status(200).json({
                words: result
            });
        }
        else {
            res.status(404).json({
                msg: 'no word found'
            });
        }
    }
    catch (error) {
        res.status(404).json({
            error: error
        });
    }
});

router.post('/', async (req, res) => {

    const word = req.body.word;
    console.log('word',word)
    if (word == undefined || word.trim() == null || word.trim() == "") {
        res.status(400).json({
            error: "invalid input"
        });
    }
    else {

        try {
            const result = await db.Word.create({ word: word })
            console.log(result.dataValues.id)
            if (result.dataValues.id) {
                res.status(200).json({
                    id: result
                });
            } else {
                res.status(404).json({
                    msg: 'failed to create record'
                });
            }
        }
        catch (error) {
            res.status(404).json({
                error: error
            });
        }
    }

})


module.exports = router;