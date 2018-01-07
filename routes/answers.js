const express = require('express');
const answers = require('../models/answers.json');

const router = express.Router();

// GET  /api/questions - Get questions
router.route('/')
    .post((req, res, next) => {
        res.status(200).json(answers);
    });

module.exports = router;