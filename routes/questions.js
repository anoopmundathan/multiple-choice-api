const express = require('express');
const questions = require('../models/questions.json');

const router = express.Router();

// GET  /api/questions - Get questions
router.route('/')
    .get((req, res, next) => {
        res.status(200).json(questions);
    });

module.exports = router;